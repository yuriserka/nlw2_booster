import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
      ofType(LessonActions.List),
      mergeMap(action => this.service
        .list(action.query['week_day'], action.query['time'], action.query['subject'])
        .pipe(
          map(lessons => LessonActions.SuccessfulList({ lessons })),
          catchError(error => [LessonActions.UnsuccessfulList({ error })]),
        )
      )
    )
  );
}