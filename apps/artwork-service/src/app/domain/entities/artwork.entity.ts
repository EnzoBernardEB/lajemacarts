import { ArtworkTypeEnum } from './artwork-type.enum';
import { ArtworkMaterialEnum } from './artwork-material.enum';

export class Artwork {
  constructor(
    public readonly id: number,
    public title: string,
    public description: string,
    public type: ArtworkTypeEnum,
    public availability: boolean,
    public photo: string,
    public material: ArtworkMaterialEnum,
    public price: number
  ) {
    this.validate();
  }

  isAvailable(): boolean {
    return this.availability;
  }

  private validate(): void {
    if (this.price < 0) {
      throw new Error('Price cannot be negative.');
    }
  }
}
