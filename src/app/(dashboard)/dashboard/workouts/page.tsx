"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Dumbbell, Plus, X, Loader2, Clock } from "lucide-react";
import { toast } from "sonner";

interface WorkoutLog {
  id: string;
  date: string;
  exerciseId: string | null;
  sets: { set: number; reps: number; weight: number }[];
  notes: string | null;
  durationMinutes: number | null;
  createdAt: string;
}

export default function WorkoutsPage() {
  const [workouts, setWorkouts] = useState<WorkoutLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ exercise: "", sets: "3", reps: "10", weight: "", duration: "", notes: "" });

  const fetchWorkouts = async () => {
    try {
      const res = await fetch("/api/workouts");
      if (res.ok) {
        const data = await res.json();
        setWorkouts(data);
      }
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchWorkouts();
  }, []);

  const handleSubmit = async () => {
    if (!form.exercise.trim()) { toast.error("Exercise name is required"); return; }
    const duration = parseInt(form.duration) || undefined;
    setSubmitting(true);
    try {
      const body = {
        exerciseId: form.exercise.trim(),
        notes: form.notes || undefined,
        durationMinutes: duration,
      };
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to log workout");
      toast.success("Workout logged!");
      setShowForm(false);
      setForm({ exercise: "", sets: "3", reps: "10", weight: "", duration: "", notes: "" });
      fetchWorkouts();
    } catch { toast.error("Failed to log workout"); } finally { setSubmitting(false); }
  };

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Workout <GradientText>Logs</GradientText></h2>
            <p className="text-muted-foreground">Track and manage your workouts.</p>
          </div>
          <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            <Plus className="h-4 w-4" /> Log Workout
          </button>
        </div>
      </AnimatedSection>

      {showForm && (
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Log Workout</h3>
            <button onClick={() => setShowForm(false)} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10"><X className="h-4 w-4" /></button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Exercise</label>
              <input value={form.exercise} onChange={(e) => setForm({ ...form, exercise: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="e.g. Bench Press" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Duration (minutes, optional)</label>
              <input type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="45" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Notes (optional)</label>
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" rows={2} placeholder="How did it feel?" />
            </div>
            <button onClick={handleSubmit} disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 disabled:opacity-50">
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Save Workout
            </button>
          </div>
        </GlassCard>
      )}

      {loading ? (
        <div className="flex justify-center py-12"><Loader2 className="h-6 w-6 animate-spin text-emerald-400" /></div>
      ) : workouts.length === 0 ? (
        <GlassCard>
          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-4 rounded-full bg-emerald-500/10 p-4">
              <Dumbbell className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="mb-2 font-semibold">No Workouts Logged Yet</h3>
            <p className="mb-4 text-sm text-muted-foreground">Start tracking your workouts to see them here.</p>
            <button onClick={() => setShowForm(true)} className="rounded-xl bg-emerald-500 px-6 py-2 text-sm font-medium text-white hover:bg-emerald-600">
              Log Your First Workout
            </button>
          </div>
        </GlassCard>
      ) : (
        <div className="space-y-3">
          {workouts.map((w) => (
            <GlassCard key={w.id}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{w.exerciseId || "Workout"}</h3>
                  <p className="text-sm text-muted-foreground">{new Date(w.date).toLocaleDateString()}</p>
                </div>
                {w.durationMinutes && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {w.durationMinutes} min
                  </span>
                )}
              </div>
              {w.notes && <p className="mt-2 text-sm text-muted-foreground">{w.notes}</p>}
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
