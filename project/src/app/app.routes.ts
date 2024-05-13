import {Routes} from '@angular/router';
import {dailyImageDate} from "./new/resolvers/asteroid-by-id.resolver";

export const routes: Routes = [
  {path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  {
    path: 'old',
    loadComponent: () => import('./old/old-home/old-home.component').then(m => m.OldHomeComponent),
  },
  {
    path: 'old/detail/:date',
    loadComponent: () => import('./old/old-detail/old-detail.component').then(m => m.OldDetailComponent)
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new-home/new-home.component').then(m => m.NewHomeComponent),
  },
  {
    path: 'new/detail/:date',
    loadComponent: () => import('./new/new-detail/new-detail.component').then(m => m.NewDetailComponent),
    resolve: { dailyImage: dailyImageDate }
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.component').then(m => m.InputComponent),
  },
];
