import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/models/Lesson';
import { Listar } from './.ngrx/actions';
import { selectAll, selectCarregando } from "./.ngrx/selector";
import { ITeacherListState } from './.ngrx/state';

@Component({
  selector: 'teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  data$: Observable<Lesson[]>;
  carregando$: Observable<boolean>;
  form: FormGroup;

  constructor(
    private store: Store<ITeacherListState>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      subject: ['', Validators.required],
      week_day: ['', Validators.required],
      time: ['', Validators.required],
    });
    this.setupObservables();
    this.onFormChange();
  }

  setupObservables(): void {
    this.data$ = this.store.select(selectAll);
    this.carregando$ = this.store.select(selectCarregando);
  }

  onFormChange(): void {
    this.form.valueChanges.subscribe(_ => {
      if (!this.form.valid) {
        return;
      }
      this.store.dispatch(Listar({ query: this.form.value }));
    });
  }
}
