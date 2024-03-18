import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app.routes';


bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, RouterModule.forRoot(appRoutes))]
})
  .catch(err => console.error(err));
