import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "popl-goal-list",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: "./goal-list.component.html",
  styleUrls: ["./goal-list.component.scss"],
})
export class GoalListComponent {
  constructor() {}
}
