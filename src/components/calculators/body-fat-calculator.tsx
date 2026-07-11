"use client";

import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";

export function BodyFatWidget() {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [bmi, setBmi] = useState(24.5);
  const [age, setAge] = useState(30);

  const bodyFat = gender === "male"
    ? 1.2 * bmi + 0.23 * age - 16.2
    : 1.2 * bmi + 0.23 * age - 5.4;

  const getCategory = (bf: number, g: string) => {
    if (g === "male") {
      if (bf < 6) return { label: "Essential Fat", color: "text-blue-400" };
      if (bf < 14) return { label: "Athletic", color: "text-emerald-400" };
      if (bf < 18) return { label: "Fitness", color: "text-yellow-400" };
      if (bf < 25) return { label: "Average", color: "text-orange-400" };
      return { label: "Obese", color: "text-red-400" };
    }
    if (bf < 14) return { label: "Essential Fat", color: "text-blue-400" };
    if (bf < 21) return { label: "Athletic", color: "text-emerald-400" };
    if (bf < 25) return { label: "Fitness", color: "text-yellow-400" };
    if (bf < 32) return { label: "Average", color: "text-orange-400" };
    return { label: "Obese", color: "text-red-400" };
  };
  const cat = getCategory(bodyFat, gender);

  return (
    <GlassCard className="text-center">
      <h3 className="mb-4 font-semibold">Body Fat %</h3>
      <p className={`text-4xl font-bold ${cat.color}`}>{bodyFat.toFixed(1)}%</p>
      <p className={`text-sm font-medium ${cat.color}`}>{cat.label}</p>
      <div className="mt-4 flex justify-center gap-2">
        <button onClick={() => setGender("male")} className={`rounded-full px-4 py-1 text-xs font-medium ${gender === "male" ? "bg-emerald-500 text-white" : "border border-emerald-500/20"}`}>Male</button>
        <button onClick={() => setGender("female")} className={`rounded-full px-4 py-1 text-xs font-medium ${gender === "female" ? "bg-emerald-500 text-white" : "border border-emerald-500/20"}`}>Female</button>
      </div>
      <div className="mt-4 space-y-2">
        <div>
          <label className="text-xs text-muted-foreground">BMI: {bmi.toFixed(1)}</label>
          <input type="range" min={15} max={40} step={0.1} value={bmi} onChange={(e) => setBmi(Number(e.target.value))} className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-xs text-muted-foreground">Age: {age}</label>
          <input type="range" min={18} max={80} value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full accent-emerald-500" />
        </div>
      </div>
    </GlassCard>
  );
}
