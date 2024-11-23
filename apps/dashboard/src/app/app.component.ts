import { Component } from '@angular/core';
import { DashboardView } from './application/dashboard/dashboard.view';

@Component({
  standalone: true,
  imports: [DashboardView],
  selector: 'lajemacarts-dashboard-root',
  template: `
    <lajemacarts-dashboard></lajemacarts-dashboard>
  `
})
export class AppComponent {
}
