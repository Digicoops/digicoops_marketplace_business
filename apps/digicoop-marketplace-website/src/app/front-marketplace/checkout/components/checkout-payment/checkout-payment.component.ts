import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';

@Component({
  selector: 'app-checkout-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent {
  selectedMethod = signal<string>('mobile_money');
  @Output() methodChange = new EventEmitter<string>();

  selectMethod(method: string) {
    this.selectedMethod.set(method);
    this.methodChange.emit(method);
  }
}
