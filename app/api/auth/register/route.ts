import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, username, email, password } = body;

    // Simple validation
    if (!name || !username || !email || !password) {
      return NextResponse.json(
        { message: "Name, username, email, and password are required fields" },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { message: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (!/^[a-zA-Z0-9_]{3,15}$/.test(username)) {
      return NextResponse.json(
        { message: "Username must be 3-15 alphanumeric characters or underscores" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    const cleanUsername = username.toLowerCase().trim();
    const cleanEmail = email.toLowerCase().trim();

    // Check conflict
    const existingUser = await User.findOne({
      $or: [{ username: cleanUsername }, { email: cleanEmail }],
    });

    if (existingUser) {
      const isUsernameTaken = existingUser.username === cleanUsername;
      return NextResponse.json(
        { message: isUsernameTaken ? "Username is already taken" : "Email is already registered" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const avatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${cleanUsername}`;
    const newUser = await User.create({
      name: name.trim(),
      username: cleanUsername,
      email: cleanEmail,
      password: hashedPassword,
      avatar,
    });

    // Create session
    await createSession(newUser._id.toString());

    return NextResponse.json(
      {
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        isAdmin: newUser.isAdmin || false,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to register user", error: error.message },
      { status: 500 }
    );
  }
}
