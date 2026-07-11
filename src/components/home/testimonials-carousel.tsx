"use client";

import { useState, useEffect } from "react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Pro Member",
    content: "FitZone Pro completely transformed my approach to fitness. The personalized programs kept me motivated and the results speak for themselves. Lost 30 pounds in 3 months!",
    avatar: "SJ",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Elite Member",
    content: "The trainers are world-class. My 1-on-1 sessions with Alex have improved my form dramatically and I'm lifting heavier than ever before.",
    avatar: "MC",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Pro Member",
    content: "The nutrition tracking feature is a game changer. I finally understand my macros and how to fuel my body properly. The meal plans are delicious too!",
    avatar: "ER",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Free Member",
    content: "Started with the Free plan and was impressed by how much I could do without paying. Upgraded when I wanted more features.",
    avatar: "DP",
    rating: 4,
  },
  {
    name: "Lisa Thompson",
    role: "Elite Member",
    content: "The progress dashboard keeps me accountable. Seeing my improvement over time is incredibly motivating. Best fitness investment I've ever made.",
    avatar: "LT",
    rating: 5,
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What Our <GradientText>Members</GradientText> Say
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Join thousands of satisfied members who have transformed their lives with FitZone Pro.
          </p>
        </AnimatedSection>

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatedSection>
            <div className="relative rounded-2xl border border-emerald-500/10 bg-card p-8 text-center sm:p-12">
              <Quote className="mx-auto mb-6 h-12 w-12 text-emerald-400/30" />
              <p className="mb-8 text-lg leading-relaxed italic text-muted-foreground">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white">
                  {t.avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < t.rating ? "fill-emerald-400 text-emerald-400" : "text-muted-foreground"}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="rounded-lg border border-emerald-500/20 p-2 text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-emerald-400" : "bg-emerald-500/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="rounded-lg border border-emerald-500/20 p-2 text-muted-foreground transition-colors hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
