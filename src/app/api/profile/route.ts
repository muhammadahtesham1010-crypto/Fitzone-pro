import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { profiles } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const [updated] = await db
      .update(profiles)
      .set({
        fullName: body.fullName || body.name,
        phone: body.phone,
        dateOfBirth: body.dateOfBirth || undefined,
        heightCm: body.heightCm ? String(body.heightCm) : undefined,
        weightKg: body.weightKg ? String(body.weightKg) : undefined,
        updatedAt: new Date(),
      })
      .where(eq(profiles.userId, session.user.id))
      .returning();
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Profile update error:", error);
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
