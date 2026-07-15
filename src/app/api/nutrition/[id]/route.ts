import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nutritionLogs } from "@/lib/db/schema";
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

    const log = await db.query.nutritionLogs.findFirst({
      where: (nl, { eq, and }) =>
        and(eq(nl.id, id), eq(nl.userId, session.user.id)),
    });

    if (!log) {
      return NextResponse.json({ error: "Nutrition log not found" }, { status: 404 });
    }

    await db.delete(nutritionLogs).where(eq(nutritionLogs.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nutrition delete error:", error);
    return NextResponse.json({ error: "Failed to delete nutrition log" }, { status: 500 });
  }
}
