import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 }
      );
    }

    await db.insert(contactMessages).values({ name, email, subject, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
