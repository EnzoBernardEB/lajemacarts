import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ArtworkRepository } from '../domain/services/artwork.repository';
import { CreateArtworkDto } from '../application/dto/create-artwork.dto';
import { UpdateArtworkDto } from '../application/dto/update-artwork.dto';
import { ArtworkDto } from '../application/dto/artwork.dto';


@Injectable()
export class ArtworkRepositoryImpl implements ArtworkRepository {
  private apiUrl = 'http://localhost:3000/artworks';

  constructor(private http: HttpClient) {
  }

  getArtworks(): Observable<ArtworkDto[]> {
    return this.http.get<ArtworkDto[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getArtworkById(id: number): Observable<ArtworkDto> {
    return this.http.get<ArtworkDto>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createArtwork(artwork: CreateArtworkDto): Observable<CreateArtworkDto> {
    return this.http.post<CreateArtworkDto>(this.apiUrl, artwork).pipe(
      catchError(this.handleError)
    );
  }

  updateArtwork(id: number, artwork: UpdateArtworkDto): Observable<UpdateArtworkDto> {
    return this.http.put<UpdateArtworkDto>(`${this.apiUrl}/${id}`, artwork).pipe(
      catchError(this.handleError)
    );
  }

  deleteArtwork(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
