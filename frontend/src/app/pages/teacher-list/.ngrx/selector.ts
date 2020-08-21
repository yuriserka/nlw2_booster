import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from './reducer';
import { ITeacherListState } from './state';

const selector = createFeatureSelector<ITeacherListState>('teacherList');

export const selectAll = createSelector(selector, fromReducer.selectAll);

export const selectCarregando = createSelector(selector, entityState => entityState.carregando);
