import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'dashboard-root',
  standalone: true,
  imports: [
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule
  ],
  template: `
    <mat-sidenav-container class="app-container">
      <mat-sidenav #sidenav mode="side" opened>
        <mat-toolbar color="primary">Menu</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/artworks" routerLinkActive="active">
            <mat-icon>list</mat-icon>
            Liste des Œuvres
          </a>
          <a mat-list-item routerLink="/artworks/new" routerLinkActive="active">
            <mat-icon>add</mat-icon>
            Ajouter une Œuvre
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar color="primary" class="flex">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span>Lajemac Arts Dashboard</span>
        </mat-toolbar>

        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .app-container {
      height: 100vh;
    }

    .content {
      padding: 24px;
      margin-top: 20px;
    }

    mat-sidenav {
      width: 240px;
    }

    mat-toolbar {
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    }

    mat-nav-list a {
      display: flex;
      align-items: center;
    }

    mat-nav-list a mat-icon {
      margin-right: 10px;
    }
  `]
})
export class AppComponent {
}
