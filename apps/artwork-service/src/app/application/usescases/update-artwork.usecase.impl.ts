import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Artwork } from '../../domain/entities/artwork.entity';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { UpdateArtworkUseCase } from '../../domain/usecases/update-artwork.usecase';

@Injectable()
export class UpdateArtworkUseCaseImpl implements UpdateArtworkUseCase {
  constructor(private readonly artworkRepository: ArtworkRepository) {}

  update(id: number, artwork: Artwork): Observable<Artwork> {
    return this.artworkRepository.update(id, artwork);
  }
}
