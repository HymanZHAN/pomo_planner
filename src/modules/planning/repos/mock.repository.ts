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

  async get(id: string | number): Promise<ArrangedTask | null> {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<ArrangedTask[]> {
    return this.tasks;
  }
}
