import { AbstractRepository } from "@shared/domain";
import { Priority, Task, TaskStatus } from "@task-management/domain/entities";

const taskStub = [
  Task.create({
    slug: "ABCD",
    authorId: 1,
    title: "Task 1",
    content: "Content of Task 1",
    status: TaskStatus.DONE,
    priority: Priority.P1,
  }),
  Task.create({
    slug: "EFGH",
    authorId: 2,
    title: "Task 2",
    content: "Content of Task 2",
    status: TaskStatus.ONGOING,
    priority: Priority.P3,
  }),
];

export class MockRepository implements AbstractRepository<Task> {
  private tasks: Task[];

  constructor() {
    this.tasks = taskStub;
  }

  get(slug: string): Promise<Task | null> {
    return Promise.resolve(this.tasks.find((t) => t.slug === slug) ?? null);
  }

  listBy(predicate: (i: Task) => boolean): Promise<Task[]> {
    return Promise.resolve(this.tasks.filter(predicate));
  }
}
