import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { InputModule } from '../../components/input/input.module';
import { PageHeaderModule } from '../../components/page-header/page-header.module';
import { SelectModule } from '../../components/select/select.module';
import { TextAreaModule } from '../../components/text-area/text-area.module';
import { initialState } from "./.ngrx/reducer";
import { TeacherFormComponent } from './teacher-form.component';

describe('[Teacher-Form-Component]', () => {
  let component: TeacherFormComponent;
  let fixture: ComponentFixture<TeacherFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherFormComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        InputModule,
        SelectModule,
        TextAreaModule,
        PageHeaderModule,
      ],
      providers: [
        provideMockStore({ initialState: { teacherForm: initialState } }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch register action on submit of valid form', () => {
    const spy = spyOn(TestBed.inject(Store), 'dispatch');

    // Given
    setValidForm();

    // When
    component.handleSubmit();

    // Then
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not dispatch register action for invalid forms', () => {
    const spy = spyOn(TestBed.inject(Store), 'dispatch');

    // Given
    setInvalidForm();

    // When
    component.handleSubmit();

    // Then
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should add 1 schedule', () => {
    // Given
    setValidForm();

    // When
    component.addSchedule();

    // Then
    expect(component.scheduleItems.length).toEqual(2);
  });


  // fill form with valid values
  function setValidForm() {
    const {
      name,
      avatar,
      phone,
      bio,
      description,
      subject,
      price,
      schedule,
    } = component.form.controls;

    name.setValue('my name');
    avatar.setValue('https://pbs.twimg.com/media/Dn5YMhHXoAIj75H?format=jpg&name=small');
    phone.setValue('82 98282-9439');
    bio.setValue('student of computer science');
    description.setValue('description');
    subject.setValue('subject');
    price.setValue('54.6');

    schedule.setValue([{
      week_day: '0',
      to: '12:00',
      from: '10:00',
    }]);

    expect(component.scheduleItems.controls.length).toEqual(1);
  }

  // fill form with missing name, subject and phone
  function setInvalidForm() {
    const {
      avatar,
      bio,
      description,
      price,
      schedule,
    } = component.form.controls;

    avatar.setValue('https://pbs.twimg.com/media/Dn5YMhHXoAIj75H?format=jpg&name=small');
    bio.setValue('student of computer science');
    description.setValue('description');
    price.setValue('54.6');

    schedule.setValue([{
      week_day: '0',
      to: '12:00',
      from: '10:00',
    }]);
  }
});
