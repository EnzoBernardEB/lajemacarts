import { ConflictException, Injectable } from '@nestjs/common';
import { Observable, switchMap } from 'rxjs';
import { Artwork } from '../../domain/entities/artwork.entity';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { CreateArtworkUseCase } from '../../domain/usecases/create-artwork.usecase';

@Injectable()
export class CreateArtworkUseCaseImpl implements CreateArtworkUseCase {
  constructor(private readonly artworkRepository: ArtworkRepository) {}

  create(artwork: Artwork): Observable<Artwork> {
    return this.artworkRepository.findByTitle(artwork.title).pipe(
      switchMap((existingArtwork) => {
        if (existingArtwork) {
          throw new ConflictException('Une œuvre avec ce titre existe déjà.');
        }
        return this.artworkRepository.create(artwork);
      }),
    );
  }
}

