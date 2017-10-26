import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ViewChildComponent } from './components/view-content-child/view-child/view-child.component';
import { ContentChildComponent } from './components/view-content-child/content-child/content-child.component';
import { ParentComponent } from './components/view-content-child/parent/parent.component';
import { MainAppModule } from './main-app/main-app.module';
import { MainAppComponent } from './main-app/main-app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule,
    MainAppModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
