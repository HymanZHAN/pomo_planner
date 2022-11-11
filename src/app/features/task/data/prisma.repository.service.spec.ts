import { TestBed } from "@angular/core/testing";

import { PrismaRepository } from "./prisma.repository";

describe("PrismaRepository", () => {
  let service: PrismaRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PrismaRepository] });
    service = TestBed.inject(PrismaRepository);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
