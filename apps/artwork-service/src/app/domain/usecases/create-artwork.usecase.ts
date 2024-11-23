import { Observable } from 'rxjs';
import { Artwork } from '../entities/artwork.entity';

export abstract class CreateArtworkUseCase {
  abstract create(artwork: Artwork): Observable<Artwork>;
}
