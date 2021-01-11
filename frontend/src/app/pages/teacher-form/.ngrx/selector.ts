import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from './reducer';
import { ITeacherFormState } from './state';

const selector = createFeatureSelector<ITeacherFormState>('teacherForm');

export const selectAll = createSelector(selector, fromReducer.selectAll);

export const selectSending = createSelector(selector, entityState => entityState.sending);
