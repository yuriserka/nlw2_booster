import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITeacherListState } from './.ngrx/state';
import { selectAll, selectCarregando } from "./.ngrx/selector";
import { Listar } from './.ngrx/actions';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  data$: Observable<any>;
  carregando$: Observable<boolean>;
  form: FormGroup;

  constructor(
    private store: Store<ITeacherListState>,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setupObservables();
    this.listar();
    this.form = this.formBuilder.group({
      subject: ['', Validators.required],
      week_day: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  setupObservables() {
    this.data$ = this.store.select(selectAll);
    this.carregando$ = this.store.select(selectCarregando);
  }

  listar() {
    this.store.dispatch(Listar());
  }

}
