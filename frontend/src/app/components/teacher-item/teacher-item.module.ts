import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherItemComponent } from './teacher-item.component';

@NgModule({
  declarations: [TeacherItemComponent],
  imports: [
    CommonModule,
  ],
  exports: [TeacherItemComponent]
})
export class TeacherItemModule { }