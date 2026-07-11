"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Trash2 } from "lucide-react";

const plans = [
  { title: "Muscle Building", cals: 3000, protein: "200g", status: "Published" },
  { title: "Fat Loss", cals: 2000, protein: "180g", status: "Published" },
  { title: "Vegan Fitness", cals: 2500, protein: "150g", status: "Draft" },
];

export default function AdminNutritionPlansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Nutrition Plans</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> Add Plan
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => (
          <GlassCard key={p.title}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold">{p.title}</h3>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                p.status === "Published" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
              }`}>{p.status}</span>
            </div>
            <div className="space-y-1 mb-4 text-sm">
              <p>Calories: <span className="font-medium">{p.cals}</span></p>
              <p>Protein: <span className="font-medium">{p.protein}</span></p>
            </div>
            <div className="flex justify-end gap-1">
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10"><Pencil className="h-4 w-4" /></button>
              <button className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
