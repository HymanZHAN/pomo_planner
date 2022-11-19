import { Route } from "@angular/router";
import { PlanOverviewComponent } from "./plan-overview/plan-overview.component";

export const routes: Route[] = [
  {
    path: "",
    component: PlanOverviewComponent,
    children: [
      {
        path: ":id",
        loadComponent: () =>
          import("./plan-detail/plan-detail.component").then((m) => m.PlanDetailComponent),
      },
    ],
  },
];
