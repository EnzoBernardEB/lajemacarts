import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, Mapper } from '@automapper/core';
import { ArtworkDto } from '../dtos/artwork.dto';
import { CreateArtworkDto } from '../dtos/create-artwork.dto';
import { UpdateArtworkDto } from '../dtos/update-artwork.dto';
import { Artwork } from '../../domain/entities/artwork.entity';
import { ArtworkEntity } from '../../infrastructure/entities/artwork';

@Injectable()
export class ArtworkProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(
        mapper,
        Artwork,
        ArtworkDto,
        forMember(
          (dest: ArtworkDto) => dest.id,
          mapFrom((source: Artwork) => source.id)
        ),
        forMember(
          (dest: ArtworkDto) => dest.title,
          mapFrom((source: Artwork) => source.title)
        ),
        forMember(
          (dest: ArtworkDto) => dest.description,
          mapFrom((source: Artwork) => source.description)
        ),
        forMember(
          (dest: ArtworkDto) => dest.type,
          mapFrom((source: Artwork) => source.type)
        ),
        forMember(
          (dest: ArtworkDto) => dest.availability,
          mapFrom((source: Artwork) => source.availability)
        ),
        forMember(
          (dest: ArtworkDto) => dest.photo,
          mapFrom((source: Artwork) => source.photo)
        ),
        forMember(
          (dest: ArtworkDto) => dest.material,
          mapFrom((source: Artwork) => source.material)
        ),
        forMember(
          (dest: ArtworkDto) => dest.price,
          mapFrom((source: Artwork) => source.price)
        )
      );

      createMap(
        mapper,
        ArtworkDto,
        Artwork,
        forMember(
          (dest: Artwork) => dest.id,
          mapFrom((source: ArtworkDto) => source.id)
        ),
        forMember(
          (dest: Artwork) => dest.title,
          mapFrom((source: ArtworkDto) => source.title)
        ),
        forMember(
          (dest: Artwork) => dest.description,
          mapFrom((source: ArtworkDto) => source.description)
        ),
        forMember(
          (dest: Artwork) => dest.type,
          mapFrom((source: ArtworkDto) => source.type)
        ),
        forMember(
          (dest: Artwork) => dest.availability,
          mapFrom((source: ArtworkDto) => source.availability)
        ),
        forMember(
          (dest: Artwork) => dest.photo,
          mapFrom((source: ArtworkDto) => source.photo)
        ),
        forMember(
          (dest: Artwork) => dest.material,
          mapFrom((source: ArtworkDto) => source.material)
        ),
        forMember(
          (dest: Artwork) => dest.price,
          mapFrom((source: ArtworkDto) => source.price)
        )
      );

      createMap(mapper, CreateArtworkDto, Artwork,
        forMember(
          (dest: Artwork) => dest.title,
          mapFrom((source: CreateArtworkDto) => source.title)
        ),
        forMember(
          (dest: Artwork) => dest.description,
          mapFrom((source: CreateArtworkDto) => source.description)
        ),
        forMember(
          (dest: Artwork) => dest.type,
          mapFrom((source: CreateArtworkDto) => source.type)
        ),
        forMember(
          (dest: Artwork) => dest.availability,
          mapFrom((source: CreateArtworkDto) => source.availability)
        ),
        forMember(
          (dest: Artwork) => dest.photo,
          mapFrom((source: CreateArtworkDto) => source.photo)
        ),
        forMember(
          (dest: Artwork) => dest.material,
          mapFrom((source: CreateArtworkDto) => source.material)
        ),
        forMember(
          (dest: Artwork) => dest.price,
          mapFrom((source: CreateArtworkDto) => source.price)
        )
      );

      createMap(mapper, Artwork, CreateArtworkDto,
        forMember(
          (dest: CreateArtworkDto) => dest.title,
          mapFrom((source: Artwork) => source.title)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.description,
          mapFrom((source: Artwork) => source.description)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.type,
          mapFrom((source: Artwork) => source.type)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.availability,
          mapFrom((source: Artwork) => source.availability)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.photo,
          mapFrom((source: Artwork) => source.photo)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.material,
          mapFrom((source: Artwork) => source.material)
        ),
        forMember(
          (dest: CreateArtworkDto) => dest.price,
          mapFrom((source: Artwork) => source.price)
        )
      );

      createMap(mapper, UpdateArtworkDto, Artwork);
      createMap(
        mapper,
        ArtworkEntity,
        Artwork,
        forMember(
          (dest: Artwork) => dest.id,
          mapFrom((source: ArtworkEntity) => source.id)
        ),
        forMember(
          (dest: Artwork) => dest.title,
          mapFrom((source: ArtworkEntity) => source.title)
        ),
        forMember(
          (dest: Artwork) => dest.description,
          mapFrom((source: ArtworkEntity) => source.description)
        ),
        forMember(
          (dest: Artwork) => dest.type,
          mapFrom((source: ArtworkEntity) => source.type)
        ),
        forMember(
          (dest: Artwork) => dest.availability,
          mapFrom((source: ArtworkEntity) => source.availability)
        ),
        forMember(
          (dest: Artwork) => dest.photo,
          mapFrom((source: ArtworkEntity) => source.photo)
        ),
        forMember(
          (dest: Artwork) => dest.material,
          mapFrom((source: ArtworkEntity) => source.material)
        ),
        forMember(
          (dest: Artwork) => dest.price,
          mapFrom((source: ArtworkEntity) => source.price)
        )
      );

      createMap(
        mapper,
        Artwork,
        ArtworkEntity,
        forMember(
          (dest: ArtworkEntity) => dest.id,
          mapFrom((source: Artwork) => source.id)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.title,
          mapFrom((source: Artwork) => source.title)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.description,
          mapFrom((source: Artwork) => source.description)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.type,
          mapFrom((source: Artwork) => source.type)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.availability,
          mapFrom((source: Artwork) => source.availability)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.photo,
          mapFrom((source: Artwork) => source.photo)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.material,
          mapFrom((source: Artwork) => source.material)
        ),
        forMember(
          (dest: ArtworkEntity) => dest.price,
          mapFrom((source: Artwork) => source.price)
        )
      );

    };
  }
}
