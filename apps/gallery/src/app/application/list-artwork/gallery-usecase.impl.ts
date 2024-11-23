import { Observable, Subject, tap } from 'rxjs';
import { ArtworkModele } from '../../domain/entities/artwork.modele';
import { GalleryUsecase } from '../../domain/gallery.usecase';
import { inject } from '@angular/core';
import { ArtworkFilter } from '../../domain/entities/artwork-filter.modele';
import { GalleryHttpService } from '../../infrastructure/services/gallery-http.service';

export class GalleryUsecaseImpl implements GalleryUsecase {
  private galleryHttpService = inject(GalleryHttpService);

  private artworks: Subject<Array<ArtworkModele>> = new Subject<Array<ArtworkModele>>();
  readonly artworks$: Observable<Array<ArtworkModele>> = this.artworks.asObservable();

  constructor() {
    this.listArtwork().subscribe();
  }

  listArtwork(artworkFilter?: ArtworkFilter): Observable<Array<ArtworkModele>> {
    return this.galleryHttpService.getArtworks(artworkFilter).pipe(
      tap((artworks: Array<ArtworkModele>) => this.artworks.next(artworks))
    );
  }
}
