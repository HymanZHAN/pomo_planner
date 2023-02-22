import { Route } from "@angular/router";
import {
  ArrangementFacade,
  MockArrangementAppService,
} from "@planning/application/arrangement.service";
import { PlanOverviewComponent } from "./plan-overview/plan-overview.component";

export const routes: Route[] = [
  {
    path: "",
    providers: [{ provide: ArrangementFacade, useClass: MockArrangementAppService }],
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
