import { animateChild, query, transition, trigger } from "@angular/animations";

export const animContainer = trigger("animContainer", [
  transition(":enter, :leave", [query("@*", animateChild(), { optional: true })]),
]);
