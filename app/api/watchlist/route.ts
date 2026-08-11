import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Watchlist from "@/models/Watchlist";
import { getSession } from "@/lib/session";
import mongoose from "mongoose";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    let userId = searchParams.get("userId");

    // If userId param is missing, try to resolve from user session
    if (!userId) {
      const session = await getSession();
      userId = session?.userId as string;
    }

    if (!userId) {
      return NextResponse.json({ message: "userId parameter or active session is required" }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ message: "Invalid userId" }, { status: 400 });
    }

    const watchlistItems = await Watchlist.find({ userId }).sort({ createdAt: -1 });
    return NextResponse.json(watchlistItems);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to fetch watchlist", error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await req.json();
    const { imdbID, title, year, poster } = body;
    const userId = session.userId;

    if (!imdbID || !title) {
      return NextResponse.json(
        { message: "imdbID and title are required fields" },
        { status: 400 }
      );
    }

    // Check if the movie already exists in the user's watchlist
    const existing = await Watchlist.findOne({ userId, imdbID });
    if (existing) {
      return NextResponse.json(
        { message: "Movie already in watchlist", item: existing },
        { status: 200 }
      );
    }

    const newItem = await Watchlist.create({
      userId: new mongoose.Types.ObjectId(userId as string),
      imdbID,
      title,
      year,
      poster,
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to save watchlist item", error: error.message },
      { status: 500 }
    );
  }
}
