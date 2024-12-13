// src/app/application/usecases/create-artwork.usecase.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { UpdateArtworkDto } from '../dto/update-artwork.dto';


@Injectable()
export class UpdateArtworkUseCase {
  constructor(private artworkRepository: ArtworkRepository) {}

  update(id: number, updateArtworkDto: UpdateArtworkDto): Observable<UpdateArtworkDto> {
    return this.artworkRepository.updateArtwork(id, updateArtworkDto);
  }
}
