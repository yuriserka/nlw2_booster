import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      whatsapp: ['', Validators.required],
      bio: ['', Validators.required],
      subject: ['', Validators.required],
      price: ['', Validators.required],
      week_day: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
    });
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
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    if (!this.schedule.length) {
      this.addSchedule();
    }
    console.log(this.form.value, this.schedule);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
}
