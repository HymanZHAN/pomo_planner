import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "heroicon-menu-alt-two-outline",
  standalone: true,
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h7"
      />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuAltTwoOutlineComponent {
  @Input() class = "h-6 w-6";
  constructor() {}
}
