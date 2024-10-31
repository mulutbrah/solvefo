"use client";

import { ITaskList } from "@/types";
import React from "react";

const TaskList: React.FC<ITaskList> = ({ tasks, toggleTaskStatus }) => {
  return (
    <ul className="mt-2 space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex items-center rounded-lg border p-3 shadow-sm ${
            task.isDone
              ? "border-green-200 bg-green-100"
              : "border-gray-200 bg-white"
          }`}
        >
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => toggleTaskStatus(task.id)}
            className="mr-2"
          />
          <span
            className={`flex-1 ${task.isDone ? "text-gray-500 line-through" : "text-gray-800"}`}
          >
            {task.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
