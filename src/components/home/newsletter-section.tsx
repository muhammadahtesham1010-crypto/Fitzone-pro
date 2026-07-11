"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { Mail, Check } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        toast.success("Subscribed to newsletter!");
      } else {
        toast.error("Failed to subscribe. Please try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-t border-emerald-500/10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-xl text-center">
          <div className="mb-6 inline-flex rounded-full bg-emerald-500/10 p-3 text-emerald-400">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="mb-4 text-3xl font-bold">Stay in the Loop</h2>
          <p className="mb-8 text-muted-foreground">
            Get fitness tips, workout plans, and exclusive offers delivered to your inbox.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 p-4 text-emerald-400">
              <Check className="h-5 w-5" />
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-3 text-sm focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 disabled:opacity-50"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
