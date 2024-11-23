import { Component, output, signal, WritableSignal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { ArtworkType } from '../../../domain/entities/artwork-type';
import { ArtworkMaterial } from '../../../domain/entities/artwork-material';
import { ArtworkFilter } from '../../../domain/entities/artwork-filter.modele';
import { MatOptionSelectionChange } from '@angular/material/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'lajemacarts-search-gallery',
  standalone: true,
  template: `
    <div class="search-container">
      <mat-form-field class="search-field" subscriptSizing="dynamic">
        <mat-label>Recherche par identifiant</mat-label>
        <input matInput type="text" (input)="updateIdSelection($event)" [value]="id()">
        @if (id()) {
          <button matSuffix mat-icon-button aria-label="Clear" (click)="clearField('id')">
            <mat-icon>close</mat-icon>
          </button>
        }
      </mat-form-field>

      <mat-form-field class="search-field" subscriptSizing="dynamic">
        <mat-label>Recherche par type</mat-label>
        <mat-select multiple>
          @for (type of artworkTypes; track type) {
            <mat-option [value]="type" (onSelectionChange)="updateTypeSelection($event)">{{ type }}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
      <mat-form-field class="search-field" subscriptSizing="dynamic">
        <mat-label>Recherche par matériaux</mat-label>
        <mat-select multiple>
          @for (material of artworkMaterials; track material) {
            <mat-option [value]="material"
                        (onSelectionChange)="updateMaterialSelection($event)">{{ material }}
            </mat-option>
          }
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [`
    .search-container {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px;
      border-radius: 8px;
    }

    .search-field {
      flex: 1;
    }

    ::ng-deep .cdk-overlay-pane {
      background-color: #808080 !important;
    }

  `],
  imports: [

    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelect,
    MatOption
  ]
})
export class SearchGalleryComponent {
  artworkFilter = output<ArtworkFilter>();
  protected readonly artworkTypes = Object.values(ArtworkType);
  protected readonly artworkMaterials = Object.values(ArtworkMaterial);

  id: WritableSignal<string> = signal('');
  typeSelected: WritableSignal<Array<string>> = signal([]);
  materialSelected: WritableSignal<Array<ArtworkMaterial>> = signal([]);

  private idSelection = new Subject<string>();
  private idSelection$ = this.idSelection.asObservable();

  constructor() {
    this.idSelection$.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.id.set(value);
      this.updateFilter();
    });
  }

  clearField(field: string) {
    if (field === 'id') {
      this.id.set('');
      this.updateFilter();
    }
  }

  updateTypeSelection(selectedType: MatOptionSelectionChange) {
    this.typeSelected.update((types: Array<string>) => {
      if (selectedType.isUserInput) {
        if (selectedType.source.selected) {
          return [...types, selectedType.source.value];
        } else {
          return types.filter(type => type !== selectedType.source.value);
        }
      }
      return types;
    });
    this.updateFilter();
  }

  updateMaterialSelection(selectedMaterial: MatOptionSelectionChange) {
    this.materialSelected.update((materials: Array<string>) => {
      if (selectedMaterial.isUserInput) {
        if (selectedMaterial.source.selected) {
          return [...materials, selectedMaterial.source.value];
        } else {
          return materials.filter(material => material !== selectedMaterial.source.value);
        }
      }
      return materials;
    });
    this.updateFilter();
  }


  updateFilter() {
    this.artworkFilter.emit({
      id: this.id(),
      types: this.typeSelected(),
      materials: this.materialSelected()
    });
  }

  updateIdSelection($event: Event) {
    const idSelected = ($event.target as HTMLInputElement).value;
    this.idSelection.next(idSelected);
  }
}
