import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardOrdersComponent } from '../components/orders/dashboard-orders.component';
import { DashboardPromoComponent } from '../components/promo/dashboard-promo.component';
import { DashboardQuickAccessComponent } from '../components/quick-access/dashboard-quick-access.component';
import { DashboardRegionComponent } from '../components/region/dashboard-region.component';
import { DashboardStatsComponent } from '../components/stats/dashboard-stats.component';
import { DashboardTrackingComponent } from '../components/tracking/dashboard-tracking.component';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, RouterLink, DashboardStatsComponent, DashboardOrdersComponent, DashboardPromoComponent, DashboardTrackingComponent, DashboardQuickAccessComponent, DashboardRegionComponent],
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent {}
