import { AbstractRepository } from "@shared/domain/repository";
import { MockRepository } from "@task-management/repos";
import { BehaviorSubject } from "rxjs";

import { TaskDto } from "./task.dto";

export class TaskFacade {
  private tasks = new BehaviorSubject<TaskDto[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor(private repo: AbstractRepository<TaskDto>) {
    this.repo.list().subscribe((tasks) => this.tasks.next(tasks));
  }

  getTaskById(id: number) {
    return this.repo.get(id);
  }
}

export const mockTaskFacade = new TaskFacade(new MockRepository());
