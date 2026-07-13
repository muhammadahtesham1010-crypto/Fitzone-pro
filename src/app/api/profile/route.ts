import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { profiles, users } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const [profile] = await db
      .select()
      .from(profiles)
      .where(eq(profiles.userId, session.user.id));
    const [user] = await db
      .select({ createdAt: users.createdAt })
      .from(users)
      .where(eq(users.id, session.user.id));
    return NextResponse.json({
      fullName: profile?.fullName || null,
      phone: profile?.phone || null,
      dateOfBirth: profile?.dateOfBirth || null,
      gender: profile?.gender || null,
      heightCm: profile?.heightCm || null,
      weightKg: profile?.weightKg || null,
      goal: profile?.goal || null,
      activityLevel: profile?.activityLevel || null,
      createdAt: user?.createdAt || null,
    });
  } catch (error) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    if (body.avatarUrl) {
      await db
        .update(users)
        .set({ image: body.avatarUrl })
        .where(eq(users.id, session.user.id));
    }

    const [updated] = await db
      .update(profiles)
      .set({
        fullName: body.fullName || body.name,
        phone: body.phone || null,
        dateOfBirth: body.dateOfBirth || null,
        gender: body.gender || null,
        heightCm: body.heightCm ? String(body.heightCm) : null,
        weightKg: body.weightKg ? String(body.weightKg) : null,
        goal: body.goal || null,
        activityLevel: body.activityLevel || null,
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
