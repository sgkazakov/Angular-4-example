import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, PreloadingStrategy, Route, PreloadAllModules } from "@angular/router"

import { AppComponent } from './app.component';
import { ViewChildComponent } from './components/view-content-child/view-child/view-child.component';
import { ContentChildComponent } from './components/view-content-child/content-child/content-child.component';

import { ParentComponent } from './components/view-content-child/parent/parent.component';
import { MainAppModule } from './main-app/main-app.module';
import { MainAppComponent } from './main-app/main-app.component';
import { Observable } from 'rxjs/Observable';

export class CustomPreload implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null);
  }

}

export const ROUTES: Routes = [
  { path: "main", data: { preload: true }, loadChildren: "./main-app/main-app.module#MainAppModule" },
  // the base path MUST be last
  { path: "**", redirectTo: "/" },
]

@NgModule({
  declarations: [
    AppComponent
  ],

  providers: [CustomPreload],
  imports: [
    BrowserModule,
    // if you want to preload everything use PreloadAllModules
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload })
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
