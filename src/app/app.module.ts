import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Mod1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
