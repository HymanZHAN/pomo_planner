import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

import { TaskFacade } from "@task-management/application";

@Component({
  selector: "popl-task-overview",
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterOutlet],
  templateUrl: "./task-overview.component.html",
  styles: [],
})
export class TaskOverviewComponent {
  service: TaskFacade;

  constructor() {
    this.service = inject(TaskFacade);
  }
}
