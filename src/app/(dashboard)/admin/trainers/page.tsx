"use client";

import { GlassCard } from "@/components/shared/glass-card";
import { Plus, Pencil, Trash2 } from "lucide-react";

const trainers = [
  { name: "Alex Rivera", specialties: "Strength Training", rating: 4.9, status: "Available" },
  { name: "Sarah Chen", specialties: "Yoga, Flexibility", rating: 4.8, status: "Available" },
  { name: "Marcus Johnson", specialties: "Weight Loss, Nutrition", rating: 4.9, status: "Available" },
];

export default function AdminTrainersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Trainers</h2>
        <button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          <Plus className="h-4 w-4" /> Add Trainer
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {trainers.map((t) => (
          <GlassCard key={t.name}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-bold text-white">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.specialties}</p>
                </div>
              </div>
              <span className="text-xs text-emerald-400">★ {t.rating}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {t.status}
              </span>
              <div className="flex gap-1">
                <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-emerald-500/10"><Pencil className="h-4 w-4" /></button>
                <button className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
