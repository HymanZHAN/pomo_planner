import { PriorityType, TaskStatusType } from "../domain/entities";

export interface TaskDto {
  slug: string;
  title: string;
  content: string | null;
  completed: boolean;
  status: TaskStatusType;
  priority: PriorityType;
}
