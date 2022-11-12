import { Directive, ElementRef, EventEmitter, HostListener, NgModule, Output } from "@angular/core";

@Directive({
  standalone: true,
  selector: "[poplClickOutside]",
})
export class ClickOutsideDirective {
  constructor(private elementRef: ElementRef) {}

  @Output()
  clickedOutside = new EventEmitter();

  @HostListener("document:click", ["$event.target"])
  onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickedOutside.emit();
    }
  }
}
