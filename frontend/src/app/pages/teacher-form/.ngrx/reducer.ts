import { createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Lesson } from '../../../models/Lesson';
import * as Actions from './actions';
import { ITeacherFormState } from './state';

const entityAdapter = createEntityAdapter<Lesson>();

const initialState = entityAdapter.getInitialState({
  enviando: false,
});

const lessonReducer = createReducer(
  initialState,
  on(Actions.Cadastrar, (state, _) => {
    return { ...state, enviando: true };
  }),
  on(Actions.CadastradoComSucesso, (state, action) => {
    return entityAdapter.addOne(action.entity, {
      ...state,
      enviando: false,
    });
  }),
  on(Actions.CadastradoComErro, (state, _) => {
    return { ...state, enviando: false };
  }),
);

export function reducer(state: ITeacherFormState | undefined, action: Action) {
  return lessonReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = entityAdapter.getSelectors();
