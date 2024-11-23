import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ArtworkCrudComponent } from './artwork-crud.component';

@Component({
  selector: 'lajemacarts-dashboard',
  standalone: true,
  template: `
    <lajemacarts-artwork-crud></lajemacarts-artwork-crud>
  `,
  imports: [
    ArtworkCrudComponent
  ],
  styles: [`
  `]
})
export class DashboardView {}