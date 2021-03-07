import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  data;
  num: string = '';
  date: string = '';
  theme: string = '';
  homework: string = '';
  note: string = '';

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

  saveNumToStorage() {
    localStorage.setItem('Номер', this.num);
  }

  saveDateToStorage() {
    localStorage.setItem('Дата урока', this.date);
  }

  saveThemeToStorage() {
    localStorage.setItem('Тема урока', this.theme);
  }

  saveHomeworkToStorage() {
    localStorage.setItem('Домашнее задание', this.homework);
  }

  saveNoteToStorage() {
    localStorage.setItem('Примечание', this.note);
  }

  getNoteFromStorage() {
    this.data = localStorage.getItem('Примечание');
  }
  ngOnInit(): void {}
}
