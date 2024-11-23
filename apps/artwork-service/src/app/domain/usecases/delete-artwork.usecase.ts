import { Observable } from 'rxjs';

export abstract class DeleteArtworkUseCase {
  abstract delete(id: number): Observable<void>;
}
