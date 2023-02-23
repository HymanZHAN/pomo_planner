import { AbstractRepository } from "@shared/domain/repository";
import { MockRepository } from "@task-management/repos";
import { BehaviorSubject, filter, map } from "rxjs";
import { Task, TaskStatus } from "../domain/entities";
import { toTaskDto } from "./mappers";

import { TaskDto } from "./task.dto";

export class TaskFacade {
  private tasks = new BehaviorSubject<TaskDto[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor(private repo: AbstractRepository<Task>) {
    this.repo.list().then((tasks) => {
      const result = tasks.map(toTaskDto);
      this.tasks.next(result);
    });
  }

  async getTaskBySlug(slug: string) {
    const task = await this.repo.get(slug);
    return task ? toTaskDto(task) : null;
  }
}

export const mockTaskFacade = new TaskFacade(new MockRepository());
