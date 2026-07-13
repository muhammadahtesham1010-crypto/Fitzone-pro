export const SITE_CONFIG = {
  name: "FitZone Pro",
  description:
    "Premium fitness experience — transform your body, mind, and life with world-class training programs, nutrition plans, and expert guidance.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/images/og-default.jpg",
  slogan: "Transform Your Body, Transform Your Life",
  email: "hello@fitzonepro.com",
  phone: "+1 (555) 123-4567",
  address: "123 Fitness Blvd, New York, NY 10001",
  social: {
    instagram: "https://instagram.com/fitzonepro",
    twitter: "https://twitter.com/fitzonepro",
    facebook: "https://facebook.com/fitzonepro",
    youtube: "https://youtube.com/@fitzonepro",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/trainers", label: "Trainers" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const DASHBOARD_LINKS = [
  { href: "/dashboard", label: "Overview", icon: "LayoutDashboard" },
  { href: "/dashboard/progress", label: "Progress", icon: "TrendingUp" },
  { href: "/dashboard/workouts", label: "Workouts", icon: "Dumbbell" },
  { href: "/dashboard/nutrition", label: "Nutrition", icon: "Apple" },
  { href: "/dashboard/chat", label: "AI Chat", icon: "MessageCircle" },
  { href: "/dashboard/profile", label: "Profile", icon: "User" },
  { href: "/dashboard/billing", label: "Billing", icon: "CreditCard" },
  { href: "/dashboard/settings", label: "Settings", icon: "Settings" },
] as const;

export const ADMIN_LINKS = [
  { href: "/admin", label: "Dashboard", icon: "LayoutDashboard" },
  { href: "/admin/users", label: "Users", icon: "Users" },
  { href: "/admin/trainers", label: "Trainers", icon: "UserCheck" },
  { href: "/admin/programs", label: "Programs", icon: "Dumbbell" },
  { href: "/admin/nutrition-plans", label: "Nutrition Plans", icon: "Apple" },
  { href: "/admin/blog", label: "Blog Posts", icon: "FileText" },
  { href: "/admin/memberships", label: "Memberships", icon: "CreditCard" },
  { href: "/admin/payments", label: "Payments", icon: "DollarSign" },
  { href: "/admin/testimonials", label: "Testimonials", icon: "Star" },
  { href: "/admin/messages", label: "Messages", icon: "MessageSquare" },
] as const;

export const MUSCLE_GROUPS = [
  "Chest",
  "Back",
  "Shoulders",
  "Arms",
  "Legs",
  "Core",
  "Full Body",
  "Cardio",
] as const;

export const EQUIPMENT_TYPES = [
  "Barbell",
  "Dumbbell",
  "Kettlebell",
  "Cable",
  "Machine",
  "Bodyweight",
  "Resistance Band",
  "Box",
  "Medicine Ball",
] as const;

export const GOAL_OPTIONS = [
  { value: "lose_weight", label: "Lose Weight" },
  { value: "maintain", label: "Maintain" },
  { value: "build_muscle", label: "Build Muscle" },
  { value: "increase_endurance", label: "Increase Endurance" },
  { value: "general_fitness", label: "General Fitness" },
] as const;

export const ACTIVITY_LEVELS = [
  { value: "sedentary", label: "Sedentary", multiplier: 1.2 },
  { value: "light", label: "Lightly Active", multiplier: 1.375 },
  { value: "moderate", label: "Moderately Active", multiplier: 1.55 },
  { value: "active", label: "Very Active", multiplier: 1.725 },
  { value: "very_active", label: "Extremely Active", multiplier: 1.9 },
] as const;
