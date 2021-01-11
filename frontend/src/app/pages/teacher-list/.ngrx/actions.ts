import { createAction, props } from '@ngrx/store';
import { Lesson } from '../../../models/Lesson';

export const Listar = createAction(
  '[TeacherList] Listar',
  props<{ query: { [k: string]: string } }>()
);

export const ListadoComSucesso = createAction(
  '[TeacherList] Listado com sucesso',
  props<{ lessons: Lesson[] }>()
);

export const ListadoComErro = createAction(
  '[TeacherList] Listar com erro',
  props<{ error: any }>()
);
