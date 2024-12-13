import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsString, IsUrl } from 'class-validator';
import { AutoMap } from '@automapper/classes';
import { ArtworkTypeEnum } from '../../domain/entities/artwork-type.enum';
import { ArtworkMaterialEnum } from '../../domain/entities/artwork-material.enum';

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
  @ApiProperty({ example: 'PAINTING', description: 'The type of the artwork.', enum: ArtworkTypeEnum })
  @IsEnum(ArtworkTypeEnum)
  type!: ArtworkTypeEnum;

  @AutoMap()
  @ApiProperty({ example: true, description: 'The availability of the artwork.' })
  @IsBoolean()
  availability!: boolean;

  @AutoMap()
  @ApiProperty({ example: 'http://example.com/photo.jpg', description: 'The URL of the artwork photo.' })
  @IsUrl()
  photo!: string;

  @AutoMap()
  @ApiProperty({ example: 'WOOD', description: 'The material of the artwork.', enum: ArtworkMaterialEnum })
  @IsEnum(ArtworkMaterialEnum)
  material!: ArtworkMaterialEnum;

  @AutoMap()
  @ApiProperty({ example: 150.00, description: 'The price of the artwork.' })
  @IsNumber()
  price!: number;
}
