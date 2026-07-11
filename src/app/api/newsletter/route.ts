import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSubscribers } from "@/lib/db/schema";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const existing = await db.query.newsletterSubscribers.findFirst({
      where: (subs, { eq }) => eq(subs.email, email),
    });

    if (existing) {
      return NextResponse.json(
        { message: "Already subscribed" },
        { status: 200 }
      );
    }

    await db.insert(newsletterSubscribers).values({ email });

    return NextResponse.json(
      { message: "Subscribed successfully" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Failed to subscribe" },
      { status: 500 }
    );
  }
}
