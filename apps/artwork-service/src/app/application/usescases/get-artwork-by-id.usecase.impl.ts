// /app/application/usecases/get-artwork-by-id.usecase.impl.ts
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Artwork } from '../../domain/entities/artwork.entity';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { GetArtworkByIdUseCase } from '../../domain/usecases/get-artwork-by-id.usecase';

@Injectable()
export class GetArtworkByIdUseCaseImpl implements GetArtworkByIdUseCase {
  constructor(private readonly artworkRepository: ArtworkRepository) {}

  getById(id: number): Observable<Artwork | null> {
    return this.artworkRepository.findById(id);
  }
}
