import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'lajemacarts-banner',
  standalone: true,
  template: `
    <div class="banner">
      <div class="overlay">
        <h1>Bienvenue à l'Atelier Lajemac-Arts</h1>
        <p>Découvrez des créations uniques en bois et résine</p>
        <img ngSrc="logo.svg" alt="Lajemac-Arts Logo" width="300" height="150" priority="high" />
      </div>
    </div>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: [`
    .banner {
      position: relative;
      width: 100%;
      height: 500px;
      background: url('/banner.png') no-repeat center center;
      background-size: cover;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.25);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      text-align: center;
    }

    .overlay h1 {
      font-size: 56px;
      margin: 0;
      font-weight: bold;
    }

    .overlay p {
      font-size: 28px;
      margin-top: 10px;
    }
  `]
})

export class BannerComponent {

}
