import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "goals",
    loadChildren: () => import("./features/goal/goal.routes").then((m) => m.routes),
  },
];
