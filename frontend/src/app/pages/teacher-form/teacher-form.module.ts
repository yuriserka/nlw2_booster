import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { SelectModule } from '../../components/select/select.module';
import { TextAreaModule } from '../../components/text-area/text-area.module';
import { TeacherFormRouting } from './teacher-form-routing.module';
import { TeacherFormComponent } from './teacher-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TeacherFormComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    InputModule,
    SelectModule,
    ReactiveFormsModule,
    TextAreaModule,
    TeacherFormRouting,
  ],
})
export class TeacherFormModule { }