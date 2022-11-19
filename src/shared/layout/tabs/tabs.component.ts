import { Component, ChangeDetectionStrategy, NgModule } from "@angular/core";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  constructor() {}
}

@NgModule({
  declarations: [TabsComponent],
  imports: [],
  exports: [TabsComponent],
})
export class TabsComponentModule {}
