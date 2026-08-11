import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q");

    if (!q) {
      // If query is empty, return all users so the user has someone to search or view
      const users = await User.find({});
      return NextResponse.json(users);
    }

    const regex = new RegExp(q, "i");
    const users = await User.find({
      $or: [{ username: regex }, { name: regex }],
    });

    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to search users", error: error.message },
      { status: 500 }
    );
  }
}
