import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../../models/Lesson';

@Injectable({
  providedIn: 'root'
})
export class TeacherListService {
  constructor(
    private http: HttpClient
  ) { }

  list(weekDay: string, time: string, subject: string): Observable<Lesson[]> {
    return this.http
      .get<Lesson[]>('http://localhost:8080/lessons', {
        params: {
          weekDay, time, subject,
        }
      });
  }
}
