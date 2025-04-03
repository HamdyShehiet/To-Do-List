import { createContext, Dispatch, SetStateAction } from "react";
import { User } from "../App";
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
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  setTasks: () => {},
  users: [],
  setUsers:()=>{},
});
