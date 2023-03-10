import { Component, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "heroicon-bars-3-bottom-left",
  standalone: true,
  template: `
    <svg
      class="w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBars3BottomLeftComponent {
  @Input() class = "h-6 w-6";
  @Input() solid = false;
  constructor() {}
}
