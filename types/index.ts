export interface IGoal {
  id: number;
  name: string;
  tasks: ITask[];
  completed: boolean;
}

export interface ITask {
  id: number;
  name: string;
  completed: boolean;
}

export interface IGoalList {
  goals: IGoal[];
  setGoals: (goals: IGoal[]) => void;
}

export interface ITaskList {
  tasks: ITask[];
  toggleTaskStatus: (taskId: number) => void;
}
