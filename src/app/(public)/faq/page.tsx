"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { SearchInput } from "@/components/shared/search-input";

const faqs = [
  { q: "How do I get started with FitZone Pro?", a: "Simply sign up for a free account and complete your profile. You'll get immediate access to basic tools. Upgrade to a paid plan anytime for premium features.", category: "General" },
  { q: "Can I cancel my membership anytime?", a: "Yes, you can cancel your membership at any time. Your access will continue until the end of your billing period. No cancellation fees.", category: "Membership" },
  { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all plans. If you're not satisfied, contact our support team for a full refund.", category: "Membership" },
  { q: "Are the workout programs suitable for beginners?", a: "Absolutely! We have programs for all fitness levels, from complete beginners to advanced athletes. Each program includes detailed instructions.", category: "Training" },
  { q: "Can I switch between membership plans?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.", category: "Membership" },
  { q: "How do I track my progress?", a: "Your dashboard includes charts for weight, body fat, workout volume, nutrition, water intake, and steps. All data syncs automatically.", category: "Features" },
  { q: "Is there a mobile app available?", a: "FitZone Pro is a progressive web app (PWA), so you can install it on your phone directly from the browser for a native app-like experience.", category: "General" },
  { q: "Can I work with a personal trainer?", a: "Yes, our Elite plan includes 1-on-1 personal training sessions. Pro members get trainer messaging for questions and guidance.", category: "Training" },
  { q: "How do I contact support?", a: "You can reach us through the contact form, email, or live chat. Elite members get 24/7 priority support.", category: "General" },
  { q: "Is my data secure?", a: "Yes, we use industry-standard encryption and security practices. Your data is never shared with third parties without your consent.", category: "General" },
  { q: "Can I share my account with family?", a: "Each membership is for individual use only. We offer family plans — contact our sales team for details.", category: "Membership" },
  { q: "How are the nutrition plans customized?", a: "Our nutrition plans are based on your goals, activity level, dietary preferences, and any restrictions or allergies you specify.", category: "Nutrition" },
];

const categories = ["All", "General", "Membership", "Training", "Nutrition", "Features"];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter((faq) => {
    const matchesSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || faq.a.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || faq.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Frequently Asked <GradientText>Questions</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Everything you need to know about FitZone Pro.
          </p>
        </AnimatedSection>

        <div className="mb-8 space-y-4">
          <SearchInput placeholder="Search FAQs..." value={search} onChange={setSearch} className="w-full" />
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${category === c ? "bg-emerald-500 text-white" : "border border-emerald-500/20 text-muted-foreground hover:bg-emerald-500/10"}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((faq, i) => (
            <div key={faq.q} className="rounded-xl border border-emerald-500/10 bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-emerald-500/5"
              >
                <span className="font-medium pr-4">{faq.q}</span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-emerald-500/10 px-4 py-4 text-sm text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-muted-foreground">No FAQs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
