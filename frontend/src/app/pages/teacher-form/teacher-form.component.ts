import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cadastrar } from './.ngrx/actions';
import { selectEnviando } from "./.ngrx/selector";
import { ITeacherFormState } from './.ngrx/state';

interface ScheduleItem {
  weekDay: number;
  beginTime: string;
  endTime: string;
}

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  form: FormGroup;
  enviando$: Observable<boolean>;
  scheduleItems$ = new BehaviorSubject<ScheduleItem[]>([
    { weekDay: 0, beginTime: '', endTime: '' }
  ]);

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ITeacherFormState>,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      phone: ['', Validators.required],
      bio: ['', Validators.required],
      description: ['', Validators.required],
      subject: ['', Validators.required],
      price: ['', Validators.required],
      week_day: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
    this.setupObservables();
  }

  setupObservables() {
    this.enviando$ = this.store.select(selectEnviando);
  }

  setScheduleItemValue(index: number, field: string, value: string) {
    this.scheduleItems$.next(
      this.scheduleItems$.value.map((item, i) => {
        return i === index
          ? { ...item, [field]: value }
          : item;
      })
    );
    console.log(this.scheduleItems$.value);
  }

  addSchedule(): void {
    this.form.get('week_day').reset();
    this.form.get('from').reset();
    this.form.get('to').reset();

    this.scheduleItems$.next([
      ...this.scheduleItems$.value,
      {
        weekDay: 0,
        beginTime: '',
        endTime: '',
      }
    ]);
  }

  handleSubmit() {
    if (this.form.invalid || !this.scheduleItems$.value.length) {
      return;
    }

    const data = {
      ...this.form.value,
      schedule: this.scheduleItems$.value
    };

    let { from, to, week_day, ...lesson } = data;

    lesson = {
      ...lesson,
      price: Number(lesson.price.replace(',', '.')),
    };

    this.store.dispatch(Cadastrar({ entity: lesson }));
  }
}
