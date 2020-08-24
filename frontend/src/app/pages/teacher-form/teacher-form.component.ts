import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Lesson } from 'src/app/models/Lesson';
import { Cadastrar } from './.ngrx/actions';
import { selectEnviando } from "./.ngrx/selector";
import { ITeacherFormState } from './.ngrx/state';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
  schedule: ScheduleItem[] = [];
  enviando$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ITeacherFormState>,
    private router: Router,
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

  addSchedule(): void {
    const weekDay = this.form.get('week_day');
    const from = this.form.get('from');
    const to = this.form.get('to');

    if (!to.valid || !from.valid || !weekDay.valid) {
      return;
    }

    this.schedule.push({
      weekDay: Number(weekDay.value),
      beginTime: from.value,
      endTime: to.value,
    });

    weekDay.reset();
    from.reset();
    to.reset();
  }

  handleSubmit() {
    if (this.form.invalid) {
      return;
    }
    if (!this.schedule.length) {
      this.addSchedule();
    }
    const data = {
      ...this.form.value,
      schedule: this.schedule
    };

    let { from, to, week_day, ...lesson } = data;

    lesson = {
      ...lesson,
      price: Number(lesson.price.replace(',', '.')),
    };

    this.store.dispatch(Cadastrar({ entity: lesson }));
    
    // essa linha de baixo deveria aparecer na Action: CadastradoComSucesso
    this.router.navigateByUrl('/');
  }
}
