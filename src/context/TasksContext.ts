import { User } from "../store/Types"; 
import { Todo } from "../store/Types";
import { createContext, Dispatch, SetStateAction } from "react";


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
