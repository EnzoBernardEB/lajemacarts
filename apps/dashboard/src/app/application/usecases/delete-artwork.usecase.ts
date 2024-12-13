// src/app/application/usecases/create-artwork.usecase.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/services/artwork.repository';


@Injectable()
export class DeleteArtworkUseCase {
  constructor(private artworkRepository: ArtworkRepository) {}

  delete(id: number): Observable<void> {
    return this.artworkRepository.deleteArtwork(id);
  }
}
