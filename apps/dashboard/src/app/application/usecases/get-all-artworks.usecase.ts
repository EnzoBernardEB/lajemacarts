// src/app/application/usecases/create-artwork.usecase.ts

import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { ArtworkDto } from '../dto/artwork.dto';


@Injectable()
export class GetAllArtworksUseCase {
  constructor(private artworkRepository: ArtworkRepository) {}

  getAll(): Observable<ArtworkDto[]> {
    return this.artworkRepository.getArtworks().pipe(
      map((artworks:ArtworkDto[]) => artworks || []),
    );
  }
}
