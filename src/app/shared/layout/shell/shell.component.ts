import { animate, state, style, transition, trigger, useAnimation } from "@angular/animations";
import { CommonModule, Location } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from "@angular/router";

import {
  fadeInAnimation,
  fadeOutAnimation,
  slideInXAnimation,
  slideOutXAnimation,
  animContainer,
} from "@shared/animations";
import { expandAnimation, shrinkAnimation } from "@shared/animations/resize.animation";
import { ClickOutsideDirective } from "@shared/directives/click-outside.directive";
import {
  HomeOutlineComponent,
  XOutlineComponent,
  SearchSolidComponent,
  LogoSolidComponent,
  UserCircleOutlineComponent,
  BookOpenOutlineComponent,
  PencilOutlineComponent,
  MenuAltTwoOutlineComponent,
  DocumentTextOutlineComponent,
} from "@shared/icons";

@Component({
  selector: "popl-shell",
  standalone: true,
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLinkWithHref,
    RouterLinkActive,
    ClickOutsideDirective,
    HomeOutlineComponent,
    XOutlineComponent,
    SearchSolidComponent,
    LogoSolidComponent,
    UserCircleOutlineComponent,
    BookOpenOutlineComponent,
    PencilOutlineComponent,
    MenuAltTwoOutlineComponent,
    DocumentTextOutlineComponent,
  ],
  animations: [
    trigger("profileDropdownAnim", [
      transition(":enter", useAnimation(fadeInAnimation, { params: { startScale: "0.9" } })),
      transition(":leave", useAnimation(fadeOutAnimation, { params: { endScale: "0.9" } })),
    ]),
    trigger("leftSlideInOut", [
      transition(":enter", useAnimation(slideInXAnimation)),
      transition(":leave", useAnimation(slideOutXAnimation)),
    ]),
    trigger("shrinkOutExpandIn", [
      transition(":enter", useAnimation(expandAnimation)),
      transition(":leave", useAnimation(shrinkAnimation)),
    ]),
    trigger("sidebarOverlay", [
      transition(
        ":enter",
        useAnimation(fadeInAnimation, {
          params: { time: "300ms", easing: "ease" },
        }),
      ),
      transition(
        ":leave",
        useAnimation(fadeOutAnimation, {
          params: { time: "300ms", easing: "ease" },
        }),
      ),
    ]),
    animContainer,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent implements OnInit {
  isProfileDropdownOpen = false;
  isSidebarOpen = true;

  searchTerm = "";

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {
    this.location.onUrlChange(() => {
      this.closeSidebar();
    });
  }

  toggleProfileDropdown() {
    this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
  }
  closeProfileDropdown() {
    this.isProfileDropdownOpen = false;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  signOut() {
    console.log("User signed out");
  }

  onSearchBoxInput(event: Event) {
    const inputBox = event.target as HTMLInputElement;
    this.searchTerm = inputBox.value;
  }

  onSearchBoxEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.router
        .navigate(["search"], {
          queryParams: { search: this.searchTerm },
        })
        .then(() => {
          this.searchTerm = "";
        });
    }
  }
}
