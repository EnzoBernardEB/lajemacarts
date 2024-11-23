import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { PresentationComponent } from './presentation/presentation.component';
import { InstagramComponent } from './instagram/instagram.component';

@Component({
  selector: 'lajemacarts-home',
  standalone: true,
  imports: [
    BannerComponent,
    PresentationComponent,
    InstagramComponent
  ],
  template: `
    <div>
      <lajemacarts-banner></lajemacarts-banner>
    </div>
    <div class="presentation">
      <lajemacarts-presentation></lajemacarts-presentation>
    </div>
    <div>
      <lajemacarts-instagram></lajemacarts-instagram>
    </div>
  `,
  styles: [`
    .presentation {
      margin-top: 20px;
    }
  `]
})
export class HomeComponent {
}
