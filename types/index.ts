export interface IGoal {
  id: number;
  name: string;
  tasks: ITask[];
}

export interface ITask {
  id: number;
  name: string;
  isDone: boolean;
}

export interface IGoalList {
  goals: IGoal[];
  setGoals: (goals: IGoal[]) => void;
}

export interface ITaskList {
  tasks: ITask[];
}
