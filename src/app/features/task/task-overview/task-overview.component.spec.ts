import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AbstractRepository } from "@core/infra";

import { MockRepository } from "@task-management/repos";
import { TaskFacade } from "@task-management/application";

import { TaskOverviewComponent } from "./task-overview.component";

describe("TaskOverviewComponent", () => {
  let component: TaskOverviewComponent;
  let fixture: ComponentFixture<TaskOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskOverviewComponent, RouterTestingModule],
      providers: [{ provide: AbstractRepository, useClass: MockRepository }, TaskFacade],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
