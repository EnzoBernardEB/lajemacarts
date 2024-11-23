import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsString, IsUrl } from 'class-validator';
import { ArtworkType } from '../../domain/enums/artwork-type';
import { ArtworkMaterial } from '../../domain/enums/artwork-material';
import { AutoMap } from '@automapper/classes';

export class CreateArtworkDto {
  @AutoMap()
  @ApiProperty({ example: 'Sunset Painting', description: 'The title of the artwork.' })
  @IsString()
  title!: string;

  @AutoMap()
  @ApiProperty({ example: 'A beautiful painting of a sunset.', description: 'The description of the artwork.' })
  @IsString()
  description!: string;

  @AutoMap()
  @ApiProperty({ example: 'PAINTING', description: 'The type of the artwork.', enum: ArtworkType })
  @IsEnum(ArtworkType)
  type!: ArtworkType;

  @AutoMap()
  @ApiProperty({ example: true, description: 'The availability of the artwork.' })
  @IsBoolean()
  availability!: boolean;

  @AutoMap()
  @ApiProperty({ example: 'http://example.com/photo.jpg', description: 'The URL of the artwork photo.' })
  @IsUrl()
  photo!: string;

  @AutoMap()
  @ApiProperty({ example: 'WOOD', description: 'The material of the artwork.', enum: ArtworkMaterial })
  @IsEnum(ArtworkMaterial)
  material!: ArtworkMaterial;

  @AutoMap()
  @ApiProperty({ example: 150.00, description: 'The price of the artwork.' })
  @IsNumber()
  price!: number;
}
