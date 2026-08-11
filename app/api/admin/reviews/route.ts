import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Watchlist from "@/models/Watchlist";
import { requireAdmin } from "@/lib/adminAuth";

export async function GET() {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    await dbConnect();

    const [items, users] = await Promise.all([
      Watchlist.find({}).sort({ createdAt: -1 }),
      User.find({}).select("-password"),
    ]);

    const userMap = new Map(users.map((u: any) => [u._id.toString(), u]));

    const reviews = (items as any[])
      .filter((item) => (item.userRating && item.userRating > 0) || item.reviewText)
      .map((item) => {
        const owner = userMap.get(item.userId.toString());
        return {
          _id: item._id,
          imdbID: item.imdbID,
          title: item.title,
          poster: item.poster,
          userRating: item.userRating || null,
          reviewText: item.reviewText || "",
          createdAt: item.createdAt,
          user: owner
            ? { _id: owner._id, name: owner.name, username: owner.username, avatar: owner.avatar }
            : null,
        };
      });

    return NextResponse.json(reviews);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch reviews", error: error.message },
      { status: 500 }
    );
  }
}
