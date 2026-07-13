export interface Exercise {
  exercise: string;
  sets: string;
  reps: string;
  notes: string;
}

export interface WeekDay {
  day: string;
  exercises: Exercise[];
}

export interface Week {
  week: number;
  focus: string;
  days: WeekDay[];
}

export interface Program {
  slug: string;
  title: string;
  desc: string;
  longDescription: string;
  category: string;
  difficulty: string;
  duration: string;
  rating: number;
  icon: string;
  color: string;
  goals: string[];
  benefits: string[];
  equipment: string[];
  prerequisites: string[];
  weeklySchedule: Week[];
}

export const programsData: Program[] = [
  {
    slug: "beginner-strength-foundations",
    title: "Beginner Strength Foundations",
    desc: "Build your foundation with compound lifts",
    longDescription:
      "This program is designed for complete beginners who want to learn proper form and build a solid strength base. You'll master the fundamental compound lifts — squats, presses, and pulls — while developing the discipline and consistency needed for long-term progress.\n\nEach week builds on the previous one, gradually increasing in intensity while reinforcing proper technique. By the end of 8 weeks, you'll have the confidence to handle a barbell and the strength to tackle intermediate programs.",
    category: "Strength",
    difficulty: "Beginner",
    duration: "8 weeks",
    rating: 4.9,
    icon: "🏋️",
    color: "from-emerald-500/20",
    goals: [
      "Master proper squat, press, and row form",
      "Build full-body strength foundation",
      "Develop workout consistency and routine",
      "Learn proper warm-up and cool-down protocols",
      "Achieve proper breathing and bracing technique",
    ],
    benefits: [
      "Structured progression from bodyweight to barbell",
      "Improved posture and movement quality",
      "Increased bone density and joint health",
      "Boosted metabolism and daily energy",
      "Reduced injury risk through proper form",
      "Confidence in the gym environment",
    ],
    equipment: [
      "Barbell and weight plates",
      "Adjustable dumbbells",
      "Flat bench",
      "Yoga mat",
      "Resistance bands",
    ],
    prerequisites: [
      "No prior lifting experience required",
      "Ability to perform a bodyweight squat",
      "Comfortable with basic mobility work",
      "No major injuries or medical restrictions",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation & Form",
        days: [
          {
            day: "Workout A",
            exercises: [
              { exercise: "Goblet Squat", sets: "3", reps: "10", notes: "Focus on depth and upright chest" },
              { exercise: "Push-ups", sets: "3", reps: "8", notes: "Full range of motion, knees if needed" },
              { exercise: "Plank", sets: "3", reps: "30s", notes: "Keep core braced, don't sag hips" },
              { exercise: "Band Pull-Apart", sets: "3", reps: "12", notes: "Squeeze shoulder blades together" },
            ],
          },
          {
            day: "Workout B",
            exercises: [
              { exercise: "Dumbbell Row", sets: "3", reps: "10", notes: "Flat back, squeeze at top" },
              { exercise: "Glute Bridge", sets: "3", reps: "12", notes: "Drive through heels, hold top 2s" },
              { exercise: "Dead Bug", sets: "3", reps: "8", notes: "Slow and controlled, lower back pressed down" },
              { exercise: "Farmer Walk", sets: "3", reps: "20s", notes: "Stay tall, engage lats" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Building Confidence",
        days: [
          {
            day: "Workout A",
            exercises: [
              { exercise: "Barbell Squat", sets: "3", reps: "8", notes: "Unrack with control, brace before descent" },
              { exercise: "Dumbbell Bench Press", sets: "3", reps: "8", notes: "Full ROM, elbows at 45°" },
              { exercise: "Side Plank", sets: "3", reps: "20s", notes: "Stack shoulders over elbows" },
              { exercise: "Face Pull", sets: "3", reps: "12", notes: "External rotation at the end" },
            ],
          },
          {
            day: "Workout B",
            exercises: [
              { exercise: "Lat Pulldown", sets: "3", reps: "10", notes: "Full stretch at top, chest up" },
              { exercise: "Walking Lunge", sets: "3", reps: "8", notes: "Front knee at 90°, torso upright" },
              { exercise: "Pallof Press", sets: "3", reps: "8", notes: "Resist rotation, slow and controlled" },
              { exercise: "Leg Press", sets: "3", reps: "12", notes: "Full ROM, don't lock knees" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Increasing Load",
        days: [
          {
            day: "Workout A",
            exercises: [
              { exercise: "Barbell Squat", sets: "3", reps: "8", notes: "Add 5-10 lbs from week 2" },
              { exercise: "Incline Dumbbell Press", sets: "3", reps: "8", notes: "30° incline, controlled descent" },
              { exercise: "Hanging Knee Raise", sets: "3", reps: "10", notes: "Don't swing, use core" },
              { exercise: "DB Lateral Raise", sets: "3", reps: "12", notes: "Slight bend in elbows, don't shrug" },
            ],
          },
          {
            day: "Workout B",
            exercises: [
              { exercise: "Barbell Row", sets: "3", reps: "8", notes: "45° hinge, pull to belly button" },
              { exercise: "Romanian Deadlift", sets: "3", reps: "10", notes: "Soft knees, push hips back" },
              { exercise: "Suitcase Carry", sets: "3", reps: "20s", notes: "Resist side bend, walk tall" },
              { exercise: "Cable Face Pull", sets: "3", reps: "12", notes: "High pulley, external rotation" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Consolidating Strength",
        days: [
          {
            day: "Workout A",
            exercises: [
              { exercise: "Barbell Squat", sets: "3", reps: "8", notes: "Work up to a challenging weight" },
              { exercise: "Flat Dumbbell Press", sets: "3", reps: "8", notes: "Control negative, explode up" },
              { exercise: "Ab Wheel Rollout", sets: "3", reps: "8", notes: "Start from knees, keep core tight" },
              { exercise: "Arnold Press", sets: "3", reps: "10", notes: "Full rotation, control at bottom" },
            ],
          },
          {
            day: "Workout B",
            exercises: [
              { exercise: "Deadlift", sets: "1", reps: "5", notes: "Learn the setup, bar over mid-foot" },
              { exercise: "Pull-ups (or Lat Pulldown)", sets: "3", reps: "5-8", notes: "Use bands if needed" },
              { exercise: "Bulgarian Split Squat", sets: "3", reps: "8", notes: "Rear foot elevated, front knee stable" },
              { exercise: "Plank with Shoulder Tap", sets: "3", reps: "8", notes: "Don't let hips rotate" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "advanced-powerlifting",
    title: "Advanced Powerlifting",
    desc: "Maximize your squat, bench, and deadlift",
    longDescription:
      "A 12-week powerlifting program designed for experienced lifters looking to maximize their squat, bench press, and deadlift. This program uses periodized training blocks — accumulation, intensification, peaking, and deload — to drive strength gains and prepare you for competition or a new PR.\n\nEach wave builds on the last, manipulating volume and intensity to avoid plateaus while managing fatigue. Accessory work targets weak points to bring up lagging lifts.",
    category: "Strength",
    difficulty: "Advanced",
    duration: "12 weeks",
    rating: 4.8,
    icon: "💪",
    color: "from-red-500/20",
    goals: [
      "Increase 1RM squat by 5-10%",
      "Increase 1RM bench press by 5-10%",
      "Increase 1RM deadlift by 5-10%",
      "Improve technique under heavy loads",
      "Master meet-day preparation and peaking",
    ],
    benefits: [
      "Periodized programming prevents plateaus",
      "Specific weak-point training",
      "Competition-ready peaking protocol",
      "Fatigue management strategies",
      "Advanced bracing and belt techniques",
      "Customizable for equipped or raw lifting",
    ],
    equipment: [
      "Barbell and competition plates",
      "Squat rack with safety bars",
      "Competition bench",
      "Deadlift platform",
      "Lifting belt, wrist wraps, knee sleeves",
      "Chalk and ammonia (optional)",
    ],
    prerequisites: [
      "At least 1 year of consistent powerlifting training",
      "Current 1RM squat ≥ 1.5x bodyweight",
      "Current 1RM bench ≥ 1.2x bodyweight",
      "Current 1RM deadlift ≥ 2x bodyweight",
      "No recent injuries or medical restrictions",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Accumulation – Volume Phase",
        days: [
          {
            day: "Squat Day",
            exercises: [
              { exercise: "Barbell Squat", sets: "4", reps: "8", notes: "70% of 1RM, controlled tempo" },
              { exercise: "Pause Squat", sets: "3", reps: "5", notes: "3s pause at bottom" },
              { exercise: "Leg Press", sets: "4", reps: "10", notes: "Hypertrophy stimulus" },
              { exercise: "Walking Lunge", sets: "3", reps: "10", notes: "Dumbbells at sides" },
              { exercise: "Cable Crunch", sets: "3", reps: "15", notes: "Slow and controlled" },
            ],
          },
          {
            day: "Bench Day",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "8", notes: "70% of 1RM" },
              { exercise: "Spoto Press", sets: "3", reps: "6", notes: "1s pause 1 inch above chest" },
              { exercise: "Dumbbell Incline Press", sets: "4", reps: "10", notes: "30° incline" },
              { exercise: "Barbell Row", sets: "4", reps: "10", notes: "Support chest with bench" },
              { exercise: "Tricep Pushdown", sets: "3", reps: "15", notes: "Full extension" },
            ],
          },
          {
            day: "Deadlift Day",
            exercises: [
              { exercise: "Conventional Deadlift", sets: "4", reps: "6", notes: "70% of 1RM" },
              { exercise: "Deficit Deadlift", sets: "3", reps: "5", notes: "Stand on 1-2 inch plate" },
              { exercise: "Barbell Row", sets: "4", reps: "8", notes: "Pendlay row style" },
              { exercise: "GHD Hyperextension", sets: "3", reps: "10", notes: "Hands behind head" },
              { exercise: "Plate Pinch", sets: "3", reps: "30s", notes: "Grip strength finisher" },
            ],
          },
          {
            day: "Accessory / Recovery",
            exercises: [
              { exercise: "Face Pull", sets: "3", reps: "15", notes: "High priority for shoulder health" },
              { exercise: "Lat Pulldown", sets: "3", reps: "12", notes: "Wide grip" },
              { exercise: "Dumbbell Curl", sets: "3", reps: "12", notes: "Supinated grip" },
              { exercise: "Foam Rolling", sets: "1", reps: "10min", notes: "Full body" },
              { exercise: "Stretching", sets: "1", reps: "10min", notes: "Hip flexors, hamstrings, chest" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Intensity Building",
        days: [
          {
            day: "Squat Day",
            exercises: [
              { exercise: "Barbell Squat", sets: "4", reps: "6", notes: "75% of 1RM" },
              { exercise: "Front Squat", sets: "3", reps: "5", notes: "Builds quad strength and upright position" },
              { exercise: "Bulgarian Split Squat", sets: "3", reps: "8", notes: "Unilateral stability" },
              { exercise: "Leg Curl", sets: "4", reps: "10", notes: "Hamstring health" },
            ],
          },
          {
            day: "Bench Day",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "6", notes: "75% of 1RM" },
              { exercise: "Close-Grip Bench", sets: "3", reps: "6", notes: "Tricep focus, hands shoulder width" },
              { exercise: "Dumbbell Flye", sets: "3", reps: "10", notes: "Stretch at bottom" },
              { exercise: "DB Lateral Raise", sets: "3", reps: "12", notes: "Control negative" },
            ],
          },
          {
            day: "Deadlift Day",
            exercises: [
              { exercise: "Conventional Deadlift", sets: "4", reps: "5", notes: "75% of 1RM" },
              { exercise: "Rack Pull (above knee)", sets: "3", reps: "5", notes: "Heavier weight, overload top range" },
              { exercise: "Good Morning", sets: "3", reps: "8", notes: "Posterior chain builder" },
              { exercise: "Farmer Walk", sets: "3", reps: "30s", notes: "Heavy as possible" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Peaking Block",
        days: [
          {
            day: "Squat Day",
            exercises: [
              { exercise: "Barbell Squat", sets: "4", reps: "4", notes: "80% of 1RM" },
              { exercise: "Pause Squat", sets: "3", reps: "3", notes: "2s pause at bottom, heavier" },
              { exercise: "Leg Press", sets: "3", reps: "8", notes: "Heavy" },
              { exercise: "Reverse Hyper", sets: "3", reps: "10", notes: "Spinal decompression" },
            ],
          },
          {
            day: "Bench Day",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "4", notes: "80% of 1RM" },
              { exercise: "Incline Bench Press", sets: "3", reps: "5", notes: "Barbell or dumbbell" },
              { exercise: "Dumbbell Row", sets: "4", reps: "8", notes: "Heavy" },
              { exercise: "Tricep Extension", sets: "3", reps: "10", notes: "Overhead or lying" },
            ],
          },
          {
            day: "Deadlift Day",
            exercises: [
              { exercise: "Conventional Deadlift", sets: "3", reps: "4", notes: "80% of 1RM" },
              { exercise: "Deadlift from Deficit", sets: "2", reps: "3", notes: "Explosive off the floor" },
              { exercise: "Barbell Hip Thrust", sets: "3", reps: "8", notes: "Glute strength for lockout" },
              { exercise: "Pull-ups", sets: "3", reps: "5-8", notes: "Strict, weighted if possible" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload / Recovery",
        days: [
          {
            day: "Squat Day",
            exercises: [
              { exercise: "Barbell Squat", sets: "3", reps: "5", notes: "60% of 1RM, easy" },
              { exercise: "Mobility Work", sets: "1", reps: "15min", notes: "Focus on ankles and hips" },
            ],
          },
          {
            day: "Bench Day",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "3", reps: "5", notes: "60% of 1RM" },
              { exercise: "Face Pull", sets: "3", reps: "15", notes: "Shoulder prehab" },
            ],
          },
          {
            day: "Deadlift Day",
            exercises: [
              { exercise: "Conventional Deadlift", sets: "2", reps: "5", notes: "60% of 1RM, no strain" },
              { exercise: "Light Stretching", sets: "1", reps: "15min", notes: "Full body recovery focus" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "fat-burning-hiit",
    title: "Fat Burning HIIT",
    desc: "High intensity interval training for maximum fat loss",
    longDescription:
      "This 6-week HIIT program is designed to torch fat, improve cardiovascular fitness, and boost your metabolism. Each session alternates between high-intensity work intervals and active recovery periods, creating the afterburn effect (EPOC) that keeps you burning calories for hours post-workout.\n\nWorkouts range from 20-30 minutes and require no complex equipment. The progressive overload ensures you're constantly challenged while giving your body adequate recovery between sessions.",
    category: "Cardio",
    difficulty: "Intermediate",
    duration: "6 weeks",
    rating: 4.7,
    icon: "🔥",
    color: "from-orange-500/20",
    goals: [
      "Accelerate fat loss and improve body composition",
      "Boost cardiovascular endurance and VO2 max",
      "Increase metabolic rate and EPOC effect",
      "Build explosive power and agility",
      "Improve insulin sensitivity",
    ],
    benefits: [
      "Short, effective workouts (20-30 min)",
      "No gym equipment required",
      "Burns calories for 24+ hours after workout",
      "Improves heart health and lung capacity",
      "Can be done at home or on the road",
      "Keeps metabolism elevated throughout the day",
    ],
    equipment: [
      "Yoga mat",
      "Jump rope (optional)",
      "Timer or stopwatch",
      "Water bottle",
      "Comfortable training shoes",
    ],
    prerequisites: [
      "Ability to jog for 5 minutes without stopping",
      "No heart conditions or joint injuries",
      "Comfortable with bodyweight exercises",
      "At least basic fitness level recommended",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation Intervals",
        days: [
          {
            day: "HIIT A – Full Body",
            exercises: [
              { exercise: "Jumping Jacks", sets: "6", reps: "30s work / 30s rest", notes: "Full range, land softly" },
              { exercise: "Bodyweight Squats", sets: "6", reps: "30s work / 30s rest", notes: "Fast but controlled" },
              { exercise: "Incline Push-ups", sets: "6", reps: "30s work / 30s rest", notes: "On bench or stairs" },
              { exercise: "High Knees", sets: "6", reps: "30s work / 30s rest", notes: "Drive knees to waist height" },
              { exercise: "Plank Shoulder Taps", sets: "6", reps: "30s work / 30s rest", notes: "Alternate hands" },
            ],
          },
          {
            day: "HIIT B – Cardio Blast",
            exercises: [
              { exercise: "Butt Kicks", sets: "6", reps: "30s work / 30s rest", notes: "Heels to glutes" },
              { exercise: "Mountain Climbers", sets: "6", reps: "30s work / 30s rest", notes: "Keep hips low" },
              { exercise: "Jump Squats", sets: "6", reps: "30s work / 30s rest", notes: "Land softly" },
              { exercise: "Bicycle Crunches", sets: "6", reps: "30s work / 30s rest", notes: "Elbow to opposite knee" },
              { exercise: "Burpees (no push-up)", sets: "6", reps: "30s work / 30s rest", notes: "Step back if needed" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Increasing Intensity",
        days: [
          {
            day: "HIIT A – Power Intervals",
            exercises: [
              { exercise: "Jump Squats", sets: "7", reps: "35s work / 25s rest", notes: "Explosive up, soft landing" },
              { exercise: "Push-ups", sets: "7", reps: "35s work / 25s rest", notes: "Full ROM, modify if needed" },
              { exercise: "Lateral Shuffles", sets: "7", reps: "35s work / 25s rest", notes: "Quick feet, low hips" },
              { exercise: "V-Ups", sets: "7", reps: "35s work / 25s rest", notes: "Reach for toes" },
              { exercise: "Skaters", sets: "7", reps: "35s work / 25s rest", notes: "Explosive lateral bounds" },
            ],
          },
          {
            day: "HIIT B – Cardio Endurance",
            exercises: [
              { exercise: "Burpees with Push-up", sets: "7", reps: "35s work / 25s rest", notes: "Full burpee" },
              { exercise: "Box Jumps (low box)", sets: "7", reps: "35s work / 25s rest", notes: "Step down, don't jump" },
              { exercise: "Bear Crawl", sets: "7", reps: "35s work / 25s rest", notes: "Forward and backward" },
              { exercise: "Jump Lunges", sets: "7", reps: "35s work / 25s rest", notes: "Switch mid-air" },
              { exercise: "Plank Jacks", sets: "7", reps: "35s work / 25s rest", notes: "Feet in and out" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Endurance & Power",
        days: [
          {
            day: "HIIT A – Conditioning",
            exercises: [
              { exercise: "Kettlebell Swings", sets: "8", reps: "40s work / 20s rest", notes: "Hip drive, not arms" },
              { exercise: "Battle Ropes (or Slams)", sets: "8", reps: "40s work / 20s rest", notes: "Max effort waves" },
              { exercise: "Tuck Jumps", sets: "8", reps: "40s work / 20s rest", notes: "Knees to chest" },
              { exercise: "Dumbbell Thrusters", sets: "8", reps: "40s work / 20s rest", notes: "Squat to press" },
              { exercise: "Russian Twists", sets: "8", reps: "40s work / 20s rest", notes: "Keep feet up" },
            ],
          },
          {
            day: "HIIT B – Tabata Style",
            exercises: [
              { exercise: "Jump Rope (or simulated)", sets: "8", reps: "20s work / 10s rest", notes: "Double unders if possible" },
              { exercise: "Sprint in Place", sets: "8", reps: "20s work / 10s rest", notes: "Max effort, drive arms" },
              { exercise: "Dumbbell Snatch", sets: "8", reps: "20s work / 10s rest", notes: "Light weight, explosive" },
              { exercise: "Lunges with Knee Drive", sets: "8", reps: "20s work / 10s rest", notes: "Alternating legs" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Peak Week",
        days: [
          {
            day: "HIIT A – Max Effort",
            exercises: [
              { exercise: "Burpee Box Jumps", sets: "8", reps: "45s work / 15s rest", notes: "No breaks, go hard" },
              { exercise: "Thrusters (heavy)", sets: "8", reps: "45s work / 15s rest", notes: "Push through fatigue" },
              { exercise: "Mountain Climbers (speed)", sets: "8", reps: "45s work / 15s rest", notes: "Feet as fast as possible" },
              { exercise: "Jump Lunge Switch", sets: "8", reps: "45s work / 15s rest", notes: "Explosive each rep" },
              { exercise: "Hollow Body Hold", sets: "8", reps: "45s work / 15s rest", notes: "Core on fire" },
            ],
          },
          {
            day: "HIIT B – Final Push",
            exercises: [
              { exercise: "800m Run (or 5 min hard cardio)", sets: "1", reps: "For time", notes: "Start strong, finish harder" },
              { exercise: "AMRAP 10 min: 10 Burpees, 15 Squats, 20 Lunges", sets: "1", reps: "Max rounds", notes: "Track your score" },
              { exercise: "Finisher: 100 Jumping Jacks", sets: "1", reps: "For time", notes: "No stopping" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "yoga-for-flexibility",
    title: "Yoga for Flexibility",
    desc: "Improve flexibility and mindfulness",
    longDescription:
      "A 4-week yoga program designed to increase flexibility, improve mobility, and cultivate mindfulness. Each session combines breath work (pranayama) with a series of poses (asanas) that target major muscle groups while calming the nervous system.\n\nWhether you're a complete beginner or an experienced yogi looking to deepen your practice, this program offers modifications for every level. You'll feel more open, relaxed, and connected to your body after each session.",
    category: "Flexibility",
    difficulty: "Beginner",
    duration: "4 weeks",
    rating: 4.9,
    icon: "🧘",
    color: "from-purple-500/20",
    goals: [
      "Improve overall flexibility and range of motion",
      "Reduce muscle tension and stress",
      "Develop body awareness and mindfulness",
      "Build core strength through dynamic poses",
      "Establish a consistent yoga practice",
    ],
    benefits: [
      "Reduced risk of injury during other activities",
      "Better posture and spinal health",
      "Improved breathing and lung capacity",
      "Enhanced athletic recovery",
      "Stress reduction and mental clarity",
      "Better sleep quality",
    ],
    equipment: [
      "Yoga mat (non-slip)",
      "Yoga block (or thick book)",
      "Yoga strap (or belt/towel)",
      "Comfortable clothing",
      "Quiet space",
    ],
    prerequisites: [
      "No yoga experience needed",
      "Ability to sit on the floor comfortably",
      "No serious back or joint injuries",
      "Open mind and patience",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundations & Breath",
        days: [
          {
            day: "Session A – Sun Salutations",
            exercises: [
              { exercise: "Mountain Pose (Tadasana)", sets: "3", reps: "5 breaths", notes: "Ground through all four corners of feet" },
              { exercise: "Upward Salute (Urdhva Hastasana)", sets: "3", reps: "5 breaths", notes: "Reach up, lengthen spine" },
              { exercise: "Standing Forward Fold (Uttanasana)", sets: "3", reps: "5 breaths", notes: "Bend knees if needed" },
              { exercise: "Halfway Lift (Ardha Uttanasana)", sets: "3", reps: "5 breaths", notes: "Flat back, look forward" },
              { exercise: "Cat-Cow Stretch", sets: "5", reps: "10 slow cycles", notes: "Move with breath" },
              { exercise: "Child's Pose (Balasana)", sets: "1", reps: "2 min", notes: "Relax, breathe deeply" },
            ],
          },
          {
            day: "Session B – Hip Openers",
            exercises: [
              { exercise: "Happy Baby (Ananda Balasana)", sets: "1", reps: "2 min", notes: "Rock gently side to side" },
              { exercise: "Pigeon Pose (Eka Pada Rajakapotasana)", sets: "2", reps: "1 min each side", notes: "Use block under hip if tight" },
              { exercise: "Lizard Pose", sets: "2", reps: "1 min each side", notes: "Stay low on elbows" },
              { exercise: "Butterfly (Baddha Konasana)", sets: "1", reps: "2 min", notes: "Flutter knees gently" },
              { exercise: "Seated Forward Fold (Paschimottanasana)", sets: "2", reps: "1 min", notes: "Reach for toes, don't force" },
            ],
          },
          {
            day: "Session C – Gentle Flow",
            exercises: [
              { exercise: "Downward-Facing Dog (Adho Mukha Svanasana)", sets: "3", reps: "1 min", notes: "Pedal your feet" },
              { exercise: "Warrior I (Virabhadrasana I)", sets: "3", reps: "5 breaths each side", notes: "Square hips forward" },
              { exercise: "Triangle Pose (Trikonasana)", sets: "3", reps: "5 breaths each side", notes: "Reach through fingertips" },
              { exercise: "Seated Twist (Ardha Matsyendrasana)", sets: "3", reps: "5 breaths each side", notes: "Lengthen on inhale, twist on exhale" },
              { exercise: "Savasana (Corpse Pose)", sets: "1", reps: "5 min", notes: "Complete relaxation" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Deepening the Practice",
        days: [
          {
            day: "Session A – Heart Openers",
            exercises: [
              { exercise: "Cobra Pose (Bhujangasana)", sets: "3", reps: "5 breaths", notes: "Low cobra, use back muscles" },
              { exercise: "Sphinx Pose", sets: "2", reps: "1 min", notes: "Elbows under shoulders" },
              { exercise: "Bridge Pose (Setu Bandhasana)", sets: "3", reps: "5 breaths", notes: "Squeeze glutes at top" },
              { exercise: "Wheel Pose (Urdhva Dhanurasana)", sets: "2", reps: "30s", notes: "Warm up well, optional" },
              { exercise: "Fish Pose (Matsyasana)", sets: "2", reps: "1 min", notes: "Chest opens, crown of head on mat" },
            ],
          },
          {
            day: "Session B – Hamstring Focus",
            exercises: [
              { exercise: "Standing Forward Fold", sets: "3", reps: "1 min", notes: "Interlace elbows, hang heavy" },
              { exercise: "Pyramid Pose (Parsvottanasana)", sets: "2", reps: "1 min each side", notes: "Hinge at hips, not back" },
              { exercise: "Wide-Legged Forward Fold (Prasarita Padottanasana)", sets: "3", reps: "1 min", notes: "Hands on shoulders width" },
              { exercise: "Monkey Pose (Hanumanasana)", sets: "2", reps: "30s each side", notes: "Use blocks under hands" },
              { exercise: "Reclined Hand-to-Big-Toe (Supta Padangusthasana)", sets: "2", reps: "1 min each side", notes: "Use strap if needed" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Balance & Flow",
        days: [
          {
            day: "Session A – Standing Balance",
            exercises: [
              { exercise: "Tree Pose (Vrksasana)", sets: "2", reps: "1 min each side", notes: "Foot on calf or thigh, not knee" },
              { exercise: "Warrior III (Virabhadrasana III)", sets: "2", reps: "5 breaths each side", notes: "Arms forward, leg back" },
              { exercise: "Eagle Pose (Garudasana)", sets: "2", reps: "5 breaths each side", notes: "Wrap arms and legs" },
              { exercise: "Half Moon Pose (Ardha Chandrasana)", sets: "2", reps: "5 breaths each side", notes: "Use block under bottom hand" },
              { exercise: "Dancer Pose (Natarajasana)", sets: "2", reps: "5 breaths each side", notes: "Kick back into hand" },
            ],
          },
          {
            day: "Session B – Vinyasa Flow",
            exercises: [
              { exercise: "Sun Salutation A", sets: "5", reps: "Flow through", notes: "One breath per movement" },
              { exercise: "Sun Salutation B", sets: "3", reps: "Flow through", notes: "Add Warrior I and Chair Pose" },
              { exercise: "Standing Splits (Urdhva Prasarita Eka Padasana)", sets: "2", reps: "30s each side", notes: "Warm hamstrings first" },
              { exercise: "Pigeon Sequence", sets: "2", reps: "1 min each side", notes: "Lay forward over front leg" },
              { exercise: "Savasana", sets: "1", reps: "10 min", notes: "Full relaxation, use blanket" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Integration & Mastery",
        days: [
          {
            day: "Session A – Peak Poses",
            exercises: [
              { exercise: "Headstand Prep (Sirsasana)", sets: "3", reps: "30s", notes: "Against wall, don't force" },
              { exercise: "Shoulderstand (Sarvangasana)", sets: "1", reps: "1 min", notes: "Support lower back with hands" },
              { exercise: "Plow Pose (Halasana)", sets: "1", reps: "1 min", notes: "Toes to floor behind head" },
              { exercise: "Ear Pressure Pose (Karnapidasana)", sets: "1", reps: "30s", notes: "Knees by ears" },
              { exercise: "Savasana", sets: "1", reps: "10 min", notes: "Integrate the practice" },
            ],
          },
          {
            day: "Session B – Full Practice Flow",
            exercises: [
              { exercise: "Full Sun Salutation Series", sets: "10", reps: "Flow", notes: "Connect breath and movement" },
              { exercise: "Warrior Flow (I, II, III sequence)", sets: "2", reps: "Each side", notes: "Transitions between poses" },
              { exercise: "Backbend Sequence", sets: "1", reps: "10 min", notes: "Cobra → Locust → Bow → Bridge → Wheel" },
              { exercise: "Inversion Practice", sets: "1", reps: "5 min", notes: "Choose headstand, handstand, or shoulderstand" },
              { exercise: "Extended Savasana", sets: "1", reps: "15 min", notes: "Let everything settle" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "muscle-building-101",
    title: "Muscle Building 101",
    desc: "Science-based hypertrophy program",
    longDescription:
      "A 12-week hypertrophy program built on the latest exercise science. This program uses periodized volume and intensity to maximize muscle growth (myofibrillar and sarcoplasmic hypertrophy). You'll train each muscle group twice per week using a push-pull-legs split with strategic exercise selection for maximum muscle fiber recruitment.\n\nThe program ramps from an accumulation phase (higher volume, moderate intensity) through an intensification phase (lower volume, higher intensity) to ensure continuous progress without burnout.",
    category: "Bodybuilding",
    difficulty: "Intermediate",
    duration: "12 weeks",
    rating: 4.8,
    icon: "💪",
    color: "from-blue-500/20",
    goals: [
      "Build 2-4 lbs of lean muscle mass over 12 weeks",
      "Increase strength on all major compound lifts",
      "Improve muscle symmetry and proportion",
      "Develop mind-muscle connection",
      "Master advanced hypertrophy techniques (drop sets, supersets, rest-pause)",
    ],
    benefits: [
      "Evidence-based training principles",
      "Strategic exercise selection for balanced growth",
      "Progressive overload built into the program",
      "Deload weeks to manage fatigue",
      "Customizable based on individual weak points",
      "Nutrition guidance included for muscle gain",
    ],
    equipment: [
      "Barbell and weight plates",
      "Adjustable dumbbells (up to 50kg)",
      "Cable machine with attachments",
      "Lat pulldown / seated row machine",
      "Leg press machine",
      "EZ bar and preacher bench",
    ],
    prerequisites: [
      "At least 6 months of consistent training",
      "Comfortable with all major compound lifts",
      "Current routine of 3-4x per week",
      "Understanding of basic nutrition for muscle gain",
      "No recent injuries",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Accumulation – Volume Building",
        days: [
          {
            day: "Push A – Chest & Triceps",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "10", notes: "70% of 5RM, controlled tempo" },
              { exercise: "Incline Dumbbell Press", sets: "3", reps: "12", notes: "30° incline, full stretch" },
              { exercise: "Cable Flye", sets: "3", reps: "15", notes: "Cross hands at the end" },
              { exercise: "Overhead Tricep Extension", sets: "3", reps: "12", notes: "Cable or dumbbell" },
              { exercise: "Tricep Pushdown", sets: "3", reps: "15", notes: "Rope attachment" },
            ],
          },
          {
            day: "Pull A – Back & Biceps",
            exercises: [
              { exercise: "Barbell Row", sets: "4", reps: "10", notes: "Lean forward 45°, pull to belly" },
              { exercise: "Lat Pulldown (wide grip)", sets: "4", reps: "12", notes: "Full stretch, squeeze at bottom" },
              { exercise: "Seated Cable Row", sets: "3", reps: "12", notes: "Squeeze shoulder blades together" },
              { exercise: "Dumbbell Curl", sets: "3", reps: "12", notes: "Supinated, control negative" },
              { exercise: "Hammer Curl", sets: "3", reps: "12", notes: "Neutral grip, don't swing" },
            ],
          },
          {
            day: "Legs A – Quads & Glutes",
            exercises: [
              { exercise: "Barbell Squat", sets: "4", reps: "10", notes: "ATg depth, brace core" },
              { exercise: "Romanian Deadlift", sets: "3", reps: "12", notes: "Soft knees, push hips back" },
              { exercise: "Leg Press", sets: "4", reps: "15", notes: "Feet low on platform" },
              { exercise: "Walking Lunge", sets: "3", reps: "12", notes: "Dumbbells at sides" },
              { exercise: "Calf Raise", sets: "4", reps: "15", notes: "Standing or on leg press" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Increasing Volume",
        days: [
          {
            day: "Push B – Shoulders & Chest",
            exercises: [
              { exercise: "Overhead Press (Barbell)", sets: "4", reps: "10", notes: "Standing, core tight" },
              { exercise: "Decline Bench Press", sets: "3", reps: "10", notes: "Lower chest focus" },
              { exercise: "Lateral Raise (DB)", sets: "4", reps: "15", notes: "Slight lean forward, control" },
              { exercise: "Cable Cross Over (low pulley)", sets: "3", reps: "15", notes: "Upper chest emphasis" },
              { exercise: "Skull Crusher", sets: "3", reps: "12", notes: "EZ bar, elbows in" },
            ],
          },
          {
            day: "Pull B – Width & Thickness",
            exercises: [
              { exercise: "Deadlift", sets: "3", reps: "8", notes: "Moderate volume, focus on form" },
              { exercise: "Pull-ups (weighted if possible)", sets: "4", reps: "8-10", notes: "Chest to bar" },
              { exercise: "T-Bar Row", sets: "3", reps: "12", notes: "Squeeze at top of each rep" },
              { exercise: "Incline Dumbbell Curl", sets: "3", reps: "12", notes: "Lean back on incline bench" },
              { exercise: "Preacher Curl", sets: "3", reps: "12", notes: "EZ bar, lower all the way" },
            ],
          },
          {
            day: "Legs B – Hamstrings & Glutes",
            exercises: [
              { exercise: "Front Squat", sets: "4", reps: "8", notes: "Upright torso, quad focus" },
              { exercise: "Lying Leg Curl", sets: "4", reps: "12", notes: "Don't let hips rise" },
              { exercise: "Bulgarian Split Squat", sets: "3", reps: "12", notes: "Rear foot on bench" },
              { exercise: "Hip Thrust", sets: "4", reps: "12", notes: "Barbell across hips" },
              { exercise: "Standing Calf Raise", sets: "4", reps: "15", notes: "Full stretch at bottom" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Intensification",
        days: [
          {
            day: "Push C – Strength & Hypertrophy",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "6-8", notes: "80% of 5RM, heavier" },
              { exercise: "Incline Barbell Press", sets: "3", reps: "8", notes: "Lower reps, heavier weight" },
              { exercise: "Single-Arm Cable Lateral Raise", sets: "3", reps: "12", notes: "Lean away from cable" },
              { exercise: "Dips (weighted if possible)", sets: "3", reps: "8-10", notes: "Chest forward, elbows out" },
              { exercise: "JM Press", sets: "3", reps: "10", notes: "Tricep focused bench variation" },
            ],
          },
          {
            day: "Pull C – Back Thickness",
            exercises: [
              { exercise: "Barbell Row", sets: "4", reps: "6-8", notes: "Heavy, explosive concentric" },
              { exercise: "Wide-Grip Pull-ups", sets: "4", reps: "6-8", notes: "Add weight if needed" },
              { exercise: "Meadows Row", sets: "3", reps: "10", notes: "Long stroke, deep stretch" },
              { exercise: "Concentration Curl", sets: "3", reps: "12", notes: "Peak contraction" },
              { exercise: "Reverse EZ Bar Curl", sets: "3", reps: "12", notes: "Brachialis focus" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload & Recovery",
        days: [
          {
            day: "Deload Push",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "3", reps: "8", notes: "60-65%, smooth and fast" },
              { exercise: "Dumbbell Shoulder Press", sets: "3", reps: "10", notes: "Light, focus on control" },
              { exercise: "Tricep Cable Pushdown", sets: "3", reps: "12", notes: "Light weight, pump" },
            ],
          },
          {
            day: "Deload Pull",
            exercises: [
              { exercise: "Seated Cable Row", sets: "3", reps: "10", notes: "Light, squeeze at contraction" },
              { exercise: "Lat Pulldown", sets: "3", reps: "10", notes: "Light to moderate" },
              { exercise: "Dumbbell Curl", sets: "3", reps: "12", notes: "Light, full ROM" },
            ],
          },
          {
            day: "Deload Legs",
            exercises: [
              { exercise: "Goblet Squat", sets: "3", reps: "10", notes: "Light, focus on depth" },
              { exercise: "Leg Curl", sets: "3", reps: "10", notes: "Light" },
              { exercise: "Calf Raise", sets: "3", reps: "12", notes: "Light" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "endurance-athlete",
    title: "Endurance Athlete",
    desc: "Build cardiovascular endurance",
    longDescription:
      "Designed for athletes who want to push their cardiovascular limits. This 8-week program builds your aerobic base, improves lactate threshold, and increases your VO2 max through a combination of steady-state cardio, interval training, and cross-training.\n\nEach week includes a mix of running, cycling, and swimming to develop well-rounded endurance while preventing overuse injuries. By week 8, you'll be ready to tackle half-marathons, century rides, or grueling obstacle course races.",
    category: "Cardio",
    difficulty: "Advanced",
    duration: "8 weeks",
    rating: 4.7,
    icon: "🏃",
    color: "from-cyan-500/20",
    goals: [
      "Increase VO2 max by 10-15%",
      "Improve lactate threshold pace",
      "Complete a half-marathon distance run",
      "Develop efficient running form and economy",
      "Build mental toughness and pacing strategy",
    ],
    benefits: [
      "Enhanced aerobic capacity and stamina",
      "Improved heart rate variability (HRV)",
      "Better recovery between high-intensity efforts",
      "Reduced resting heart rate",
      "Increased capillary density in muscles",
      "Greater fatigue resistance in all sports",
    ],
    equipment: [
      "Quality running shoes",
      "Road or mountain bike (or access to stationary bike)",
      "Swim goggles and swimwear",
      "Heart rate monitor (recommended)",
      "Foam roller for recovery",
      "Hydration pack or belt",
    ],
    prerequisites: [
      "Ability to run 5km without stopping",
      "Can comfortably exercise for 45 min continuously",
      "No heart or lung conditions",
      "Previous endurance training experience recommended",
      "Access to bike and pool preferred",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Aerobic Base Building",
        days: [
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Zone 2 Run", sets: "1", reps: "30 min", notes: "Conversational pace, HR 130-150" },
              { exercise: "Strides", sets: "4", reps: "20s", notes: "Fast but relaxed, full recovery between" },
            ],
          },
          {
            day: "Cross-Train – Bike",
            exercises: [
              { exercise: "Steady State Cycling", sets: "1", reps: "45 min", notes: "Cadence 85-95 RPM, moderate effort" },
            ],
          },
          {
            day: "Tempo Run",
            exercises: [
              { exercise: "Warm-up Jog", sets: "1", reps: "10 min", notes: "Easy pace" },
              { exercise: "Tempo Pace", sets: "1", reps: "15 min", notes: "Comfortably hard (7/10 effort)" },
              { exercise: "Cool-down Jog", sets: "1", reps: "10 min", notes: "Easy pace" },
            ],
          },
          {
            day: "Long Run / Swim",
            exercises: [
              { exercise: "Base Run", sets: "1", reps: "45 min", notes: "Easy pace, focus on form" },
              { exercise: "Or Swim: Continuous Laps", sets: "1", reps: "30 min", notes: "Mix of freestyle and breaststroke" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Introducing Intensity",
        days: [
          {
            day: "Interval Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy jog + dynamic stretches" },
              { exercise: "400m Repeats", sets: "6", reps: "400m @ 5K pace / 90s rest", notes: "Even splits" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy jog" },
            ],
          },
          {
            day: "Bike Intervals",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy spin" },
              { exercise: "3 min Hard / 2 min Easy", sets: "5", reps: "Go", notes: "Hard effort 8/10, easy spin recovery" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy spin" },
            ],
          },
          {
            day: "Tempo Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy jog" },
              { exercise: "Tempo Run", sets: "1", reps: "20 min", notes: "Threshold pace (7.5/10 effort)" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy jog" },
            ],
          },
          {
            day: "Long Endurance",
            exercises: [
              { exercise: "Long Run", sets: "1", reps: "55 min", notes: "Easy, focus on hydration" },
              { exercise: "Strides", sets: "4", reps: "20s", notes: "After run, fast and relaxed" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Building Endurance",
        days: [
          {
            day: "Fartlek Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy jog" },
              { exercise: "Fartlek: 1 min hard / 1 min easy", sets: "10", reps: "Repeat", notes: "Hard effort 8/10" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy jog" },
            ],
          },
          {
            day: "Swim Endurance",
            exercises: [
              { exercise: "200m Warm-up", sets: "1", reps: "Easy", notes: "Mix strokes" },
              { exercise: "400m Timed Set", sets: "2", reps: "Moderate pace", notes: "Rest 60s between" },
              { exercise: "100m Sprints", sets: "4", reps: "Hard", notes: "30s rest between" },
              { exercise: "200m Cool-down", sets: "1", reps: "Easy", notes: "Slow freestyle" },
            ],
          },
          {
            day: "Progressive Run",
            exercises: [
              { exercise: "Progressive Run", sets: "1", reps: "40 min", notes: "Start easy, increase pace every 10 min" },
              { exercise: "Finish at Tempo Pace", sets: "1", reps: "Last 10 min", notes: "Sustained effort" },
            ],
          },
          {
            day: "Long Run",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "65 min", notes: "Conversational pace, practice fueling" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Peak & Recovery",
        days: [
          {
            day: "VO2 Max Intervals",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy jog + drills" },
              { exercise: "800m Repeats", sets: "5", reps: "800m @ 3K-5K pace / 3 min rest", notes: "Push hard" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy jog" },
            ],
          },
          {
            day: "Active Recovery",
            exercises: [
              { exercise: "Light Cycling", sets: "1", reps: "30 min", notes: "Zone 1-2, very easy" },
              { exercise: "Foam Rolling", sets: "1", reps: "15 min", notes: "Quads, hamstrings, calves, glutes" },
            ],
          },
          {
            day: "Tempo Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "10 min", notes: "Easy jog" },
              { exercise: "Tempo Run", sets: "1", reps: "25 min", notes: "Lactate threshold pace" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Easy jog" },
            ],
          },
          {
            day: "Long Run",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "75 min", notes: "Endurance focus, practice nutrition" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "core-crusher",
    title: "Core Crusher",
    desc: "Six-pack abs and core strength",
    longDescription:
      "A 6-week program dedicated entirely to building a strong, defined core. This isn't just about crunches — you'll train your entire midsection including rectus abdominis, obliques, transverse abdominis, and lower back stabilizers.\n\nThe program progresses from foundational core activation through anti-rotation, anti-extension, and explosive power movements. By the end, you'll have not only visible abs but true functional core strength that improves every other lift and movement in your life.",
    category: "Core",
    difficulty: "Intermediate",
    duration: "6 weeks",
    rating: 4.6,
    icon: "🎯",
    color: "from-yellow-500/20",
    goals: [
      "Develop visible abdominal definition",
      "Improve anti-rotation and anti-extension core strength",
      "Enhance core stability for compound lifts",
      "Build oblique strength and definition",
      "Master advanced core movements (dragon flag, ab wheel)",
    ],
    benefits: [
      "Better performance in all compound lifts",
      "Reduced lower back pain and injury risk",
      "Improved posture and spinal alignment",
      "Greater athletic power transfer",
      "Aesthetic midsection definition",
      "Enhanced balance and coordination",
    ],
    equipment: [
      "Yoga mat",
      "Ab wheel",
      "Cable machine with rope attachment",
      "Medicine ball (8-12 lbs)",
      "Hanging bar or captain's chair",
      "Weight plate (25-45 lbs)",
    ],
    prerequisites: [
      "Ability to hold a plank for 45 seconds",
      "No lower back injuries or conditions",
      "Comfortable with basic core exercises",
      "Low body fat percentage recommended for visible definition",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Core Foundation & Activation",
        days: [
          {
            day: "Core A – Stability",
            exercises: [
              { exercise: "Dead Bug", sets: "3", reps: "10 each side", notes: "Press lower back into mat" },
              { exercise: "Plank", sets: "3", reps: "45s", notes: "Brace glutes and quads" },
              { exercise: "Side Plank", sets: "3", reps: "30s each side", notes: "Stack shoulder over elbow" },
              { exercise: "Pallof Press", sets: "3", reps: "10 each side", notes: "Resist rotation" },
              { exercise: "Glute Bridge", sets: "3", reps: "15", notes: "Hold top for 2s" },
            ],
          },
          {
            day: "Core B – Movement",
            exercises: [
              { exercise: "Crunch (slow tempo)", sets: "3", reps: "15", notes: "3s up, 3s down" },
              { exercise: "Russian Twist", sets: "3", reps: "12 each side", notes: "Light weight, control movement" },
              { exercise: "Leg Raise (lying)", sets: "3", reps: "12", notes: "Lower slowly, don't arch back" },
              { exercise: "Bird Dog", sets: "3", reps: "10 each side", notes: "Slow and controlled" },
              { exercise: "Cat-Cow Stretch", sets: "2", reps: "10", notes: "Full spine articulation" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Anti-Rotation & Anti-Extension",
        days: [
          {
            day: "Core A – Anti-Movement",
            exercises: [
              { exercise: "Ab Wheel Rollout (from knees)", sets: "3", reps: "8", notes: "Keep core braced, don't let hips sag" },
              { exercise: "Cable Chop (high to low)", sets: "3", reps: "10 each side", notes: "Squeeze obliques" },
              { exercise: "Hollow Hold", sets: "3", reps: "30s", notes: "Lower back pressed flat" },
              { exercise: "Side Plank with Leg Raise", sets: "3", reps: "10 each side", notes: "Top leg raises" },
              { exercise: "Supermans", sets: "3", reps: "12", notes: "Lift chest and legs simultaneously" },
            ],
          },
          {
            day: "Core B – Dynamic Core",
            exercises: [
              { exercise: "Hanging Knee Raise", sets: "3", reps: "12", notes: "Don't swing, use core" },
              { exercise: "Medicine Ball Russian Twist", sets: "3", reps: "12 each side", notes: "Touch ball to ground each side" },
              { exercise: "V-Up", sets: "3", reps: "10", notes: "Reach for toes, control descent" },
              { exercise: "Plank with Arm Reach", sets: "3", reps: "8 each side", notes: "Reach forward, don't let hips drop" },
              { exercise: "Lying Windshield Wiper", sets: "3", reps: "8 each side", notes: "Legs at 90°, rotate side to side" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Core Power & Strength",
        days: [
          {
            day: "Core A – Power",
            exercises: [
              { exercise: "Medicine Ball Slams", sets: "4", reps: "10", notes: "Overhead, max effort" },
              { exercise: "Ab Wheel Rollout (standing eccentric)", sets: "3", reps: "6", notes: "Slow descent from standing" },
              { exercise: "Dumbbell Side Bend", sets: "3", reps: "12 each side", notes: "Heavy weight, controlled" },
              { exercise: "L-Sit Hold (on parallettes or floor)", sets: "3", reps: "15s", notes: "Press palms into floor" },
              { exercise: "Bicycle Crunch", sets: "3", reps: "20 total", notes: "Slow, controlled twist" },
            ],
          },
          {
            day: "Core B – Strength Endurance",
            exercises: [
              { exercise: "Hanging Leg Raise (straight leg)", sets: "3", reps: "10", notes: "Toes to bar if possible" },
              { exercise: "Dragon Flag Progression", sets: "3", reps: "5", notes: "Start with negatives" },
              { exercise: "Pallof Press Walkout", sets: "3", reps: "8 each side", notes: "Take 3 steps out, resist rotation" },
              { exercise: "Sit-up with Twist", sets: "3", reps: "15", notes: "Add weight plate at chest" },
              { exercise: "Prone Cobra", sets: "3", reps: "30s", notes: "Lift chest and rotate hands" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Peak Definition Week",
        days: [
          {
            day: "Core A – Metabolic Core Circuit",
            exercises: [
              { exercise: "Burpee to Plank", sets: "3", reps: "10", notes: "Full burpee, hold plank for 2s" },
              { exercise: "Hanging Knee Raise", sets: "3", reps: "15", notes: "High reps for burn" },
              { exercise: "Medicine Ball Slam", sets: "3", reps: "12", notes: "Max power" },
              { exercise: "Ab Wheel (knees)", sets: "3", reps: "12", notes: "Full extension" },
              { exercise: "Side Plank Hip Dip", sets: "3", reps: "12 each side", notes: "Drop and lift hips" },
            ],
          },
          {
            day: "Core B – Finisher Protocol",
            exercises: [
              { exercise: "Plank", sets: "1", reps: "60s", notes: "Hold as long as possible" },
              { exercise: "Leg Raise", sets: "1", reps: "20", notes: "Continuous" },
              { exercise: "Russian Twist", sets: "1", reps: "20 each side", notes: "No weight, just twist" },
              { exercise: "Bicycle Crunch", sets: "1", reps: "30 total", notes: "Continuous" },
              { exercise: "Repeat the circuit", sets: "3", reps: "Total rounds", notes: "Rest 60s between rounds" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "home-workout-hero",
    title: "Home Workout Hero",
    desc: "No equipment needed – build strength anywhere",
    longDescription:
      "No gym? No problem. This 4-week program uses only your bodyweight to build strength, endurance, and muscle. Each workout is a full-body circuit that can be done in your living room, hotel room, or backyard.\n\nWe use progressive overload through manipulation of leverage, tempo, volume, and rest periods — no weights required. By the end of 4 weeks, you'll be doing advanced bodyweight movements you never thought possible.",
    category: "Bodyweight",
    difficulty: "Beginner",
    duration: "4 weeks",
    rating: 4.5,
    icon: "🏠",
    color: "from-green-500/20",
    goals: [
      "Build functional body strength with no equipment",
      "Master push-up, squat, and lunge progressions",
      "Improve muscular endurance and work capacity",
      "Develop a consistent home workout habit",
      "Achieve visible muscle tone in 4 weeks",
    ],
    benefits: [
      "Zero equipment needed — work out anywhere",
      "Time-efficient workouts (20-30 minutes)",
      "Scalable for all fitness levels",
      "No commute to the gym",
      "Improved cardiovascular fitness",
      "Builds discipline and consistency",
    ],
    equipment: [
      "None required",
      "Optional: yoga mat for comfort",
      "Optional: chair or stair for step-ups",
      "Optional: towel for sliding exercises",
    ],
    prerequisites: [
      "No equipment or gym required",
      "Able to get up and down from the floor",
      "No serious injuries or conditions",
      "10-20 minutes of free space",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation Bodyweight",
        days: [
          {
            day: "Workout A – Full Body",
            exercises: [
              { exercise: "Bodyweight Squats", sets: "3", reps: "15", notes: "Full depth, chest up" },
              { exercise: "Incline Push-ups (on table or wall)", sets: "3", reps: "12", notes: "Easier than floor push-ups" },
              { exercise: "Reverse Lunges", sets: "3", reps: "10 each leg", notes: "Rear knee taps floor" },
              { exercise: "Plank", sets: "3", reps: "30s", notes: "Core braced, hips level" },
              { exercise: "Glute Bridge", sets: "3", reps: "15", notes: "Hold top position for 2s" },
            ],
          },
          {
            day: "Workout B – Cardio & Core",
            exercises: [
              { exercise: "Jumping Jacks", sets: "3", reps: "30s", notes: "Land softly" },
              { exercise: "Mountain Climbers", sets: "3", reps: "30s", notes: "Alternate legs quickly" },
              { exercise: "Bodyweight Squat", sets: "3", reps: "20", notes: "Pulse at bottom" },
              { exercise: "Bicycle Crunch", sets: "3", reps: "20 total", notes: "Elbow to opposite knee" },
              { exercise: "Bird Dog", sets: "3", reps: "8 each side", notes: "Slow and controlled" },
            ],
          },
          {
            day: "Workout C – Full Body Circuit",
            exercises: [
              { exercise: "Push-ups (full)", sets: "3", reps: "8", notes: "Go to failure, then incline" },
              { exercise: "Walking Lunges", sets: "3", reps: "10 each leg", notes: "Front knee 90°" },
              { exercise: "Plank Shoulder Taps", sets: "3", reps: "8 each side", notes: "Alternate hands" },
              { exercise: "Chair Dips", sets: "3", reps: "10", notes: "Use sturdy chair" },
              { exercise: "Calf Raises", sets: "3", reps: "20", notes: "Slow negative" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Increasing Volume & Intensity",
        days: [
          {
            day: "Workout A – Strength Focus",
            exercises: [
              { exercise: "Squat Pulse", sets: "3", reps: "20", notes: "3 pulses per rep, burn" },
              { exercise: "Push-up (slow negative)", sets: "3", reps: "6-10", notes: "3s down, explode up" },
              { exercise: "Curtsy Lunge", sets: "3", reps: "10 each leg", notes: "Cross behind, glute focus" },
              { exercise: "Hollow Hold", sets: "3", reps: "20s", notes: "Press lower back flat" },
              { exercise: "Donkey Kicks", sets: "3", reps: "15 each leg", notes: "Pulse at top" },
            ],
          },
          {
            day: "Workout B – Endurance Circuit",
            exercises: [
              { exercise: "High Knees", sets: "3", reps: "30s", notes: "Fast pace" },
              { exercise: "Burpees (no push-up)", sets: "3", reps: "8", notes: "Step back, step forward" },
              { exercise: "Squat Jacks", sets: "3", reps: "15", notes: "Jump in and out" },
              { exercise: "Plank Up-Downs", sets: "3", reps: "8 each side", notes: "Walk from plank to forearm plank" },
              { exercise: "Flutter Kicks", sets: "3", reps: "20s", notes: "Legs 6 inches off ground" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Advanced Progressions",
        days: [
          {
            day: "Workout A – Strength",
            exercises: [
              { exercise: "Bulgarian Split Squat (chair)", sets: "3", reps: "8 each leg", notes: "Rear foot on chair" },
              { exercise: "Archer Push-up Progression", sets: "3", reps: "5 each side", notes: "Widen hands, shift weight" },
              { exercise: "Pistol Squat Progression", sets: "3", reps: "5 each leg", notes: "Hold onto door frame if needed" },
              { exercise: "L-Sit Hold (on floor)", sets: "3", reps: "10s", notes: "Press hands into floor, lift hips" },
              { exercise: "Glute Bridge (single leg)", sets: "3", reps: "10 each leg", notes: "Lift hips high" },
            ],
          },
          {
            day: "Workout B – Power",
            exercises: [
              { exercise: "Jump Squats", sets: "3", reps: "10", notes: "Land softly, explode up" },
              { exercise: "Diamond Push-ups", sets: "3", reps: "8", notes: "Hands together under chest" },
              { exercise: "Lunge Jumps", sets: "3", reps: "8 each leg", notes: "Switch mid-air" },
              { exercise: "Crab Walk", sets: "3", reps: "20s forward/back", notes: "Hips lifted" },
              { exercise: "Superman Hold", sets: "3", reps: "20s", notes: "Lift chest and legs" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Peak & Challenge",
        days: [
          {
            day: "Workout A – AMRAP Challenge",
            exercises: [
              { exercise: "AMRAP 15 min: 10 Push-ups, 15 Squats, 20 Lunges", sets: "1", reps: "Max rounds", notes: "Track your score" },
              { exercise: "Plank Hold", sets: "1", reps: "Max time", notes: "Record your time" },
              { exercise: "L-Sit Hold", sets: "1", reps: "Max time", notes: "Accumulate total time" },
            ],
          },
          {
            day: "Workout B – Full Body Finisher",
            exercises: [
              { exercise: "Burpee (full)", sets: "5", reps: "5", notes: "EMOM – every minute on the minute" },
              { exercise: "Push-ups to failure", sets: "2", reps: "Max", notes: "Rest 60s between sets" },
              { exercise: "Squat Hold at Bottom", sets: "3", reps: "30s", notes: "Stay in bottom position" },
              { exercise: "Wall Sit", sets: "3", reps: "30s-60s", notes: "Thighs parallel to ground" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "strength-conditioning",
    title: "Strength & Conditioning",
    desc: "Athletic performance training",
    longDescription:
      "A 10-week program that blends heavy strength training with sport-specific conditioning to build a complete athlete. You'll develop explosive power through Olympic lifting variations, build raw strength with compound lifts, and enhance work capacity through metabolic circuits.\n\nThis program is ideal for athletes who want to perform better in their sport — whether that's basketball, football, martial arts, or general athletic pursuits.",
    category: "Strength",
    difficulty: "Advanced",
    duration: "10 weeks",
    rating: 4.9,
    icon: "⚡",
    color: "from-indigo-500/20",
    goals: [
      "Improve vertical jump and explosive power",
      "Increase squat, bench, and deadlift strength",
      "Build sport-specific conditioning",
      "Enhance acceleration and change of direction",
      "Develop mental toughness and work capacity",
    ],
    benefits: [
      "Transferable athletic power for any sport",
      "Improved speed, agility, and quickness",
      "Stronger foundation for sport-specific skills",
      "Injury prevention through balanced development",
      "Increased work capacity for competition",
      "Better body control and coordination",
    ],
    equipment: [
      "Barbell and bumper plates",
      "Squat rack and bench",
      "Plyometric box (12-24 inch)",
      "Medicine ball (10-20 lbs)",
      "Resistance bands",
      "Speed ladder and cones",
      "Kettlebells (16-32 kg)",
    ],
    prerequisites: [
      "Minimum 1 year of strength training experience",
      "Comfortable with explosive movements (box jumps, med ball slams)",
      "Current 5RM known for squat, bench, deadlift",
      "No acute injuries or medical restrictions",
      "Good mobility and movement quality",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation Strength & Power",
        days: [
          {
            day: "Strength A – Lower Body",
            exercises: [
              { exercise: "Barbell Back Squat", sets: "4", reps: "8", notes: "70% of 5RM, controlled" },
              { exercise: "Box Jump", sets: "4", reps: "5", notes: "Step down, focus on landing" },
              { exercise: "Walking Lunge (dumbbells)", sets: "3", reps: "10 each leg", notes: "Knee tracks over toe" },
              { exercise: "Single-Leg RDL", sets: "3", reps: "8 each leg", notes: "Kettlebell or dumbbell" },
              { exercise: "Calf Raise", sets: "3", reps: "15", notes: "Standing or seated" },
            ],
          },
          {
            day: "Conditioning A – MetCon",
            exercises: [
              { exercise: "Kettlebell Swings", sets: "5", reps: "15", notes: "Russian style, hip drive" },
              { exercise: "Wall Ball Shots", sets: "5", reps: "10", notes: "Medicine ball, squat low" },
              { exercise: "Battle Ropes", sets: "5", reps: "20s", notes: "Alternating waves" },
              { exercise: "Box Step-ups", sets: "5", reps: "10 each leg", notes: "Moderate box height" },
              { exercise: "Rest between rounds", sets: "-", reps: "60s", notes: "Keep moving" },
            ],
          },
          {
            day: "Strength B – Upper Body",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "8", notes: "70% of 5RM" },
              { exercise: "Bent-Over Barbell Row", sets: "4", reps: "8", notes: "45° hinge, pull to sternum" },
              { exercise: "Standing Overhead Press", sets: "3", reps: "8", notes: "Standing, core braced" },
              { exercise: "Pull-ups", sets: "3", reps: "8", notes: "Strict, full ROM" },
              { exercise: "Face Pull", sets: "3", reps: "15", notes: "Shoulder health" },
            ],
          },
          {
            day: "Conditioning B – Agility",
            exercises: [
              { exercise: "Ladder Drills", sets: "5", reps: "Each pattern", notes: "1-2-3 in, lateral, Icky shuffle" },
              { exercise: "Cone Shuttles (5-10-5)", sets: "3", reps: "Each direction", notes: "Max effort change of direction" },
              { exercise: "Medicine Ball Rotational Slam", sets: "3", reps: "8 each side", notes: "Explosive rotation" },
              { exercise: "Sled Push (if available)", sets: "4", reps: "20m", notes: "Moderate to heavy load" },
              { exercise: "Finisher: 100m Sprint", sets: "2", reps: "All out", notes: "Full recovery between" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Power Development",
        days: [
          {
            day: "Strength A – Lower Power",
            exercises: [
              { exercise: "Barbell Back Squat", sets: "4", reps: "6", notes: "75% of 5RM" },
              { exercise: "Power Clean (technique)", sets: "5", reps: "3", notes: "Focus on explosion, light weight" },
              { exercise: "Broad Jump", sets: "4", reps: "5", notes: "Measure distance" },
              { exercise: "Bulgarian Split Squat", sets: "3", reps: "8 each leg", notes: "Dumbbells at sides" },
              { exercise: "Pallof Press (high cable)", sets: "3", reps: "10 each side", notes: "Resist rotation" },
            ],
          },
          {
            day: "Conditioning A – Intervals",
            exercises: [
              { exercise: "Assault Bike or Sprint", sets: "8", reps: "30s work / 30s rest", notes: "All-out effort" },
              { exercise: "Burpee to Box Jump", sets: "5", reps: "8", notes: "Burpee then jump onto box" },
              { exercise: "Kettlebell Clean", sets: "5", reps: "10 each arm", notes: "Explosive hip drive" },
              { exercise: "Renegade Row", sets: "5", reps: "8 each arm", notes: "Plank position with dumbbells" },
            ],
          },
          {
            day: "Strength B – Upper Power",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "6", notes: "75% of 5RM" },
              { exercise: "Push Press", sets: "4", reps: "5", notes: "Leg drive, overhead" },
              { exercise: "Weighted Pull-ups", sets: "4", reps: "5", notes: "Add 5-10 kg" },
              { exercise: "Dumbbell Snatch", sets: "3", reps: "6 each arm", notes: "Explosive" },
              { exercise: "Medicine Ball Overhead Slam", sets: "3", reps: "8", notes: "Full body extension" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Strength & Conditioning Blend",
        days: [
          {
            day: "Strength A – Heavy Lower",
            exercises: [
              { exercise: "Barbell Back Squat", sets: "4", reps: "4", notes: "80% of 5RM, heavier" },
              { exercise: "Deadlift", sets: "3", reps: "5", notes: "80%, reset each rep" },
              { exercise: "Box Jump (high box)", sets: "4", reps: "4", notes: "Focus on triple extension" },
              { exercise: "Reverse Hyperextension", sets: "3", reps: "10", notes: "Spinal health" },
              { exercise: "Farmer Carry (heavy)", sets: "3", reps: "30s", notes: "Max weight, stay tall" },
            ],
          },
          {
            day: "Conditioning A – Work Capacity",
            exercises: [
              { exercise: "Warm-up: 500m Row", sets: "1", reps: "Easy", notes: "Get warm" },
              { exercise: "Workout: 5 Rounds for Time", sets: "5", reps: "Round", notes: "10 KB Swings / 10 Box Jumps / 10 Burpees / 200m Run" },
              { exercise: "Cool-down", sets: "1", reps: "10 min", notes: "Light jog + stretching" },
            ],
          },
          {
            day: "Strength B – Heavy Upper",
            exercises: [
              { exercise: "Barbell Bench Press", sets: "4", reps: "4", notes: "80% of 5RM" },
              { exercise: "Barbell Row", sets: "4", reps: "6", notes: "Heavy, explosive pull" },
              { exercise: "Weighted Dips", sets: "3", reps: "6", notes: "Add plate if possible" },
              { exercise: "Pendlay Row", sets: "3", reps: "6", notes: "Dead stop each rep" },
              { exercise: "Handstand Hold Practice", sets: "3", reps: "15-20s", notes: "Against wall" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Deload & Mobility",
        days: [
          {
            day: "Light Strength",
            exercises: [
              { exercise: "Barbell Squat", sets: "3", reps: "8", notes: "60%, smooth and fast" },
              { exercise: "Barbell Bench Press", sets: "3", reps: "8", notes: "60%, smooth and fast" },
              { exercise: "Barbell Row", sets: "3", reps: "8", notes: "60%, focus on form" },
              { exercise: "Pull-ups (light)", sets: "3", reps: "5", notes: "Strict, no weight" },
            ],
          },
          {
            day: "Active Recovery",
            exercises: [
              { exercise: "Foam Rolling", sets: "1", reps: "20 min", notes: "Full body, slow" },
              { exercise: "Mobility Flow", sets: "1", reps: "20 min", notes: "Hip 90/90, couch stretch, shoulder CARs" },
              { exercise: "Light Walk", sets: "1", reps: "20 min", notes: "Fresh air, relax" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "pilates-core-flow",
    title: "Pilates Core Flow",
    desc: "Low impact core strengthening",
    longDescription:
      "A 4-week Pilates program that focuses on building deep core strength, improving posture, and developing body control through low-impact, high-precision movements. Pilates emphasizes the powerhouse — the deep muscles of the abdomen, lower back, hips, and glutes.\n\nEach session combines mat Pilates exercises with resistance band work to challenge stability and control. This program is excellent for injury prevention, rehabilitation, and developing a mind-muscle connection that transforms how you move.",
    category: "Flexibility",
    difficulty: "Beginner",
    duration: "4 weeks",
    rating: 4.7,
    icon: "🤸",
    color: "from-pink-500/20",
    goals: [
      "Build deep core strength and stability",
      "Improve posture and spinal alignment",
      "Develop body awareness and control",
      "Increase flexibility through dynamic stretching",
      "Create a strong foundation for other activities",
    ],
    benefits: [
      "Low-impact — gentle on joints",
      "Strengthens the pelvic floor and deep core",
      "Improves breathing mechanics",
      "Reduces back pain and improves spinal health",
      "Enhances athletic performance through better body control",
      "Great complement to any other training program",
    ],
    equipment: [
      "Yoga mat (thicker preferred for comfort)",
      "Resistance band (light and medium)",
      "Small Pilates ball (optional)",
      "Foam roller (optional)",
      "Pilates ring (optional)",
    ],
    prerequisites: [
      "No Pilates experience needed",
      "Able to lie on back and stomach comfortably",
      "No acute back injuries",
      "Open to slow, controlled movement",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Pilates Foundation – The Powerhouse",
        days: [
          {
            day: "Mat Pilates A – Core Activation",
            exercises: [
              { exercise: "Pelvic Curl", sets: "3", reps: "10", notes: "Articulate spine one vertebra at a time" },
              { exercise: "Chest Lift (Crunch)", sets: "3", reps: "10", notes: "Neck long, lift from upper back" },
              { exercise: "Single Leg Stretch", sets: "3", reps: "10 each", notes: "C-curve spine, legs at 45°" },
              { exercise: "Double Leg Stretch", sets: "3", reps: "10", notes: "Extend arms and legs, scoop abs" },
              { exercise: "Rolling Like a Ball", sets: "3", reps: "8", notes: "Balance at top, don't roll onto neck" },
              { exercise: "Hundred (Modified)", sets: "1", reps: "100 pumps", notes: "Legs up, pump arms, breathe" },
            ],
          },
          {
            day: "Mat Pilates B – Hip & Glute Focus",
            exercises: [
              { exercise: "Clamshell (band)", sets: "3", reps: "12 each side", notes: "Feet together, knees open" },
              { exercise: "Side-Lying Leg Series", sets: "3", reps: "10 each", notes: "Lift, circles, inner thigh" },
              { exercise: "Bridge with Band", sets: "3", reps: "12", notes: "Band above knees, push apart" },
              { exercise: "Quadruped Hip Extension", sets: "3", reps: "10 each leg", notes: "Lift leg, don't arch back" },
              { exercise: "Prone Cobra", sets: "3", reps: "8", notes: "Lift chest, rotate hands" },
            ],
          },
          {
            day: "Mat Pilates C – Full Flow",
            exercises: [
              { exercise: "Swan Prep", sets: "3", reps: "8", notes: "Lift upper back, arms extended" },
              { exercise: "Side Kick Series", sets: "3", reps: "10 each", notes: "Front-back, circles" },
              { exercise: "Scissors", sets: "3", reps: "10 each", notes: "Legs open wide, controlled" },
              { exercise: "Shoulder Bridge Prep", sets: "3", reps: "8", notes: "Lift hips, extend one leg" },
              { exercise: "Spine Stretch Forward", sets: "3", reps: "8", notes: "Reach forward, C-curve spine" },
              { exercise: "Mermaid Stretch", sets: "2", reps: "30s each side", notes: "Side bend with stretch" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Flowing Sequences",
        days: [
          {
            day: "Mat Pilates A – Coordination",
            exercises: [
              { exercise: "Hundred (full)", sets: "1", reps: "100 pumps", notes: "Legs extended, scoop deep" },
              { exercise: "Roll-Up", sets: "3", reps: "8", notes: "Articulate up and down" },
              { exercise: "Single Straight Leg Stretch", sets: "3", reps: "10 each", notes: "Legs high, switch" },
              { exercise: "Criss-Cross", sets: "3", reps: "10 each side", notes: "Rotate torso, elbow to knee" },
              { exercise: "Double Leg Lower", sets: "3", reps: "8", notes: "Lower legs slowly, don't arch back" },
              { exercise: "Saw", sets: "3", reps: "8 each side", notes: "Twist and reach past pinky toe" },
            ],
          },
          {
            day: "Mat Pilates B – Lateral Strength",
            exercises: [
              { exercise: "Side Plank Prep", sets: "3", reps: "20s each side", notes: "Bottom knee down if needed" },
              { exercise: "Side-Lying Leg Lifts", sets: "3", reps: "15 each side", notes: "Top leg, controlled" },
              { exercise: "Mermaid with Side Bend", sets: "3", reps: "8 each side", notes: "Reach overhead" },
              { exercise: "Star Exercise", sets: "3", reps: "10 each side", notes: "Balance on hand and foot" },
              { exercise: "Teaser Prep", sets: "3", reps: "8", notes: "Balance on sitz bones, legs at 45°" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Strength & Control",
        days: [
          {
            day: "Mat Pilates A – Advanced Mat",
            exercises: [
              { exercise: "Hundred (legs low)", sets: "1", reps: "100 pumps", notes: "Legs at 45°, challenge" },
              { exercise: "Roll-Up with Resistance Band", sets: "3", reps: "8", notes: "Band around feet, pull" },
              { exercise: "Teaser (full)", sets: "3", reps: "5", notes: "V-position, reach for toes" },
              { exercise: "Boomerang", sets: "3", reps: "5", notes: "Roll back to roll-up, cross legs" },
              { exercise: "Neck Pull", sets: "3", reps: "8", notes: "Sit up tall, hands behind head" },
              { exercise: "Jackknife", sets: "3", reps: "6", notes: "Roll hips up, legs overhead" },
            ],
          },
          {
            day: "Mat Pilates B – Resistance Band",
            exercises: [
              { exercise: "Band: Chest Expansion", sets: "3", reps: "10", notes: "Band behind back, press chest forward" },
              { exercise: "Band: Standing Row", sets: "3", reps: "12", notes: "Band anchored, pull elbows back" },
              { exercise: "Band: Leg Press", sets: "3", reps: "15 each leg", notes: "Band around foot, press forward" },
              { exercise: "Band: Standing Abduction", sets: "3", reps: "15 each leg", notes: "Band around ankles, lift leg" },
              { exercise: "Band: Pull-Through", sets: "3", reps: "12", notes: "Band between legs, hinge and pull" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Integration & Full Flow",
        days: [
          {
            day: "Full Pilates Flow A",
            exercises: [
              { exercise: "Mat Sequence: Hundred → Roll-Up → Single Leg Stretch → Criss-Cross → Teaser → Saw", sets: "1", reps: "Flow 3x", notes: "Continuous movement, minimal rest" },
              { exercise: "Side Series: Side Kicks → Clamshell → Side Plank → Mermaid", sets: "1", reps: "Flow 2x", notes: "Each side" },
              { exercise: "Core Finisher: Plank (1 min) → Side Plank (30s each) → Bridge (1 min)", sets: "1", reps: "Super set", notes: "No rest between" },
            ],
          },
          {
            day: "Full Pilates Flow B",
            exercises: [
              { exercise: "Swan → Seal → Neck Pull → Boomerang", sets: "1", reps: "Flow 2x", notes: "Breathe through each movement" },
              { exercise: "Standing: Roll-Down → Flat Back → Tree → Tilt", sets: "1", reps: "Flow 3x", notes: "Move with control" },
              { exercise: "Mat Finisher: Rolling Like a Ball (10) → Stretch: Cat-Cow (5) → Child's Pose (2 min)", sets: "1", reps: "Once through", notes: "Cool-down and breathe" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "marathon-prep",
    title: "Marathon Prep",
    desc: "Complete marathon training plan",
    longDescription:
      "A comprehensive 16-week marathon training program designed to take you from your current fitness level to crossing the finish line. The program builds your aerobic base, develops race-specific endurance, and includes a proper taper to ensure you're fresh on race day.\n\nEach week includes easy runs, tempo sessions, speed work, a long run, and cross-training. Nutrition, hydration, and recovery strategies are built into the plan to prepare you for the full 26.2-mile distance.",
    category: "Cardio",
    difficulty: "Advanced",
    duration: "16 weeks",
    rating: 4.8,
    icon: "🏅",
    color: "from-teal-500/20",
    goals: [
      "Complete a full marathon (26.2 miles)",
      "Achieve a goal time (sub-4, sub-5, or just finish)",
      "Build aerobic endurance and mental toughness",
      "Develop race-day nutrition and hydration strategy",
      "Injury-free training through proper progression",
    ],
    benefits: [
      "Structured 16-week progression",
      "Reduced risk of injury through smart pacing",
      "Improved aerobic capacity and efficiency",
      "Better understanding of pacing and race strategy",
      "Nutrition and hydration guidance",
      "Stronger mental resilience",
    ],
    equipment: [
      "Quality running shoes (rotate 2 pairs)",
      "Moisture-wicking running clothes",
      "GPS running watch",
      "Hydration belt or vest",
      "Energy gels and electrolyte chews",
      "Foam roller and recovery tools",
    ],
    prerequisites: [
      "Currently running at least 15-20 miles per week",
      "Can comfortably run 10K (6.2 miles)",
      "No heart or lung conditions",
      "Consistent training for at least 6 months",
      "Previous half-marathon experience recommended",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Base Building – Getting Started",
        days: [
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "5 km", notes: "Conversational pace, HR Zone 2" },
            ],
          },
          {
            day: "Speed Work",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "1.5 km", notes: "Easy jog + strides" },
              { exercise: "400m Repeats", sets: "6", reps: "400m @ 5K pace", notes: "90s walk/jog recovery" },
              { exercise: "Cool-down", sets: "1", reps: "1.5 km", notes: "Easy jog" },
            ],
          },
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "6 km", notes: "Keep it easy, practice hydration" },
            ],
          },
          {
            day: "Long Run",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "10 km", notes: "Slow pace, walk hills if needed" },
            ],
          },
          {
            day: "Cross-Train",
            exercises: [
              { exercise: "Cycling or Swimming", sets: "1", reps: "30-40 min", notes: "Moderate effort, active recovery" },
              { exercise: "Strength Circuit", sets: "2", reps: "12 each", notes: "Lunges, squats, push-ups, planks" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Building Mileage",
        days: [
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "6 km", notes: "Focus on cadence 170-180 spm" },
            ],
          },
          {
            day: "Tempo Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "2 km", notes: "Easy jog" },
              { exercise: "Tempo Pace", sets: "1", reps: "4 km", notes: "Threshold pace (7/10 effort)" },
              { exercise: "Cool-down", sets: "1", reps: "2 km", notes: "Easy jog" },
            ],
          },
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "6 km", notes: "Include 4x20s strides" },
            ],
          },
          {
            day: "Long Run",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "12 km", notes: "Practice taking energy gels" },
            ],
          },
          {
            day: "Cross-Train",
            exercises: [
              { exercise: "Swim", sets: "1", reps: "30 min", notes: "Continuous laps, mix strokes" },
              { exercise: "Core Work", sets: "1", reps: "15 min", notes: "Planks, bird dogs, dead bugs" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Intensity & Endurance",
        days: [
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Recovery Run", sets: "1", reps: "5 km", notes: "Very easy, let legs recover" },
            ],
          },
          {
            day: "Interval Run",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "2 km", notes: "Easy jog + dynamic stretches" },
              { exercise: "800m Repeats", sets: "5", reps: "800m @ 10K pace", notes: "2 min rest between" },
              { exercise: "Cool-down", sets: "1", reps: "2 km", notes: "Easy jog" },
            ],
          },
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "8 km", notes: "Hilly route if possible" },
            ],
          },
          {
            day: "Long Run",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "16 km", notes: "Start fueling plan — gel every 45 min" },
            ],
          },
          {
            day: "Cross-Train",
            exercises: [
              { exercise: "Cycling", sets: "1", reps: "45 min", notes: "Moderate effort" },
              { exercise: "Strength Training", sets: "1", reps: "20 min", notes: "Bodyweight circuit" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Recovery Week",
        days: [
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Recovery Run", sets: "1", reps: "5 km", notes: "Very easy, no pressure" },
            ],
          },
          {
            day: "Tempo (Short)",
            exercises: [
              { exercise: "Warm-up", sets: "1", reps: "2 km", notes: "Easy jog" },
              { exercise: "Tempo Pace", sets: "1", reps: "3 km", notes: "Comfortably hard" },
              { exercise: "Cool-down", sets: "1", reps: "2 km", notes: "Easy jog" },
            ],
          },
          {
            day: "Easy Run",
            exercises: [
              { exercise: "Easy Effort Run", sets: "1", reps: "5 km", notes: "Relaxed" },
            ],
          },
          {
            day: "Long Run (Reduced)",
            exercises: [
              { exercise: "Long Slow Run", sets: "1", reps: "10 km", notes: "Reduce volume this week" },
            ],
          },
          {
            day: "Active Recovery",
            exercises: [
              { exercise: "Light Walk", sets: "1", reps: "30 min", notes: "Fresh air, flush legs" },
              { exercise: "Foam Rolling", sets: "1", reps: "20 min", notes: "Full body, focus on calves and quads" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "calisthenics-mastery",
    title: "Calisthenics Mastery",
    desc: "Bodyweight strength and control",
    longDescription:
      "An 8-week calisthenics program that takes you from foundational bodyweight movements to advanced skills. You'll progress through strength-building phases, skill work, and dynamic movement patterns to develop incredible relative strength and body control.\n\nCalisthenics builds not just muscle but also coordination, balance, and spatial awareness. This program teaches you to push, pull, squat, and lunge with advanced variations — plus skill elements like handstands, levers, and muscle-up progressions.",
    category: "Bodyweight",
    difficulty: "Intermediate",
    duration: "8 weeks",
    rating: 4.6,
    icon: "🤸",
    color: "from-lime-500/20",
    goals: [
      "Master 10+ strict pull-ups",
      "Achieve a freestanding handstand (against wall progression)",
      "Perform a full muscle-up transition",
      "Hold a front lever for 5+ seconds",
      "Develop pistol squat on each leg",
    ],
    benefits: [
      "Builds impressive relative strength-to-weight ratio",
      "No gym membership needed",
      "Develops coordination and body control",
      "Low risk of injury with proper progression",
      "Highly visible aesthetic results",
      "Transferable skills for other sports",
    ],
    equipment: [
      "Pull-up bar (door frame or outdoor)",
      "Parallel bars (or sturdy chairs)",
      "Floor mat for comfort",
      "Resistance bands (for assisted versions)",
      "Gymnastics rings (optional, advanced)",
    ],
    prerequisites: [
      "Able to do 5 strict push-ups",
      "Can hang from pull-up bar for 20 seconds",
      "Comfortable with bodyweight squats",
      "No shoulder or wrist injuries",
      "Consistent training for 3+ months recommended",
    ],
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation – Pull & Push",
        days: [
          {
            day: "Pull Day – Back & Biceps",
            exercises: [
              { exercise: "Pull-up Negatives", sets: "4", reps: "5", notes: "Jump up, lower 5s" },
              { exercise: "Inverted Row (under table or bar)", sets: "3", reps: "10", notes: "Body at 45°, pull to chest" },
              { exercise: "Scapular Pull-ups", sets: "3", reps: "10", notes: "Hang and retract scapula" },
              { exercise: "Australian Curls", sets: "3", reps: "8", notes: "Hanging bicep curl" },
              { exercise: "Dead Hang (passive)", sets: "3", reps: "30s", notes: "Relax shoulders, feel the stretch" },
            ],
          },
          {
            day: "Push Day – Chest, Shoulders & Triceps",
            exercises: [
              { exercise: "Push-ups (standard)", sets: "4", reps: "10-15", notes: "Elbows 45°, full ROM" },
              { exercise: "Pike Push-ups", sets: "3", reps: "8", notes: "Hips high, handstand push-up prep" },
              { exercise: "Diamond Push-ups", sets: "3", reps: "8", notes: "Tricep focus" },
              { exercise: "Incline Push-ups (feet elevated)", sets: "3", reps: "10", notes: "Feet on chair, upper chest" },
              { exercise: "Tricep Dips (chair)", sets: "3", reps: "10", notes: "Use sturdy chair, lower slow" },
            ],
          },
          {
            day: "Legs & Core Day",
            exercises: [
              { exercise: "Bodyweight Squat (slow)", sets: "3", reps: "15", notes: "3s down, 1s up" },
              { exercise: "Bulgarian Split Squat (chair)", sets: "3", reps: "8 each leg", notes: "Rear foot elevated" },
              { exercise: "Pistol Squat Progression", sets: "3", reps: "5 each leg", notes: "Hold support if needed" },
              { exercise: "L-Sit Hold (on floor)", sets: "3", reps: "10s", notes: "Press down, lift hips" },
              { exercise: "Back Bridge (hold)", sets: "3", reps: "20s", notes: "Push hips up, open chest" },
            ],
          },
        ],
      },
      {
        week: 2,
        focus: "Strength Building",
        days: [
          {
            day: "Pull Day – Strength Focus",
            exercises: [
              { exercise: "Band-Assisted Pull-ups", sets: "4", reps: "8", notes: "Use band for support" },
              { exercise: "Wide Pull-up Negatives", sets: "3", reps: "5", notes: "4s descent" },
              { exercise: "Tuck Front Lever Hold", sets: "4", reps: "10s", notes: "Tuck knees, lean forward" },
              { exercise: "Archer Row Progression", sets: "3", reps: "8 each arm", notes: "One arm works, other assists" },
              { exercise: "Hollow Body Hang", sets: "3", reps: "20s", notes: "Tense whole body on bar" },
            ],
          },
          {
            day: "Push Day – Skill Focus",
            exercises: [
              { exercise: "Push-up (weighted if possible)", sets: "4", reps: "8-10", notes: "Backpack with books" },
              { exercise: "Handstand Hold (against wall)", sets: "5", reps: "15-30s", notes: "Walk feet up wall" },
              { exercise: "Wall Walk to Handstand", sets: "3", reps: "5", notes: "Walk hands closer to wall" },
              { exercise: "Decline Push-up (feet on wall)", sets: "3", reps: "8", notes: "Upper chest and shoulders" },
              { exercise: "Japanese Handstand Push-up Prep", sets: "3", reps: "5", notes: "Forehead to ground" },
            ],
          },
        ],
      },
      {
        week: 3,
        focus: "Skill Development",
        days: [
          {
            day: "Pull Day – Dynamic",
            exercises: [
              { exercise: "Pull-ups (strict)", sets: "3", reps: "5-8", notes: "Chest to bar" },
              { exercise: "Muscle-up Transition (banded)", sets: "3", reps: "5", notes: "Explosive pull, push over bar" },
              { exercise: "Tuck Back Lever", sets: "3", reps: "10s", notes: "Arms straight, hold" },
              { exercise: "Windshield Wiper on Bar", sets: "3", reps: "8 each side", notes: "Legs straight, rotate" },
              { exercise: "One-Arm Hang Prep", sets: "3", reps: "10s each", notes: "Assist with other hand" },
            ],
          },
          {
            day: "Push Day – Advanced",
            exercises: [
              { exercise: "Handstand Push-up (negatives)", sets: "3", reps: "3-5", notes: "Kick up, lower 5s" },
              { exercise: "Planche Lean Progression", sets: "4", reps: "15s", notes: "Lean forward, straight arms" },
              { exercise: "90° Push-up Hold", sets: "3", reps: "10s", notes: "Bottom of push-up hold" },
              { exercise: "Ring Support Hold (or parallel bars)", sets: "3", reps: "20s", notes: "Press rings out" },
              { exercise: "Tucked Planche Hold", sets: "3", reps: "10s", notes: "Tuck knees, lean" },
            ],
          },
        ],
      },
      {
        week: 4,
        focus: "Integration & Flow",
        days: [
          {
            day: "Pull Day – Volume",
            exercises: [
              { exercise: "Wide Pull-ups", sets: "3", reps: "6-8", notes: "Max reps each set" },
              { exercise: "Chin-ups", sets: "3", reps: "6-8", notes: "Supinated grip" },
              { exercise: "Front Lever Raises (tuck)", sets: "3", reps: "6", notes: "Raise to front lever" },
              { exercise: "Banded Bicep Curl", sets: "3", reps: "12", notes: "Stand on band, curl" },
              { exercise: "Bar Muscle-up Attempt", sets: "3", reps: "1-3", notes: "Try the full movement" },
            ],
          },
          {
            day: "Push Day – Freestyle",
            exercises: [
              { exercise: "Handstand Hold (freestanding attempt)", sets: "5", reps: "5-10s", notes: "Against wall spot" },
              { exercise: "Pseudo Planche Push-up", sets: "3", reps: "8", notes: "Hands at waist, lean forward" },
              { exercise: "HeSPU Negative (handstand)", sets: "3", reps: "3", notes: "Controlled descent" },
              { exercise: "Planche Lean to Tuck", sets: "3", reps: "5", notes: "Lean then lift feet" },
              { exercise: "Freestyle Flow: Handstand → Cartwheel → Roll", sets: "1", reps: "5 flows", notes: "Connect movements" },
            ],
          },
        ],
      },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programsData.find((p) => p.slug === slug);
}
