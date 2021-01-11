import { createAction, props } from '@ngrx/store';
import { Lesson } from '../../../models/Lesson';

export const List = createAction(
  '[TeacherList]: Listing classes',
  props<{ query: { [k: string]: string } }>()
);

export const SuccessfulList = createAction(
  '[TeacherList]: listing complete',
  props<{ lessons: Lesson[] }>()
);

export const UnsuccessfulList = createAction(
  '[TeacherList]: listing error',
  props<{ error: any }>()
);
