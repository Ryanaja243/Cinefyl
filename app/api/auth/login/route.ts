import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { createSession } from "@/lib/session";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  console.log("========== LOGIN REQUEST ==========");

  try {
    // 1. TEST MONGODB
    console.log("1️⃣ Connecting to MongoDB...");
    await dbConnect();
    console.log("✅ MongoDB connected");

    // 2. GET BODY
    const body = await req.json();
    console.log("2️⃣ Request body:", {
      email: body.email,
      hasPassword: !!body.password,
    });

    const { email, password } = body;

    // 3. VALIDATE INPUT
    if (!email || !password) {
      console.log("❌ Email or password missing");

      return NextResponse.json(
        { message: "Email and password are required fields" },
        { status: 400 }
      );
    }

    // 4. CLEAN EMAIL
    const cleanEmail = email.toLowerCase().trim();

    console.log("3️⃣ Clean email:", cleanEmail);

    // 5. FIND USER
    console.log("4️⃣ Searching user in MongoDB...");

    const user = await User.findOne({
      email: cleanEmail,
    });

    if (!user) {
      console.log("❌ USER NOT FOUND");
      console.log("Searched email:", cleanEmail);

      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    console.log("✅ USER FOUND");
    console.log({
      id: user._id.toString(),
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      hasPassword: !!user.password,
    });

    // 6. CHECK PASSWORD EXISTS
    if (!user.password) {
      console.log("❌ USER HAS NO PASSWORD");

      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 7. CHECK PASSWORD
    console.log("5️⃣ Checking password...");

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("❌ PASSWORD DOES NOT MATCH");

      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    console.log("✅ PASSWORD CORRECT");

    // 8. CHECK ADMIN
    console.log("6️⃣ Admin status:", user.isAdmin);

    // 9. CREATE SESSION
    console.log("7️⃣ Creating session...");

    await createSession(user._id.toString());

    console.log("✅ SESSION CREATED");

    // 10. SUCCESS
    console.log("🎉 LOGIN SUCCESS");
    console.log("===================================");

    return NextResponse.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      isAdmin: user.isAdmin || false,
    });

  } catch (error: any) {
    console.error("🔥 LOGIN ERROR");
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to log in",
        error: error.message,
      },
      { status: 500 }
    );
  }
}