// src/app/components/artwork-create.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateArtworkUseCase } from '../usecases/create-artwork.usecase';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ArtworkRepository } from '../../domain/services/artwork.repository';
import { ArtworkRepositoryImpl } from '../../infrastructure/artwork-http.service';
import { MatCardModule } from '@angular/material/card';
import { ArtworkTypeEnum } from '../../domain/entities/artwork-type.enum';
import { ArtworkMaterialEnum } from '../../domain/entities/artwork-material.enum';
import { MatSelectModule } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'dashboard-artwork-create',
  templateUrl: 'create-artwork.component.html',
  styleUrls: ['create-artwork.component.scss'],
  standalone: true,
  providers: [
    { provide: ArtworkRepository, useClass: ArtworkRepositoryImpl },
    CreateArtworkUseCase
  ], imports: [
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    NgForOf
  ]
})
export class CreateArtworkComponent {
  artworkForm: FormGroup;
  artworkTypes = Object.values(ArtworkTypeEnum);
  artworkMaterials = Object.values(ArtworkMaterialEnum);

  constructor(
    private fb: FormBuilder,
    private createArtworkUseCase: CreateArtworkUseCase,
    private router: Router
  ) {
    this.artworkForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      type: ['', Validators.required],
      availability: [true, Validators.required],
      photo: [''],
      material: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit(): void {
    if (this.artworkForm.valid) {
      this.createArtworkUseCase.create(this.artworkForm.value).subscribe(() => {
        this.router.navigate(['/artworks']);
      });
    }
  }
}
