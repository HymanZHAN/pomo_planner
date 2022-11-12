import { animate, animation, style } from "@angular/animations";

export const slideInXAnimation = animation(
  [
    style({
      transform: "translateX({{start}})",
    }),
    animate(
      "{{time}} {{easing}}",
      style({
        transform: "translateX({{end}})",
      }),
    ),
  ],
  {
    params: {
      start: "-100%",
      end: "0",
      time: "300ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
);
export const slideOutXAnimation = animation(
  [
    animate(
      "{{time}} {{easing}}",
      style({
        transform: "translateX({{end}})",
      }),
    ),
  ],
  {
    params: {
      end: "-100%",
      time: "300ms",
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
);
