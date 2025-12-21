import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InvoiceActivityComponent } from './components/activity/invoice-activity.component';
import { InvoiceFiltersComponent } from './components/filters/invoice-filters.component';
import { InvoiceSupportComponent } from './components/support/invoice-support.component';
import { InvoiceTableComponent } from './components/table/invoice-table.component';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    CommonModule, 
    InvoiceFiltersComponent, 
    InvoiceTableComponent, 
    InvoiceActivityComponent, 
    InvoiceSupportComponent
  ],
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {}
