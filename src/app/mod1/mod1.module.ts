import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Mod1Component } from './mod1.component';

@NgModule({
  declarations: [Mod1Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [Mod1Component],
})
export class Mod1Module {}
