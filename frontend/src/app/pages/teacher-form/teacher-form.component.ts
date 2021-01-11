import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cadastrar } from './.ngrx/actions';
import { selectEnviando } from './.ngrx/selector';
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
      subject: ['-1', Validators.required],
      price: ['', Validators.required],
      schedule: this.formBuilder.array([this.createScheduleItem()], [Validators.required]),
    });
    this.setupObservables();
  }

  get scheduleItems(): FormArray {
    return this.form.get('schedule') as FormArray;
  }

  setupObservables() {
    this.enviando$ = this.store.select(selectEnviando);
  }

  setScheduleItemValue(index: number, field: string, value: string) {
    this.scheduleItems.value.map((item: ScheduleItem, i: number) => {
      return i === index
        ? { ...item, [field]: value }
        : item;
    });
  }

  addSchedule(): void {
    this.scheduleItems.push(this.createScheduleItem());
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }

    const lesson = {
      ...this.form.value,
      schedule: this.scheduleItems.value.map(
        (item: any) => (<ScheduleItem>{ weekDay: item.week_day, beginTime: item.from, endTime: item.to })
      ),
      price: Number(this.form.get('price').value.replace(',', '.')),
    }

    this.store.dispatch(Cadastrar({ entity: lesson }));
  }

  createScheduleItem(): FormGroup {
    return this.formBuilder.group({
      week_day: ['-1', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
  }
}
