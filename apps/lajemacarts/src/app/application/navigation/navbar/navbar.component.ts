import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, JsonPipe, NgForOf, NgOptimizedImage } from '@angular/common';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatAnchor, MatIconAnchor } from '@angular/material/button';
import { MenuItemInterface } from '../interfaces/menu-item.interface';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgForOf, NgOptimizedImage, MatToolbar, MatIcon, MatAnchor, MatIconAnchor, JsonPipe],
  selector: 'lajemacarts-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }

    .logo-title-container {
      display: flex;
      align-items: center;
    }

    .title {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }

    .spacer {
      flex-grow: 1;
    }

    .nav-item {
      font-size: 1em;
    }

    .nav-links {
      margin-left: 10px;
    }
  `],
  template: `
    <mat-toolbar class="toolbar-color">
      <div class="container">
        <div class="logo-title-container">
          <a mat-button routerLink="/">
            <div class="title">
              <img ngSrc="logo.svg" alt="Lajemac-Arts Logo" width="120" height="60" priority="high" />
              <span>Lajemac-Arts</span>
            </div>
          </a>
        </div>
        <div class="nav-links">
          <a class="nav-item" mat-button *ngFor="let item of navbarItems()" [routerLink]="item.link">
            {{ item.label }}
          </a>
        </div>
        <span class="spacer"></span>
        @if (false) {
          <a mat-icon-button routerLink="/auth/login">
            <mat-icon>account_circle</mat-icon>
          </a>
        } @else {
          <a mat-icon-button>
            Se déconnecter
          </a>
        }
      </div>
    </mat-toolbar>
  `
})
export class NavbarComponent {
  // protected authService: AuthServiceImpl = inject(AuthServiceImpl);

  private baseNavbarItems: MenuItemInterface[] = [
    { label: 'Accueil', link: '/accueil' },
    { label: 'Galerie', link: '/galerie' },
    { label: 'Panier', link: '/panier' },
  ];

  navbarItems = computed(() => {
    const items = [...this.baseNavbarItems];
    if (true) {
      items.push({ label: 'Tableau de bord', link: '/tableau-de-bord' });
    }
    return items;
  });


}
