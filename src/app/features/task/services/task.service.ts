import { Injectable } from "@angular/core";
import { AbstractRepository, Task } from "@core/data";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor(private repo: AbstractRepository<Task>) {
    this.repo.list().subscribe((tasks) => this.tasks.next(tasks));
  }

  getTaskById(id: number) {
    return this.repo.get(id);
  }
}
