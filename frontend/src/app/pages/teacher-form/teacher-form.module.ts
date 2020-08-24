import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { SelectModule } from '../../components/select/select.module';
import { TextAreaModule } from '../../components/text-area/text-area.module';
import { TeacherFormRouting } from './teacher-form-routing.module';
import { TeacherFormComponent } from './teacher-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LessonEffects } from './.ngrx/effects';
import { reducer } from './.ngrx/reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


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
    StoreModule.forFeature('teacherForm', reducer),
    EffectsModule.forFeature([LessonEffects])
  ],
})
export class TeacherFormModule { }