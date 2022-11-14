export interface User {
  id: number;
  email: string;
  name: string | null;
}

export interface Task {
  id: number;
  title: string;
  content: string | null;
  completed: boolean;
  authorId: number;
}
