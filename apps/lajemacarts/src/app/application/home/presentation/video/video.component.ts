import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lajemacarts-video',
  standalone: true,
  template: `
    <div class="video">
      <video width="100%" controls>
        <source src="/presentation.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <p *ngIf="!isVideoSupported">Aucune vidéo dont le format ou le type MIME est géré n’a été trouvée.</p>
    </div>`,
  imports: [
    NgIf
  ],
  styles: [`.video {
    max-width: 100%;
    height: auto;
  }`]
})
export class VideoComponent {
  isVideoSupported = false;

  constructor() {
    const video = document.createElement('video');
    this.isVideoSupported = !!(video.canPlayType && video.canPlayType('video/mp4').replace(/no/, ''));
  }
}

