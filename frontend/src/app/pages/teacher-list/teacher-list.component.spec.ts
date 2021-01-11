import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { SelectModule } from '../../components/select/select.module';
import { TeacherItemModule } from '../../components/teacher-item/teacher-item.module';
import { initialState } from "./.ngrx/reducer";
import { TeacherListComponent } from './teacher-list.component';

describe('[Teacher-List-Component]', () => {
  let component: TeacherListComponent;
  let fixture: ComponentFixture<TeacherListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherListComponent],
      imports: [
        CommonModule,
        PageHeaderModule,
        TeacherItemModule,
        InputModule,
        SelectModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({ initialState: { teacherList: initialState } }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch list action', () => {
    const spy = spyOn(TestBed.inject(Store), 'dispatch');

    // Given
    const { subject, week_day, time } = component.form.controls;

    // When
    subject.setValue('subject');
    week_day.setValue('1');
    time.setValue('20:00');

    // Then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch list action', () => {
    const spy = spyOn(TestBed.inject(Store), 'dispatch');

    // Given
    const { subject } = component.form.controls;

    // When
    subject.setValue('test');

    // Then
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
