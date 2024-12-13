import { ArtworkMaterialEnum } from './artwork-material.enum';
import { ArtworkTypeEnum } from './artwork-type.enum';

export interface Artwork {
  id: number;
  title: string;
  description: string;
  type: ArtworkTypeEnum;
  availability: boolean;
  photo: string;
  material: ArtworkMaterialEnum;
  price: number;
}
