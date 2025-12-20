import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-checkout-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-stepper.component.html',
  styleUrls: ['./checkout-stepper.component.scss']
})
export class CheckoutStepperComponent {
  currentStep = input<number>(1);
}
