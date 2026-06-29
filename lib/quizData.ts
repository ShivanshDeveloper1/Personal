export type QuestionType = "single-choice" | "grid-choice" | "slider" | "icon-choice";

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options?: string[] | { label: string; icon: string }[];
  sliderConfig?: { min: number; max: number; step: number; suffix: string };
}

export const quizData: QuizQuestion[] = [
  {
    id: "q1",
    title: "Which direction does your study desk face?",
    subtitle: "Direction shapes the energy of focus.",
    type: "single-choice",
    options: ["North", "East", "South", "West"],
  },
  {
    id: "q2",
    title: "What is your birth month?",
    type: "grid-choice",
    options: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ],
  },
  {
    id: "q3",
    title: "How much of the syllabus have you completed?",
    subtitle: "An honest estimate works better than a hopeful one.",
    type: "slider",
    sliderConfig: { min: 0, max: 100, step: 5, suffix: "%" },
  },
  {
    id: "q4",
    title: "How heavy does your mind feel?",
    type: "icon-choice",
    // We pass icon names as strings here to keep the data serializable
    options: [
      { label: "LIGHT", icon: "leaf" },
      { label: "EASY", icon: "sun" },
      { label: "STEADY", icon: "cloud" },
      { label: "HEAVY", icon: "cloud-rain" },
      { label: "STORM", icon: "cloud-lightning" },
    ],
  },
  {
  id: "q5",
  title: "At what time do you usually study best?",
  subtitle: "Different energies peak at different times of the day.",
  type: "single-choice",
  options: [
    "Early Morning",
    "Morning",
    "Afternoon",
    "Evening",
    "Late Night"
  ],
},
];