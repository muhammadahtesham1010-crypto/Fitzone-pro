"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";

const testimonials = [
  { name: "Sarah Johnson", role: "Pro Member", content: "FitZone Pro completely transformed my approach to fitness. The personalized programs kept me motivated and the results speak for themselves. Lost 30 pounds in 3 months!", rating: 5, avatar: "SJ" },
  { name: "Mike Chen", role: "Elite Member", content: "The trainers are world-class. My 1-on-1 sessions with Alex have improved my form dramatically and I'm lifting heavier than ever before.", rating: 5, avatar: "MC" },
  { name: "Emily Rodriguez", role: "Pro Member", content: "The nutrition tracking feature is a game changer. I finally understand my macros and how to fuel my body properly. The meal plans are delicious too!", rating: 5, avatar: "ER" },
  { name: "David Park", role: "Free Member", content: "Started with the Free plan and was impressed by how much I could do without paying. Upgraded when I wanted more features.", rating: 4, avatar: "DP" },
  { name: "Lisa Thompson", role: "Elite Member", content: "The progress dashboard keeps me accountable. Seeing my improvement over time is incredibly motivating. Best fitness investment I've ever made.", rating: 5, avatar: "LT" },
  { name: "James Wilson", role: "Pro Member", content: "I've tried many fitness apps, but none compare to FitZone Pro. The community support is amazing and the workouts are always challenging.", rating: 5, avatar: "JW" },
  { name: "Anna Martinez", role: "Elite Member", content: "The custom nutrition plan alone was worth the Elite membership. My energy levels are through the roof and I'm seeing gains like never before.", rating: 5, avatar: "AM" },
  { name: "Chris Taylor", role: "Basic Member", content: "Started as a complete beginner and the beginner program made everything easy to follow. Six months later, I'm a regular at the gym.", rating: 5, avatar: "CT" },
  { name: "Rachel Kim", role: "Pro Member", content: "The progress tracking features are incredible. Seeing my improvement over time keeps me motivated and coming back for more.", rating: 4, avatar: "RK" },
];

export default function TestimonialsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Member <GradientText>Testimonials</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Hear from our community about their FitZone Pro experience.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard hover>
                <Quote className="mb-4 h-8 w-8 text-emerald-400/30" />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-emerald-400 text-emerald-400" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="mb-6 text-sm text-muted-foreground italic">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
