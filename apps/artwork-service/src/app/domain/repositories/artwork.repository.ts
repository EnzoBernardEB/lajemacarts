import { Observable } from 'rxjs';
import { Artwork } from '../entities/artwork.entity';


export abstract class ArtworkRepository {
  abstract create(artwork: Artwork): Observable<Artwork>;
  abstract findAll(): Observable<Artwork[]>;
  abstract findById(id: number): Observable<Artwork | null>;
  abstract update(id: number, artwork: Artwork): Observable<Artwork>;
  abstract delete(id: number): Observable<void>;

  abstract findByTitle(title: string): Observable<Artwork | null>;
}
