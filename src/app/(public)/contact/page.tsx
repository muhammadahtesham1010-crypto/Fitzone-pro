"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, Loader2, Send } from "lucide-react";
import { AnimatedSection } from "@/components/shared/animated-section";
import { GradientText } from "@/components/shared/gradient-text";
import { GlassCard } from "@/components/shared/glass-card";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@fitzonepro.com", href: "mailto:hello@fitzonepro.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "Address", value: "123 Fitness Blvd, New York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Mon-Fri: 6am-10pm, Sat-Sun: 8am-8pm" },
];

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Message sent! We'll get back to you soon.");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Get In <GradientText>Touch</GradientText>
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a question or want to learn more? We&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            {contactInfo.map((info) => (
              <GlassCard key={info.label}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <info.icon className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="font-medium hover:text-emerald-400">{info.value}</a>
                    ) : (
                      <p className="font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="lg:col-span-2">
            <GlassCard>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name</label>
                    <input {...register("name")} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20" placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <input {...register("email")} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20" placeholder="you@example.com" />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Subject</label>
                  <input {...register("subject")} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20" placeholder="How can we help?" />
                  {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea {...register("message")} rows={5} className="w-full rounded-xl border border-emerald-500/20 bg-white/5 px-4 py-2.5 text-sm focus:border-emerald-500/40 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 resize-none" placeholder="Tell us more..." />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={isLoading} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-600 disabled:opacity-50">
                  {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  Send Message
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
