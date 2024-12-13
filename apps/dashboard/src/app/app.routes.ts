import { Route } from '@angular/router';
import { ArtworkListComponent } from './application/artwork-list/artwork-list.component';
import { CreateArtworkComponent } from './application/create-artwork/create-artwork.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/artworks', pathMatch: 'full' },
  { path: 'artworks', component: ArtworkListComponent },
  { path: 'artworks/new', component: CreateArtworkComponent }
];
