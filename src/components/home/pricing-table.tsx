"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: { month: 0, year: 0 },
    description: "Get started with basic tools.",
    features: [
      "Basic workout tracking (3 logs/week)",
      "Limited exercise library (5 exercises)",
      "Community forum access",
      "Progress dashboard (limited)",
      "Ad-supported experience",
    ],
    highlighted: false,
  },
  {
    name: "Basic",
    price: { month: 19, year: 190 },
    description: "Get started with essential fitness tracking tools.",
    features: ["Workout tracking", "Basic exercise library", "Progress dashboard", "Community access"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: { month: 49, year: 490 },
    description: "For dedicated athletes who want premium features.",
    features: ["Everything in Basic", "Personalized workout plans", "Nutrition tracking & plans", "Advanced analytics", "Trainer messaging", "Priority support"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: { month: 99, year: 990 },
    description: "The complete experience with one-on-one coaching.",
    features: ["Everything in Pro", "1-on-1 personal training", "Custom nutrition plans", "Weekly check-ins", "Video form analysis", "Exclusive content", "24/7 priority support"],
    highlighted: false,
  },
];

export function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Simple <GradientText>Pricing</GradientText>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Choose the plan that fits your goals. All plans include a 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-card p-1">
            <button
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                !annual ? "bg-emerald-500 text-white" : "text-muted-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                annual ? "bg-emerald-500 text-white" : "text-muted-foreground"
              )}
            >
              Annual <span className="text-xs opacity-80">Save 20%</span>
            </button>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                className={cn(
                  "relative rounded-2xl border p-8 transition-all duration-300",
                  plan.highlighted
                    ? "border-emerald-500 bg-gradient-to-b from-emerald-500/10 to-transparent shadow-xl shadow-emerald-500/10"
                    : "border-emerald-500/10 bg-card hover:border-emerald-500/30"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  {plan.price.month === 0 ? (
                    <span className="text-4xl font-bold">Free</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">
                        ${annual ? plan.price.year : plan.price.month}
                      </span>
                      <span className="text-muted-foreground">/{annual ? "year" : "month"}</span>
                      <div className="mt-2">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-medium text-emerald-400">
                          14-day free trial
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.price.month === 0 ? "/register" : "/membership"}
                  className={cn(
                    "flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all",
                    plan.highlighted
                      ? "bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
                      : "border border-emerald-500/20 hover:bg-emerald-500/10"
                  )}
                >
                  {plan.price.month === 0 ? "Get Started Free" : "Get Started"}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
