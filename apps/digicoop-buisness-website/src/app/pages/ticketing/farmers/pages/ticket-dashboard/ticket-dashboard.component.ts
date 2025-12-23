import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedFooterComponent } from '../../shared/shared-footer.component';
import { SharedHeaderComponent } from '../../shared/shared-header.component';

@Component({
  selector: 'app-ticket-dashboard',
  standalone: true,
  imports: [SharedFooterComponent, SharedHeaderComponent, RouterLink],
  templateUrl: './ticket-dashboard.component.html',
})
export class TicketDashboardComponent {}
