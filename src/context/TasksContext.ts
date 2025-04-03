import { createContext, Dispatch, SetStateAction } from "react";

export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date: string;
}

export interface TasksContextType {
  tasks: Todo[];
  setTasks: Dispatch<SetStateAction<Todo[]>>;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
});
