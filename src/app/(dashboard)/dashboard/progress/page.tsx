"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { BMIWidget } from "@/components/calculators/bmi-calculator";
import { BodyFatWidget } from "@/components/calculators/body-fat-calculator";
import { WeightTracker } from "@/components/trackers/weight-tracker";
import { WaterIntake } from "@/components/trackers/water-intake";
import { StepTracker } from "@/components/trackers/step-tracker";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <AnimatedSection>
        <h2 className="text-2xl font-bold">Progress <GradientText>Tracking</GradientText></h2>
        <p className="text-muted-foreground">Monitor your fitness metrics and achievements.</p>
      </AnimatedSection>

      <div className="grid gap-6 lg:grid-cols-3">
        <WeightTracker />
        <BMIWidget />
        <BodyFatWidget />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <WaterIntake />
        <StepTracker />
      </div>

      <GlassCard>
        <h3 className="mb-4 font-semibold">Progress Overview</h3>
        <div className="h-64 flex items-center justify-center rounded-xl bg-emerald-500/5">
          <p className="text-sm text-muted-foreground">Progress charts will appear here once you have logged data.</p>
        </div>
      </GlassCard>
    </div>
  );
}
