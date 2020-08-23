import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.scss']
})
export class TeacherFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      // avatar: ['', Validators.required],
      // whatsapp: ['', Validators.required],
      // bio: ['', Validators.required],
      // subject: ['', Validators.required],
      // price: ['', Validators.required],
      // week_day: ['', Validators.required],
      // from: ['', Validators.required],
      // to: ['', Validators.required],
    });
  }

  handleSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
  }
}
