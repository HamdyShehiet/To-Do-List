export interface Todo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  date: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  tasks: Todo[];
}