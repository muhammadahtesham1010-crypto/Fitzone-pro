interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledgeBase: KnowledgeEntry[] = [
  {
    keywords: ["chest", "bench press", "push-up", "pushup", "pec", "pectoral"],
    response: `## Best Chest Exercises

Here are the most effective chest exercises, ranked:

### 1. Barbell Bench Press
The gold standard for building chest mass and strength.
- **Sets & Reps:** 4×8–12
- **Pro tip:** Keep your shoulders retracted and drive through your heels

### 2. Incline Dumbbell Press
Targets the upper chest for a complete look.
- **Sets & Reps:** 3×10–15
- **Pro tip:** Set the bench to 30°, not 45° — more incline recruits too much front delt

### 3. Dips (Chest Variation)
Lean forward to emphasize the lower chest.
- **Sets & Reps:** 3×8–15
- **Pro tip:** Add weight once you can do 15+ clean reps

### 4. Push-Ups
The classic bodyweight chest builder.
- **Sets & Reps:** 3×failure
- **Pro tip:** Wrists in line with mid-chest, not shoulders

### Sample Chest Day
| Exercise | Sets | Reps |
|----------|------|------|
| Barbell Bench Press | 4 | 8–12 |
| Incline Dumbbell Press | 3 | 10–15 |
| Dips | 3 | 8–15 |
| Push-Ups | 2 | failure |

> 💡 Progressive overload is key. Add 2.5kg or 1 rep each week.`,
  },
  {
    keywords: ["running", "run", "jog", "cardio", "beginner run", "start running", "couch to 5k"],
    response: `## How to Start Running

Starting from zero? Follow this proven plan:

### Week 1-2: Walk-Run Intervals
| Interval | Repeat | Total Time |
|----------|--------|------------|
| Run 1 min → Walk 2 min | 7× | 21 min |
| Run 2 min → Walk 2 min | 5× | 20 min |

Do this **3× per week** with rest days in between.

### Essential Tips

- **Shoes matter:** Get fitted at a running store — your gait determines the right shoe
- **Form:** Land mid-foot under your hips, not on your heels
- **Breathe:** 2-2 rhythm (inhale 2 steps, exhale 2 steps)
- **Pace:** You should be able to hold a conversation

### Sample Beginner Schedule

| Day | Workout |
|-----|---------|
| Mon | Run intervals |
| Tue | Rest or light walk |
| Wed | Run intervals |
| Thu | Rest |
| Fri | Run intervals |
| Sat | Active recovery (walk 30m) |
| Sun | Rest |

### Progress Check
**Goal:** Run 30 min non-stop in 8 weeks.
**Milestone:** If you stick with it, you'll see major improvement in just 2 weeks.`,
  },
  {
    keywords: ["meal prep", "mealprep", "meal", "nutrition", "diet", "food", "eating", "healthy eating", "cook"],
    response: `## Meal Prep Tips

### 1. Pick a Prep Day
Sunday works best for most. Block 2 hours.

### 2. Cook in Batches
**Proteins:** Grill 6-8 chicken breasts or 2kg lean ground beef
**Carbs:** Cook a large batch of rice, quinoa, or sweet potatoes
**Veggies:** Roast a sheet pan of broccoli, bell peppers, and zucchini

### 3. Use the Right Containers
Glass containers (BPA-free) — stackable, microwave-safe, reusable.

### 4. Sample Meal Prep (Per Day)
| Meal | Food |
|------|------|
| **Breakfast** | Oats + protein powder + berries |
| **Lunch** | Chicken + rice + broccoli |
| **Dinner** | Salmon + sweet potato + greens |
| **Snack** | Greek yogurt + almonds or protein shake |

### 5. Keep It Simple
Don't overcomplicate. Pick 2-3 protein sources, 2-3 carb sources, and rotate.

> 🔑 **Consistency beats perfection.** Even 80% clean eating with meal prep will transform your results.`,
  },
  {
    keywords: ["squat", "squat form", "form fix", "squat depth", "lower body", "legs", "leg day"],
    response: `## Fix Your Squat Form

### Common Mistakes & Fixes

**❌ Mistake: Knees caving in**
→ **Fix:** Banded squats — place a mini band above your knees and push out

**❌ Mistake: Squat morning (chest drops)**
→ **Fix:** Keep your chest up and core braced; the bar path should be a straight vertical line

**❌ Mistake: Not hitting depth**
→ **Fix:** Hip crease below knee — practice goblet squats or squat to a box

**❌ Mistake: Heels lifting**
→ **Fix:** Mobility work — ankle dorsiflexion stretches before squatting

### Perfect Squat Checklist

| ✅ | Cue |
|----|-----|
| ✅ | Feet shoulder-width, toes slightly out |
| ✅ | Bar on traps (high bar) or rear delts (low bar) |
| ✅ | Big breath, brace core |
| ✅ | Hips back first, knees track over toes |
| ✅ | Below parallel at bottom |
| ✅ | Drive through heels, squeeze glutes at top |

### Mobility Routine (5 min before squatting)
1. Ankle rocks — 10 per side
2. World's greatest stretch — 5 per side
3. Deep squat hold — 30 seconds

> 💪 **Squat every session.** It's the single most important exercise for lower body strength.`,
  },
  {
    keywords: ["back", "pull-up", "pullup", "row", "lat", "lats", "deadlift", "posture"],
    response: `## Back Training Guide

### Best Back Exercises

| Exercise | Target | Sets×Reps |
|----------|--------|-----------|
| Deadlift | Full posterior chain | 3×5 |
| Pull-Ups | Lats (width) | 3×failure |
| Barbell Row | Mid-back (thickness) | 4×8–12 |
| Face Pull | Rear delts + posture | 3×15–20 |

### How to Build a Bigger Back
1. **Width from pull-ups** — wide grip, chest to bar
2. **Thickness from rows** — Pendlay rows or chest-supported rows
3. **Posture from face pulls** — don't skip these

### Deadlift Form Cues
- Bar over mid-foot
- Hips at the right height (not too low, not too high)
- Chest up, lats tight
- Drive through the floor, don't "pull"

> 🎯 "A strong back is a healthy back." Prioritize form over weight.`,
  },
  {
    keywords: ["shoulder", "shoulders", "delt", "delts", "overhead press", "ohp", "lateral raise", "front raise"],
    response: `## Shoulder Training

### Anatomy
The shoulder has **3 heads:** anterior (front), lateral (side), posterior (rear).

### Best Exercises Per Head

| Head | Best Exercise | Sets×Reps |
|------|--------------|-----------|
| **Front** | Overhead Press (barbell or dumbbell) | 4×8–12 |
| **Side** | Dumbbell Lateral Raise | 3×12–15 |
| **Rear** | Face Pull or Bent-Over Lateral Raise | 3×15–20 |

### Shoulder Health Tips
- **Don't skip rear delts** — imbalance causes rounded shoulders
- **Rotator cuff work** — external rotation with a band, 2× per week
- **Avoid behind-the-neck pressing** — puts the shoulder in a vulnerable position

### Sample Shoulder Day
| Exercise | Sets | Reps |
|----------|------|------|
| Seated Dumbbell Press | 4 | 8–12 |
| Lateral Raise | 3 | 12–15 |
| Front Raise | 3 | 12–15 |
| Face Pull | 3 | 15–20 |

> ⚡ Strong shoulders make every other lift safer and more powerful.`,
  },
  {
    keywords: ["arm", "arms", "bicep", "biceps", "tricep", "triceps", "curl", "skull crusher", "dips"],
    response: `## Arm Training

### Biceps (Push)

| Exercise | Sets×Reps |
|----------|-----------|
| Barbell Curl | 3×8–12 |
| Incline Dumbbell Curl | 3×10–15 |
| Hammer Curl | 3×10–15 |

### Triceps (Pull)

| Exercise | Sets×Reps |
|----------|-----------|
| Close-Grip Bench Press | 3×8–12 |
| Tricep Pushdown | 3×12–15 |
| Overhead Tricep Extension | 3×10–15 |

### Tips for Bigger Arms
- **Triceps make up ⅔ of arm mass** — prioritize them
- **Full range of motion** — stretch at the bottom, squeeze at the top
- **Don't ego lift** — controlled reps > swinging heavy weight
- **Frequency:** Hit arms 2× per week (one heavy, one pump-focused)

### 10-Minute Finisher
3 rounds, no rest between exercises, 60s rest between rounds:
- 10 curls → 10 pushdowns → 10 hammer curls → 10 overhead extensions`,
  },
  {
    keywords: ["abs", "ab", "core", "six pack", "belly fat", "stomach", "waist"],
    response: `## Six-Pack Abs Guide

### Reality Check
**Abs are made in the kitchen, not the gym.** You can do crunches all day — if your body fat isn't low enough, you won't see them.

### Body Fat % for Visible Abs

| Gender | Visible Abs |
|--------|-------------|
| Male | ~10–12% |
| Female | ~18–20% |

### Best Ab Exercises

| Exercise | Why It Works | Sets |
|----------|-------------|------|
| Plank | Full core stability | 3×60s |
| Hanging Leg Raise | Lower abs | 3×12–15 |
| Cable Crunch | Weighted resistance | 3×12–15 |
| Ab Wheel Rollout | Dynamic stability | 3×10–12 |
| Russian Twist | Obliques | 3×15–20 |

### Nutrition for Visible Abs
1. **Caloric deficit** — eat 300–500 calories below maintenance
2. **High protein** — 1.6–2.2g per kg of bodyweight
3. **Reduce processed foods** — focus on whole foods
4. **Don't cut fat too low** — 0.6–1g per kg for hormone health

> **Consistency over intensity.** A slightly imperfect diet you stick with beats a perfect one you abandon.`,
  },
  {
    keywords: ["weight loss", "fat loss", "lose weight", "cut", "cutting", "diet", "calorie deficit", "burn fat"],
    response: `## Weight Loss Guide

### The Science
**Caloric deficit** — burn more calories than you consume. There's no way around it.

### Step 1: Find Your Maintenance Calories
Multiply your bodyweight in kg × 30 (rough estimate).
*Example: 80kg × 30 = 2,400 calories/day = maintenance*

### Step 2: Set Your Deficit
- **Mild:** -300 cal (slow, sustainable)
- **Moderate:** -500 cal (0.5kg/week loss)
- **Aggressive:** -750 cal (0.7kg/week, harder to sustain)

### Step 3: Macros (Moderate Deficit)

| Macro | Per kg bodyweight | For 80kg person |
|-------|-------------------|-----------------|
| Protein | 2g/kg | 160g |
| Fat | 0.8g/kg | 64g |
| Carbs | Remainder | ~200g |

### Most Effective Fat Loss Exercises

| Exercise | Calories burned (30 min, 80kg) |
|----------|-------------------------------|
| Running (10km/h) | ~350 |
| Rowing | ~300 |
| Cycling | ~280 |
| Circuit Training | ~250 |
| Walking (brisk) | ~150 |

### Common Mistakes
- **Too large a deficit** — crashes metabolism, loses muscle
- **No protein** — lose muscle instead of fat
- **No strength training** — muscle keeps your metabolism high
- **Not sleeping enough** — poor sleep = more cravings

> 🎯 Aim to lose 0.5–1% of body weight per week. Faster than that is unsustainable.`,
  },
  {
    keywords: ["muscle", "build muscle", "bulk", "bulking", "mass", "gain", "strength", "hypertrophy", "grow"],
    response: `## Muscle Building Guide

### The Three Pillars

| Pillar | What It Means |
|--------|---------------|
| **Progressive Overload** | Add weight or reps every session |
| **Caloric Surplus** | Eat more than you burn (200–300 cal surplus) |
| **Protein Intake** | 1.6–2.2g per kg of bodyweight |

### Best Rep Ranges

| Goal | Reps | Sets | Rest |
|------|------|------|------|
| Strength | 1–5 | 3–5 | 3–5 min |
| Hypertrophy | 6–12 | 3–4 | 60–90s |
| Endurance | 15–20 | 2–3 | 30–60s |

For muscle growth, **6–12 reps is the sweet spot.**

### Sample Push/Pull/Legs Split

| Day | Workout |
|-----|---------|
| **Mon** | Push (chest, shoulders, triceps) |
| **Tue** | Pull (back, biceps, rear delts) |
| **Wed** | Legs (quads, hamstrings, glutes) |
| **Thu** | Rest |
| **Fri** | Push |
| **Sat** | Pull |
| **Sun** | Legs |

### Recovery
- Sleep **7–9 hours** per night
- Rest each muscle group **48h** before training again
- Deload week every **6–8 weeks** (reduce weight by 40%)

> 💪 **Progressive overload is non-negotiable.** If you're not adding weight or reps, you're not growing.`,
  },
  {
    keywords: ["protein", "supplement", "whey", "creatine", "pre workout", "preworkout", "bcaa", "vitamin"],
    response: `## Supplements Guide

### Essential (Actually Work)

| Supplement | What It Does | Dose |
|------------|-------------|------|
| **Protein Powder** | Hits daily protein goals easily | 1–2 scoops/day |
| **Creatine Monohydrate** | Strength + muscle gains, brain health | 5g/day |
| **Vitamin D** | Immune, bone health, mood | 2000–4000 IU/day |

### Helpful (Nice to Have)

| Supplement | What It Does |
|------------|-------------|
| **Caffeine/Pre-Workout** | Energy, focus before training |
| **Omega-3 (Fish Oil)** | Joint health, inflammation |
| **Magnesium** | Sleep, recovery, cramps |
| **Zinc** | Testosterone support, immune |

### Skip These

- ❌ **BCAAs** — useless if you eat enough protein
- ❌ **Fat Burners** — minimal effect, often unhealthy
- ❌ **Test Boosters** — don't meaningfully raise testosterone

### Supplement Stack Recommendation

**Morning:** Vitamin D + Omega-3
**Pre-Workout:** Caffeine (200mg) or pre-workout
**Post-Workout:** Protein shake + Creatine
**Before Bed:** Magnesium

> **Whole foods first.** Supplements fill gaps — they don't replace a good diet.`,
  },
  {
    keywords: ["stretch", "stretching", "mobility", "flexibility", "warm up", "warmup", "cool down", "cooldown"],
    response: `## Mobility & Flexibility Guide

### Pre-Workout (Dynamic Stretching)
Do these **before** training — they increase blood flow and prepare your body.

| Movement | Duration | When |
|----------|----------|------|
| Leg Swings | 10 per side | Before legs |
| Arm Circles | 10 each direction | Before upper body |
| Cat-Cow Stretch | 10 reps | Before any workout |
| World's Greatest Stretch | 5 per side | Full body prep |
| Glute Bridges | 10 reps | Hip activation |

### Post-Workout (Static Stretching)
Hold each stretch **20–30 seconds** after training.

| Muscle | Stretch |
|--------|---------|
| Hamstrings | Toe touch or seated forward fold |
| Quads | Standing quad stretch |
| Chest | Doorway pec stretch |
| Lats | Kneeling lat stretch |
| Hip Flexors | Half-kneeling hip flexor stretch |

### 5-Minute Daily Mobility Routine
Do this every day, even on rest days:

1. **Deep squat hold** — 60s
2. **Pigeon pose** — 45s each side
3. **Thoracic spine rotation** — 10 each side
4. **Ankle rocks** — 10 each side
5. **Shoulder dislocates with band** — 10 reps

> 🔑 **Mobility isn't just for injury prevention.** Better range of motion = more muscle activation = better gains.`,
  },
  {
    keywords: ["glute", "glutes", "booty", "butt", "hip thrust", "hipthrust", "glute bridge", "hip"],
    response: `## Glute Training Guide

### Best Glute Exercises

| Exercise | Target | Sets×Reps |
|----------|--------|-----------|
| Barbell Hip Thrust | Glute max (size) | 4×10–15 |
| Romanian Deadlift | Hamstrings + glutes | 3×8–12 |
| Bulgarian Split Squat | Glute + quad + balance | 3×10–12 |
| Cable Kickback | Glute isolation | 3×15–20 |
| Step-Ups | Glute activation | 3×10–12 |

### Activation Matters
Before heavy glute work, do this activation circuit:

1. **Glute bridge** — 15 reps, squeeze at top for 2s
2. **Bird dog** — 10 per side
3. **Lateral band walk** — 10 steps each direction
4. **Single-leg glute bridge** — 10 per side

### Tips for Better Glute Growth
- **Mind-muscle connection** — focus on squeezing the glute
- **Full range of motion** — especially at the bottom of hip thrusts
- **Progressive overload** — add weight each week
- **Frequency** — train glutes 2× per week

> 🍑 "Don't skip glute activation." If your glutes are asleep, your lower back takes over.`,
  },
  {
    keywords: ["hello", "hi", "hey", "what's up", "sup", "greeting"],
    response: `Hey there! 👋 I'm **FitBot**, your personal AI fitness assistant.

I can help you with:
- 💪 **Workout advice** — exercises, programs, form tips
- 🥗 **Nutrition** — meal prep, diet plans, supplements
- 🏃 **Cardio** — running, HIIT, fat loss
- 🧘 **Mobility** — stretching, flexibility, recovery
- ❓ **Any fitness question**

**What would you like to know today?`,
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    response: `You're welcome! 😊

Anything else I can help you with? Keep crushing your fitness goals! 💪`,
  },
  {
    keywords: ["motivation", "motivate", "keep going", "tired", "lazy", "no energy", "give up"],
    response: `## Staying Motivated

Here's the truth: **motivation is unreliable.** Discipline is what gets results.

### What to Do When You Don't Feel Like Training

1. **The 5-Minute Rule** — tell yourself you'll train for just 5 minutes. Almost always, you'll keep going.
2. **Lower the bar** — a "bad" workout is infinitely better than skipping
3. **Remember your "why"** — why did you start? Write it down and read it
4. **Don't break the chain** — consistency builds momentum

### Progress is Not Linear
You won't get stronger every session. You won't look better every week. But over months and years, the trend is unmistakable.

### Quick Reset
If you've missed a week (or a month):
- **Forgive yourself** — guilt doesn't help
- **Start today** — not Monday, not next month
- **One workout at a time** — focus only on what's in front of you

> **"The best time to start was yesterday. The second best time is now."** 🚀`,
  },
  {
    keywords: ["cardio", "hiit", "hiit", "liss", "conditioning", "endurance", "heart", "aerobic", "anaerobic"],
    response: `## Cardio Training Guide

### Types of Cardio

| Type | Intensity | Duration | Example |
|------|-----------|----------|---------|
| **LISS** (Low Intensity) | 60-70% max HR | 30-60 min | Brisk walk, incline walk, light cycling |
| **MISS** (Moderate) | 70-80% max HR | 20-40 min | Jogging, swimming, rowing |
| **HIIT** (High Intensity) | 80-95% max HR | 10-20 min | Sprints, burpees, jump rope |

### Which One Should You Do?

**LISS** — best for:
- Fat loss while preserving muscle
- Active recovery days
- Beginners getting started

**HIIT** — best for:
- Maximum fat burn in minimum time
- Improving cardiovascular fitness
- Breaking through plateaus

**MISS** — best for:
- Building an aerobic base
- Overall health and longevity
- Intermediate fitness levels

### Sample HIIT Session (15 min)
| Interval | Effort | Rest |
|----------|--------|------|
| Sprint | 30s | 30s walk |
| Sprint | 30s | 30s walk |
| Sprint | 30s | 30s walk |
| Sprint | 30s | 30s walk |
| Sprint | 30s | 30s walk |

**Pro tip:** Warm up 5 min first, cool down 5 min after.

### How Much Cardio?
- **Bulking:** 2-3 sessions/week of LISS (for heart health)
- **Cutting:** 3-5 sessions/week of mixed LISS + HIIT
- **General health:** 150 min moderate or 75 min vigorous per week

> ⚡ Don't overdo cardio while building muscle — it can interfere with recovery.`,
  },
  {
    keywords: ["sleep", "recovery", "rest", "recover", "overtrain", "over training", "deload", "rest day"],
    response: `## Recovery Guide

### Why Recovery Matters
Muscle grows **outside the gym**, not inside it. Training breaks down muscle — recovery builds it back stronger.

### The Recovery Pillars

| Pillar | What to Do |
|--------|-----------|
| **Sleep** | 7-9 hours. No compromise. |
| **Nutrition** | Enough protein + calories to repair tissue |
| **Hydration** | 3-4L water/day |
| **Stress Management** | High cortisol impedes recovery |
| **Active Recovery** | Light walking, stretching on rest days |

### Signs You Need More Recovery
- ❌ Performance declining session to session
- ❌ Persistent soreness beyond 72 hours
- ❌ Poor sleep quality
- ❌ Irritability or low mood
- ❌ Frequent illness

### Deload Week (Every 6-8 Weeks)
Drop volume by 40-50% while keeping intensity similar. This lets your CNS recover while maintaining technique.

### Quick Recovery Tips
1. **Protein before bed** — casein or Greek yogurt
2. **Cold shower or ice bath** — reduces inflammation
3. **Foam rolling** — 10 min on tight areas
4. **Light walk** — 20 min improves blood flow

> 🛌 **Sleep is your #1 recovery tool.** Nothing else comes close.`,
  },
  {
    keywords: ["calisthenics", "bodyweight", "home workout", "no equipment", "no gym", "at home"],
    response: `## Bodyweight / Home Workouts

### No Equipment Needed

These exercises require **zero equipment** and can be done anywhere:

### Push Exercises
| Exercise | Progression |
|----------|------------|
| Standard Push-Up | Incline → Knee → Full → Archer → One-arm |
| Close-Grip Push-Up | Diamond push-up targets triceps |
| Decline Push-Up | Feet elevated for upper chest |
| Pike Push-Up | Builds toward handstand push-up |

### Pull Exercises
| Exercise | Progression |
|----------|------------|
| Doorframe Row | Find a sturdy doorframe or table |
| Inverted Row | Under a sturdy table |
| Pull-Up | Negative → Banded → Strict (if you have a bar) |

### Leg Exercises
| Exercise | Sets×Reps |
|----------|-----------|
| Squat (bodyweight) | 3×20–30 |
| Bulgarian Split Squat | 3×12–15 per leg |
| Glute Bridge (single leg) | 3×15–20 |
| Lunges | 3×12–15 per leg |
| Step-Ups (chair) | 3×12–15 per leg |

### Sample Home Workout (20 min)
**3 rounds, 60s rest between rounds:**

| Exercise | Reps |
|----------|------|
| Push-Ups | 15 |
| Squats | 25 |
| Lunges | 10 per leg |
| Plank | 45s |
| Glute Bridges | 20 |
| Pike Push-Ups | 10 |

> 🏠 **Consistency > Intensity at home.** A simple workout you do daily beats a complex one you skip.`,
  },
  {
    keywords: ["beginner", "new", "start", "starting", "first time", "never worked out", "noob"],
    response: `## Beginner's Guide to Fitness

### Where to Start

If you've never worked out or are returning after a long break:

### Step 1: Set a Goal
- **Lose weight?** → Focus on diet + cardio
- **Build muscle?** → Focus on strength training + protein
- **Get fit overall?** → Mix of both

### Step 2: Pick a Simple Program

**Full Body - 3 Days Per Week**

| Day | Exercise | Sets×Reps |
|-----|----------|-----------|
| **A** | Squats, Push-Ups, Rows, Plank | 3×10-12 |
| **B** | Lunges, Overhead Press, Pull-ups (or lat pull-down), Glute Bridges | 3×10-12 |
| **C** | Deadlift (light), Bench Press, Bent-Over Rows, Hanging Leg Raises | 3×8-10 |

### Step 3: Form First
Learn proper form before adding weight. Watch videos, record yourself, or ask a trainer.

### Step 4: Consistency Schedule
| Frequency | Duration | Results |
|-----------|----------|---------|
| 3×/week | 30 min | Great |
| 4×/week | 45 min | Better |
| 5×/week | 60 min | Optimal |

### First Month Goals
✅ Show up 3×/week consistently
✅ Learn the basic movement patterns (squat, hinge, push, pull)
✅ Build the habit — the workout itself is secondary

> **"The hardest part is walking through the gym door."** Once you're there, the rest is easy. 🎯`,
  },
  {
    keywords: ["water", "hydration", "drink", "dehydrate", "thirsty"],
    response: `## Hydration Guide

### How Much Water?

| Activity Level | Water Per Day |
|----------------|---------------|
| Sedentary | 2-2.5L |
| Active (30-60 min) | 3-4L |
| Very Active (2h+) | 4-6L |

### Signs of Dehydration
- Dark urine
- Headache
- Fatigue
- Muscle cramps
- Poor performance in the gym

### Hydration Tips
1. **Drink consistently** — sipping throughout the day > chugging
2. **Electrolytes for long sessions** — add a pinch of salt or an electrolyte tab
3. **Water before meals** — helps with digestion and portion control
4. **Don't rely on thirst** — by the time you're thirsty, you're already dehydrated

> 💧 A 2% drop in body water can reduce performance by 10-20%. Stay hydrated.`,
  },
  {
    keywords: ["injury", "pain", "hurt", "sore", "injury prevention", "injury recovery", "hurt", "ache"],
    response: `## Injury Prevention & Management

### ⚠️ Medical Disclaimer
**I'm an AI fitness assistant, not a doctor.** If you're injured or in severe pain, please consult a healthcare professional.

### Common Gym Injuries & Prevention

**1. Lower Back Pain**
- **Cause:** Poor deadlift/squat form, weak core
- **Prevention:** Brace your core, keep a neutral spine, don't round your lower back

**2. Shoulder Pain**
- **Cause:** Imbalanced training (too much pushing, not enough pulling)
- **Prevention:** For every push exercise, do a pull. Include face pulls and rotator cuff work.

**3. Knee Pain**
- **Cause:** Knees caving inward, weak glutes
- **Prevention:** Banded lateral walks, glute activation before squatting, track knees over toes

**4. Wrist Pain**
- **Cause:** Poor bar placement, tight wrists
- **Prevention:** Wrist stretches, use wrist wraps for heavy pressing

### When to Train vs. Rest

| Pain Type | Should You Train? |
|-----------|-------------------|
| Muscle soreness (DOMS) | ✅ Yes, but go lighter |
| Joint pain | ❌ No — rest and diagnose |
| Sharp pain during movement | ❌ No — stop immediately |
| Mild tendon discomfort | ⚠️ Reduce load, shorten ROM |

### RICE Protocol (for acute injuries)
- **Rest** — stop using the injured area
- **Ice** — 20 min on, 20 min off
- **Compression** — wrap to reduce swelling
- **Elevation** — raise above heart level

> 🩺 Listen to your body. There's a difference between "good pain" (muscle burn) and "bad pain" (joint/tendon).`,
  },
];

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, "").trim();
}

function extractKeywords(text: string): string[] {
  return normalize(text).split(/\s+/).filter(Boolean);
}

function scoreEntry(entry: KnowledgeEntry, words: string[], query: string): number {
  let score = 0;
  const normQuery = normalize(query);

  for (const keyword of entry.keywords) {
    const normKeyword = normalize(keyword);
    if (normQuery.includes(normKeyword)) {
      score += normKeyword.length * 2;
    }
    for (const word of words) {
      if (word.length > 2 && normKeyword.includes(word)) {
        score += 1;
      }
    }
  }

  return score;
}

export function getFitnessResponse(userMessage: string): string {
  const words = extractKeywords(userMessage);
  const normQuery = normalize(userMessage);

  let bestScore = 0;
  let bestEntry: KnowledgeEntry | null = null;

  for (const entry of knowledgeBase) {
    const score = scoreEntry(entry, words, normQuery);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestEntry && bestScore >= 2) {
    return bestEntry.response;
  }

  return `I'm not sure I understood your question fully. I'm still learning! 🤖

Here's what I can help with:

- 💪 **Workouts** — exercises, programs, form tips
- 🥗 **Nutrition** — meal prep, diet, supplements
- 🏃 **Cardio** — running, HIIT, fat loss
- 💤 **Recovery** — sleep, stretching, mobility
- 🎯 **Motivation** — staying on track

Could you rephrase your question? For example: "Best chest exercises?", "How to start running?", or "Meal prep tips?"`;
}
