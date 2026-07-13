"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { GradientText } from "@/components/shared/gradient-text";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Transform Your Body Today
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Transform Your
              <br />
              <GradientText>Body, Transform</GradientText>
              <br />
              Your Life
            </h1>
            <p className="mb-8 max-w-lg text-lg text-muted-foreground">
              Get personalized workout plans, nutrition guidance, and expert coaching
              from world-class trainers. Your fitness journey starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 px-6 py-3 text-sm font-semibold transition-all hover:bg-emerald-500/10"
              >
                <Play className="h-4 w-4" />
                View Programs
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              {[
                { value: "50K+", label: "Active Members" },
                { value: "200+", label: "Programs" },
                { value: "4.9", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[500px] w-[400px]">
              <div className="absolute -left-4 top-0 h-full w-full rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/10 to-transparent backdrop-blur-3xl animate-float" />
              <div className="absolute left-4 top-4 h-full w-full rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 to-transparent backdrop-blur-3xl animate-float" style={{ animationDelay: "1s" }} />
              <div className="absolute left-8 top-8 flex h-full w-full flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/30 to-background backdrop-blur-3xl p-8 animate-float" style={{ animationDelay: "2s" }}>
                <div className="mb-6 text-center">
                  <div className="mb-2 text-6xl">🏋️</div>
                  <h3 className="text-xl font-bold">Start Your Journey</h3>
                  <p className="text-sm text-muted-foreground">Personalized fitness awaits</p>
                </div>
                <div className="w-full space-y-3">
                  {["Custom Workout Plans", "Nutrition Guidance", "Expert Coaching"].map((item, i) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-emerald-500/10 p-3 text-sm">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
                        {i + 1}
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
