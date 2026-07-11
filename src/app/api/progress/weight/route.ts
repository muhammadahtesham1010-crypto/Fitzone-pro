import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { weightLogs } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq, desc } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") || session.user.id;
    const data = await db.query.weightLogs.findMany({
      where: (wl, { eq }) => eq(wl.userId, userId),
      orderBy: (wl, { desc }) => [desc(wl.date)],
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Weight logs fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch weight logs" }, { status: 500 });
  }
}
