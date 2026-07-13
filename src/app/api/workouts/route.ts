import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { workoutLogs } from "@/lib/db/schema";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const userId = session.user.id;
    const data = await db.query.workoutLogs.findMany({
      where: (w, { eq }) => eq(w.userId, userId),
      orderBy: (w, { desc }) => [desc(w.date)],
    });
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
    const [log] = await db.insert(workoutLogs).values({
      userId: session.user.id,
      date: body.date || new Date().toISOString().split("T")[0],
      exerciseId: body.exerciseId,
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
