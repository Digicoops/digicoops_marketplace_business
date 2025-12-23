import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedFooterComponent } from '../../shared/shared-footer.component';
import { SharedHeaderComponent } from '../../shared/shared-header.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [SharedFooterComponent, SharedHeaderComponent, RouterLink],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {}
