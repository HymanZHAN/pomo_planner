import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArrangementFacade } from "@planning/application/arrangement.service";
import { ArrangedTaskDto } from "@planning/application/arranged-task.dto";

@Component({
  selector: "popl-plan-overview",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./plan-overview.component.html",
  styles: [],
})
export class PlanOverviewComponent {
  private service: ArrangementFacade;
  tasksForTheWeek: ArrangedTaskDto[] = [];
  trackById = (index: number, item: ArrangedTaskDto) => item.id;

  constructor() {
    this.service = inject(ArrangementFacade);
  }

  handleWeekChange(weekNumber: number) {
    const weekDate = new Date(2023, weekNumber, 14);
    this.tasksForTheWeek = this.service.getArrangedTasksByWeek(weekDate);
  }
}
