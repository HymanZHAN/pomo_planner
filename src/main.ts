import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { provideRouter, provideRoutes } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";

import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule), provideRouter(routes)],
}).catch((err) => console.error(err));
