import { Injectable } from "@angular/core";
import { Task } from "@core/data";
import { Observable, of } from "rxjs";
import { IDataService } from "@core/data";

@Injectable()
export class MockDataService implements IDataService<Task> {
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
