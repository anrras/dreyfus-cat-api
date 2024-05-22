import { Routes } from '@angular/router';

const CATS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/cats/cats.component')
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
];

export default CATS_ROUTES;
