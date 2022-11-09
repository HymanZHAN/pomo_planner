import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['/goals']">Goals</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Pomo Planner';
}
