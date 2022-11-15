import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable, switchMap } from "rxjs";

import { Task } from "@core/infra";

import { TaskFacade } from "@task-management/application";

@Component({
  selector: "popl-task-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-detail.component.html",
  styles: [],
})
export class TaskDetailComponent {
  service: TaskFacade;
  route: ActivatedRoute;
  task$: Observable<Task | undefined>;

  constructor() {
    this.route = inject(ActivatedRoute);
    this.service = inject(TaskFacade);

    this.task$ = this.route.paramMap.pipe(
      map((params) => Number(params.get("id"))),
      filter((id) => !isNaN(id)),
      switchMap((id) => this.service.getTaskById(id)),
    );
  }
}
