import { Schedule } from './Schedule';
import { User } from './User';

export interface Lesson {
  id: number;
  subject: string;
  description: string;
  price: number;
  user: User;
  schedules: Schedule[];
}