import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextAreaComponent } from './text-area.component';

@NgModule({
  declarations: [TextAreaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [TextAreaComponent]
})
export class TextAreaModule { }