import { AbstractRepository } from "@shared/domain";
import { Task } from "@task-management/domain/entities";
import { Observable, of } from "rxjs";

export class MockRepository implements AbstractRepository<Task> {
  private tasks: Task[];

  constructor() {
    this.tasks = [
      Task.create({
        slug: "ASDF",
        authorId: 1,
        title: "Task 1",
        content: "Content of Task 1",
        completed: true,
      }),
      Task.create({
        slug: "ASDG",
        authorId: 2,
        title: "Task 2",
        content: "Content of Task 2",
        completed: false,
      }),
    ];
  }

  list(): Observable<Task[]> {
    return of(this.tasks);
  }

  get(slug: string) {
    return of(this.tasks.find((t) => t.slug === slug));
  }
}
