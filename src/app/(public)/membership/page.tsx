"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const plans = [
  { id: "free", name: "Free", price: 0, desc: "Basic fitness tools" },
  { id: "basic", name: "Basic", price: 19.99, desc: "Essential fitness tracking" },
  { id: "pro", name: "Pro", price: 49.99, desc: "Premium features" },
  { id: "elite", name: "Elite", price: 99.99, desc: "Complete coaching" },
];

export default function MembershipPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (planId: string) => {
    if (planId === "free") {
      router.push("/register");
      return;
    }
    if (!session) {
      router.push("/login");
      return;
    }
    setLoading(planId);
    try {
      const res = await fetch("/api/stripe/create-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error("Checkout failed");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Choose Your <GradientText>Membership</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            All paid plans include a 14-day free trial. Start risk-free today.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
          {plans.map((plan) => (
            <GlassCard key={plan.id} hover className="text-center">
              <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{plan.desc}</p>
              <p className="mb-6">
                {plan.price === 0 ? (
                  <span className="text-4xl font-bold">Free</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                    {plan.price > 0 && (
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
                          14-day free trial
                        </span>
                      </div>
                    )}
                  </>
                )}
              </p>
              <button
                onClick={() => handleCheckout(plan.id)}
                disabled={loading === plan.id}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 disabled:opacity-50"
              >
                {loading === plan.id ? <Loader2 className="h-4 w-4 animate-spin" /> : plan.price === 0 ? "Get Started Free" : "Start Free Trial"}
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
