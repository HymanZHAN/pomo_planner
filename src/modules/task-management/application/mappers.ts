import { Task, TaskStatus } from "@task-management/domain/entities";
import { TaskDto } from "./task.dto";

export const toTaskDto = (t: Task): TaskDto => ({
  id: t.id,
  slug: t.slug,
  title: t.title,
  content: t.content,
  completed: t.status === TaskStatus.DONE,
  status: t.status,
  priority: t.priority,
});
