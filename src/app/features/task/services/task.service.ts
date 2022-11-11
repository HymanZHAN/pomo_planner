import { inject, Injectable } from "@angular/core";
import { Task } from "@core/data";
import { BehaviorSubject } from "rxjs";
import { TASK_DATA } from "../task.routes";

@Injectable()
export class TaskService {
  repo;

  private tasks = new BehaviorSubject<Task[]>([]);
  readonly tasks$ = this.tasks.asObservable();

  constructor() {
    this.repo = inject(TASK_DATA);
    this.repo.list().subscribe(this.tasks);
  }
}
