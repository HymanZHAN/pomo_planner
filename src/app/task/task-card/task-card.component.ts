import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "popl-task-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./task-card.component.html",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCardComponent {}
