import { Route } from "@angular/router";

import { mockTaskFacade, TaskFacade } from "src/modules/task-management/application";

import { TaskOverviewComponent } from "./task-overview/task-overview.component";

export const routes: Route[] = [
  {
    path: "",
    component: TaskOverviewComponent,
    providers: [{ provide: TaskFacade, useValue: mockTaskFacade }],
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./task-detail/task-detail.component").then((m) => m.TaskDetailComponent),
      },
    ],
  },
];
