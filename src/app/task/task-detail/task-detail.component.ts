import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { filter, map, Observable, of, switchMap } from "rxjs";

import { TaskDto, TaskFacade } from "src/modules/task-management/application";

@Component({
  selector: "popl-task-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-detail.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDetailComponent {
  service: TaskFacade;
  route: ActivatedRoute;
  task$: Observable<TaskDto | undefined>;

  constructor() {
    this.route = inject(ActivatedRoute);
    this.service = inject(TaskFacade);

    this.task$ = this.route.paramMap.pipe(
      map((params) => params.get("slug")),
      filter((slug) => slug !== null),
      switchMap((slug) => of(this.service.getTaskBySlug(slug!))),
    );
  }
}
