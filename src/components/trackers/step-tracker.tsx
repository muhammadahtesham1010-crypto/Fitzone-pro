"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { Footprints, Plus, Minus } from "lucide-react";

export function StepTracker() {
  const [steps, setSteps] = useState(5432);
  const target = 10000;
  const percent = Math.min(100, (steps / target) * 100);

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Footprints className="h-4 w-4 text-emerald-400" /> Steps
        </h3>
        <div className="flex items-center gap-1">
          <button onClick={() => setSteps((s) => Math.max(s - 100, 0))} className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 hover:bg-emerald-500/20">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={() => setSteps((s) => s + 100)} className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 hover:bg-emerald-500/20">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="text-3xl font-bold">{steps.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">of {target.toLocaleString()} steps</p>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-emerald-500/10">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all" style={{ width: `${percent}%` }} />
      </div>
    </GlassCard>
  );
}
