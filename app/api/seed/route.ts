import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import Watchlist from "@/models/Watchlist";
import bcrypt from "bcryptjs";

const mockUsers = [
  {
    username: "ramzy",
    name: "Ramzy Ahmad",
    email: "ramzy@example.com",
    password: "password123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=ramzy",
    isAdmin: true,
  },
  {
    username: "alex",
    name: "Alex Johnson",
    email: "alex@example.com",
    password: "password123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=alex",
  },
  {
    username: "sarah",
    name: "Sarah Miller",
    email: "sarah@example.com",
    password: "password123",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=sarah",
  },
];

export async function GET() {
  try {
    await dbConnect();

    // Wipe existing collections
    await User.deleteMany({});
    await Watchlist.deleteMany({});

    // Hash passwords and seed users
    const usersToInsert = [];
    for (const u of mockUsers) {
      const hashedPassword = await bcrypt.hash(u.password, 10);
      usersToInsert.push({
        ...u,
        password: hashedPassword,
      });
    }

    await User.insertMany(usersToInsert);

    const users = await User.find({}).select("-password");

    return NextResponse.json({
      message: "Database wiped and seeded successfully!",
      users,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Seeding failed", details: error.message },
      { status: 500 }
    );
  }
}
