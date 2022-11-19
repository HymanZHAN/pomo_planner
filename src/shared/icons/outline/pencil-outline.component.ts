import { Component, ChangeDetectionStrategy, NgModule, Input } from "@angular/core";

@Component({
  selector: "heroicon-pencil-outline",
  standalone: true,
  template: `
    <svg
      [class]="class"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PencilOutlineComponent {
  @Input() class = "h-6 w-6";
  constructor() {}
}
