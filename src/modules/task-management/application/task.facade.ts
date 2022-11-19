import { AbstractRepository } from "@shared/domain/repository";
import { MockRepository } from "@task-management/repos";
import { BehaviorSubject, filter, map } from "rxjs";
import { Task } from "../domain/entities";

import { TaskDto } from "./task.dto";

export class TaskFacade {
  private tasks = new BehaviorSubject<TaskDto[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor(private repo: AbstractRepository<TaskDto>) {
    this.repo
      .list()
      .pipe(
        map((tasks) =>
          tasks.map((t) => {
            return {
              slug: t.slug,
              title: t.title,
              content: t.content,
              completed: t.completed,
            } as TaskDto;
          }),
        ),
      )
      .subscribe((tasks) => this.tasks.next(tasks));
  }

  getTaskBySlug(slug: string) {
    return this.repo.get(slug).pipe(
      filter((t) => !!t),
      map((t) => {
        return {
          slug: t?.slug,
          title: t?.title,
          content: t?.content,
          completed: t?.completed,
        } as TaskDto;
      }),
    );
  }
}

export const mockTaskFacade = new TaskFacade(new MockRepository());
