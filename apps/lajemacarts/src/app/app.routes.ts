import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { HomeComponent } from './application/home/home.component';
import { NotFoundComponent } from '@lajemacarts/shared';

export const appRoutes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent
  },
  {
    path: 'galerie',
    loadChildren: () =>
      loadRemoteModule('gallery', './Routes').then((m) => m.appRoutes)
  },  
  {
    path: 'tableau-de-bord',
    loadChildren: () =>
      loadRemoteModule('dashboard', './Routes').then((m) => m.appRoutes)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
