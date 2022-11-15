import { TestBed } from "@angular/core/testing";
import { AbstractRepository } from "@core/infra";

import { MockRepository } from "@task-management/repos";

import { TaskFacade } from "./task.facade";

describe("TaskService", () => {
  let service: TaskFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskFacade, { provide: AbstractRepository, useClass: MockRepository }],
    });
    service = TestBed.inject(TaskFacade);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
