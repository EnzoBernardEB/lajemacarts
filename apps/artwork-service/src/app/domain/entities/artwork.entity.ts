import { ArtworkType } from '../enums/artwork-type';
import { ArtworkMaterial } from '../enums/artwork-material';

export class Artwork {
  constructor(
    public readonly id: number,
    public title: string,
    public description: string,
    public type: ArtworkType,
    public availability: boolean,
    public photo: string,
    public material: ArtworkMaterial,
    public price: number,
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
