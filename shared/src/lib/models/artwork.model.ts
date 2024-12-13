import { ArtworkMaterialEnum, ArtworkTypeEnum } from '@lajemacarts/shared/enums';

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
