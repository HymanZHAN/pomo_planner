import { Injectable } from "@angular/core";
import { AbstractRepository, Task } from "@core/infra";
import { Observable, of } from "rxjs";

@Injectable()
export class MockRepository implements AbstractRepository<Task> {
  private tasks: Task[];

  constructor() {
    this.tasks = [
      { id: 1, authorId: 1, title: "Task 1", content: "Content of Task 1", completed: true },
      { id: 2, authorId: 2, title: "Task 2", content: "Content of Task 2", completed: false },
    ];
  }

  list(): Observable<Task[]> {
    return of(this.tasks);
  }

  get(id: number) {
    return of(this.tasks.find((t) => t.id === id));
  }
}
