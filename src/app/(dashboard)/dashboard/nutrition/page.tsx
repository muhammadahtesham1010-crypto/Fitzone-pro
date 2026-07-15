"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Apple, Plus, X, Loader2, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface NutritionLog {
  id: string;
  date: string;
  mealType: string;
  foodName: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatsG: number;
}

const mealTypes = ["breakfast", "lunch", "dinner", "snack"];

export default function NutritionPage() {
  const [logs, setLogs] = useState<NutritionLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ mealType: "snack", foodName: "", calories: "", proteinG: "", carbsG: "", fatsG: "" });

  const today = new Date().toISOString().split("T")[0];

  const fetchLogs = () => {
    fetch(`/api/nutrition?date=${today}`)
      .then((r) => r.ok ? r.json() : [])
      .then((data) => setLogs(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchLogs(); }, []);

  const handleSubmit = async () => {
    if (!form.foodName.trim()) { toast.error("Food name is required"); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/nutrition", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mealType: form.mealType,
          foodName: form.foodName.trim(),
          calories: parseInt(form.calories) || 0,
          proteinG: parseInt(form.proteinG) || 0,
          carbsG: parseInt(form.carbsG) || 0,
          fatsG: parseInt(form.fatsG) || 0,
          date: today,
        }),
      });
      if (!res.ok) throw new Error("Failed to log meal");
      toast.success("Meal logged!");
      setShowForm(false);
      setForm({ mealType: "snack", foodName: "", calories: "", proteinG: "", carbsG: "", fatsG: "" });
      fetchLogs();
    } catch { toast.error("Failed to log meal"); } finally { setSubmitting(false); }
  };

  const totals = logs.reduce(
    (acc, log) => ({
      calories: acc.calories + (log.calories || 0),
      protein: acc.protein + (log.proteinG || 0),
      carbs: acc.carbs + (log.carbsG || 0),
      fats: acc.fats + (log.fatsG || 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fats: 0 }
  );

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/nutrition/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete meal");
      setLogs((prev) => prev.filter((l) => l.id !== id));
      toast.success("Meal deleted");
    } catch { toast.error("Failed to delete meal"); }
  };

  const targets = { calories: 2500, protein: 180, carbs: 250, fats: 70 };

  const macros = [
    { label: "Calories", current: totals.calories, target: targets.calories, color: "bg-emerald-500" },
    { label: "Protein", current: totals.protein, target: targets.protein, unit: "g", color: "bg-red-500" },
    { label: "Carbs", current: totals.carbs, target: targets.carbs, unit: "g", color: "bg-yellow-500" },
    { label: "Fats", current: totals.fats, target: targets.fats, unit: "g", color: "bg-blue-500" },
  ];

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Nutrition <GradientText>Tracking</GradientText></h2>
            <p className="text-muted-foreground">Track your daily nutrition and macros.</p>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showForm ? "Cancel" : "Log Meal"}
          </button>
        </div>
      </AnimatedSection>

      {showForm && (
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Log Meal</h3>
            <button onClick={() => setShowForm(false)} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10"><X className="h-4 w-4" /></button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Meal Type</label>
              <div className="flex flex-wrap gap-2">
                {mealTypes.map((mt) => (
                  <button key={mt} onClick={() => setForm({ ...form, mealType: mt })}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${form.mealType === mt ? "bg-emerald-500 text-white" : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"}`}>
                    {mt.charAt(0).toUpperCase() + mt.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Food Name</label>
              <input value={form.foodName} onChange={(e) => setForm({ ...form, foodName: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="e.g. Chicken breast" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium mb-1">Calories</label>
                <input type="number" value={form.calories} onChange={(e) => setForm({ ...form, calories: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="350" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Protein (g)</label>
                <input type="number" value={form.proteinG} onChange={(e) => setForm({ ...form, proteinG: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="30" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Carbs (g)</label>
                <input type="number" value={form.carbsG} onChange={(e) => setForm({ ...form, carbsG: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="40" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Fats (g)</label>
                <input type="number" value={form.fatsG} onChange={(e) => setForm({ ...form, fatsG: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="12" />
              </div>
            </div>
            <button onClick={handleSubmit} disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 disabled:opacity-50">
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Save Meal
            </button>
          </div>
        </GlassCard>
      )}

      {loading ? (
        <div className="flex justify-center py-8"><Loader2 className="h-6 w-6 animate-spin text-emerald-400" /></div>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {macros.map((macro) => (
              <GlassCard key={macro.label}>
                <p className="mb-1 text-sm text-muted-foreground">{macro.label}</p>
                <p className="text-2xl font-bold">{macro.current}<span className="text-sm text-muted-foreground">/{macro.target}{macro.unit || ""}</span></p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-emerald-500/10">
                  <div className={`h-full ${macro.color} rounded-full transition-all`} style={{ width: `${Math.min(100, (macro.current / macro.target) * 100)}%` }} />
                </div>
              </GlassCard>
            ))}
          </div>

          {logs.length === 0 ? (
            <GlassCard>
              <div className="flex flex-col items-center justify-center py-12">
                <div className="mb-4 rounded-full bg-emerald-500/10 p-4">
                  <Apple className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="mb-2 font-semibold">No Meals Logged Today</h3>
                <p className="text-sm text-muted-foreground">Start tracking your meals to see your daily nutrition breakdown.</p>
              </div>
            </GlassCard>
          ) : (
            <GlassCard>
              <h3 className="mb-4 font-semibold">Today&apos;s Meals</h3>
              <div className="space-y-2">
                {logs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between rounded-lg bg-emerald-500/5 p-3">
                    <div>
                      <p className="text-sm font-medium">{log.foodName}</p>
                      <p className="text-xs text-muted-foreground capitalize">{log.mealType}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right text-sm">
                        <p>{log.calories} cal</p>
                        <p className="text-xs text-muted-foreground">P:{log.proteinG} C:{log.carbsG} F:{log.fatsG}</p>
                      </div>
                      <button onClick={() => handleDelete(log.id)} className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          )}
        </>
      )}
    </div>
  );
}
