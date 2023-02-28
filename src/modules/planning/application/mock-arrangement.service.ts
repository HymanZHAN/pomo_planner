import { Day, Month, Week } from "@planning/domain";
import { ArrangementManager } from "@planning/domain/arrangement/arrangement.service";
import { MockRepository } from "@planning/repos";
import { ArrangedTaskDto } from "./arranged-task.dto";
import { ArrangementFacade } from "./arrangement.service";
import { toArrangedTaskDto } from "./mapper";

export class MockArrangementAppService implements ArrangementFacade {
  service: ArrangementManager;

  constructor() {
    const repo = new MockRepository();
    this.service = new ArrangementManager(repo);
  }

  searchArrangedTask(searchText: string): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }

  async listArrangedTasksByWeek(date: Date) {
    const currentWeek = Week.of(date);
    const tasks = await this.service.getArrangedTaskForDuration(currentWeek);
    return tasks.map(toArrangedTaskDto);
  }

  async listArrangedTasksByDay(date: Date): Promise<ArrangedTaskDto[]> {
    const today = Day.of(date);
    const tasks = await this.service.getArrangedTaskForDuration(today);
    return tasks.map(toArrangedTaskDto);
  }

  async listArrangedTasksByMonth(date: Date): Promise<ArrangedTaskDto[]> {
    const currentMonth = Month.of(date);
    const tasks = await this.service.getArrangedTaskForDuration(currentMonth);
    return tasks.map(toArrangedTaskDto);
  }

  arrangeTaskToDay(content: string, day: Day, taskId?: string | number | undefined): boolean {
    throw new Error("Method not implemented.");
  }
  arrangeTaskToWeek(content: string, week: Week, taskId?: string | number | undefined): boolean {
    throw new Error("Method not implemented.");
  }
  arrangeTaskToMonth(content: string, month: Month, taskId?: string | number | undefined): boolean {
    throw new Error("Method not implemented.");
  }
}
