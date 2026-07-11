"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Trash2, Clock, Dumbbell } from "lucide-react";

const programs = [
  { title: "Beginner Strength", category: "Strength", duration: "8 weeks", difficulty: "Beginner", status: "Published" },
  { title: "Fat Burning HIIT", category: "Cardio", duration: "6 weeks", difficulty: "Intermediate", status: "Published" },
  { title: "Muscle Building 101", category: "Bodybuilding", duration: "12 weeks", difficulty: "Intermediate", status: "Draft" },
];

export default function AdminProgramsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Programs</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> Add Program
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <GlassCard key={p.title}>
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold">{p.title}</h3>
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                p.status === "Published" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"
              }`}>{p.status}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">{p.category}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400"><Clock className="h-3 w-3" /> {p.duration}</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400"><Dumbbell className="h-3 w-3" /> {p.difficulty}</span>
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
