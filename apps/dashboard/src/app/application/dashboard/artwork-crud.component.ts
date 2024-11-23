import { Component, OnInit } from '@angular/core';
import { CreateArtworkDto } from '../../domain/dto/create-artwork.dto';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'lajemacarts-artwork-crud',
  standalone: true,
  template: `
    <div class="artwork-crud">
      <h2>Gestion des Œuvres</h2>
      <button (click)="loadArtworks()">Charger les œuvres</button>
      <ul>
        <li *ngFor="let artwork of artworks">
          {{ artwork.title }} - {{ artwork.price }}€
          <button (click)="editArtwork(artwork)">Modifier</button>
          <button (click)="deleteArtwork(artwork.id)">Supprimer</button>
        </li>
      </ul>
      <form (ngSubmit)="submitNewArt()">
        <input [(ngModel)]="currentArtwork.title" name="title" placeholder="Titre" required />
        <input [(ngModel)]="currentArtwork.price" name="price" placeholder="Prix" type="number" required />
        <button type="submit">{{ isEditing ? 'Mettre à jour' : 'Créer' }}</button>
      </form>
    </div>
  `,
  imports: [
    FormsModule,
    NgForOf
  ],
  styles: [`
    .artwork-crud {
      padding: 20px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    form {
      margin-top: 20px;
    }
  `]
})
export class ArtworkCrudComponent implements OnInit {
  constructor(private artworkService: ArtworkService) {}

  ngOnInit(): void {
  }

  loadArtworks(): void {

  }

  submitNewArt() {
  }

  editArtwork(artwork: CreateArtworkDto) {
    console.log(artwork);
  }

  deleteArtwork(id: number) {
    console.log(id);
  }
}
