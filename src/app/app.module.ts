import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatLoadersModule} from '@angular-material-extensions/loaders';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatLoadersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
