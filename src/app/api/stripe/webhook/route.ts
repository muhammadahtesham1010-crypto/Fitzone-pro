import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";
import { db } from "@/lib/db";
import { subscriptions, profiles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const sig = req.headers.get("stripe-signature")!;

    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch {
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.userId;
        const planName = session.metadata?.planName || "Basic";
        if (userId) {
          await db
            .update(profiles)
            .set({ isSubscribed: true, stripeCustomerId: session.customer as string })
            .where(eq(profiles.userId, userId));
          const plan = await db.query.membershipPlans.findFirst({
            where: (p, { eq }) => eq(p.name, planName),
          });
          if (plan) {
            await db.insert(subscriptions).values({
              userId,
              planId: plan.id,
              status: "trialing",
              stripeSubscriptionId: session.subscription as string,
              currentPeriodStart: new Date(),
              currentPeriodEnd: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
            });
          }
        }
        break;
      }
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const obj = event.data.object as unknown as Record<string, unknown>;
        const rawStatus = obj.status as string;
        const s = rawStatus === "active" || rawStatus === "canceled" || rawStatus === "past_due" || rawStatus === "incomplete" || rawStatus === "trialing"
          ? rawStatus
          : "incomplete";
        await db
          .update(subscriptions)
          .set({
            status: s,
            currentPeriodEnd: new Date((obj.current_period_end as number) * 1000),
            cancelAtPeriodEnd: obj.cancel_at_period_end as boolean,
          })
          .where(
            eq(subscriptions.stripeSubscriptionId!, obj.id as string)
          );
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
