import { TestBed } from "@angular/core/testing";

import { MockDataService } from "./mock.data.service";

describe("MockTaskDataService", () => {
  let service: MockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MockDataService] });
    service = TestBed.inject(MockDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
