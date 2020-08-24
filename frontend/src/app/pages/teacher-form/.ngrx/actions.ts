import { createAction, props } from '@ngrx/store';
import { Lesson } from '../../../models/Lesson';

export const Cadastrar = createAction(
  '[TeacherForm] Cadastrar',
  props<{ entity: Lesson }>()
);

export const CadastradoComSucesso = createAction(
  '[TeacherForm] Cadastrado com sucesso',
  props<{ entity: Lesson }>()
);

export const CadastradoComErro = createAction(
  '[TeacherForm] Cadastrar com erro',
  props<{ erro: any }>()
);
