import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const lessonTable = require('../../assets/lessonTable.json');

@Injectable({
  providedIn: 'root',
})
export class Mod1Service {
  lessonTable = lessonTable;
  lesson;
  constructor(private http: HttpClient) {}

  loadLesson(): void {
    this.http.get('assets/lessonTable.json').subscribe((data) => {
      this.lesson = data;
    });
  }
}
