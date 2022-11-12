import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "heroicon-home-outline",
  standalone: true,
  template: `
    <!-- Heroicon name: outline/home -->
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
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeOutlineComponent {
  @Input() class = "h-6 w-6";
  constructor() {}
}
