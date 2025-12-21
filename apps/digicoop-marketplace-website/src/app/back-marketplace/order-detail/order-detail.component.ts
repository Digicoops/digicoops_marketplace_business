import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderBillingComponent } from './components/order-billing/order-billing.component';
import { OrderDeliveryComponent } from './components/order-delivery/order-delivery.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, OrderItemsComponent, OrderSummaryComponent, OrderHistoryComponent, OrderDeliveryComponent, OrderBillingComponent],
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent {}
