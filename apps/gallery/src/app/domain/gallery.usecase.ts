import { Observable } from 'rxjs';
import { ArtworkModele } from './entities/artwork.modele';
import { ArtworkFilter } from './entities/artwork-filter.modele';

export abstract class GalleryUsecase {
  abstract artworks$: Observable<ArtworkModele[]>;
  abstract listArtwork(artworkFilter?: ArtworkFilter): Observable<ArtworkModele[]>;
}
