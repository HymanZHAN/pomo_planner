import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: "popl-root",
  template: ` <router-outlet></router-outlet> `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "PomoPlanner";
}
