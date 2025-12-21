import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DashboardOrdersComponent } from '../components/orders/dashboard-orders.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, DashboardOrdersComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {}
