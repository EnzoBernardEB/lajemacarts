import { Observable } from 'rxjs';
import { Artwork } from '../entities/artwork.entity';

export abstract class UpdateArtworkUseCase {
  abstract update(id: number, artwork: Artwork): Observable<Artwork>;
}
