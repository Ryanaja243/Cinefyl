import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Watchlist from "@/models/Watchlist";
import { requireAdmin } from "@/lib/adminAuth";

// Moderates a rating/review: clears the rating + review text but keeps the
// movie in the user's watchlist. Pass ?full=true to delete the whole entry.
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { error } = await requireAdmin();
  if (error) return error;

  try {
    await dbConnect();
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const full = searchParams.get("full") === "true";

    if (full) {
      const deleted = await Watchlist.findByIdAndDelete(id);
      if (!deleted) {
        return NextResponse.json({ message: "Entry not found" }, { status: 404 });
      }
      return NextResponse.json({ message: "Watchlist entry deleted" });
    }

    const item = await Watchlist.findById(id);
    if (!item) {
      return NextResponse.json({ message: "Entry not found" }, { status: 404 });
    }

    item.userRating = undefined;
    item.reviewText = undefined;
    await item.save();

    return NextResponse.json({ message: "Review moderated", item });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to moderate review", error: error.message },
      { status: 500 }
    );
  }
}
