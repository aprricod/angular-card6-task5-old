import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  data;
  form: FormGroup;
  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      list: fb.array([
        fb.group({
          num: fb.control(''),
          date: fb.control(''),
          theme: fb.control(''),
          homework: fb.control(''),
          note: fb.control(''),
        }),
      ]),
    });
  }

  add() {
    (this.form.get('list') as FormArray).push(this.fb.control(null));
  }

  saveToStorage() {
    localStorage.setItem('Имя', 'Вася');
  }

  getFromStorage() {
    this.data = localStorage.getItem('Имя');
  }

  ngOnInit(): void {}
}
