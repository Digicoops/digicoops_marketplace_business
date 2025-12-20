import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss']
})
export class CheckoutFormComponent {
  sameBillingAddress = signal(true);

  toggleBillingAddress(event: Event) {
    const input = event.target as HTMLInputElement;
    this.sameBillingAddress.set(input.checked);
  }
}
