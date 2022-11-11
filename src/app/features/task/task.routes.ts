import { InjectionToken } from "@angular/core";
import { Route } from "@angular/router";

import { Task, IDataService } from "@core/data";

import { MockDataService } from "./data/mock.data.service";
import { TaskOverviewComponent } from "./task-overview/task-overview.component";

export const TASK_DATA = new InjectionToken<IDataService<Task>>("task data");

export const routes: Route[] = [
  {
    path: "",
    component: TaskOverviewComponent,
    providers: [{ provide: TASK_DATA, useClass: MockDataService }],
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./task-detail/task-detail.component").then((m) => m.TaskDetailComponent),
      },
    ],
  },
];
