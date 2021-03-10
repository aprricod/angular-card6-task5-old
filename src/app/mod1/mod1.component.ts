import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Mod1Service } from './mod1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css'],
})
export class Mod1Component implements OnInit {
  form: FormGroup;
  constructor(public fb: FormBuilder, public mod1: Mod1Service) {
    this.form = fb.group({
      lessons: fb.array([
        fb.group({
          id: fb.control(''),
          date: fb.control(''),
          theme: fb.control(''),
          homework: fb.control(''),
          note: fb.control(''),
        }),
      ]),
    });
  }

  get lessons() {
    return this.form.get('lessons') as FormArray;
  }

  add() {
    (this.form.get('lessons') as FormArray).push(
      this.fb.group({
        id: this.fb.control(''),
        date: this.fb.control(''),
        theme: this.fb.control(''),
        homework: this.fb.control(''),
        note: this.fb.control(''),
      })
    );
  }

  delete() {
    (this.form.get('lessons') as FormArray).removeAt(
      (this.form.get('lessons') as FormArray).length - 1
    );
  }

  // Тут попытки работы с local storage

  // saveNoteToStorage() {
  //   localStorage.setItem('Примечание', this.note);
  // }

  // getNoteFromStorage() {
  //   this.data = localStorage.getItem('Примечание');
  // }

  ngOnInit(): void {
    this.mod1.loadLesson();
  }
}
