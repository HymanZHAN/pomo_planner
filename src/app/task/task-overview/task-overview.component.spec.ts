import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { mockTaskFacade, TaskFacade } from "src/modules/task-management/application";

import { TaskOverviewComponent } from "./task-overview.component";

describe("TaskOverviewComponent", () => {
  let component: TaskOverviewComponent;
  let fixture: ComponentFixture<TaskOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskOverviewComponent, RouterTestingModule],
      providers: [{ provide: TaskFacade, useValue: mockTaskFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
