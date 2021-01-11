import { Component, Input } from '@angular/core';
import { Lesson } from '../../models/Lesson';

@Component({
  selector: 'teacher-item',
  templateUrl: './teacher-item.component.html',
  styleUrls: ['./teacher-item.component.scss']
})
export class TeacherItemComponent {
  @Input() lesson: Lesson;
}
