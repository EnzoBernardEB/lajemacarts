import { Observable } from 'rxjs';
import { CreateArtworkDto } from '../../application/dto/create-artwork.dto';
import { ArtworkDto } from '../../application/dto/artwork.dto';
import { UpdateArtworkDto } from '../../application/dto/update-artwork.dto';


export abstract class ArtworkRepository {
  abstract createArtwork(artwork: CreateArtworkDto): Observable<CreateArtworkDto>;
  abstract getArtworks(): Observable<ArtworkDto[]>;
  abstract getArtworkById(id: number): Observable<ArtworkDto>;
  abstract updateArtwork(id: number,artwork: UpdateArtworkDto): Observable<UpdateArtworkDto>;
  abstract deleteArtwork(id: number): Observable<void>;
}
