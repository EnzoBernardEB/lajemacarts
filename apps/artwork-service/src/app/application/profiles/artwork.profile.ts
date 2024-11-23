import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
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
    return (mapper: Mapper ) => {
      createMap(mapper, Artwork, ArtworkDto);
      createMap(mapper, ArtworkDto, Artwork);
      createMap(mapper, CreateArtworkDto, Artwork);
      createMap(mapper, UpdateArtworkDto, Artwork);
      createMap(mapper, ArtworkEntity, Artwork);
      createMap(mapper, Artwork, ArtworkEntity);
    };
  }
}
