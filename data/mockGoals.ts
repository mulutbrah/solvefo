import { IGoal } from "@/types";

export const mockGoals: IGoal[] = [
  {
    id: 1,
    name: "Exercise",
    tasks: [
      { id: 101, name: "Running", isDone: false },
      { id: 102, name: "Cycling", isDone: false },
      { id: 103, name: "Yoga", isDone: false },
    ],
  },
  {
    id: 2,
    name: "Learn a New Language",
    tasks: [
      { id: 201, name: "Enroll in a language course", isDone: false },
      { id: 202, name: "Practice with language learning apps", isDone: false },
      { id: 203, name: "Join a language exchange group", isDone: false },
    ],
  },
  {
    id: 3,
    name: "Improve Programming Skills",
    tasks: [
      { id: 301, name: "Complete a coding challenge", isDone: false },
      { id: 302, name: "Read a book on algorithms", isDone: false },
      { id: 303, name: "Contribute to open-source projects", isDone: false },
    ],
  },
  {
    id: 4,
    name: "Healthy Eating",
    tasks: [
      { id: 401, name: "Plan weekly meals", isDone: false },
      { id: 402, name: "Shop for fresh produce", isDone: false },
      { id: 403, name: "Cook at home", isDone: false },
    ],
  },
  {
    id: 5,
    name: "Financial Planning",
    tasks: [
      { id: 501, name: "Create a monthly budget", isDone: false },
      { id: 502, name: "Track daily expenses", isDone: false },
      { id: 503, name: "Set up an emergency fund", isDone: false },
    ],
  },
];
