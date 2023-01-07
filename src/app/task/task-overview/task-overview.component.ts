import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

import { TaskFacade } from "src/modules/task-management/application";

@Component({
  selector: "popl-task-overview",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./task-overview.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskOverviewComponent {
  service: TaskFacade;

  constructor() {
    this.service = inject(TaskFacade);
  }
}
