import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Watchlist from "@/models/Watchlist";
import { getSession } from "@/lib/session";
import mongoose from "mongoose";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const item = await Watchlist.findById(id);
    if (!item) {
      return NextResponse.json({ message: "Watchlist item not found" }, { status: 404 });
    }

    // Check ownership
    if (item.userId.toString() !== session.userId) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    await Watchlist.findByIdAndDelete(id);

    return NextResponse.json({ message: "Movie removed from watchlist successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to delete watchlist item", error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await dbConnect();
    const { id } = await params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID format" }, { status: 400 });
    }

    const session = await getSession();
    if (!session || !session.userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { userRating, reviewText } = body;

    const item = await Watchlist.findById(id);
    if (!item) {
      return NextResponse.json({ message: "Watchlist item not found" }, { status: 404 });
    }

    // Check ownership
    if (item.userId.toString() !== session.userId) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    if (userRating !== undefined) {
      if (userRating !== null && userRating !== 0 && (typeof userRating !== "number" || userRating < 1 || userRating > 10)) {
        return NextResponse.json({ message: "Rating must be between 1 and 10" }, { status: 400 });
      }
      item.userRating = userRating === 0 ? undefined : userRating;
    }

    if (reviewText !== undefined) {
      item.reviewText = reviewText;
    }

    await item.save();

    return NextResponse.json(item);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update watchlist item", error: error.message },
      { status: 500 }
    );
  }
}
