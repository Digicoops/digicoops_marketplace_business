import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TicketService } from '../../../../../core/services/ticket.service';
import { SharedFooterComponent } from '../../shared/shared-footer.component';
import { SharedHeaderComponent } from '../../shared/shared-header.component';

@Component({
  selector: 'app-ticket-list',
  standalone: true,
  imports: [RouterLink, SharedFooterComponent, SharedHeaderComponent],
  templateUrl: './ticket-list.component.html',
})
export class TicketListComponent {
  ticketService = inject(TicketService);
}
