import { Component, Input } from '@angular/core';

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
}
