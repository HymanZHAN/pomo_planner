import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PlanProgressComponent } from "./plan-progress.component";

describe("PlanProgressComponent", () => {
  let component: PlanProgressComponent;
  let fixture: ComponentFixture<PlanProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanProgressComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
