import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TicketService } from '../../../../../core/services/ticket.service';
import { SharedFooterComponent } from '../../shared/shared-footer.component';
import { SharedHeaderComponent } from '../../shared/shared-header.component';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [SharedFooterComponent, SharedHeaderComponent, RouterLink],
  templateUrl: './ticket-detail.component.html',
})
export class TicketDetailComponent {
  route = inject(ActivatedRoute);
  ticketService = inject(TicketService);

  get ticket() {
    const id = (this.route.snapshot.params as any)['id'];
    return this.ticketService.getTicket(id);
  }
}
