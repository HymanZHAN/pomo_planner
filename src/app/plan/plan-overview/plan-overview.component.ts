import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ArrangementFacade } from "@planning/application/arrangement.service";
import { ArrangedTaskDto } from "@planning/application/arranged-task.dto";

@Component({
  selector: "popl-plan-overview",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./plan-overview.component.html",
  styles: [],
})
export class PlanOverviewComponent {
  private service: ArrangementFacade;
  tasksForTheWeek: ArrangedTaskDto[] = [];
  searchText: string = "";

  constructor() {
    this.service = inject(ArrangementFacade);
  }

  trackById = (index: number, item: ArrangedTaskDto) => item.id;

  async handleWeekChange(weekNumber: number) {
    const weekDate = new Date(2023, weekNumber, 14);
    this.tasksForTheWeek = await this.service.listArrangedTasksByWeek(weekDate);
  }

  async searchArrangedTasks() {
    this.tasksForTheWeek = await this.service.searchArrangedTasks(this.searchText);
  }
}
