import { animate, animation, style } from "@angular/animations";

export const expandAnimation = animation(
  [style({ width: "{{start}}" }), animate("{{time}} {{easing}}", style({ width: "*" }))],
  {
    params: {
      start: "0",
      time: "300ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
);

export const shrinkAnimation = animation(
  [style({ width: "*" }), animate("{{time}} {{easing}}", style({ width: "{{end}}" }))],
  {
    params: {
      end: "0",
      time: "300ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
);
