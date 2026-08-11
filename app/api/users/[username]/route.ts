import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Watchlist from "@/models/Watchlist";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    await dbConnect();
    const { username } = await params;

    if (!username) {
      return NextResponse.json({ message: "Username parameter is required" }, { status: 400 });
    }

    const user = await User.findOne({ username: username.toLowerCase() });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const watchlist = await Watchlist.find({ userId: user._id }).sort({ createdAt: -1 });

    return NextResponse.json({
      user,
      watchlist,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch user profile", error: error.message },
      { status: 500 }
    );
  }
}
