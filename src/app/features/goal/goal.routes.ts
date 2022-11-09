import { Route } from '@angular/router';
import { GoalListComponent } from './goal-list/goal-list.component';

export const routes: Route[] = [
  {
    path: '',
    component: GoalListComponent,
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./goal-detail/goal-detail.component').then(
            (m) => m.GoalDetailComponent
          ),
      },
    ],
  },
];
