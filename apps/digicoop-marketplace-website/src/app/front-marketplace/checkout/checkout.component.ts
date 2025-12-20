import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CheckoutConfirmationComponent } from './components/checkout-confirmation/checkout-confirmation.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { CheckoutOrderSummaryComponent } from './components/checkout-order-summary/checkout-order-summary.component';
import { CheckoutPaymentComponent } from './components/checkout-payment/checkout-payment.component';
import { CheckoutStepperComponent } from './components/checkout-stepper/checkout-stepper.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink, CommonModule, CheckoutFormComponent, CheckoutOrderSummaryComponent, CheckoutStepperComponent, CheckoutPaymentComponent, CheckoutConfirmationComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  currentStep = signal(1);
  selectedPaymentMethod = signal('mobile_money');
  isProcessingPayment = signal(false);

  setPaymentMethod(method: string) {
    this.selectedPaymentMethod.set(method);
  }

  goToNextStep() {
    if (this.currentStep() === 2) {
      this.handlePayment();
    } else {
      this.currentStep.update(s => Math.min(s + 1, 3));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPrevStep() {
    this.currentStep.update(s => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private handlePayment() {
    const method = this.selectedPaymentMethod();
    if (method === 'cash') {
      // Instant transition for Cash on Delivery
      this.completeOrder();
    } else {
      // Simulate Processing for Mobile/Card
      this.isProcessingPayment.set(true);
      setTimeout(() => {
        this.isProcessingPayment.set(false);
        this.completeOrder();
      }, 2000); // 2 seconds delay
    }
  }

  private completeOrder() {
    this.currentStep.set(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
