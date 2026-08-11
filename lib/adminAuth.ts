import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User, { IUser } from "@/models/User";
import { getSession } from "@/lib/session";

/**
 * Verifies the current session belongs to a logged-in admin user.
 * Returns { user } on success, or { error } (a ready-to-return NextResponse) on failure.
 */
export async function requireAdmin(): Promise<
  { user: IUser; error?: undefined } | { user?: undefined; error: NextResponse }
> {
  const session = await getSession();
  if (!session || !session.userId) {
    return { error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }) };
  }

  await dbConnect();
  const user = await User.findById(session.userId as string);

  if (!user) {
    return { error: NextResponse.json({ message: "Unauthorized" }, { status: 401 }) };
  }

  if (!user.isAdmin) {
    return { error: NextResponse.json({ message: "Forbidden: Admins only" }, { status: 403 }) };
  }

  return { user };
}
