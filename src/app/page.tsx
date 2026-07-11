"use client";

import { HeroSection } from "@/components/home/hero-section";
import { FeaturedPrograms } from "@/components/home/featured-programs";
import { StatsCounter } from "@/components/home/stats-counter";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { PricingTable } from "@/components/home/pricing-table";
import { CTASection } from "@/components/home/cta-section";
import { NewsletterSection } from "@/components/home/newsletter-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <StatsCounter />
      <FeaturedPrograms />
      <PricingTable />
      <TestimonialsCarousel />
      <CTASection />
      <NewsletterSection />
    </div>
  );
}
