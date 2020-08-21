import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
  { path: 'study', loadChildren: () => import('./pages/teacher-list/teacher-list.module').then(m => m.TeacherListModule) },
  { path: 'teach', loadChildren: () => import('./pages/teacher-form/teacher-form.module').then(m => m.TeacherFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { };
