import { importProvidersFrom } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AbstractRepository } from "@core/data";
import { MockRepository } from "../data/mock.repository";
import { TaskService } from "../services/task.service";

import { TaskDetailComponent } from "./task-detail.component";

describe("TaskDetailComponent", () => {
  let component: TaskDetailComponent;
  let fixture: ComponentFixture<TaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailComponent, RouterTestingModule],
      providers: [{ provide: AbstractRepository, useClass: MockRepository }, TaskService],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
