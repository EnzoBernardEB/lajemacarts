import { Observable } from 'rxjs';
import { Artwork } from '../entities/artwork.entity';

export abstract class GetArtworkByIdUseCase {
  abstract getById(id: number): Observable<Artwork | null>;
}
