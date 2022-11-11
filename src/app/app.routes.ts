import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "goals",
    loadChildren: () => import("./features/goal/goal.routes").then((m) => m.routes),
  },
  {
    path: "plans",
    loadChildren: () => import("./features/plan/plan.routes").then((m) => m.routes),
  },
  {
    path: "tasks",
    loadChildren: () => import("./features/task/task.routes").then((m) => m.routes),
  },
];
