import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { workoutLogs, exercises } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;
    const data = await db
      .select({
        id: workoutLogs.id,
        userId: workoutLogs.userId,
        date: workoutLogs.date,
        exerciseId: workoutLogs.exerciseId,
        exerciseName: exercises.name,
        sets: workoutLogs.sets,
        notes: workoutLogs.notes,
        durationMinutes: workoutLogs.durationMinutes,
        createdAt: workoutLogs.createdAt,
      })
      .from(workoutLogs)
      .leftJoin(exercises, eq(workoutLogs.exerciseId, exercises.id))
      .where(eq(workoutLogs.userId, userId))
      .orderBy(sql`${workoutLogs.date} DESC`);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Workouts fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch workouts" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    let exerciseId = body.exerciseId;
    if (body.exerciseName) {
      const existing = await db.query.exercises.findFirst({
        where: (e, { eq }) => eq(e.name, body.exerciseName),
      });
      if (existing) {
        exerciseId = existing.id;
      } else {
        const [created] = await db.insert(exercises).values({ name: body.exerciseName }).returning();
        exerciseId = created.id;
      }
    }

    const [log] = await db.insert(workoutLogs).values({
      userId: session.user.id,
      date: body.date || new Date().toISOString().split("T")[0],
      exerciseId,
      sets: body.sets || [],
      notes: body.notes,
      durationMinutes: body.durationMinutes,
    }).returning();
    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error("Workout create error:", error);
    return NextResponse.json({ error: "Failed to create workout" }, { status: 500 });
  }
}
