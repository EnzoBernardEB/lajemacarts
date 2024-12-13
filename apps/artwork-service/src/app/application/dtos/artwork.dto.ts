import { ApiProperty } from '@nestjs/swagger';
import { AutoMap } from '@automapper/classes';
import { ArtworkTypeEnum } from '../../domain/entities/artwork-type.enum';
import { ArtworkMaterialEnum } from '../../domain/entities/artwork-material.enum';

export class ArtworkDto {
  @AutoMap()
  @ApiProperty({ example: 1, description: 'Unique identifier of the artwork.' })
  id!: number;

  @AutoMap()
  @ApiProperty({ example: 'Sunset Painting', description: 'The title of the artwork.' })
  title!: string;

  @AutoMap()
  @ApiProperty({ example: 'A beautiful painting of a sunset.', description: 'The description of the artwork.' })
  description!: string;

  @AutoMap()
  @ApiProperty({ example: 'PAINTING', description: 'The type of the artwork.', enum: ArtworkTypeEnum })
  type!: ArtworkTypeEnum;

  @AutoMap()
  @ApiProperty({ example: true, description: 'The availability of the artwork.' })
  availability!: boolean;

  @AutoMap()
  @ApiProperty({ example: 'http://example.com/photo.jpg', description: 'The URL of the artwork photo.' })
  photo!: string;

  @AutoMap()
  @ApiProperty({ example: 'WOOD', description: 'The material of the artwork.', enum: ArtworkMaterialEnum })
  material!: ArtworkMaterialEnum;

  @AutoMap()
  @ApiProperty({ example: 150.00, description: 'The price of the artwork.' })
  price!: number;
}
