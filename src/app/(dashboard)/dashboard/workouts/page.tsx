"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Dumbbell, Plus } from "lucide-react";

export default function WorkoutsPage() {
  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Workout <GradientText>Logs</GradientText></h2>
            <p className="text-muted-foreground">Track and manage your workouts.</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            <Plus className="h-4 w-4" /> Log Workout
          </button>
        </div>
      </AnimatedSection>

      <GlassCard>
        <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 rounded-full bg-emerald-500/10 p-4">
            <Dumbbell className="h-8 w-8 text-emerald-400" />
          </div>
          <h3 className="mb-2 font-semibold">No Workouts Logged Yet</h3>
          <p className="mb-4 text-sm text-muted-foreground">Start tracking your workouts to see them here.</p>
          <button className="rounded-xl bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            Log Your First Workout
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
