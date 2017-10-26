import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from "@angular/router"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ViewChildComponent } from './components/view-content-child/view-child/view-child.component';
import { ContentChildComponent } from './components/view-content-child/content-child/content-child.component';


import { ValidationRecipeComponent } from './validation-recipe/validation-recipe.component';
import { HelperService } from './validation-recipe/helper-service';

import { ParentComponent } from './components/view-content-child/parent/parent.component';
import { MainAppModule } from './main-app/main-app.module';
import { MainAppComponent } from './main-app/main-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe,
    ViewChildComponent,
    ContentChildComponent,

    ValidationRecipeComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule

    
  ],

  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
