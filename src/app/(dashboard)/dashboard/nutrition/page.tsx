"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Apple, Plus } from "lucide-react";

export default function NutritionPage() {
  const macros = [
    { label: "Calories", current: 1850, target: 2500, color: "bg-emerald-500" },
    { label: "Protein", current: 120, target: 180, unit: "g", color: "bg-red-500" },
    { label: "Carbs", current: 180, target: 250, unit: "g", color: "bg-yellow-500" },
    { label: "Fats", current: 45, target: 70, unit: "g", color: "bg-blue-500" },
  ];

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Nutrition <GradientText>Tracking</GradientText></h2>
            <p className="text-muted-foreground">Track your daily nutrition and macros.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            <Plus className="h-4 w-4" /> Log Meal
          </button>
        </div>
      </AnimatedSection>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {macros.map((macro) => (
          <GlassCard key={macro.label}>
            <p className="mb-1 text-sm text-muted-foreground">{macro.label}</p>
            <p className="text-2xl font-bold">{macro.current}<span className="text-sm text-muted-foreground">/{macro.target}{macro.unit || ""}</span></p>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-500/10">
              <div className={`h-full ${macro.color} rounded-full transition-all`} style={{ width: `${Math.min(100, (macro.current / macro.target) * 100)}%` }} />
            </div>
          </GlassCard>
        ))}
      </div>

      <GlassCard>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 rounded-full bg-emerald-500/10 p-4">
            <Apple className="h-8 w-8 text-emerald-400" />
          </div>
          <h3 className="mb-2 font-semibold">No Meals Logged Today</h3>
          <p className="text-sm text-muted-foreground">Start tracking your meals to see your daily nutrition breakdown.</p>
        </div>
      </GlassCard>
    </div>
  );
}
