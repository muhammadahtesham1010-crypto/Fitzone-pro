import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { nutritionLogs } from "@/lib/db/schema";
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
    const date = searchParams.get("date");
    const where = date
      ? (nl: any, { eq }: any) => eq(nl.userId, userId) && eq(nl.date, date)
      : (nl: any, { eq }: any) => eq(nl.userId, userId);
    const data = await db.query.nutritionLogs.findMany({
      where,
      orderBy: (nl: any, { desc }: any) => [desc(nl.createdAt)],
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Nutrition fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch nutrition logs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();
    const [log] = await db.insert(nutritionLogs).values({
      userId: session.user.id,
      mealType: body.mealType,
      foodName: body.foodName || body.name,
      calories: body.calories,
      proteinG: body.proteinG || body.protein,
      carbsG: body.carbsG || body.carbs,
      fatsG: body.fatsG || body.fats,
      date: body.date || new Date().toISOString().split("T")[0],
    }).returning();
    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error("Nutrition create error:", error);
    return NextResponse.json({ error: "Failed to log meal" }, { status: 500 });
  }
}
