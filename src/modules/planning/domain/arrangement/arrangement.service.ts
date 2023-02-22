import { AbstractRepository } from "@shared/domain";
import { TaskDto } from "@task-management/application";
import { ArrangedTask } from "./arranged-task.entity";
import { Duration } from "./duration";

export class ArrangementManager {
  constructor(private repo: AbstractRepository<ArrangedTask>) {}

  getArrangedTaskForDuration(duration: Duration) {
    return this.repo.list().filter((t) => t.arrangedTo.equals(duration));
  }

  arrangeTask(task: TaskDto) {}
}
