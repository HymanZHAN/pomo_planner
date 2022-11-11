import { Component } from "@angular/core";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  selector: "popl-root",
  template: `
    <h1>{{ title }} is running!</h1>
    <a [routerLink]="['/goals']">Goals</a> <br />
    <a [routerLink]="['/plans']">Plans</a> <br />
    <a [routerLink]="['/tasks']">Tasks</a> <br />
    <router-outlet></router-outlet>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "PomoPlanner";
}
