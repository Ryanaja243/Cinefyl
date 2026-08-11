import { NextRequest, NextResponse } from "next/server";
import { decrypt, encrypt } from "@/lib/session";

// This proxy refreshes the session cookie expiry on every page request (sliding window)
export async function proxy(req: NextRequest) {
  const sessionCookie = req.cookies.get("session")?.value;

  if (!sessionCookie) {
    return NextResponse.next();
  }

  const payload = await decrypt(sessionCookie);

  if (!payload || !payload.userId) {
    return NextResponse.next();
  }

  // Refresh the session: extend the cookie expiry by 7 more days (sliding window)
  const response = NextResponse.next();
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const newSession = await encrypt({ ...payload, expiresAt });

  response.cookies.set("session", newSession, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return response;
}

export const config = {
  matcher: [
    // Run on all routes except static files, API routes and Next internals
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
