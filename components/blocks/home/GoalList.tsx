"use client";

import { IGoalList } from "@/types";
import React from "react";
import TaskList from "./TaskList";

const GoalList: React.FC<IGoalList> = ({ goals, setGoals }) => {
  const handleRemoveGoal = (index: number) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div>
      {goals.length > 0 && (
        <ul className="mt-4">
          {goals.map((goal, index) => (
            <>
              <li key={index} className="mb-2 flex items-center">
                <span className="flex-1">{goal.name}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveGoal(index)}
                  className="ml-2 rounded-md bg-red-600 px-2 py-1 text-white hover:bg-red-700"
                >
                  Remove
                </button>
              </li>
              <TaskList tasks={goal.tasks} />
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoalList;
