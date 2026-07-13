"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Dumbbell, Star, Target, CheckCircle2, Wrench, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { getProgramBySlug } from "@/lib/programs-data";

export default function ProgramDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const program = getProgramBySlug(slug);
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1]);

  const toggleWeek = (week: number) => {
    setExpandedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  if (!program) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Program Not Found</h2>
          <p className="mb-6 text-muted-foreground">The program you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/programs" className="text-emerald-400 hover:text-emerald-300">Back to Programs</Link>
        </div>
      </div>
    );
  }

  const descriptions = program.longDescription.split("\n\n");

  return (
    <div className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link href="/programs" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400">
          <ArrowLeft className="h-4 w-4" /> Back to Programs
        </Link>

        <AnimatedSection>
          <div className="relative mb-12 overflow-hidden rounded-2xl border border-emerald-500/10 bg-card p-8 sm:p-12">
            <div className={`absolute inset-0 bg-gradient-to-br ${program.color} to-transparent opacity-20`} />
            <div className="relative">
              <div className="mb-4 text-5xl sm:text-6xl">{program.icon}</div>
              <h1 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {program.title}
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">{program.desc}</p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  <Dumbbell className="h-4 w-4" /> {program.difficulty}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  <Clock className="h-4 w-4" /> {program.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                  <Target className="h-4 w-4" /> {program.category}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">
                  <Star className="h-4 w-4" /> {program.rating}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <GlassCard>
            <h2 className="mb-4 text-2xl font-bold">Program Overview</h2>
            {descriptions.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground last:mb-0">
                {paragraph}
              </p>
            ))}
          </GlassCard>
        </AnimatedSection>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <GlassCard>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Target className="h-5 w-5 text-emerald-400" /> What You&apos;ll Learn
              </h3>
              <ul className="space-y-3">
                {program.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {goal}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Star className="h-5 w-5 text-emerald-400" /> Program Benefits
              </h3>
              <ul className="space-y-3">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <AnimatedSection>
            <GlassCard>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <Wrench className="h-5 w-5 text-emerald-400" /> Equipment Needed
              </h3>
              <ul className="space-y-2">
                {program.equipment.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection>
            <GlassCard>
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
                <AlertCircle className="h-5 w-5 text-emerald-400" /> Prerequisites
              </h3>
              <ul className="space-y-2">
                {program.prerequisites.map((prereq, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {prereq}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">
            Weekly <GradientText>Schedule</GradientText>
          </h2>
          <p className="mb-8 text-muted-foreground">
            Here&apos;s a preview of the first {program.weeklySchedule.length} weeks.
            Sign up for the full program!
          </p>
          <div className="space-y-4">
            {program.weeklySchedule.map((week) => (
              <GlassCard key={week.week}>
                <button
                  onClick={() => toggleWeek(week.week)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div>
                    <span className="text-sm text-emerald-400">Week {week.week}</span>
                    <h3 className="text-lg font-semibold">{week.focus}</h3>
                  </div>
                  {expandedWeeks.includes(week.week) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
                {expandedWeeks.includes(week.week) && (
                  <div className="mt-4 space-y-6">
                    {week.days.map((day, dayIdx) => (
                      <div key={dayIdx}>
                        <h4 className="mb-2 text-sm font-semibold text-emerald-400">{day.day}</h4>
                        <div className="overflow-x-auto rounded-lg border border-emerald-500/10">
                          <table className="w-full text-left text-sm">
                            <thead>
                              <tr className="border-b border-emerald-500/10 bg-emerald-500/5">
                                <th className="px-3 py-2 font-medium text-muted-foreground">Exercise</th>
                                <th className="px-3 py-2 font-medium text-muted-foreground">Sets</th>
                                <th className="px-3 py-2 font-medium text-muted-foreground">Reps</th>
                                <th className="px-3 py-2 font-medium text-muted-foreground">Notes</th>
                              </tr>
                            </thead>
                            <tbody>
                              {day.exercises.map((ex, exIdx) => (
                                <tr key={exIdx} className="border-b border-emerald-500/5 last:border-0">
                                  <td className="px-3 py-2 font-medium">{ex.exercise}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{ex.sets}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{ex.reps}</td>
                                  <td className="px-3 py-2 text-muted-foreground">{ex.notes}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center">
          <GlassCard className="py-8">
            <h2 className="mb-2 text-2xl font-bold">Ready to Start?</h2>
            <p className="mb-6 text-muted-foreground">
              Get full access to this program and all premium features with any paid plan.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition-all hover:bg-emerald-400"
            >
              Start This Program <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  );
}
