import { TestBed } from "@angular/core/testing";
import { AbstractRepository } from "@core/data";
import { MockRepository } from "../data/mock.repository";

import { TaskService } from "./task.service";

describe("TaskService", () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, { provide: AbstractRepository, useClass: MockRepository }],
    });
    service = TestBed.inject(TaskService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
