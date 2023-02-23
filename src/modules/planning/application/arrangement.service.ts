import { Week, Day, Month } from "@planning/domain/arrangement";
import { TaskDto } from "@task-management/application";
import { ArrangedTaskDto } from "./arranged-task.dto";

export abstract class ArrangementFacade {
  // queries
  abstract getArrangedTasksByDay(date: Date): Promise<ArrangedTaskDto[]>;
  abstract getArrangedTasksByWeek(date: Date): Promise<ArrangedTaskDto[]>;
  abstract getArrangedTasksByMonth(date: Date): Promise<ArrangedTaskDto[]>;

  // commands
  abstract arrangeTaskToDay(content: string, day: Day, taskId?: string | number): boolean;
  abstract arrangeTaskToWeek(content: string, week: Week, taskId?: string | number): boolean;
  abstract arrangeTaskToMonth(content: string, month: Month, taskId?: string | number): boolean;
}

export class ArrangementAppService implements ArrangementFacade {
  getArrangedTasksByDay(date: Date): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }
  getArrangedTasksByWeek(date: Date): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }
  getArrangedTasksByMonth(date: Date): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
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
