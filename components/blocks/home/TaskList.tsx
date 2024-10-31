import { ITask, ITaskList } from "@/types";
import React from "react";

const TaskList: React.FC<ITaskList> = ({ tasks }) => {
  return (
    <ul className="mb-6 space-y-2">
      {tasks.map((task: ITask) => (
        <li
          key={task.id}
          className="flex items-center rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        >
          <span className="fw-600 flex-1 text-gray-800">{task.name}</span>
          <button
            type="button"
            className="ml-2 text-sm text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            type="button"
            className="ml-2 text-sm text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
