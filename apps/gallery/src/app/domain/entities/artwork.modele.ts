import { ArtworkType } from './artwork-type';
import { ArtworkMaterial } from './artwork-material';

export class ArtworkModele {
  constructor(
    public readonly id: number,
    public readonly types: Array<ArtworkType>,
    public readonly description: string,
    public readonly isAvailable: boolean,
    public readonly photoUrl: string,
    public readonly materials: Array<ArtworkMaterial>
  ) {
  }
}
