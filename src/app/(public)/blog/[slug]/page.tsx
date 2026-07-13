"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { toast } from "sonner";

const posts: Record<string, { title: string; content: string; date: string; readTime: string; category: string; image?: string; author?: string }> = {
  "science-of-muscle-growth": {
    title: "The Science of Muscle Growth",
    content: `Muscle growth, or hypertrophy, occurs when muscle fibers sustain damage or stress from exercise. The body repairs these fibers by fusing them together, increasing muscle mass and size.

There are three primary mechanisms of muscle growth:

1. Mechanical Tension - The force generated during muscle contraction. Heavy lifting creates high mechanical tension.

2. Metabolic Stress - The burn you feel during high-rep sets. This accumulation of metabolites signals growth.

3. Muscle Damage - Microscopic tears in muscle fibers from intense exercise.

To maximize muscle growth, focus on:
- Progressive overload (gradually increase weight)
- Adequate protein intake (1.6-2.2g per kg of bodyweight)
- Proper recovery (7-9 hours of sleep)
- Training each muscle group 2x per week

Remember: consistency beats intensity every time.`,
    category: "Training",
    date: "2024-01-15",
    readTime: "5 min",
    image: "💪",
  },
  "best-chest-exercises": {
    title: "10 Best Exercises for a Bigger Chest",
    content: `Building a strong, well-developed chest requires targeting all three regions: upper, middle, and lower chest.

Top 10 Chest Exercises:

1. Barbell Bench Press - The king of chest exercises
2. Incline Dumbbell Press - Upper chest focus
3. Decline Bench Press - Lower chest development
4. Dumbbell Flyes - Great stretch and contraction
5. Cable Crossovers - Constant tension
6. Push-Ups - Bodyweight classic
7. Chest Dips - Lower chest emphasis
8. Machine Chest Press - Controlled movement
9. Svend Press - Unique contraction
10. Pullover - Chest and lat stretch

For best results, include at least 2 pressing and 1 flye variation in your routine.`,
    category: "Training",
    date: "2024-01-10",
    readTime: "4 min",
    image: "🏋️",
  },
  "nutrition-myths-debunked": {
    title: "Nutrition Myths Debunked",
    content: `There's a lot of misinformation about fitness nutrition. Let's clear up the most common myths:

Myth 1: Carbs make you fat
Truth: Excess calories make you fat, not carbs. Carbs are your body's primary fuel source.

Myth 2: You need to eat every 2-3 hours
Truth: Meal frequency doesn't significantly impact metabolism. Eat when hungry, hit your macros.

Myth 3: Late night eating is bad
Truth: Total daily intake matters more than timing. A calorie is a calorie regardless of when eaten.

Myth 4: Detox diets work
Truth: Your liver and kidneys naturally detox your body. No special diet needed.

Myth 5: All protein is equal
Truth: Complete proteins (animal-based) contain all essential amino acids. Plant proteins may need combining.

Focus on whole foods, adequate protein, and consistent eating habits.`,
    category: "Nutrition",
    date: "2024-01-05",
    readTime: "6 min",
    image: "🍎",
  },
  "stay-motivated-fitness": {
    title: "How to Stay Motivated on Your Fitness Journey",
    content: `Staying motivated is one of the biggest challenges in any fitness journey. Here are practical tips to keep going:

1. Set SMART Goals - Specific, Measurable, Achievable, Relevant, Time-bound
2. Track Your Progress - Use FitZone Pro's tracking tools to see improvements
3. Find a Workout Partner - Accountability makes a huge difference
4. Mix It Up - Avoid boredom by varying your routine
5. Celebrate Small Wins - Every workout counts

Remember: motivation is what gets you started, but habit is what keeps you going.`,
    category: "Lifestyle",
    date: "2023-12-28",
    readTime: "4 min",
    image: "🔥",
  },
  "ultimate-deadlift-guide": {
    title: "The Ultimate Guide to Deadlifts",
    content: `The deadlift is arguably the most functional exercise you can do. It works nearly every muscle in your body.

Proper Deadlift Setup:

1. Bar over mid-foot
2. Bend down, grip the bar just outside your knees
3. Drop your hips, straighten your back
4. Drive through your heels
5. Lock out at the top

Common Mistakes:
- Rounding the lower back
- Jerking the bar off the floor
- Not bracing your core
- Letting the bar drift away

Start light, master the form, then add weight progressively.`,
    category: "Training",
    date: "2023-12-20",
    readTime: "7 min",
    image: "🏋️",
  },
  "meal-prep-101": {
    title: "Meal Prep 101: Save Time and Eat Healthy",
    content: `Meal prepping is the secret weapon of successful fitness enthusiasts. Here's how to master it:

Step 1: Plan Your Menu
- Choose 3-4 protein sources
- Pick 3-4 vegetable varieties
- Select 2-3 complex carb sources

Step 2: Shop Smart
- Buy in bulk for savings
- Stick to your list
- Shop perimeter of store

Step 3: Batch Cook
- Cook all proteins at once
- Chop vegetables in bulk
- Portion into containers

Step 4: Store Properly
- Use airtight containers
- Label with dates
- Freeze portions for later

A Sunday meal prep session of 2-3 hours saves you hours during the week.`,
    category: "Nutrition",
    date: "2023-12-15",
    readTime: "5 min",
    image: "📦",
  },
  "benefits-active-recovery": {
    title: "The Benefits of Active Recovery",
    content: `Active recovery involves performing low-intensity exercise after a hard workout. Unlike complete rest, it keeps blood flowing.

Benefits of Active Recovery:

1. Reduces muscle soreness
2. Improves blood circulation
3. Flushes out metabolic waste
4. Maintains mobility and flexibility
5. Accelerates overall recovery

Examples: Light walking, gentle yoga, swimming, cycling at low intensity, foam rolling.

Aim for 20-30 minutes of active recovery on your rest days.`,
    category: "Recovery",
    date: "2023-12-10",
    readTime: "3 min",
    image: "🧘",
  },
  "understanding-macros": {
    title: "Understanding Macros: Protein, Carbs, and Fats",
    content: `Macronutrients are the building blocks of nutrition. Here's what you need to know:

Protein (4 cal/g)
- Builds and repairs muscle
- Sources: Chicken, fish, eggs, tofu, legumes
- Aim: 1.6-2.2g per kg of bodyweight

Carbohydrates (4 cal/g)
- Primary energy source
- Sources: Rice, oats, potatoes, fruits
- Essential for workout performance

Fats (9 cal/g)
- Hormone production and health
- Sources: Avocado, nuts, olive oil, fatty fish
- Don't fear healthy fats

Track your macros using FitZone Pro's nutrition logging tools for optimal results.`,
    category: "Nutrition",
    date: "2023-12-05",
    readTime: "6 min",
    image: "📊",
  },
  "beginners-weight-training": {
    title: "Beginner's Guide to Weight Training",
    content: `Starting weight training can be intimidating, but it doesn't have to be.

The Fundamentals:

1. Start with compound exercises (squat, bench press, row, overhead press, deadlift)
2. Focus on form over weight
3. Follow a structured program (try FitZone Pro's Beginner Strength program)
4. Progressive overload: add small weight increases each week
5. Rest 48 hours between training the same muscle group

Sample Beginner Split:
- Day 1: Push (chest, shoulders, triceps)
- Day 2: Pull (back, biceps)
- Day 3: Legs (quads, hamstrings, glutes)
- Day 4: Rest
- Repeat

Consistency is key. Show up, do the work, and trust the process.`,
    category: "Training",
    date: "2023-11-28",
    readTime: "5 min",
    image: "🏋️",
  },
  "sleep-and-fitness": {
    title: "The Importance of Sleep for Fitness",
    content: `Sleep is often overlooked in fitness, but it's when your body actually grows and recovers.

Why Sleep Matters:

1. Muscle Repair - Growth hormone is primarily released during deep sleep
2. Hormone Regulation - Sleep balances cortisol and testosterone
3. Performance - Well-rested athletes perform significantly better
4. Recovery - Sleep reduces inflammation and muscle soreness
5. Mental Focus - Better sleep means better workouts

Tips for Better Sleep:
- Aim for 7-9 hours per night
- Keep a consistent sleep schedule
- Avoid screens 1 hour before bed
- Keep your room cool and dark
- Don't eat heavy meals close to bedtime

Sleep is not lazy - it's when the gains happen.`,
    category: "Recovery",
    date: "2023-11-22",
    readTime: "4 min",
    image: "😴",
  },
  "home-gym-budget": {
    title: "How to Build a Home Gym on a Budget",
    content: `Building a home gym doesn't have to cost thousands. Here's how to get started for under $500.

Essential Equipment:
1. Adjustable Dumbbells - $200-300
2. Resistance Bands - $20-30
3. Jump Rope - $10-15
4. Yoga Mat - $20-30
5. Pull-Up Bar - $30-50

Next Level ($500-1000):
6. Adjustable Bench - $150-250
7. Kettlebells - $50-100
8. Barbell and Weight Plates - $200-400

Pro Tips:
- Check Facebook Marketplace for used equipment
- Start with bodyweight exercises
- Add equipment as your strength grows
- Focus on compound movements

You don't need a fancy gym to get in great shape.`,
    category: "Lifestyle",
    date: "2023-11-15",
    readTime: "5 min",
    image: "🏠",
  },
  "interval-vs-steady-state": {
    title: "Interval Training vs Steady State Cardio",
    content: `Both HIIT and steady state cardio have their place in a fitness routine.

HIIT (High-Intensity Interval Training)
Pros: Burns more calories in less time, improves cardiovascular fitness, increases EPOC (afterburn effect)
Cons: Very demanding, higher injury risk, requires recovery time
Example: 30 sec sprint / 60 sec jog x 10 rounds

Steady State Cardio
Pros: Easier to recover from, sustainable for longer periods, good for active recovery
Cons: Takes more time, less afterburn effect
Example: 45 minute jog at a conversational pace

Recommendation: Do both! Use HIIT 2-3 times per week and steady state on other days.

The best cardio is the one you'll actually do consistently.`,
    category: "Training",
    date: "2023-11-08",
    readTime: "4 min",
    image: "🏃",
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">Post Not Found</h2>
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300">Back to Blog</Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-emerald-400">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <GlassCard>
          <div className="mb-6 text-5xl">{post.image}</div>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{post.title}</h1>
          
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-emerald-400"><Tag className="h-3 w-3" /> {post.category}</span>
            <button onClick={handleShare} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>

          <div className="prose prose-invert max-w-none">
            {post.content.split("\n\n").map((paragraph: string, i: number) => (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>
            ))}
          </div>
        </GlassCard>
      </div>
    </article>
  );
}
