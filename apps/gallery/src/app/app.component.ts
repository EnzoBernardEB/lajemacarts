import { Component } from '@angular/core';
import { GalleryView } from './application';

@Component({
  standalone: true,
  imports: [GalleryView],
  selector: 'lajemacarts-gallery-root',
  template: `
    <lajemacarts-gallery></lajemacarts-gallery>
  `
})
export class AppComponent {
}
