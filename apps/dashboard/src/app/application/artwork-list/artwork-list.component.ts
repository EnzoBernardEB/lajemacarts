// src/app/components/artwork-list.component.ts

import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkDto } from '../dto/artwork.dto';
import { GetAllArtworksUseCase } from '../usecases/get-all-artworks.usecase';
import { DeleteArtworkUseCase } from '../usecases/delete-artwork.usecase';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { ArtworkRepositoryImpl } from '../../infrastructure/artwork-http.service';
import { MatIcon } from '@angular/material/icon';
import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'dashboard-artwork-list',
  templateUrl: './artwork-list.component.html',
  standalone: true,
  providers: [
    { provide: ArtworkRepository, useClass: ArtworkRepositoryImpl },
    GetAllArtworksUseCase, DeleteArtworkUseCase
  ],
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatIcon,
    CurrencyPipe,
    AsyncPipe,
    NgIf
  ]
})
export class ArtworkListComponent {
  displayedColumns: string[] = ['id', 'title', 'type', 'price', 'actions'];
  private getAllArtworksUseCase: GetAllArtworksUseCase = inject(GetAllArtworksUseCase);
  protected artworks$: Observable<ArtworkDto[]> = this.getAllArtworksUseCase.getAll();
  private deleteArtworkUseCase: DeleteArtworkUseCase = inject(DeleteArtworkUseCase);
  private snackBar: MatSnackBar = inject(MatSnackBar);

  deleteArtwork(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette œuvre ?')) {
      this.deleteArtworkUseCase.delete(id).subscribe(() => {
        this.snackBar.open('Œuvre supprimée avec succès', 'Fermer', { duration: 3000 });
        this.artworks$ = this.getAllArtworksUseCase.getAll();
      });
    }
  }
}
