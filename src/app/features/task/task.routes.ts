import { Route } from "@angular/router";
import { TaskOverviewComponent } from "./task-overview/task-overview.component";

export const routes: Route[] = [
  {
    path: "",
    component: TaskOverviewComponent,
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./task-detail/task-detail.component").then((m) => m.TaskDetailComponent),
      },
    ],
  },
];
