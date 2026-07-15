"use client";

import { useState, useEffect } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { GradientText } from "@/components/shared/gradient-text";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Dumbbell, Plus, Minus, X, Loader2, Clock, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface WorkoutSet {
  set: number;
  reps: string;
  weight: string;
}

interface WorkoutLog {
  id: string;
  date: string;
  exerciseId: string | null;
  exerciseName: string | null;
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
  const [exercise, setExercise] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");
  const [sets, setSets] = useState<WorkoutSet[]>([{ set: 1, reps: "10", weight: "" }]);

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
    fetchWorkouts();
  }, []);

  const addSet = () => {
    setSets((prev) => [...prev, { set: prev.length + 1, reps: "10", weight: "" }]);
  };

  const removeSet = (index: number) => {
    if (sets.length <= 1) return;
    setSets((prev) => prev.filter((_, i) => i !== index).map((s, i) => ({ ...s, set: i + 1 })));
  };

  const updateSet = (index: number, field: "reps" | "weight", value: string) => {
    setSets((prev) => prev.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  };

  const resetForm = () => {
    setShowForm(false);
    setExercise("");
    setDuration("");
    setNotes("");
    setSets([{ set: 1, reps: "10", weight: "" }]);
  };

  const handleSubmit = async () => {
    if (!exercise.trim()) { toast.error("Exercise name is required"); return; }
    setSubmitting(true);
    try {
      const body = {
        exerciseName: exercise.trim(),
        sets: sets.map((s) => ({ set: s.set, reps: parseInt(s.reps) || 0, weight: parseInt(s.weight) || 0 })),
        durationMinutes: parseInt(duration) || undefined,
        notes: notes || undefined,
      };
      const res = await fetch("/api/workouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to log workout");
      toast.success("Workout logged!");
      resetForm();
      fetchWorkouts();
    } catch { toast.error("Failed to log workout"); } finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/workouts/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete workout");
      setWorkouts((prev) => prev.filter((w) => w.id !== id));
      toast.success("Workout deleted");
    } catch { toast.error("Failed to delete workout"); }
  };

  return (
    <div className="space-y-6">
      <AnimatedSection>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Workout <GradientText>Logs</GradientText></h2>
            <p className="text-muted-foreground">Track and manage your workouts.</p>
          </div>
          <button onClick={() => setShowForm(!showForm)} className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
            {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {showForm ? "Cancel" : "Log Workout"}
          </button>
        </div>
      </AnimatedSection>

      {showForm && (
        <GlassCard>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Log Workout</h3>
            <button onClick={resetForm} className="rounded-lg p-1 text-muted-foreground hover:bg-emerald-500/10"><X className="h-4 w-4" /></button>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Exercise</label>
              <input value={exercise} onChange={(e) => setExercise(e.target.value)} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="e.g. Bench Press" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium">Sets</label>
                <button onClick={addSet} className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/20">
                  <Plus className="h-3 w-3" /> Add Set
                </button>
              </div>
              <div className="space-y-2">
                {sets.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-10 text-sm text-muted-foreground">Set {s.set}</span>
                    <input type="number" value={s.reps} onChange={(e) => updateSet(i, "reps", e.target.value)} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-3 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="Reps" />
                    <input type="number" value={s.weight} onChange={(e) => updateSet(i, "weight", e.target.value)} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-3 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="Weight (kg)" />
                    {sets.length > 1 && (
                      <button onClick={() => removeSet(i)} className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10">
                        <Minus className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Duration (minutes, optional)</label>
              <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" placeholder="45" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Notes (optional)</label>
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2 text-sm focus:border-emerald-500/40 focus:outline-none" rows={2} placeholder="How did it feel?" />
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
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{w.exerciseName || w.exerciseId || "Workout"}</h3>
                    <button onClick={() => handleDelete(w.id)} className="rounded-lg p-1.5 text-red-400 hover:bg-red-500/10">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground">{new Date(w.date).toLocaleDateString()}</p>
                </div>
                {w.durationMinutes && (
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" /> {w.durationMinutes} min
                  </span>
                )}
              </div>
              {w.sets && w.sets.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {w.sets.map((s) => (
                    <span key={s.set} className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-300">
                      Set {s.set}: {s.reps} reps {s.weight > 0 && `× ${s.weight}kg`}
                    </span>
                  ))}
                </div>
              )}
              {w.notes && <p className="mt-2 text-sm text-muted-foreground">{w.notes}</p>}
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}
