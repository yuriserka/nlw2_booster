import { EntityState } from "@ngrx/entity";
import { Lesson } from '../../../models/Lesson';

export interface ITeacherFormState extends EntityState<Lesson> {
  sending: boolean;
}