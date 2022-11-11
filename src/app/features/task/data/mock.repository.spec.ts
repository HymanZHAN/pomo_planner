import { TestBed } from "@angular/core/testing";

import { MockRepository } from "./mock.repository";

describe("MockTaskRepository", () => {
  let service: MockRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [MockRepository] });
    service = TestBed.inject(MockRepository);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
