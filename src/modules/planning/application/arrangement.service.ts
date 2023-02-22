import { Week, Day } from "@planning/domain/arrangement";
import { ArrangementManager } from "@planning/domain/arrangement/arrangement.service";
import { MockRepository } from "@planning/repos";
import { TaskDto } from "@task-management/application";
import { ArrangedTaskDto } from "./arranged-task.dto";
import { toArrangedTaskDto } from "./mapper";

export abstract class ArrangementFacade {
  // queries
  abstract getArrangedTasksByWeek(date: Date): ArrangedTaskDto[];

  // commands
  abstract arrangeTaskToWeek(task: TaskDto, week: Week): boolean;
  abstract arrangeTaskToDay(task: TaskDto, day: Day): boolean;
}

export class ArrangementAppService implements ArrangementFacade {
  getArrangedTasksByWeek(date: Date): ArrangedTaskDto[] {
    throw new Error("Method not implemented.");
  }
  arrangeTaskToDay(task: TaskDto, day: Day): boolean {
    throw new Error("Method not implemented.");
  }
  arrangeTaskToWeek(task: TaskDto, week: Week): boolean {
    throw new Error("Method not implemented.");
  }
}

export class MockArrangementAppService implements ArrangementFacade {
  service: ArrangementManager;

  constructor() {
    const repo = new MockRepository();
    this.service = new ArrangementManager(repo);
  }

  getArrangedTasksByWeek(date: Date) {
    const currentWeek = Week.of(date);
    return this.service.getArrangedTaskForDuration(currentWeek).map(toArrangedTaskDto);
  }

  arrangeTaskToDay(task: TaskDto, day: Day): boolean {
    throw new Error("Method not implemented.");
  }
  arrangeTaskToWeek(task: TaskDto, week: Week): boolean {
    throw new Error("Method not implemented.");
  }
}
