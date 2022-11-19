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
        loadChildren: () => import("src/app/goal/goal.routes").then((m) => m.routes),
      },
      {
        path: "plans",
        loadChildren: () => import("src/app/plan/plan.routes").then((m) => m.routes),
      },
      {
        path: "tasks",
        loadChildren: () => import("src/app/task/task.routes").then((m) => m.routes),
      },
    ],
  },
];
