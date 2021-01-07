import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TeacherFormService } from '../teacher-form.service';
import * as LessonActions from './actions';

@Injectable()
export class LessonEffects {

  constructor(
    private actions$: Actions,
    private service: TeacherFormService,
    private router: Router,
  ) { }

  saveLesson$ = createEffect(() => this.actions$
    .pipe(
      ofType(LessonActions.Cadastrar),
      mergeMap(action => this.service
        .save(action.entity)
        .pipe(
          map(l => {
            this.router.navigateByUrl('/');
            return LessonActions.CadastradoComSucesso({ entity: l });
          })
        )
      )
    )
  );
}