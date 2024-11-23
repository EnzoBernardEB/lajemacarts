import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { InstagramAbstract } from '../../domain/instagram/instagram.abstract';
import { environment } from '../../../env/environment';
import { InstagramResponse, Post } from '../../domain/instagram/interfaces/post.interface';

export class InstagramService extends InstagramAbstract {
  private apiUrl = `https://graph.instagram.com/${environment.instagramUserId}/media?fields=id,caption,media_type,media_url,permalink&access_token=${environment.instagramAccessToken}&limit=5`;

  constructor(private http: HttpClient) {
    super();
  }

  getRecentPosts(): Observable<Array<Post>> {
    return this.http.get<InstagramResponse>(this.apiUrl).pipe(
      map((reponse) => reponse.data),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }
}
