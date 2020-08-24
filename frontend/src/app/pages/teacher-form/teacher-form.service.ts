import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../../models/Lesson';

@Injectable({
  providedIn: 'root'
})
export class TeacherFormService {
  constructor(
    private http: HttpClient
  ) { }

  save(lesson: Lesson): Observable<Lesson> {
    return this.http
      .post<Lesson>('http://localhost:8080/lessons', lesson);
  }
}
