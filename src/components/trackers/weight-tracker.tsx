"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { Scale, Plus, Minus } from "lucide-react";

export function WeightTracker() {
  const [weight, setWeight] = useState(75);

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Scale className="h-4 w-4 text-emerald-400" /> Weight
        </h3>
        <div className="flex items-center gap-1">
          <button onClick={() => setWeight((w) => Math.max(w - 0.5, 0))} className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 hover:bg-emerald-500/20">
            <Minus className="h-4 w-4" />
          </button>
          <button onClick={() => setWeight((w) => w + 0.5)} className="rounded-lg bg-emerald-500/10 p-1.5 text-emerald-400 hover:bg-emerald-500/20">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="text-3xl font-bold">{weight} <span className="text-sm text-muted-foreground">kg</span></p>
      <div className="mt-4 h-24 flex items-end justify-between gap-1 rounded-lg bg-emerald-500/5 p-3">
        {[65, 67, 66, 68, 70, 69, 71].map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm bg-gradient-to-t from-emerald-500/40 to-emerald-400/60 transition-all hover:from-emerald-500/60 hover:to-emerald-400/80"
              style={{ height: `${(val / 72) * 100}%` }}
            />
            <span className="text-[10px] text-muted-foreground">M{i + 1}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
