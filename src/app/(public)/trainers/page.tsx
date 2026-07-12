"use client";

import { motion } from "framer-motion";
import { Star, Check, MessageSquare } from "lucide-react";
import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";

const trainers = [
  { name: "Alex Rivera", bio: "Strength & conditioning specialist, 10+ years experience", specialties: ["Strength Training", "Athletic Performance", "Rehab"], rating: 4.9, image: "AR", certs: "CSCS, NASM-CPT" },
  { name: "Sarah Chen", bio: "Yoga and flexibility expert, RYT-500 certified", specialties: ["Yoga", "Flexibility", "Pilates", "Meditation"], rating: 4.8, image: "SC", certs: "RYT-500, ACE-CPT" },
  { name: "Marcus Johnson", bio: "Body transformation specialist, 500+ clients transformed", specialties: ["Weight Loss", "Nutrition", "Bodybuilding"], rating: 4.9, image: "MJ", certs: "ISSN-CISSN" },
  { name: "Emily Watson", bio: "Endurance coach and triathlon competitor", specialties: ["Cardio", "Running", "Swimming"], rating: 4.7, image: "EW", certs: "ACE-CPT, USATF" },
  { name: "David Park", bio: "Functional fitness coach, black belt in Taekwondo", specialties: ["Martial Arts", "Functional Training"], rating: 4.9, image: "DP", certs: "NASM-CPT, CrossFit L2" },
  { name: "Lisa Rodriguez", bio: "Pre/postnatal fitness specialist", specialties: ["Prenatal", "Postnatal", "Low Impact"], rating: 4.8, image: "LR", certs: "NASM-CPT" },
];

export default function TrainersPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Expert <GradientText>Trainers</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Learn from world-class fitness professionals dedicated to your success.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-3xl font-bold text-white">
                  {trainer.image}
                </div>
                <h3 className="text-lg font-semibold">{trainer.name}</h3>
                <div className="mb-2 flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 fill-emerald-400 text-emerald-400" />
                  <span className="text-sm font-medium">{trainer.rating}</span>
                  <span className="text-xs text-muted-foreground">({trainer.certs})</span>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{trainer.bio}</p>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {trainer.specialties.map((s) => (
                    <span key={s} className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs text-emerald-400">
                      <Check className="h-3 w-3" /> {s}
                    </span>
                  ))}
                </div>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                >
                  <MessageSquare className="h-4 w-4" /> Book Session
                </Link>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
