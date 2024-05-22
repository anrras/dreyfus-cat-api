import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    loadChildren: () => import('@pages/cats.routes')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
