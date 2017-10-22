import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomPipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
