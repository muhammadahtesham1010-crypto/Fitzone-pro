"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Wheat, Droplets } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";

const plans = [
  { title: "Muscle Building", desc: "High protein meals for muscle growth", cals: "3,000", protein: "200g", carbs: "350g", fats: "80g", icon: "💪", color: "from-blue-500/20" },
  { title: "Fat Loss", desc: "Calorie-controlled meals for fat loss", cals: "2,000", protein: "180g", carbs: "150g", fats: "60g", icon: "🔥", color: "from-orange-500/20" },
  { title: "Vegan Fitness", desc: "Plant-based nutrition for athletes", cals: "2,500", protein: "150g", carbs: "300g", fats: "75g", icon: "🌱", color: "from-green-500/20" },
  { title: "Keto Training", desc: "Low carb high fat for ketosis", cals: "2,200", protein: "160g", carbs: "50g", fats: "160g", icon: "🥑", color: "from-purple-500/20" },
  { title: "Maintenance", desc: "Balanced nutrition for weight maintenance", cals: "2,500", protein: "170g", carbs: "250g", fats: "70g", icon: "⚖️", color: "from-cyan-500/20" },
];

const macros = [
  { label: "Protein", icon: Flame, color: "text-red-400", bg: "bg-red-500/10" },
  { label: "Carbs", icon: Wheat, color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { label: "Fats", icon: Droplets, color: "text-blue-400", bg: "bg-blue-500/10" },
];

export default function NutritionPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Nutrition <GradientText>Plans</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Science-backed nutrition plans designed to complement your training and accelerate results.
          </p>
        </AnimatedSection>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover>
                <div className={`absolute inset-0 bg-gradient-to-b ${plan.color} to-transparent opacity-20`} />
                <div className="relative">
                  <div className="mb-4 text-3xl">{plan.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{plan.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{plan.desc}</p>
                  <div className="mb-4 space-y-2">
                    <div className="flex justify-between text-sm"><span>Calories</span><span className="font-medium">{plan.cals}</span></div>
                    <div className="flex justify-between text-sm"><span>Protein</span><span className="font-medium text-red-400">{plan.protein}</span></div>
                    <div className="flex justify-between text-sm"><span>Carbs</span><span className="font-medium text-yellow-400">{plan.carbs}</span></div>
                    <div className="flex justify-between text-sm"><span>Fats</span><span className="font-medium text-blue-400">{plan.fats}</span></div>
                  </div>
                  <Link href="/membership" className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300">
                    Get This Plan <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <AnimatedSection>
          <div className="rounded-2xl border border-emerald-500/10 bg-card p-8">
            <h2 className="mb-6 text-center text-2xl font-bold">Understanding Your <GradientText>Macros</GradientText></h2>
            <div className="grid gap-6 md:grid-cols-3">
              {macros.map((m) => (
                <div key={m.label} className="text-center">
                  <div className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl ${m.bg}`}>
                    <m.icon className={`h-7 w-7 ${m.color}`} />
                  </div>
                  <h3 className="mb-2 font-semibold">{m.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential for {m.label.toLowerCase()} synthesis and overall health.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
