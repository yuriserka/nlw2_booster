import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRouting } from './landing-routing.module';
import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRouting,
  ]
})
export class LandingModule { }
