import { Week, Day, Month } from "@planning/domain/arrangement";
import { ArrangedTaskDto } from "./arranged-task.dto";

export abstract class ArrangementFacade {
  // queries - by time
  abstract listArrangedTasksByDay(date: Date): Promise<ArrangedTaskDto[]>;
  abstract listArrangedTasksByWeek(date: Date): Promise<ArrangedTaskDto[]>;
  abstract listArrangedTasksByMonth(date: Date): Promise<ArrangedTaskDto[]>;

  // queries - by text
  abstract searchArrangedTasks(searchText: string): Promise<ArrangedTaskDto[]>;

  // commands
  abstract arrangeTaskToDay(content: string, day: Day, taskId?: string | number): boolean;
  abstract arrangeTaskToWeek(content: string, week: Week, taskId?: string | number): boolean;
  abstract arrangeTaskToMonth(content: string, month: Month, taskId?: string | number): boolean;
}

export class ArrangementAppService implements ArrangementFacade {
  searchArrangedTasks(searchText: string): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }

  listArrangedTasksByDay(date: Date): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }
  listArrangedTasksByWeek(date: Date): Promise<ArrangedTaskDto[]> {
    throw new Error("Method not implemented.");
  }
  listArrangedTasksByMonth(date: Date): Promise<ArrangedTaskDto[]> {
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
