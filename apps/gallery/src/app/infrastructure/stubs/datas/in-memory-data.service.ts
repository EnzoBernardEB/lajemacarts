import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkModele } from '../../../domain/entities/artwork.modele';
import { ArtworkType } from '../../../domain/entities/artwork-type';
import { ArtworkMaterial } from '../../../domain/entities/artwork-material';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  artworks: ArtworkModele[] = [
    new ArtworkModele(1, [ArtworkType.sculpture], 'A beautiful sculpture made from resin.', true, 'https://picsum.photos/200/300', [ArtworkMaterial.resine]),
    new ArtworkModele(2, [ArtworkType.table, ArtworkType.sculpture], 'An intricate wooden carving.', true, 'https://picsum.photos/200/300', [ArtworkMaterial.bois]),
    new ArtworkModele(3, [ArtworkType.gueridon, ArtworkType.sculpture], 'An intricate wooden carving.', false, 'https://picsum.photos/200/300', [ArtworkMaterial.bois, ArtworkMaterial.peinture]),
    new ArtworkModele(4, [ArtworkType.potPlat], 'An intricate wooden carving.', true, 'https://picsum.photos/200/300', [ArtworkMaterial.bois]),
    new ArtworkModele(5, [ArtworkType.vase, ArtworkType.sculpture], 'An intricate wooden carving.', true, 'https://picsum.photos/200/300', [ArtworkMaterial.bois, ArtworkMaterial.resine, ArtworkMaterial.pierre]),
    new ArtworkModele(6, [ArtworkType.lampe, ArtworkType.sculpture], 'An intricate wooden carving.', false, 'https://picsum.photos/200/300', [ArtworkMaterial.bois])
  ];

  createDb() {
    return { artworks: this.artworks };
  }

  getAllArtworks(reqInfo: any): Observable<any> {
    const { query } = reqInfo;
    let artworks = this.artworks;

    if (query.has('id')) {
      const id = query.get('id')?.[0];
      artworks = artworks.filter(artwork => artwork.id.toString() === id);
    }

    if (query.has('types')) {
      const types = query.get('types')?.[0].split(',');
      artworks = artworks.filter(artwork => types.some((type: any) => artwork.types.includes(type as ArtworkType)));
    }

    if (query.has('materials')) {
      const materials = query.get('materials')?.[0].split(',');
      artworks = artworks.filter(artwork => materials.some((material: any) => artwork.materials.includes(material as ArtworkMaterial)));
    }

    return reqInfo.utils.createResponse$(() => ({
      body: artworks,
      status: 200
    }));
  }

  getArtworkById(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const item = this.artworks.find((i: any) => i.id === id);
    return reqInfo.utils.createResponse$(() => ({
      body: item,
      status: item ? 200 : 404
    }));
  }

  addNewArtwork(reqInfo: any): Observable<any> {
    const newItem = reqInfo.utils.getJsonBody(reqInfo.req);
    newItem.id = this.artworks.length + 1; // Generate a new id
    this.artworks.push(newItem);
    return reqInfo.utils.createResponse$(() => ({
      body: newItem,
      status: 201
    }));
  }

  updateArtwork(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const updatedItem = reqInfo.utils.getJsonBody(reqInfo.req);
    const index = this.artworks.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      this.artworks[index] = { ...this.artworks[index], ...updatedItem };
      return reqInfo.utils.createResponse$(() => ({
        body: this.artworks[index],
        status: 200
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Item not found' },
        status: 404
      }));
    }
  }

  deleteArtwork(reqInfo: any): Observable<any> {
    const id = reqInfo.id;
    const index = this.artworks.findIndex((i: any) => i.id === id);
    if (index !== -1) {
      const deletedItem = this.artworks.splice(index, 1)[0];
      return reqInfo.utils.createResponse$(() => ({
        body: deletedItem,
        status: 200
      }));
    } else {
      return reqInfo.utils.createResponse$(() => ({
        body: { error: 'Item not found' },
        status: 404
      }));
    }
  }
}
