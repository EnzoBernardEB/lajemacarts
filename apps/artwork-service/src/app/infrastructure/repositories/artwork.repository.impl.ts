import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArtworkRepository } from '../../domain/repositories/artwork.repository';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { from, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArtworkEntity } from '../entities/artwork';
import { Artwork } from '../../domain/entities/artwork.entity';

@Injectable()
export class ArtworkRepositoryImpl implements ArtworkRepository {
  constructor(
    @InjectRepository(ArtworkEntity)
    private readonly repository: Repository<ArtworkEntity>,
    @InjectMapper() private readonly mapper: Mapper,
  ) {}

  create(artwork: Artwork): Observable<Artwork> {
    const entity = this.mapper.map(artwork, Artwork, ArtworkEntity);
    return from(this.repository.save(entity)).pipe(
      map((savedEntity) => this.mapper.map(savedEntity, ArtworkEntity, Artwork)),
      catchError((error) => {
        if (error.code === '23505') {
          throw new ConflictException('An artwork with this title already exists.');
        }
        throw error;
      }),
    );
  }

  findAll(): Observable<Artwork[]> {
    return from(this.repository.find()).pipe(
      map((entities) => this.mapper.mapArray(entities, ArtworkEntity, Artwork)),
    );
  }

  findById(id: number): Observable<Artwork | null> {
    return from(this.repository.findOneBy({ id })).pipe(
      map((entity) => (entity ? this.mapper.map(entity, ArtworkEntity, Artwork) : null)),
    );
  }

  update(id: number, artwork: Artwork): Observable<Artwork> {
    const entity = this.mapper.map(artwork, Artwork, ArtworkEntity);
    entity.id = id;
    return from(this.repository.save(entity)).pipe(
      map((updatedEntity) => this.mapper.map(updatedEntity, ArtworkEntity, Artwork)),
    );
  }

  delete(id: number): Observable<void> {
    return from(this.repository.delete(id)).pipe(map(() => undefined));
  }

  findByTitle(title: string): Observable<Artwork | null> {
    return from(this.repository.findOneBy({ title })).pipe(
      map((entity) => (entity ? this.mapper.map(entity, ArtworkEntity, Artwork) : null)),
    );
  }
}
