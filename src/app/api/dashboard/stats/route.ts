import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { workoutLogs, weightLogs, userAchievements } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq, count, gte, and } from "drizzle-orm";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;

    const today = new Date();
    const firstOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const totalWorkouts = await db
      .select({ count: count() })
      .from(workoutLogs)
      .where(eq(workoutLogs.userId, userId))
      .then((r) => r[0]?.count || 0);

    const monthWorkouts = await db
      .select({ count: count() })
      .from(workoutLogs)
      .where(and(eq(workoutLogs.userId, userId), gte(workoutLogs.createdAt, firstOfMonth)))
      .then((r) => r[0]?.count || 0);

    const weightEntries = await db
      .select({ count: count() })
      .from(weightLogs)
      .where(eq(weightLogs.userId, userId))
      .then((r) => r[0]?.count || 0);

    const achievementCount = await db
      .select({ count: count() })
      .from(userAchievements)
      .where(eq(userAchievements.userId, userId))
      .then((r) => r[0]?.count || 0);

    return NextResponse.json({
      totalWorkouts,
      monthWorkouts,
      weightEntries,
      achievementCount,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
