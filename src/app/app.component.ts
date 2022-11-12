import { Component } from "@angular/core";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref],
  selector: "popl-root",
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "PomoPlanner";
}
