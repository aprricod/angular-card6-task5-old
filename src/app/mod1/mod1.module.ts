import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mod1Component } from './mod1.component';
import { Mod1Service } from './mod1.service';

@NgModule({
  declarations: [Mod1Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [Mod1Service],
  exports: [Mod1Component],
})
export class Mod1Module {}
