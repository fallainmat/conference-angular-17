import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  {
    path: 'old',
    loadComponent: () => import('./old/old-home/old-home.component').then(m => m.OldHomeComponent),
  },
  {
    path: 'old/detail/:id',
    loadComponent: () => import('./old/old-detail/old-detail.component').then(m => m.OldDetailComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new-home/new-home.component').then(m => m.NewHomeComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./new/new-detail/new-detail.component').then(m => m.NewDetailComponent)
  },
];
