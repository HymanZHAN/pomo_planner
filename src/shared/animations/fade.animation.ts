import { animate, animation, style, transition } from "@angular/animations";

export const fadeInAnimation = animation(
  [
    style({
      opacity: "{{startOpacity}}",
      transform: "scale({{startScale}})",
    }),
    animate("{{time}} {{easing}}"),
  ],
  {
    params: {
      startOpacity: 0,
      time: "100ms",
      startScale: "1",
      easing: "ease-out",
    },
  },
);

export const fadeOutAnimation = animation(
  [
    animate(
      "{{time}} {{easing}}",
      style({
        opacity: "{{endOpacity}}",
        transform: "scale({{endScale}})",
      }),
    ),
  ],
  {
    params: {
      time: "100ms",
      easing: "ease-in",
      endOpacity: 0,
      endScale: "1",
    },
  },
);
