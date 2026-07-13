"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Dumbbell, Star } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";

const programs = [
  {
    slug: "beginner-strength-foundations",
    title: "Beginner Strength",
    description: "Perfect for newcomers. Build foundational strength with proper form.",
    icon: "🏋️",
    duration: "8 weeks",
    level: "Beginner",
    rating: 4.9,
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    slug: "fat-burning-hiit",
    title: "HIIT Fat Burner",
    description: "High intensity intervals for maximum calorie burn and fat loss.",
    icon: "🔥",
    duration: "6 weeks",
    level: "Intermediate",
    rating: 4.8,
    color: "from-orange-500/20 to-red-600/10",
  },
  {
    slug: "muscle-building-101",
    title: "Muscle Builder",
    description: "Science-based hypertrophy program for serious muscle growth.",
    icon: "💪",
    duration: "12 weeks",
    level: "Advanced",
    rating: 4.9,
    color: "from-blue-500/20 to-purple-600/10",
  },
  {
    slug: "yoga-for-flexibility",
    title: "Yoga Flow",
    description: "Improve flexibility, balance, and mental wellbeing.",
    icon: "🧘",
    duration: "4 weeks",
    level: "All Levels",
    rating: 4.7,
    color: "from-pink-500/20 to-rose-600/10",
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured <GradientText>Programs</GradientText>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose from our curated selection of expert-designed programs tailored to your fitness level and goals.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-card p-6 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${program.color} opacity-50`} />
              <div className="relative">
                <div className="mb-4 text-4xl">{program.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{program.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{program.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <Clock className="h-3 w-3" /> {program.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <Dumbbell className="h-3 w-3" /> {program.level}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                    <Star className="h-3 w-3" /> {program.rating}
                  </span>
                </div>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  Start Program <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 px-6 py-3 text-sm font-semibold transition-all hover:bg-emerald-500/10"
          >
            View All Programs <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
