import { EntityState } from "@ngrx/entity";
import { Lesson } from '../../../models/Lesson';

export interface ITeacherListState extends EntityState<Lesson> {
  carregando: boolean;
}