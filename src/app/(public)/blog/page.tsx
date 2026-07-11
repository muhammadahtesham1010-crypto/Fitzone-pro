"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { SearchInput } from "@/components/shared/search-input";

const posts = [
  { title: "The Science of Muscle Growth", slug: "science-of-muscle-growth", excerpt: "Understanding hypertrophy and how to maximize gains", category: "Training", date: "2024-01-15", readTime: "5 min", image: "💪" },
  { title: "10 Best Exercises for a Bigger Chest", slug: "best-chest-exercises", excerpt: "Build an impressive chest with these proven exercises", category: "Training", date: "2024-01-10", readTime: "4 min", image: "🏋️" },
  { title: "Nutrition Myths Debunked", slug: "nutrition-myths-debunked", excerpt: "Separating fact from fiction in fitness nutrition", category: "Nutrition", date: "2024-01-05", readTime: "6 min", image: "🍎" },
  { title: "How to Stay Motivated on Your Fitness Journey", slug: "stay-motivated-fitness", excerpt: "Practical tips for maintaining long-term motivation", category: "Lifestyle", date: "2023-12-28", readTime: "4 min", image: "🔥" },
  { title: "The Ultimate Guide to Deadlifts", slug: "ultimate-deadlift-guide", excerpt: "Master the king of all exercises", category: "Training", date: "2023-12-20", readTime: "7 min", image: "🏋️" },
  { title: "Meal Prep 101: Save Time and Eat Healthy", slug: "meal-prep-101", excerpt: "Master meal prep for consistent nutrition", category: "Nutrition", date: "2023-12-15", readTime: "5 min", image: "📦" },
  { title: "The Benefits of Active Recovery", slug: "benefits-active-recovery", excerpt: "Why rest days should include light activity", category: "Recovery", date: "2023-12-10", readTime: "3 min", image: "🧘" },
  { title: "Understanding Macros", slug: "understanding-macros", excerpt: "A complete guide to macronutrients", category: "Nutrition", date: "2023-12-05", readTime: "6 min", image: "📊" },
  { title: "Beginner's Guide to Weight Training", slug: "beginners-weight-training", excerpt: "Everything you need to know to start lifting", category: "Training", date: "2023-11-28", readTime: "5 min", image: "🏋️" },
];

const categories = ["All", "Training", "Nutrition", "Lifestyle", "Recovery"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = posts.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            FitZone <GradientText>Blog</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Expert advice, tips, and insights to help you on your fitness journey.
          </p>
        </AnimatedSection>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SearchInput placeholder="Search articles..." value={search} onChange={setSearch} className="w-full sm:w-72" />
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${category === c ? "bg-emerald-500 text-white" : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <GlassCard hover className="h-full">
                  <div className="mb-4 text-4xl">{post.image}</div>
                  <div className="mb-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400">
                      <Tag className="h-3 w-3" /> {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold">{post.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm text-emerald-400">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
