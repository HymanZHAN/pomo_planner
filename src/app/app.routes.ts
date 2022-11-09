import { Route } from "@angular/router";
import { AppComponent } from "./app.component";

export const routes: Route[] = [
  {
    path: "goals",
    loadChildren: () => import("./features/goal/goal.routes").then((m) => m.routes),
  },
];
