import { importProvidersFrom } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { MockDataService } from "../data/mock.data.service";
import { TASK_DATA } from "../task.routes";

import { TaskOverviewComponent } from "./task-overview.component";

describe("TaskOverviewComponent", () => {
  let component: TaskOverviewComponent;
  let fixture: ComponentFixture<TaskOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskOverviewComponent, RouterTestingModule],
      providers: [{ provide: TASK_DATA, useClass: MockDataService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
