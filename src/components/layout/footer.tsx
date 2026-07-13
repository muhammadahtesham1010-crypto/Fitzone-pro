import Link from "next/link";
import { Dumbbell, Mail, Phone, MapPin, Globe, MessageCircle, Video } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-500/10 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
                <Dumbbell className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                FitZone <span className="text-emerald-400">Pro</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={SITE_CONFIG.social.instagram} className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition-colors hover:bg-emerald-500/20">
                <Globe className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.twitter} className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition-colors hover:bg-emerald-500/20">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.facebook} className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition-colors hover:bg-emerald-500/20">
                <Globe className="h-4 w-4" />
              </a>
              <a href={SITE_CONFIG.social.youtube} className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400 transition-colors hover:bg-emerald-500/20">
                <Video className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/trainers", label: "Trainers" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-emerald-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Resources</h3>
            <ul className="space-y-3">
              {[
                { href: "/workouts", label: "Workout Library" },
                { href: "/nutrition", label: "Nutrition Plans" },
                { href: "/faq", label: "FAQ" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/membership", label: "Membership" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-emerald-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {SITE_CONFIG.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-emerald-400">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-emerald-400">{SITE_CONFIG.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-500/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FitZone Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
