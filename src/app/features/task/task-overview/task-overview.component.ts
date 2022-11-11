import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";
import { TaskService } from "../services/task.service";

@Component({
  selector: "popl-task-overview",
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterOutlet],
  templateUrl: "./task-overview.component.html",
  styles: [],
})
export class TaskOverviewComponent {
  service: TaskService;

  constructor() {
    this.service = inject(TaskService);
  }
}
