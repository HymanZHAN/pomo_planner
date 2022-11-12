import { importProvidersFrom } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CommonModule, Location } from "@angular/common";

import { ShellComponent } from "./shell.component";
import { Router, RouterModule } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

describe("ShellComponent", () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ShellComponent],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
