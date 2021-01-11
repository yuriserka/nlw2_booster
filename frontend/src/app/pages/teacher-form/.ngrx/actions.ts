import { createAction, props } from '@ngrx/store';
import { Lesson } from '../../../models/Lesson';

export const Register = createAction(
  '[TeacherForm]: registering',
  props<{ entity: Lesson }>()
);

export const SuccessfulRegister = createAction(
  '[TeacherForm]: registration complete',
  props<{ entity: Lesson }>()
);

export const UnsuccessfulRegister = createAction(
  '[TeacherForm]: error registering class',
  props<{ erro: any }>()
);
