import type { users, profiles, membershipPlans, subscriptions, trainers, programs, exercises, workoutLogs, nutritionPlans, nutritionLogs, weightLogs, waterIntake, stepLogs, blogPosts, testimonials, contactMessages, faqItems, achievements, userAchievements, notifications, favorites, payments } from "@/lib/db/schema";
import type { InferSelectModel } from "drizzle-orm";

export type User = InferSelectModel<typeof users>;
export type Profile = InferSelectModel<typeof profiles>;
export type MembershipPlan = InferSelectModel<typeof membershipPlans>;
export type Subscription = InferSelectModel<typeof subscriptions>;
export type Trainer = InferSelectModel<typeof trainers>;
export type Program = InferSelectModel<typeof programs>;
export type Exercise = InferSelectModel<typeof exercises>;
export type WorkoutLog = InferSelectModel<typeof workoutLogs>;
export type NutritionPlan = InferSelectModel<typeof nutritionPlans>;
export type NutritionLog = InferSelectModel<typeof nutritionLogs>;
export type WeightLog = InferSelectModel<typeof weightLogs>;
export type WaterIntake = InferSelectModel<typeof waterIntake>;
export type StepLog = InferSelectModel<typeof stepLogs>;
export type BlogPost = InferSelectModel<typeof blogPosts>;
export type Testimonial = InferSelectModel<typeof testimonials>;
export type ContactMessage = InferSelectModel<typeof contactMessages>;
export type FaqItem = InferSelectModel<typeof faqItems>;
export type Achievement = InferSelectModel<typeof achievements>;
export type UserAchievement = InferSelectModel<typeof userAchievements>;
export type Notification = InferSelectModel<typeof notifications>;
export type Favorite = InferSelectModel<typeof favorites>;
export type Payment = InferSelectModel<typeof payments>;

export interface WorkoutSet {
  reps?: number;
  weight?: number;
  duration?: number;
  distance?: number;
}

export interface Meal {
  name: string;
  time: string;
  foods: { name: string; amount: string; calories: number; protein: number; carbs: number; fats: number }[];
}

export interface DashboardStats {
  totalWorkouts: number;
  currentStreak: number;
  totalCaloriesBurned: number;
  achievementsCount: number;
  activeDays: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface NutritionSummary {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  waterMl: number;
}

export interface WeeklyProgress {
  day: string;
  workouts: number;
  calories: number;
  steps: number;
  water: number;
}

declare module "next-auth" {
  interface User {
    role?: string;
    subscriptionPlan?: string | null;
  }
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string;
      subscriptionPlan?: string | null;
    };
  }
}
