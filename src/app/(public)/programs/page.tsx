"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Dumbbell, Star, ArrowRight, Filter, Search } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { SearchInput } from "@/components/shared/search-input";

const allPrograms = [
  { title: "Beginner Strength Foundations", desc: "Build your foundation with compound lifts", category: "Strength", difficulty: "Beginner", duration: "8 weeks", rating: 4.9, icon: "🏋️", color: "from-emerald-500/20" },
  { title: "Advanced Powerlifting", desc: "Maximize your squat, bench, and deadlift", category: "Strength", difficulty: "Advanced", duration: "12 weeks", rating: 4.8, icon: "💪", color: "from-red-500/20" },
  { title: "Fat Burning HIIT", desc: "High intensity interval training", category: "Cardio", difficulty: "Intermediate", duration: "6 weeks", rating: 4.7, icon: "🔥", color: "from-orange-500/20" },
  { title: "Yoga for Flexibility", desc: "Improve flexibility and mindfulness", category: "Flexibility", difficulty: "Beginner", duration: "4 weeks", rating: 4.9, icon: "🧘", color: "from-purple-500/20" },
  { title: "Muscle Building 101", desc: "Science-based hypertrophy program", category: "Bodybuilding", difficulty: "Intermediate", duration: "12 weeks", rating: 4.8, icon: "💪", color: "from-blue-500/20" },
  { title: "Endurance Athlete", desc: "Build cardiovascular endurance", category: "Cardio", difficulty: "Advanced", duration: "8 weeks", rating: 4.7, icon: "🏃", color: "from-cyan-500/20" },
  { title: "Core Crusher", desc: "Six-pack abs and core strength", category: "Core", difficulty: "Intermediate", duration: "6 weeks", rating: 4.6, icon: "🎯", color: "from-yellow-500/20" },
  { title: "Home Workout Hero", desc: "No equipment needed", category: "Bodyweight", difficulty: "Beginner", duration: "4 weeks", rating: 4.5, icon: "🏠", color: "from-green-500/20" },
  { title: "Strength & Conditioning", desc: "Athletic performance training", category: "Strength", difficulty: "Advanced", duration: "10 weeks", rating: 4.9, icon: "⚡", color: "from-indigo-500/20" },
  { title: "Pilates Core Flow", desc: "Low impact core strengthening", category: "Flexibility", difficulty: "Beginner", duration: "4 weeks", rating: 4.7, icon: "🤸", color: "from-pink-500/20" },
  { title: "Marathon Prep", desc: "Complete marathon training plan", category: "Cardio", difficulty: "Advanced", duration: "16 weeks", rating: 4.8, icon: "🏅", color: "from-teal-500/20" },
  { title: "Calisthenics Mastery", desc: "Bodyweight strength and control", category: "Bodyweight", difficulty: "Intermediate", duration: "8 weeks", rating: 4.6, icon: "🤸", color: "from-lime-500/20" },
];

const categories = ["All", "Strength", "Cardio", "Flexibility", "Bodybuilding", "Core", "Bodyweight"];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = allPrograms.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Workout <GradientText>Programs</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Expert-designed programs for every fitness level and goal.
          </p>
        </AnimatedSection>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput
            placeholder="Search programs..."
            value={search}
            onChange={setSearch}
            className="w-full sm:w-72"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-emerald-500 text-white"
                    : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-card p-6 transition-all hover:border-emerald-500/30 hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${program.color} to-transparent opacity-30`} />
              <div className="relative">
                <div className="mb-3 text-3xl">{program.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{program.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{program.desc}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"><Clock className="h-3 w-3" /> {program.duration}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"><Dumbbell className="h-3 w-3" /> {program.difficulty}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400"><Star className="h-3 w-3" /> {program.rating}</span>
                </div>
                <Link href="/membership" className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300">
                  Start Program <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No programs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
