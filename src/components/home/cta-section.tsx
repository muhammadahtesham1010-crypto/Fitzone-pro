"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/shared/animated-section";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 px-8 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Transform Your Life?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-emerald-100">
                Join thousands of members who have already taken the first step toward a healthier,
                stronger, and more confident version of themselves.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/register"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 text-sm font-semibold text-emerald-700 transition-all hover:bg-emerald-50 hover:shadow-xl"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  View Plans
                </Link>
              </div>
              <p className="mt-6 text-sm text-emerald-200">Free plan available. Upgrade anytime.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
