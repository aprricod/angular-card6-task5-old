import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
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
          id: fb.control(null),
          date: fb.control(null, this.dateValidator),
          theme: fb.control(null),
          homework: fb.control(null),
          note: fb.control(null),
        }),
      ]),
    });
  }

  get getLessons() {
    return this.form.get('lessons') as FormArray;
  }

  get getId() {
    return this.form.get('id') as FormControl;
  }

  addRow() {
    (this.form.get('lessons') as FormArray).push(
      this.fb.group({
        id: this.fb.control(null),
        date: this.fb.control(null, this.dateValidator),
        theme: this.fb.control(null),
        homework: this.fb.control(null),
        note: this.fb.control(null),
      })
    );
  }

  // deleteRow() {
  //   (this.form.get('lessons') as FormArray).removeAt(
  //     (this.form.get('lessons') as FormArray).length - 1
  //   );
  // }

  deleteRow(index) {
    if (index > 0) {
      (this.form.get('lessons') as FormArray).removeAt(index);
    } else {
      alert('Эту строку нельзя удалить!');
    }
  }

  // dateValidator(control: FormControl): any {
  //   let dateToUnix = Date.parse(control.value);
  //   if (dateToUnix < Date.now()) {
  //     return { date: true };
  //   }
  //   return null;
  // }

  dateValidator(control: FormControl): any {
    let currentDate = control.value;
    if (moment().isAfter(currentDate, 'day')) {
      return { date: true };
    }
    return null;
  }

  // insert(i) {
  //   this.lessons.insert(
  //     i,
  //     this.fb.group({
  //       id: this.fb.control(''),
  //       date: this.fb.control(''),
  //       theme: this.fb.control(''),
  //       homework: this.fb.control(''),
  //       note: this.fb.control(''),
  //     })
  //   );
  // }

  // delete(i) {
  //   this.lessons.removeAt(i);
  // }

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

// form: FormGroup;
// constructor(public fb: FormBuilder, public mod1: Mod1Service) {
//   this.form = fb.group({
//     lessons: fb.array([
//       fb.group({
//         id: fb.control(''),
//         date: fb.control(''),
//         theme: fb.control(''),
//         homework: fb.control(''),
//         note: fb.control(''),
//       }),
//     ]),
//   });
// }
