import { Observable } from 'rxjs';
import { Post } from './interfaces/post.interface';

export abstract class InstagramAbstract {
  abstract getRecentPosts(): Observable<Array<Post>>;
}
