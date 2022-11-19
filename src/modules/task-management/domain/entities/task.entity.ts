export interface Task {
  id: number;
  title: string;
  content: string | null;
  completed: boolean;
  authorId: number;
}
