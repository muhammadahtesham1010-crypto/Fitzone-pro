"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { Droplets, Plus } from "lucide-react";

const GLASS_ML = 250;
const TARGET_GLASSES = 8;

export function WaterIntake() {
  const [glasses, setGlasses] = useState(0);

  const total = glasses * GLASS_ML;
  const target = TARGET_GLASSES * GLASS_ML;
  const percent = Math.min(100, (total / target) * 100);

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold flex items-center gap-2">
          <Droplets className="h-4 w-4 text-blue-400" /> Water Intake
        </h3>
        <button onClick={() => setGlasses((g) => Math.min(g + 1, TARGET_GLASSES))} className="rounded-lg bg-blue-500/10 p-1.5 text-blue-400 hover:bg-blue-500/20">
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-end gap-3 mb-4">
        <p className="text-3xl font-bold">{total} <span className="text-sm text-muted-foreground">ml</span></p>
        <p className="text-sm text-muted-foreground mb-1">/ {target} ml</p>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: TARGET_GLASSES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setGlasses(i < glasses ? i : i + 1)}
            className={`h-12 flex-1 rounded-lg border-2 transition-all ${
              i < glasses
                ? "border-blue-400 bg-blue-500/20"
                : "border-emerald-500/10 bg-emerald-500/5 hover:border-blue-400/30"
            }`}
          />
        ))}
      </div>
    </GlassCard>
  );
}
