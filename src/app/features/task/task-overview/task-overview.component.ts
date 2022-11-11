import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TASK_DATA } from "../task.routes";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  selector: "popl-task-overview",
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterOutlet],
  templateUrl: "./task-overview.component.html",
  styles: [],
})
export class TaskOverviewComponent {
  tasks$;
  constructor() {
    this.tasks$ = inject(TASK_DATA).list();
  }
}
