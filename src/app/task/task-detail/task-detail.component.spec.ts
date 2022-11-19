import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { mockTaskFacade, TaskFacade } from "src/modules/task-management/application";

import { TaskDetailComponent } from "./task-detail.component";

describe("TaskDetailComponent", () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent, RouterTestingModule],
      providers: [{ provide: TaskFacade, useValue: mockTaskFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
