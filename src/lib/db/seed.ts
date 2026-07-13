import "dotenv/config";
import { db } from "./index";
import {
  users,
  profiles,
  membershipPlans,
  trainers,
  programs,
  exercises,
  nutritionPlans,
  blogPosts,
  testimonials,
  faqItems,
  achievements,
} from "./schema";
import { hash } from "bcryptjs";

async function seed() {
  console.log("Seeding database...");

  // Demo User (needed for testimonials and blog post foreign keys)
  const [demoUser] = await db
    .insert(users)
    .values({
      name: "Demo User",
      email: "demo@fitzone.com",
      password: await hash("password123", 12),
      role: "admin",
    })
    .returning();

  await db.insert(profiles).values({
    userId: demoUser.id,
    fullName: "Demo User",
    goal: "general_fitness",
    activityLevel: "moderate",
  });

  // Membership Plans
  await db
    .insert(membershipPlans)
    .values([
      {
        name: "Free",
        description: "Get started with basic fitness tools and community access.",
        price: "0.00",
        interval: "month",
        features: [
          "Basic workout tracking (3 logs/week)",
          "Limited exercise library",
          "Community access",
          "Progress dashboard (limited)",
          "Ad-supported",
        ],
        sortOrder: 0,
        isActive: true,
      },
      {
        name: "Basic",
        description: "Get started with essential fitness tracking tools.",
        price: "19.99",
        interval: "month",
        features: [
          "Workout tracking",
          "Basic exercise library",
          "Progress dashboard",
          "Community access",
        ],
        sortOrder: 1,
        isActive: true,
      },
      {
        name: "Pro",
        description: "For dedicated athletes who want premium features.",
        price: "49.99",
        interval: "month",
        features: [
          "Everything in Basic",
          "Personalized workout plans",
          "Nutrition tracking & plans",
          "Advanced analytics",
          "Trainer messaging",
          "Priority support",
        ],
        sortOrder: 2,
        isActive: true,
      },
      {
        name: "Elite",
        description: "The complete experience with one-on-one coaching.",
        price: "99.99",
        interval: "month",
        features: [
          "Everything in Pro",
          "1-on-1 personal training",
          "Custom nutrition plans",
          "Weekly check-ins",
          "Video form analysis",
          "Exclusive content",
          "24/7 priority support",
        ],
        sortOrder: 3,
        isActive: true,
      },
    ])
    .returning();

  // Trainers
  const trainerData = await db
    .insert(trainers)
    .values([
      {
        name: "Alex Rivera",
        bio: "Certified strength and conditioning specialist with 10+ years of experience. Former professional athlete.",
        specialties: ["Strength Training", "Athletic Performance", "Rehabilitation"],
        certifications: ["CSCS", "NASM-CPT", "USAW"],
        experienceYears: 10,
        rating: "4.9",
        imageUrl: "/images/trainers/trainer-1.jpg",
      },
      {
        name: "Sarah Chen",
        bio: "Yoga and flexibility expert. Helping clients build mobility and mindfulness since 2015.",
        specialties: ["Yoga", "Flexibility", "Pilates", "Meditation"],
        certifications: ["RYT-500", "ACE-CPT"],
        experienceYears: 8,
        rating: "4.8",
        imageUrl: "/images/trainers/trainer-2.jpg",
      },
      {
        name: "Marcus Johnson",
        bio: "Nutrition coach and body transformation specialist. Transformed 500+ clients.",
        specialties: ["Weight Loss", "Nutrition", "Bodybuilding", "HIIT"],
        certifications: ["ISSN-CISSN", "NASM-CPT", "NSCA"],
        experienceYears: 12,
        rating: "4.9",
        imageUrl: "/images/trainers/trainer-3.jpg",
      },
      {
        name: "Emily Watson",
        bio: "Cardio and endurance coach. Marathon runner and triathlon competitor.",
        specialties: ["Cardio", "Endurance", "Running", "Swimming"],
        certifications: ["ACE-CPT", "USATF", "RRCA"],
        experienceYears: 7,
        rating: "4.7",
        imageUrl: "/images/trainers/trainer-4.jpg",
      },
      {
        name: "David Park",
        bio: "Martial arts and functional fitness coach. Black belt in Taekwondo.",
        specialties: ["Martial Arts", "Functional Training", "Core Strength"],
        certifications: ["NASM-CPT", "ACE-GF", "CrossFit L2"],
        experienceYears: 15,
        rating: "4.9",
        imageUrl: "/images/trainers/trainer-5.jpg",
      },
      {
        name: "Lisa Rodriguez",
        bio: "Pre and postnatal fitness specialist. Helping mothers stay fit and healthy.",
        specialties: ["Prenatal Fitness", "Postnatal Recovery", "Low Impact"],
        certifications: ["NASM-CPT", "Pregnancy Fitness Specialist"],
        experienceYears: 9,
        rating: "4.8",
        imageUrl: "/images/trainers/trainer-6.jpg",
      },
    ])
    .returning();

  // Exercises
  await db.insert(exercises).values([
    { name: "Barbell Bench Press", description: "Compound chest exercise", muscleGroup: "Chest", equipment: "Barbell", difficulty: "intermediate", instructions: ["Lie on bench", "Grip barbell", "Lower to chest", "Press up"] },
    { name: "Squat", description: "Compound lower body exercise", muscleGroup: "Legs", equipment: "Barbell", difficulty: "intermediate", instructions: ["Stand with bar on traps", "Bend knees", "Lower hips", "Stand up"] },
    { name: "Deadlift", description: "Full body compound exercise", muscleGroup: "Back", equipment: "Barbell", difficulty: "advanced", instructions: ["Hinge at hips", "Grip bar", "Drive through heels", "Stand tall"] },
    { name: "Pull-Up", description: "Upper body pulling exercise", muscleGroup: "Back", equipment: "Bodyweight", difficulty: "intermediate", instructions: ["Hang from bar", "Pull up", "Lower controlled"] },
    { name: "Push-Up", description: "Classic bodyweight exercise", muscleGroup: "Chest", equipment: "Bodyweight", difficulty: "beginner", instructions: ["Plank position", "Lower chest", "Push up"] },
    { name: "Overhead Press", description: "Shoulder strength builder", muscleGroup: "Shoulders", equipment: "Barbell", difficulty: "intermediate", instructions: ["Bar at shoulders", "Press overhead", "Lower controlled"] },
    { name: "Barbell Row", description: "Back thickness builder", muscleGroup: "Back", equipment: "Barbell", difficulty: "intermediate", instructions: ["Bend over", "Row bar to chest", "Lower"] },
    { name: "Lunges", description: "Unilateral leg exercise", muscleGroup: "Legs", equipment: "Dumbbell", difficulty: "beginner", instructions: ["Step forward", "Lower back knee", "Drive up"] },
    { name: "Plank", description: "Core stability exercise", muscleGroup: "Core", equipment: "Bodyweight", difficulty: "beginner", instructions: ["Forearm plank", "Hold position", "Brace core"] },
    { name: "Dumbbell Curl", description: "Biceps isolation exercise", muscleGroup: "Arms", equipment: "Dumbbell", difficulty: "beginner", instructions: ["Hold dumbbells", "Curl up", "Lower controlled"] },
    { name: "Tricep Pushdown", description: "Triceps isolation", muscleGroup: "Arms", equipment: "Cable", difficulty: "beginner", instructions: ["Grip cable", "Push down", "Slow return"] },
    { name: "Leg Press", description: "Machine leg exercise", muscleGroup: "Legs", equipment: "Machine", difficulty: "beginner", instructions: ["Seat position", "Press platform", "Control return"] },
    { name: "Lat Pulldown", description: "Back width exercise", muscleGroup: "Back", equipment: "Cable", difficulty: "beginner", instructions: ["Grip bar wide", "Pull to chest", "Slow release"] },
    { name: "Dumbbell Shoulder Fly", description: "Lateral delt exercise", muscleGroup: "Shoulders", equipment: "Dumbbell", difficulty: "beginner", instructions: ["Light weight", "Raise to sides", "Lower slow"] },
    { name: "Cable Crossover", description: "Chest isolation", muscleGroup: "Chest", equipment: "Cable", difficulty: "intermediate", instructions: ["Set cables high", "Pull down and across", "Squeeze chest"] },
    { name: "Romanian Deadlift", description: "Hamstring focus", muscleGroup: "Legs", equipment: "Barbell", difficulty: "intermediate", instructions: ["Hinge at hips", "Keep legs straight", "Feel hamstring stretch"] },
    { name: "Face Pull", description: "Rear delt health", muscleGroup: "Shoulders", equipment: "Cable", difficulty: "beginner", instructions: ["Set cable at face", "Pull to face", "External rotate"] },
    { name: "Leg Raise", description: "Lower ab exercise", muscleGroup: "Core", equipment: "Bodyweight", difficulty: "intermediate", instructions: ["Hang or lie", "Raise legs", "Lower controlled"] },
    { name: "Kettlebell Swing", description: "Hip hinge power", muscleGroup: "Core", equipment: "Kettlebell", difficulty: "intermediate", instructions: ["Hinge at hips", "Swing kettlebell", "Squeeze glutes"] },
    { name: "Box Jump", description: "Plyometric leg exercise", muscleGroup: "Legs", equipment: "Box", difficulty: "advanced", instructions: ["Stand facing box", "Jump up", "Step down"] },
  ]);

  // Programs
  await db.insert(programs).values([
    { title: "Beginner Strength Foundations", slug: "beginner-strength", description: "Build your foundation with compound lifts", category: "Strength", difficulty: "beginner", durationWeeks: 8, trainerId: trainerData[0].id, isPublished: true },
    { title: "Advanced Powerlifting", slug: "advanced-powerlifting", description: "Maximize your squat, bench, and deadlift", category: "Strength", difficulty: "advanced", durationWeeks: 12, trainerId: trainerData[0].id, isPublished: true },
    { title: "Fat Burning HIIT", slug: "fat-burning-hiit", description: "High intensity interval training for maximum fat loss", category: "Cardio", difficulty: "intermediate", durationWeeks: 6, trainerId: trainerData[2].id, isPublished: true },
    { title: "Yoga for Flexibility", slug: "yoga-flexibility", description: "Improve flexibility and mind-body connection", category: "Flexibility", difficulty: "beginner", durationWeeks: 4, trainerId: trainerData[1].id, isPublished: true },
    { title: "Muscle Building 101", slug: "muscle-building-101", description: "Science-based hypertrophy program", category: "Bodybuilding", difficulty: "intermediate", durationWeeks: 12, trainerId: trainerData[2].id, isPublished: true },
    { title: "Endurance Athlete", slug: "endurance-athlete", description: "Build cardiovascular endurance", category: "Cardio", difficulty: "advanced", durationWeeks: 8, trainerId: trainerData[3].id, isPublished: true },
    { title: "Core Crusher", slug: "core-crusher", description: "Six-pack abs and core strength", category: "Core", difficulty: "intermediate", durationWeeks: 6, trainerId: trainerData[4].id, isPublished: true },
    { title: "Home Workout Hero", slug: "home-workout-hero", description: "No equipment needed, full body workouts", category: "Bodyweight", difficulty: "beginner", durationWeeks: 4, trainerId: trainerData[5].id, isPublished: true },
  ]);

  // Nutrition Plans
  await db.insert(nutritionPlans).values([
    { title: "Muscle Building Meal Plan", slug: "muscle-building-meal-plan", description: "High protein meals for muscle growth", caloriesTarget: 3000, proteinG: 200, carbsG: 350, fatsG: 80, isPublished: true },
    { title: "Fat Loss Nutrition Plan", slug: "fat-loss-nutrition-plan", description: "Calorie-controlled meals for fat loss", caloriesTarget: 2000, proteinG: 180, carbsG: 150, fatsG: 60, isPublished: true },
    { title: "Vegan Fitness Plan", slug: "vegan-fitness-plan", description: "Plant-based nutrition for athletes", caloriesTarget: 2500, proteinG: 150, carbsG: 300, fatsG: 75, isPublished: true },
    { title: "Keto Training Diet", slug: "keto-training-diet", description: "Low carb high fat for ketosis", caloriesTarget: 2200, proteinG: 160, carbsG: 50, fatsG: 160, isPublished: true },
    { title: "Maintenance Nutrition", slug: "maintenance-nutrition", description: "Balanced nutrition for weight maintenance", caloriesTarget: 2500, proteinG: 170, carbsG: 250, fatsG: 70, isPublished: true },
  ]);

  // Blog Posts
  await db.insert(blogPosts).values([
    { title: "The Science of Muscle Growth", slug: "science-of-muscle-growth", excerpt: "Understanding hypertrophy and how to maximize gains", content: "Muscle growth, or hypertrophy, occurs when muscle fibers sustain damage or stress...", category: "Training", tags: ["muscle", "hypertrophy", "science"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "10 Best Exercises for a Bigger Chest", slug: "best-chest-exercises", excerpt: "Build an impressive chest with these proven exercises", content: "Building a strong, well-developed chest requires targeting all areas...", category: "Training", tags: ["chest", "exercises", "strength"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "Nutrition Myths Debunked", slug: "nutrition-myths-debunked", excerpt: "Separating fact from fiction in fitness nutrition", content: "There's a lot of misinformation about fitness nutrition...", category: "Nutrition", tags: ["nutrition", "myths", "diet"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "How to Stay Motivated on Your Fitness Journey", slug: "stay-motivated-fitness", excerpt: "Practical tips for maintaining long-term motivation", content: "Staying motivated is one of the biggest challenges in fitness...", category: "Lifestyle", tags: ["motivation", "mindset", "habits"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "The Ultimate Guide to Deadlifts", slug: "ultimate-deadlift-guide", excerpt: "Master the king of all exercises", content: "The deadlift is arguably the most functional exercise...", category: "Training", tags: ["deadlift", "strength", "technique"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "Meal Prep 101: Save Time and Eat Healthy", slug: "meal-prep-101", excerpt: "Master meal prep for consistent nutrition", content: "Meal prepping is the secret weapon of successful fitness enthusiasts...", category: "Nutrition", tags: ["meal prep", "nutrition", "recipes"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "The Benefits of Active Recovery", slug: "benefits-active-recovery", excerpt: "Why rest days should include light activity", content: "Active recovery involves performing low-intensity exercise...", category: "Recovery", tags: ["recovery", "rest", "mobility"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "Understanding Macros: Protein, Carbs, and Fats", slug: "understanding-macros", excerpt: "A complete guide to macronutrients", content: "Macronutrients are the building blocks of nutrition...", category: "Nutrition", tags: ["macros", "nutrition", "diet"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "Beginner's Guide to Weight Training", slug: "beginners-weight-training", excerpt: "Everything you need to know to start lifting", content: "Starting weight training can be intimidating...", category: "Training", tags: ["beginner", "weights", "guide"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "The Importance of Sleep for Fitness", slug: "sleep-and-fitness", excerpt: "Why recovery starts with quality sleep", content: "Sleep is often overlooked in fitness...", category: "Recovery", tags: ["sleep", "recovery", "health"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "How to Build a Home Gym on a Budget", slug: "home-gym-budget", excerpt: "Create an effective home gym without breaking the bank", content: "Building a home gym doesn't have to cost thousands...", category: "Lifestyle", tags: ["home gym", "budget", "equipment"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
    { title: "Interval Training vs Steady State Cardio", slug: "interval-vs-steady-state", excerpt: "Which cardio method is right for you?", content: "The debate between HIIT and steady state...", category: "Training", tags: ["cardio", "HIIT", "training"], authorId: demoUser.id, isPublished: true, publishedAt: new Date() },
  ]);

  // Testimonials
  await db.insert(testimonials).values([
    { userId: demoUser.id, content: "FitZone Pro completely transformed my approach to fitness. The personalized programs are incredible!", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "Lost 30 pounds in 3 months thanks to the nutrition plans and workout programs. Best decision ever!", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "The trainers are world-class. Sarah's yoga sessions have improved my flexibility tremendously.", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "Love the progress tracking features. Seeing my improvement over time keeps me motivated!", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "Best fitness platform I've ever used. The community support is amazing!", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "Finally found a program that adapts to my busy schedule. Thank you FitZone Pro!", rating: 5, isApproved: true },
    { userId: demoUser.id, content: "The nutrition tracking has been a game changer for my meal prep.", rating: 4, isApproved: true },
    { userId: demoUser.id, content: "I've tried many fitness apps, but none compare to the quality and depth of FitZone Pro.", rating: 5, isApproved: true },
  ]);

  // FAQ
  await db.insert(faqItems).values([
    { question: "How do I get started with FitZone Pro?", answer: "Simply sign up for a free account and complete your profile. You'll get immediate access to basic tools. Upgrade to a paid plan anytime.", category: "General", sortOrder: 1 },
    { question: "Can I cancel my membership anytime?", answer: "Yes, you can cancel your membership at any time. Your access will continue until the end of your billing period.", category: "Membership", sortOrder: 2 },
    { question: "Do you offer refunds?", answer: "We offer a 14-day money-back guarantee on all plans. If you're not satisfied, contact our support team.", category: "Membership", sortOrder: 3 },
    { question: "Are the workout programs suitable for beginners?", answer: "Absolutely! We have programs for all fitness levels, from complete beginners to advanced athletes.", category: "Training", sortOrder: 4 },
    { question: "Can I switch between membership plans?", answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.", category: "Membership", sortOrder: 5 },
    { question: "How do I track my progress?", answer: "Your dashboard includes charts for weight, body fat, workout volume, nutrition, water intake, and steps.", category: "Features", sortOrder: 6 },
    { question: "Is there a mobile app available?", answer: "FitZone Pro is a progressive web app (PWA), so you can install it on your phone directly from the browser.", category: "General", sortOrder: 7 },
    { question: "Can I work with a personal trainer?", answer: "Yes, our Elite plan includes 1-on-1 personal training sessions. Pro members get trainer messaging.", category: "Training", sortOrder: 8 },
    { question: "How do I contact support?", answer: "You can reach us through the contact form, email, or live chat. Elite members get 24/7 priority support.", category: "General", sortOrder: 9 },
    { question: "Is my data secure?", answer: "Yes, we use industry-standard encryption and security practices. Your data is never shared with third parties.", category: "General", sortOrder: 10 },
    { question: "Can I share my account with family?", answer: "Each membership is for individual use only. We offer family plans — contact sales for details.", category: "Membership", sortOrder: 11 },
    { question: "How are the nutrition plans customized?", answer: "Our nutrition plans are based on your goals, activity level, dietary preferences, and any restrictions.", category: "Nutrition", sortOrder: 12 },
  ]);

  // Achievements
  await db.insert(achievements).values([
    { name: "First Workout", description: "Complete your first workout", icon: "trophy", requiredValue: 1, achievementType: "workouts" },
    { name: "Dedicated Athlete", description: "Complete 10 workouts", icon: "zap", requiredValue: 10, achievementType: "workouts" },
    { name: "Fitness Warrior", description: "Complete 50 workouts", icon: "shield", requiredValue: 50, achievementType: "workouts" },
    { name: "Century Club", description: "Complete 100 workouts", icon: "star", requiredValue: 100, achievementType: "workouts" },
    { name: "Week Warrior", description: "7-day workout streak", icon: "flame", requiredValue: 7, achievementType: "streak" },
    { name: "Monthly Champion", description: "30-day workout streak", icon: "award", requiredValue: 30, achievementType: "streak" },
    { name: "Iron Will", description: "90-day workout streak", icon: "diamond", requiredValue: 90, achievementType: "streak" },
    { name: "Hydration Hero", description: "Log water intake for 7 days straight", icon: "droplets", requiredValue: 7, achievementType: "water" },
    { name: "Weight Tracker", description: "Log your weight for 30 days", icon: "scale", requiredValue: 30, achievementType: "weight" },
    { name: "Nutrition Master", description: "Track meals for 14 consecutive days", icon: "apple", requiredValue: 14, achievementType: "nutrition" },
  ]);

  console.log("Seed complete!");
}

seed().catch(console.error);
