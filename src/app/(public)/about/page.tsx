"use client";

import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { Target, Heart, Award, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", desc: "Empower every individual to achieve their peak physical and mental potential through innovative fitness solutions." },
  { icon: Heart, title: "Community", desc: "Build a supportive, inclusive community where everyone feels welcome and motivated to push their limits." },
  { icon: Award, title: "Excellence", desc: "Deliver world-class training programs backed by science and designed by elite professionals." },
  { icon: Shield, title: "Integrity", desc: "Maintain the highest standards of quality, transparency, and care in everything we do." },
];

const team = [
  { name: "James Mitchell", role: "CEO & Founder", image: "JM", bio: "Former professional athlete with 15+ years in fitness industry" },
  { name: "Dr. Rachel Green", role: "Head of Nutrition", image: "RG", bio: "PhD in Sports Nutrition, published researcher" },
  { name: "Coach Mike Torres", role: "Head of Training", image: "MT", bio: "CSCS certified, trained Olympic athletes" },
  { name: "Sarah Williams", role: "Head of Product", image: "SW", bio: "Built fitness platforms used by millions" },
];

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            About <GradientText>FitZone Pro</GradientText>
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            We&apos;re on a mission to make world-class fitness accessible to everyone.
            Founded in 2020, FitZone Pro has helped over 50,000 people transform their lives.
          </p>
        </AnimatedSection>

        <div className="mb-24 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <AnimatedSection key={v.title} delay={0.1}>
              <GlassCard hover className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <v.icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mb-2 font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-8 sm:p-16">
            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  FitZone Pro was born from a simple belief: everyone deserves access to
                  premium fitness guidance. What started as a small training studio has grown
                  into a global platform serving thousands of members worldwide.
                </p>
                <p className="text-muted-foreground">
                  Our team of elite trainers, nutritionists, and engineers work tirelessly to
                  create the most effective, personalized fitness experience possible.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50K+", label: "Members" },
                  { value: "200+", label: "Programs" },
                  { value: "50+", label: "Trainers" },
                  { value: "98%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-emerald-500/10 p-4 text-center">
                    <p className="text-3xl font-bold text-emerald-400">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Meet Our <GradientText>Team</GradientText>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <GlassCard key={member.name} hover className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-2xl font-bold text-white">
                  {member.image}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-emerald-400">{member.role}</p>
                <p className="mt-2 text-xs text-muted-foreground">{member.bio}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
