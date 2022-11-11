import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TASK_DATA } from "../task.routes";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs";

@Component({
  selector: "popl-task-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-detail.component.html",
  styles: [],
})
export class TaskDetailComponent {
  dataService;
  task$;
  route;

  constructor() {
    this.route = inject(ActivatedRoute);
    this.dataService = inject(TASK_DATA);

    this.task$ = this.route.paramMap.pipe(
      switchMap((params) => this.dataService.get(Number(params.get("id")))),
    );
  }
}
