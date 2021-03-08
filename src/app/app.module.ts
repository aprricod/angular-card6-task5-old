import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    Mod1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
