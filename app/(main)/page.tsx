"use client";

import GoalList from "@/components/blocks/home/GoalList";
import { PromptInput } from "@/components/prompt-input";
import { mockGoals } from "@/data/mockGoals";

export default function Page() {
  const handleSetGoal = () => {
    // TODO
  };

  return (
    <div className="flex h-full flex-col">
      <PromptInput />
      <GoalList goals={mockGoals} setGoals={handleSetGoal} />
    </div>
  );
}
