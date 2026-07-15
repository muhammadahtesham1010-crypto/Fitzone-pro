import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { workoutLogs } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq, and } from "drizzle-orm";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const log = await db.query.workoutLogs.findFirst({
      where: (w, { eq, and }) =>
        and(eq(w.id, id), eq(w.userId, session.user.id)),
    });

    if (!log) {
      return NextResponse.json({ error: "Workout log not found" }, { status: 404 });
    }

    await db.delete(workoutLogs).where(eq(workoutLogs.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Workout delete error:", error);
    return NextResponse.json({ error: "Failed to delete workout log" }, { status: 500 });
  }
}
