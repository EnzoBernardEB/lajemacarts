import { Component, DestroyRef, inject, Signal } from '@angular/core';
import { ArtworkModele } from '../../../domain/entities/artwork.modele';
import { GalleryUsecaseImpl } from '../gallery-usecase.impl';
import { MatCardModule } from '@angular/material/card';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchGalleryComponent } from '../components/search-gallery.component';
import { ArtworkFilter } from '../../../domain/entities/artwork-filter.modele';
import { GalleryUsecase } from '../../../domain/gallery.usecase';
import { GalleryHttpService } from '../../../infrastructure/services/gallery-http.service';

@Component({
  selector: 'lajemacarts-gallery',
  standalone: true,
  template: `
    <lajemacarts-search-gallery
      (artworkFilter)="searchArtwork($event)"
    ></lajemacarts-search-gallery>
    <div class="gallery">
      <mat-card class="artwork-card" *ngFor="let artwork of artworks()">
        <mat-card-header>
          <div mat-card-avatar class="gallery-header-image"></div>
          <mat-card-title>#{{ artwork.id }}</mat-card-title>
          <mat-card-subtitle>
            <mat-chip-set aria-label="Type du produit" *ngFor="let type of artwork.types">
              <mat-chip>{{ type }}</mat-chip>
            </mat-chip-set>
          </mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image [ngSrc]="artwork.photoUrl" alt="Image du produit" width="300" height="200">
        <mat-card-content>
          <div class="materials">
            <mat-chip-set aria-label="Matériaux du produit" *ngFor="let material of artwork.materials">
              <mat-chip>{{ material }}</mat-chip>
            </mat-chip-set>
          </div>
          <p>{{ artwork.description }}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button>Détail</button>
          <button mat-button>Ajouter</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styleUrl: './gallery.view.scss',
  imports: [
    NgOptimizedImage,
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatChipSet,
    MatChip,
    ReactiveFormsModule,
    SearchGalleryComponent
  ],
  providers: [GalleryHttpService,
    {
      provide: GalleryUsecase, 
      useClass:GalleryUsecaseImpl, 
      deps: [GalleryHttpService]
    }
  ]
})
export class GalleryView {
  private destroyRef: DestroyRef = inject(DestroyRef);
  private galleryUsecase: GalleryUsecase = inject(GalleryUsecase);
  
  artworks: Signal<ArtworkModele[]> = toSignal(this.galleryUsecase.artworks$, { initialValue: [] });

  protected searchArtwork(artworkFilter: ArtworkFilter) {
    console.log(artworkFilter);
    this.galleryUsecase.listArtwork(artworkFilter).pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
