import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent {
  @Input() label: string;
  @Input() name: string;

  @Input() parentForm: FormGroup;
  @Input() controlName: string;
}
