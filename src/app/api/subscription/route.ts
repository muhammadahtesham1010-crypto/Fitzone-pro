import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auth } from "@/lib/auth";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sub = await db.query.subscriptions.findFirst({
      where: (subs, { eq }) => eq(subs.userId, session.user.id),
    });

    if (!sub) {
      return NextResponse.json({ plan: "Free", status: "active" });
    }

    const plan = await db.query.membershipPlans.findFirst({
      where: (plans, { eq }) => eq(plans.id, sub.planId),
    });

    return NextResponse.json({
      plan: plan?.name || "Free",
      status: sub.status,
      currentPeriodEnd: sub.currentPeriodEnd,
      cancelAtPeriodEnd: sub.cancelAtPeriodEnd,
      trialEnd: sub.status === "trialing" ? sub.currentPeriodEnd : null,
    });
  } catch (error) {
    console.error("Subscription fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch subscription" }, { status: 500 });
  }
}
