import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { TeacherFormRouting } from './teacher-form-routing.module';
import { TeacherFormComponent } from './teacher-form.component';
import { TextAreaModule } from '../../components/text-area/text-area.module';

@NgModule({
  declarations: [TeacherFormComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    InputModule,
    TextAreaModule,
    TeacherFormRouting,
  ],
})
export class TeacherFormModule { }