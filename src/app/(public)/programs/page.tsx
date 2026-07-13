"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Dumbbell, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { SearchInput } from "@/components/shared/search-input";
import { programsData } from "@/lib/programs-data";

const categories = ["All", "Strength", "Cardio", "Flexibility", "Bodybuilding", "Core", "Bodyweight"];

export default function ProgramsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = programsData.filter((p) => {
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
                <Link href={`/programs/${program.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300">
                  View Program <ArrowRight className="h-3 w-3" />
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
