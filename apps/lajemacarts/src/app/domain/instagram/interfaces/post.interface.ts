export interface Post {
  id: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
}

export interface InstagramResponse {
  data: Array<Post>;
}
