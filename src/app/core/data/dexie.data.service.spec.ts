import { TestBed } from "@angular/core/testing";

import { DexieDataService } from "./dexie.data.service";

describe("DexieDataService", () => {
  let service: DexieDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DexieDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
