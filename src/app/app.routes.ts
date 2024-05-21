import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full'
  },
  {
    path: 'all',
    loadComponent: () => import('@pages/all-cats/all-cats.component')
  },
  {
    path: 'search',
    loadComponent: () => import('@pages/search-cat/search-cat.component')
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('@pages/detail-cat/detail-cat.component')
  },
  {
    path: '**',
    redirectTo: 'all'
  }
];
