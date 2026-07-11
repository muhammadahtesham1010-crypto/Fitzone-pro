"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatedSection } from "@/components/shared/animated-section";

const stats = [
  { value: 50000, suffix: "+", label: "Active Members", icon: "💪" },
  { value: 200, suffix: "+", label: "Expert Programs", icon: "📋" },
  { value: 50, suffix: "+", label: "Expert Trainers", icon: "🏆" },
  { value: 20, suffix: "+", label: "Locations", icon: "📍" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayCount = count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}K` : count.toString();

  return (
    <span ref={ref} className="text-4xl font-bold text-emerald-400">
      {displayCount}{suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <section className="border-y border-emerald-500/10 bg-card py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-3xl">{stat.icon}</div>
                <CountUp target={stat.value} suffix={stat.suffix} />
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
