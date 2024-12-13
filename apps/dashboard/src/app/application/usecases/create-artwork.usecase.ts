// src/app/application/usecases/create-artwork.usecase.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { CreateArtworkDto } from '../dto/create-artwork.dto';


@Injectable()
export class CreateArtworkUseCase {
  constructor(private artworkRepository: ArtworkRepository) {}

  create(artwork: CreateArtworkDto): Observable<CreateArtworkDto> {
    return this.artworkRepository.createArtwork(artwork);
  }
}
