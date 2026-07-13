import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe/server";
import { auth } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { planId, interval = "month" } = await req.json();

    const prices: Record<string, string> = {
      basic: process.env.STRIPE_PRICE_BASIC || "",
      basic_year: process.env.STRIPE_PRICE_BASIC_YEAR || "",
      pro: process.env.STRIPE_PRICE_PRO || "",
      pro_year: process.env.STRIPE_PRICE_PRO_YEAR || "",
      elite: process.env.STRIPE_PRICE_ELITE || "",
      elite_year: process.env.STRIPE_PRICE_ELITE_YEAR || "",
    };

    const key = interval === "year" ? `${planId}_year` : planId;
    const priceId = prices[key];

    if (!priceId) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: session.user.email!,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      subscription_data: { trial_period_days: 14 },
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
      metadata: { userId: session.user.id, planName: planId, interval },
    });

    return NextResponse.json({ url: checkoutSession.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
