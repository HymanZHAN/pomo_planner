import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ArrangementFacade } from "@planning/application/arrangement.service";
import { MockArrangementAppService } from "@planning/application/mock-arrangement.service";

import { PlanOverviewComponent } from "./plan-overview.component";

describe("PlanOverviewComponent", () => {
  let component: PlanOverviewComponent;
  let fixture: ComponentFixture<PlanOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanOverviewComponent],
      providers: [{ provide: ArrangementFacade, useClass: MockArrangementAppService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
