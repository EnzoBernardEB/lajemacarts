import { Observable } from 'rxjs';
import { Artwork } from '../entities/artwork.entity';

export abstract class GetAllArtworksUseCase {
  abstract getAll(): Observable<Artwork[]>;
}
