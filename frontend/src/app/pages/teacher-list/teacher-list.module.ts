import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { TeacherItemModule } from '../../components/teacher-item/teacher-item.module';
import { LessonEffects } from './.ngrx/effects';
import { reducer } from './.ngrx/reducer';
import { TeacherListRouting } from './teacher-list-routing.module';
import { TeacherListComponent } from './teacher-list.component';
import { SelectModule } from '../../components/select/select.module';

@NgModule({
  declarations: [TeacherListComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    TeacherItemModule,
    TeacherListRouting,
    InputModule,
    SelectModule,
    StoreModule.forFeature('teacherList', reducer),
    EffectsModule.forFeature([LessonEffects])
  ],
})
export class TeacherListModule { }