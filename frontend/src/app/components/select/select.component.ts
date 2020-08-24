import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() label: string;
  @Input() name: string;
  @Input() options: Option[];

  @Input() parentForm: FormGroup;
  @Input() controlName: string;
}
