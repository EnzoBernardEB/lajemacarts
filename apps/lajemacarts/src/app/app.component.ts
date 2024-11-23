import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './application';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  selector: 'lajemacarts-root',
  template: `
    <div class="wrapper">
      <lajemacarts-navbar></lajemacarts-navbar>
      <div class="main-panel">
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [``]
})
export class AppComponent {
}
