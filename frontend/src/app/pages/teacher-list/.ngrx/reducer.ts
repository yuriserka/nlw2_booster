import { createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Lesson } from '../../../models/Lesson';
import * as Actions from './actions';
import { ITeacherListState } from './state';

const entityAdapter = createEntityAdapter<Lesson>();

export const initialState = entityAdapter.getInitialState({
  loading: false,
});

const lessonReducer = createReducer(
  initialState,
  on(Actions.List, (state, _) => {
    return { ...state, loading: true };
  }),
  on(Actions.SuccessfulList, (state, action) => {
    return entityAdapter.setAll(action.lessons, {
      ...state,
      loading: false,
    });
  }),
  on(Actions.UnsuccessfulList, (state, _) => {
    return { ...state, loading: false };
  }),
);

export function reducer(state: ITeacherListState | undefined, action: Action) {
  return lessonReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = entityAdapter.getSelectors();
