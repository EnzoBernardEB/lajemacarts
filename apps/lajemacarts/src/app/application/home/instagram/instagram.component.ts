import { Component } from '@angular/core';
import { InstagramService } from '../../../infrastructure/instagram/instagram.service';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { InstagramAbstract } from '../../../domain/instagram/instagram.abstract';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Post } from '../../../domain/instagram/interfaces/post.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lajemacarts-instagram',
  standalone: true,
  template: `
    <div class="container">
      <h2 class="title">Derniers posts Instagram</h2>
      <div class="posts">
        @for (post of instagramPosts; track post.id) {
          <mat-card class="post">
            @switch (post.media_type) {
              @case ('CAROUSEL_ALBUM') {
                <img ngSrc="{{post.media_url}}" width="300" height="200" alt="Instagram Post">
              }
              @case ('VIDEO') {
                <video controls mat-card-image>
                  <source [src]="post.media_url" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              }
              @default {
                <p>Unsupported media type</p>
              }
            }
            <mat-card-content>
              <p>{{ post.caption }}</p>
            </mat-card-content>
            <mat-card-actions>
              <a mat-button [href]="post.permalink" target="_blank">Voir sur Instagram</a>
            </mat-card-actions>
          </mat-card>
        } @empty {
          <p>Il n'y a pas de posts à afficher.</p>
        }
      </div>
    </div>
  `,
  imports: [
    NgForOf,
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule
  ],
  styles: [`
    .container {
      width: 80%;
      margin: 4em auto;
      padding: 20px;
      text-align: center;
    }

    .title {
      text-align: center;
      margin-bottom: 20px;
    }

    mat-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      border-radius: 8px;
      overflow: hidden;
    }

    .posts {
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      overflow-x: auto;
      width: 100%;
    }

    .post {
      margin: 10px;
      flex: 1 0 calc(20% - 20px);
      box-sizing: border-box;
      max-width: calc(20% - 20px);
    }

    mat-card-content {
      flex-grow: 1;
    }

    .mat-card-content p {
      flex-grow: 1;
      font-size: 14px;
      margin: 10px 0;
      text-align: left;
    }

    .mat-card-actions a {
      text-decoration: none;
      color: #3897f0;
    }

    img, video {
      width: 100%;
      height: auto;
    }
  `],
  providers: [
    {
      provide: InstagramAbstract,
      useFactory: (httpClient: HttpClient) => new InstagramService(httpClient),
      deps: [HttpClient]
    }
  ]
})
export class InstagramComponent {
  instagramPosts: Array<Post> = [];

  constructor(private instagramService: InstagramAbstract) {
    this.load();
  }

  load() {
    this.instagramService.getRecentPosts().pipe(
      tap(console.log),
      map(posts => this.instagramPosts = posts),
      takeUntilDestroyed()
    ).subscribe();
  }
}
