import { AbstractRepository } from "@shared/domain";
import { TaskDto } from "@task-management/application";
import { ArrangedTask } from "./arranged-task.entity";
import { DurationType } from "./duration";

export class ArrangementManager {
  constructor(private repo: AbstractRepository<ArrangedTask>) {}

  async getArrangedTaskForDuration(duration: DurationType) {
    const tasks = await this.repo.listBy((t) => t.arrangedTo.equals(duration));
    return tasks;
  }

  async searchArrangedTasks(searchText: string) {
    const tasks = await this.repo.listBy((t) =>
      t.content.toLowerCase().includes(searchText.toLowerCase()),
    );
    return tasks;
  }

  arrangeTask(task: TaskDto) {}
}
