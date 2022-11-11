import { TestBed } from "@angular/core/testing";
import { MockDataService } from "../data/mock.data.service";
import { TASK_DATA } from "../task.routes";

import { TaskService } from "./task.service";

describe("TaskService", () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService, { provide: TASK_DATA, useClass: MockDataService }],
    });
    service = TestBed.inject(TaskService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
