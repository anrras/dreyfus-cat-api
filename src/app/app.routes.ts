import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    loadComponent: () => import('@pages/cats/cats.component')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
