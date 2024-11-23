import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ArtworkFilter } from '../../domain/entities/artwork-filter.modele';
import { ArtworkModele } from '../../domain/entities/artwork.modele';

@Injectable()
export class GalleryHttpService {
  private artworksUrl = 'http://localhost:3000/artworks';

  constructor(private http: HttpClient) {}

  getArtworks(artworkFilter?: ArtworkFilter): Observable<ArtworkModele[]> {
    const params = this.buildQueryParams(artworkFilter);
    return this.http.get<ArtworkModele[]>(this.artworksUrl, { params });
  }

  private buildQueryParams(artworkFilter?: ArtworkFilter): HttpParams {
    let params = new HttpParams();
    if (artworkFilter) {
      if (artworkFilter.id) {
        params = params.set('id', artworkFilter.id);
      }
      if (artworkFilter.types && artworkFilter.types.length > 0) {
        params = params.set('types', artworkFilter.types.join(','));
      }
      if (artworkFilter.materials && artworkFilter.materials.length > 0) {
        params = params.set('materials', artworkFilter.materials.join(','));
      }
    }
    return params;
  }
}
