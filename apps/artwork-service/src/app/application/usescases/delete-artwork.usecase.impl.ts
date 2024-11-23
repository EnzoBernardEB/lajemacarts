// /app/application/usecases/delete-artwork.usecase.impl.ts
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { DeleteArtworkUseCase } from '../../domain/usecases/delete-artwork.usecase';

@Injectable()
export class DeleteArtworkUseCaseImpl implements DeleteArtworkUseCase {
  constructor(private readonly artworkRepository: ArtworkRepository) {}

  delete(id: number): Observable<void> {
    return this.artworkRepository.delete(id);
  }
}
