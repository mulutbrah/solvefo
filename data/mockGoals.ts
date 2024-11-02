import { IGoal } from "@/types";

export const mockGoals: IGoal[] = [
  {
    id: 1,
    name: "Exercise",
    tasks: [
      { id: 101, name: "Running", completed: false },
      { id: 102, name: "Cycling", completed: false },
      { id: 103, name: "Yoga", completed: false },
    ],
    completed: false,
  },
  {
    id: 2,
    name: "Learn a New Language",
    tasks: [
      { id: 201, name: "Enroll in a language course", completed: false },
      {
        id: 202,
        name: "Practice with language learning apps",
        completed: false,
      },
      { id: 203, name: "Join a language exchange group", completed: false },
    ],
    completed: false,
  },
  {
    id: 3,
    name: "Improve Programming Skills",
    tasks: [
      { id: 301, name: "Complete a coding challenge", completed: false },
      { id: 302, name: "Read a book on algorithms", completed: false },
      { id: 303, name: "Contribute to open-source projects", completed: false },
    ],
    completed: false,
  },
  {
    id: 4,
    name: "Healthy Eating",
    tasks: [
      { id: 401, name: "Plan weekly meals", completed: false },
      { id: 402, name: "Shop for fresh produce", completed: false },
      { id: 403, name: "Cook at home", completed: false },
    ],
    completed: false,
  },
  {
    id: 5,
    name: "Financial Planning",
    tasks: [
      { id: 501, name: "Create a monthly budget", completed: false },
      { id: 502, name: "Track daily expenses", completed: false },
      { id: 503, name: "Set up an emergency fund", completed: false },
    ],
    completed: false,
  },
];
