import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TeacherFormService } from '../teacher-form.service';
import * as LessonActions from './actions';

@Injectable()
export class LessonEffects {

  constructor(
    private actions$: Actions,
    private service: TeacherFormService,
  ) { }

  saveLesson$ = createEffect(() => this.actions$
    .pipe(
      ofType(LessonActions.Cadastrar),
      mergeMap(action => this.service
        .save(action.entity)
        .pipe(
          map(l => LessonActions.CadastradoComSucesso({ entity: l }))
        )
      )
    )
  );
}