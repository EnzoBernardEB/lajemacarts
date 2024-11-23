import { ArtworkEntity } from '../entities/artwork';
import { Artwork } from '../../domain/entities/artwork.entity';

export class ArtworkMapper {
  static toDomain(entity: ArtworkEntity): Artwork {
    return new Artwork(
      entity.id,
      entity.title,
      entity.description,
      entity.type,
      entity.availability,
      entity.photo,
      entity.material,
      parseFloat(entity.price.toString()),
    );
  }

  static toPersistence(domain: Artwork): ArtworkEntity {
    const entity = new ArtworkEntity();
    entity.id = domain.id;
    entity.title = domain.title;
    entity.description = domain.description;
    entity.type = domain.type;
    entity.availability = domain.availability;
    entity.photo = domain.photo;
    entity.material = domain.material;
    entity.price = domain.price;
    return entity;
  }
}
