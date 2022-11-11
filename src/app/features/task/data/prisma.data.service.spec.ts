import { TestBed } from "@angular/core/testing";

import { PrismaDataService } from "./prisma.data.service";

describe("PrismaDataService", () => {
  let service: PrismaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PrismaDataService] });
    service = TestBed.inject(PrismaDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
