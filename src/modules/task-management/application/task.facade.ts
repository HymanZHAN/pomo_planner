import { AbstractRepository } from "@shared/domain/repository";
import { MockRepository } from "@task-management/repos";
import { BehaviorSubject, filter, map } from "rxjs";
import { Task, TaskStatus } from "../domain/entities";

import { TaskDto } from "./task.dto";

export class TaskFacade {
  private tasks = new BehaviorSubject<TaskDto[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor(private repo: AbstractRepository<Task>) {
    const tasks = this.repo.list().map((t) => {
      return {
        slug: t.slug,
        title: t.title,
        content: t.content,
        completed: t.status === TaskStatus.DONE,
        status: t.status,
      } as TaskDto;
    });
    this.tasks.next(tasks);
  }

  getTaskBySlug(slug: string) {
    const task = this.repo.get(slug);
    if (task) {
      return {
        slug: task?.slug,
        title: task?.title,
        content: task?.content,
        completed: task?.status === TaskStatus.DONE,
        status: task?.status,
        priority: task?.priority,
      } as TaskDto;
    }
    return undefined;
  }
}

export const mockTaskFacade = new TaskFacade(new MockRepository());
