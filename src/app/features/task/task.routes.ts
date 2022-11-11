import { Route } from "@angular/router";

import { AbstractRepository } from "@core/data";

import { MockRepository } from "./data/mock.repository";
import { TaskService } from "./services/task.service";
import { TaskOverviewComponent } from "./task-overview/task-overview.component";

export const routes: Route[] = [
  {
    path: "",
    component: TaskOverviewComponent,
    providers: [{ provide: AbstractRepository, useClass: MockRepository }, TaskService],
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./task-detail/task-detail.component").then((m) => m.TaskDetailComponent),
      },
    ],
  },
];
