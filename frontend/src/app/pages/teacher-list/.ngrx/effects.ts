import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TeacherListService } from '../teacher-list.service';
import * as LessonActions from './actions';

@Injectable()
export class LessonEffects {

  constructor(
    private actions$: Actions,
    private service: TeacherListService
  ) { }

  loadLessons$ = createEffect(() => this.actions$
    .pipe(
      ofType(LessonActions.Listar),
      mergeMap(() => this.service
        .list('1', '11:00', 'Matemática')
        .pipe(
          map(lessons => LessonActions.ListadoComSucesso({ list: lessons }))
        )
      )
    )
  );
}