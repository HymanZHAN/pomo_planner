import { Route } from "@angular/router";

import { AbstractRepository } from "@core/infra";

import { MockRepository } from "@task-management/repos";
import { TaskFacade } from "@task-management/application";

import { TaskOverviewComponent } from "./task-overview/task-overview.component";

export const routes: Route[] = [
  {
    path: "",
    component: TaskOverviewComponent,
    providers: [{ provide: AbstractRepository, useClass: MockRepository }, TaskFacade],
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./task-detail/task-detail.component").then((m) => m.TaskDetailComponent),
      },
    ],
  },
];
