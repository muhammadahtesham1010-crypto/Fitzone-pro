"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { calculateBMI } from "@/lib/utils";

export function BMIWidget() {
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(175);

  const bmi = calculateBMI(weight, height);
  const getCategory = (b: number) => {
    if (b < 18.5) return { label: "Underweight", color: "text-blue-400" };
    if (b < 25) return { label: "Normal", color: "text-emerald-400" };
    if (b < 30) return { label: "Overweight", color: "text-yellow-400" };
    return { label: "Obese", color: "text-red-400" };
  };
  const cat = getCategory(bmi);

  return (
    <GlassCard className="text-center">
      <h3 className="mb-4 font-semibold">BMI Calculator</h3>
      <div className="mb-4">
        <p className={`text-4xl font-bold ${cat.color}`}>{bmi.toFixed(1)}</p>
        <p className={`text-sm font-medium ${cat.color}`}>{cat.label}</p>
      </div>
      <div className="space-y-2">
        <div>
          <label className="text-xs text-muted-foreground">Weight (kg): {weight}</label>
          <input type="range" min={30} max={200} value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Height (cm): {height}</label>
          <input type="range" min={100} max={250} value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full accent-emerald-500" />
        </div>
      </div>
    </GlassCard>
  );
}
