import { Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { ArtworkDto } from '../dto/artwork.dto';
import { Injectable } from '@angular/core';

@Injectable()
export class GetArtworkByIdUseCase {
  constructor(private artworkRepository: ArtworkRepository) {}

  getById(id: number): Observable<ArtworkDto> {
    return this.artworkRepository.getArtworkById(id);
  }
}
