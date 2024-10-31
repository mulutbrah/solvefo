"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Introduce: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [goals, setGoals] = useState<string>("");
  const [learningStyle, setLearningStyle] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const userData = {
      name,
      goals,
      learningStyle,
    };
    console.log(userData);
    //   api

    router.push("/");
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Introduce Yourself</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="goals"
            className="block text-sm font-medium text-gray-700"
          >
            Your Goals:
          </label>
          <input
            id="goals"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            required
            className="mt-1 block h-24 w-full rounded-md border border-gray-300 p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="learningStyle"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Goal Agression:
          </label>
          <select
            id="learningStyle"
            value={learningStyle}
            onChange={(e) => setLearningStyle(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 p-2"
          >
            <option value="">Select one</option>
            <option value="slow">Slow</option>
            <option value="normal">Normal</option>
            <option value="fast">Fast</option>
          </select>
        </div>
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Introduce;
