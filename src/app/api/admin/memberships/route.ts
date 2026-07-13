import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { subscriptions } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { eq, sql } from "drizzle-orm";

export async function GET() {
  try {
    const session = await auth();
    if (session?.user?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const plans = await db.query.membershipPlans.findMany({
      orderBy: (plans, { asc }) => [asc(plans.sortOrder)],
    });

    const plansWithMembers = await Promise.all(
      plans.map(async (plan) => {
        const members = await db
          .select({ count: sql<number>`count(*)::int` })
          .from(subscriptions)
          .where(eq(subscriptions.planId, plan.id));
        return { ...plan, memberCount: members[0]?.count || 0 };
      })
    );

    return NextResponse.json(plansWithMembers);
  } catch (error) {
    console.error("Admin memberships error:", error);
    return NextResponse.json({ error: "Failed to fetch memberships" }, { status: 500 });
  }
}
