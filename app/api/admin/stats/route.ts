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

    const users = await User.find({});
    const watchlistItems = await Watchlist.find({});

    const ratedItems = watchlistItems.filter(
      (item: any) => typeof item.userRating === "number" && item.userRating > 0
    );

    const totalUsers = users.length;
    const totalRatedFilms = ratedItems.length;
    const averageUserRating =
      ratedItems.length > 0
        ? Number(
            (
              ratedItems.reduce((sum: number, item: any) => sum + item.userRating, 0) /
              ratedItems.length
            ).toFixed(2)
          )
        : 0;

    let topRatedFilm: { title: string; imdbID: string; poster?: string; userRating: number } | null = null;
    for (const item of ratedItems as any[]) {
      if (!topRatedFilm || item.userRating > topRatedFilm.userRating) {
        topRatedFilm = {
          title: item.title,
          imdbID: item.imdbID,
          poster: item.poster,
          userRating: item.userRating,
        };
      }
    }

    return NextResponse.json({
      totalUsers,
      totalRatedFilms,
      averageUserRating,
      topRatedFilm,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch admin stats", error: error.message },
      { status: 500 }
    );
  }
}
