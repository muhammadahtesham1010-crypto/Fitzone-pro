"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { SearchInput } from "@/components/shared/search-input";

const exercises = [
  { name: "Barbell Bench Press", muscle: "Chest", equipment: "Barbell", difficulty: "Intermediate", image: "🏋️" },
  { name: "Squat", muscle: "Legs", equipment: "Barbell", difficulty: "Intermediate", image: "🏋️" },
  { name: "Deadlift", muscle: "Back", equipment: "Barbell", difficulty: "Advanced", image: "🏋️" },
  { name: "Pull-Up", muscle: "Back", equipment: "Bodyweight", difficulty: "Intermediate", image: "💪" },
  { name: "Push-Up", muscle: "Chest", equipment: "Bodyweight", difficulty: "Beginner", image: "💪" },
  { name: "Overhead Press", muscle: "Shoulders", equipment: "Barbell", difficulty: "Intermediate", image: "🏋️" },
  { name: "Barbell Row", muscle: "Back", equipment: "Barbell", difficulty: "Intermediate", image: "🏋️" },
  { name: "Lunges", muscle: "Legs", equipment: "Dumbbell", difficulty: "Beginner", image: "🦵" },
  { name: "Plank", muscle: "Core", equipment: "Bodyweight", difficulty: "Beginner", image: "🧘" },
  { name: "Dumbbell Curl", muscle: "Arms", equipment: "Dumbbell", difficulty: "Beginner", image: "💪" },
  { name: "Tricep Pushdown", muscle: "Arms", equipment: "Cable", difficulty: "Beginner", image: "💪" },
  { name: "Leg Press", muscle: "Legs", equipment: "Machine", difficulty: "Beginner", image: "🦵" },
  { name: "Lat Pulldown", muscle: "Back", equipment: "Cable", difficulty: "Beginner", image: "💪" },
  { name: "Face Pull", muscle: "Shoulders", equipment: "Cable", difficulty: "Beginner", image: "🏋️" },
  { name: "Kettlebell Swing", muscle: "Core", equipment: "Kettlebell", difficulty: "Intermediate", image: "🔔" },
  { name: "Box Jump", muscle: "Legs", equipment: "Box", difficulty: "Advanced", image: "📦" },
];

const muscles = ["All", "Chest", "Back", "Shoulders", "Arms", "Legs", "Core"];
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

export default function WorkoutsPage() {
  const [search, setSearch] = useState("");
  const [muscle, setMuscle] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const filtered = exercises.filter((e) => {
    const matchesSearch = e.name.toLowerCase().includes(search.toLowerCase());
    const matchesMuscle = muscle === "All" || e.muscle === muscle;
    const matchesDiff = difficulty === "All" || e.difficulty === difficulty;
    return matchesSearch && matchesMuscle && matchesDiff;
  });

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Exercise <GradientText>Library</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Browse our comprehensive exercise library with detailed instructions and form guides.
          </p>
        </AnimatedSection>

        <div className="mb-8 space-y-4">
          <SearchInput placeholder="Search exercises..." value={search} onChange={setSearch} className="w-full" />
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {muscles.map((m) => (
                <button key={m} onClick={() => setMuscle(m)} className={`min-h-[44px] rounded-full px-3 py-1 text-xs font-medium transition-all ${muscle === m ? "bg-emerald-500 text-white" : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"}`}>{m}</button>
              ))}
            </div>
            {difficulties.map((d) => (
              <button key={d} onClick={() => setDifficulty(d)} className={`min-h-[44px] rounded-full px-3 py-1 text-xs font-medium transition-all ${difficulty === d ? "bg-emerald-500 text-white" : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"}`}>{d}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((exercise, i) => (
            <motion.div
              key={exercise.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <GlassCard hover className="cursor-pointer">
                <div className="mb-3 text-3xl">{exercise.image}</div>
                <h3 className="mb-2 font-semibold">{exercise.name}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">{exercise.muscle}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">{exercise.equipment}</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-400">{exercise.difficulty}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
