// /app/application/usecases/get-all-artworks.usecase.impl.ts
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Artwork } from '../../domain/entities/artwork.entity';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { GetAllArtworksUseCase } from '../../domain/usecases/get-all-artworks.usecase';

@Injectable()
export class GetAllArtworksUseCaseImpl implements GetAllArtworksUseCase {
  constructor(private readonly artworkRepository: ArtworkRepository) {}

  getAll(): Observable<Artwork[]> {
    return this.artworkRepository.findAll();
  }
}
