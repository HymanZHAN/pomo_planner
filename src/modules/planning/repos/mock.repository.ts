import { ArrangedTask, Week } from "@planning/domain";
import { AbstractRepository } from "@shared/domain";

const tasksStub = [
  ArrangedTask.create({
    content: "This is arranged task 1",
    arrangedTo: Week.of(new Date(2023, 1, 14)),
    completed: true,
  }),
  ArrangedTask.create({
    content: "This is arranged task 2",
    arrangedTo: Week.of(new Date(2023, 2, 14)),
    completed: false,
  }),
  ArrangedTask.create({
    content: "This is arranged task 3",
    arrangedTo: Week.of(new Date(2023, 2, 13)),
    completed: false,
  }),
  ArrangedTask.create({
    content: "This is arranged task 4",
    arrangedTo: Week.of(new Date(2023, 2, 15)),
    completed: true,
  }),
];

export class MockRepository implements AbstractRepository<ArrangedTask> {
  private tasks: ArrangedTask[];

  constructor() {
    this.tasks = tasksStub;
  }

  get(id: string | number): ArrangedTask | undefined {
    throw new Error("Method not implemented.");
  }

  list(): ArrangedTask[] {
    return this.tasks;
  }
}
