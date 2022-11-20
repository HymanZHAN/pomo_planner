import { transition, trigger, useAnimation } from "@angular/animations";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router, RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

import {
  fadeInAnimation,
  fadeOutAnimation,
  slideInXAnimation,
  slideOutXAnimation,
  animContainer,
} from "src/shared/animations";
import { expandAnimation, shrinkAnimation } from "src/shared/animations/resize.animation";
import { ClickOutsideDirective } from "@shared/directives/click-outside.directive";
import {
  XOutlineComponent,
  SearchSolidComponent,
  LogoSolidComponent,
  UserCircleOutlineComponent,
  BookOpenOutlineComponent,
  DocumentTextOutlineComponent,
  PencilOutlineComponent,
  HeroBars3BottomLeftComponent,
  HeroCalendarComponent,
  HeroHomeComponent,
  HeroChevronDoubleLeftComponent,
  HeroRectangleStackComponent,
  HeroFlagComponent,
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
    RouterLink,
    RouterLinkActive,
    ClickOutsideDirective,
    HeroCalendarComponent,
    HeroChevronDoubleLeftComponent,
    HeroHomeComponent,
    HeroFlagComponent,
    HeroRectangleStackComponent,
    XOutlineComponent,
    SearchSolidComponent,
    LogoSolidComponent,
    UserCircleOutlineComponent,
    BookOpenOutlineComponent,
    PencilOutlineComponent,
    HeroBars3BottomLeftComponent,
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
export class ShellComponent {
  isProfileDropdownOpen = false;
  isSidebarOpen = true;

  searchTerm = "";

  constructor(private router: Router) {}

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
