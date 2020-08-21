import { createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Lesson } from '../../../models/Lesson';
import * as Actions from './actions';
import { Action } from '@ngrx/store';
import { ITeacherListState } from './state';

const entityAdapter = createEntityAdapter<Lesson>();

const initialState = entityAdapter.getInitialState({
  carregando: false,
});

const lessonReducer = createReducer(
  initialState,
  on(Actions.Listar, (state, action) => {
    return { ...state, carregando: true };
  }),
  on(Actions.ListadoComSucesso, (state, action) => {
    return entityAdapter.addAll(action.list, {
      ...state,
      carregando: false,
    });
  }),
  on(Actions.ListadoComErro, (state, action) => {
    return { ...state, carregando: false };
  }),
);

export function reducer(state: ITeacherListState | undefined, action: Action) {
  return lessonReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = entityAdapter.getSelectors();
