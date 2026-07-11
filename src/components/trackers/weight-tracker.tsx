"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { Scale, Plus } from "lucide-react";

export function WeightTracker() {
  const [weight, setWeight] = useState(75);

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Scale className="h-4 w-4 text-emerald-400" /> Weight
        </h3>
        <button className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 hover:bg-emerald-500/20">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <p className="text-3xl font-bold">{weight} <span className="text-sm text-muted-foreground">kg</span></p>
      <div className="mt-4 h-24 flex items-center justify-center rounded-lg bg-emerald-500/5">
        <p className="text-xs text-muted-foreground">Weight trend chart</p>
      </div>
    </GlassCard>
  );
}
