export interface TaskDto {
  id: number;
  title: string;
  content: string | null;
  completed: boolean;
  authorId: number;
}
