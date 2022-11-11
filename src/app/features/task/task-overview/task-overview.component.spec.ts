import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AbstractRepository } from "@core/data";
import { MockRepository } from "../data/mock.repository";
import { TaskService } from "../services/task.service";

import { TaskOverviewComponent } from "./task-overview.component";

describe("TaskOverviewComponent", () => {
  let component: TaskOverviewComponent;
  let fixture: ComponentFixture<TaskOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskOverviewComponent, RouterTestingModule],
      providers: [{ provide: AbstractRepository, useClass: MockRepository }, TaskService],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
