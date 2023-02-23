import { Route } from "@angular/router";
import { ArrangementFacade } from "@planning/application/arrangement.service";
import { MockArrangementAppService } from "@planning/application/mock-arrangement.service";
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
