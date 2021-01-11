import { createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { Lesson } from '../../../models/Lesson';
import * as Actions from './actions';
import { ITeacherFormState } from './state';

const entityAdapter = createEntityAdapter<Lesson>();

export const initialState = entityAdapter.getInitialState({
  sending: false,
});

const lessonReducer = createReducer(
  initialState,
  on(Actions.Register, (state, _) => {
    return { ...state, sending: true };
  }),
  on(Actions.SuccessfulRegister, (state, action) => {
    return entityAdapter.addOne(action.entity, {
      ...state,
      sending: false,
    });
  }),
  on(Actions.UnsuccessfulRegister, (state, _) => {
    return { ...state, sending: false };
  }),
);

export function reducer(state: ITeacherFormState | undefined, action: Action) {
  return lessonReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = entityAdapter.getSelectors();
