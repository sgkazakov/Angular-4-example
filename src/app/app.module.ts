import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { ViewChildComponent } from './components/view-content-child/view-child/view-child.component';
import { ContentChildComponent } from './components/view-content-child/content-child/content-child.component';
import { CombineChildComponent } from './components/view-content-child/combine-child/combine-child.component';
import { ValidationRecipeComponent } from './validation-recipe/validation-recipe.component';
import { HelperService } from './validation-recipe/helper-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe,
    ViewChildComponent,
    ContentChildComponent,
    CombineChildComponent,
    ValidationRecipeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
