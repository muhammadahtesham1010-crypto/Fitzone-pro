"use client";

import { PricingTable } from "@/components/home/pricing-table";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Check } from "lucide-react";

const comparisons = [
  { feature: "Workout Tracking", free: "3 logs/week", basic: true, pro: true, elite: true },
  { feature: "Exercise Library", free: "5 exercises", basic: "Basic", pro: "Full", elite: "Full" },
  { feature: "Progress Dashboard", free: "Limited", basic: true, pro: true, elite: true },
  { feature: "Community Access", free: true, basic: true, pro: true, elite: true },
  { feature: "Personalized Plans", free: false, basic: false, pro: true, elite: true },
  { feature: "Nutrition Tracking", free: false, basic: false, pro: true, elite: true },
  { feature: "Advanced Analytics", free: false, basic: false, pro: true, elite: true },
  { feature: "Trainer Messaging", free: false, basic: false, pro: true, elite: true },
  { feature: "1-on-1 Training", free: false, basic: false, pro: false, elite: true },
  { feature: "Custom Nutrition", free: false, basic: false, pro: false, elite: true },
  { feature: "24/7 Priority Support", free: false, basic: false, pro: false, elite: true },
  { feature: "Ad-Supported", free: true, basic: false, pro: false, elite: false },
];

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-4 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Simple <GradientText>Pricing</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            All paid plans include a 14-day free trial. No risk, cancel anytime.
          </p>
        </AnimatedSection>

        <PricingTable />

        <AnimatedSection className="mt-24">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Compare <GradientText>Features</GradientText>
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-500/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-emerald-500/10 bg-card">
                  <th className="p-4 text-left font-medium">Feature</th>
                  <th className="p-4 text-center font-medium">Free</th>
                  <th className="p-4 text-center font-medium">Basic</th>
                  <th className="p-4 text-center font-medium">Pro</th>
                  <th className="p-4 text-center font-medium">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature} className="border-b border-emerald-500/5">
                    <td className="p-4 text-muted-foreground">{row.feature}</td>
                    {[row.free, row.basic, row.pro, row.elite].map((val, i) => (
                      <td key={i} className="p-4 text-center">
                        {val === true ? <Check className="mx-auto h-4 w-4 text-emerald-400" /> : val === false ? <span className="text-muted-foreground/30">&mdash;</span> : <span className="text-xs text-muted-foreground">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
