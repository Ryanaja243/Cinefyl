import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Watchlist from "@/models/Watchlist";
import { requireAdmin } from "@/lib/adminAuth";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user: admin, error } = await requireAdmin();
  if (error) return error;

  try {
    await dbConnect();
    const { id } = await params;
    const body = await req.json();
    const { isAdmin } = body;

    if (typeof isAdmin !== "boolean") {
      return NextResponse.json({ message: "isAdmin (boolean) is required" }, { status: 400 });
    }

    if (id === admin!._id.toString() && isAdmin === false) {
      return NextResponse.json(
        { message: "You cannot revoke your own admin access" },
        { status: 400 }
      );
    }

    const target = await User.findById(id);
    if (!target) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    target.isAdmin = isAdmin;
    await target.save();

    return NextResponse.json({
      _id: target._id,
      name: target.name,
      username: target.username,
      email: target.email,
      avatar: target.avatar,
      isAdmin: target.isAdmin,
    });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to update user", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user: admin, error } = await requireAdmin();
  if (error) return error;

  try {
    await dbConnect();
    const { id } = await params;

    if (id === admin!._id.toString()) {
      return NextResponse.json(
        { message: "You cannot delete your own account" },
        { status: 400 }
      );
    }

    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Cascade: remove this user's watchlist entries too
    await Watchlist.deleteMany({ userId: id });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to delete user", error: error.message },
      { status: 500 }
    );
  }
}
