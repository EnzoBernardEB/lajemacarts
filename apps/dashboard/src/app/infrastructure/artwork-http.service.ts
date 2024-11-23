import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class artworkHttpService {
  private apiUrl = 'http://localhost:3000/artworks';

  constructor(private http: HttpClient) {}

  getArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  getArtworkById(id: number): Observable<Artwork> {
    return this.http.get<Artwork>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  createArtwork(artwork: CreateArtworkDto): Observable<Artwork> {
    return this.http.post<Artwork>(this.apiUrl, artwork).pipe(
      catchError(this.handleError)
    );
  }

  updateArtwork(id: number, artwork: UpdateArtworkDto): Observable<Artwork> {
    return this.http.put<Artwork>(`${this.apiUrl}/${id}`, artwork).pipe(
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
