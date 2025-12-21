import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-filters.component.html',
  styleUrls: ['./invoice-filters.component.scss']
})
export class InvoiceFiltersComponent {}
