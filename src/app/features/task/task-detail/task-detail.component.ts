import { Component, inject, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable, Subject, switchMap, takeUntil } from "rxjs";

import { Task } from "@core/data";

import { TaskService } from "../services/task.service";

@Component({
  selector: "popl-task-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-detail.component.html",
  styles: [],
})
export class TaskDetailComponent {
  service: TaskService;
  route: ActivatedRoute;
  task$: Observable<Task | undefined>;

  constructor() {
    this.route = inject(ActivatedRoute);
    this.service = inject(TaskService);

    this.task$ = this.route.paramMap.pipe(
      map((params) => Number(params.get("id"))),
      filter((id) => !isNaN(id)),
      switchMap((id) => this.service.getTaskById(id)),
    );
  }
}
