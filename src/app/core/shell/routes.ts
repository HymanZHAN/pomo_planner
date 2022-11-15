import { Routes } from "@angular/router";
import { ShellComponent } from "./shell.component";

export const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    providers: [],

    children: [
      {
        path: "goals",
        loadChildren: () => import("@features/goal/goal.routes").then((m) => m.routes),
      },
      {
        path: "plans",
        loadChildren: () => import("@features/plan/plan.routes").then((m) => m.routes),
      },
      {
        path: "tasks",
        loadChildren: () => import("@features/task/task.routes").then((m) => m.routes),
      },
    ],
  },
];
