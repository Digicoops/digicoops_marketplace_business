import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  private router = inject(Router);
  email: string = '';

  onSubmit() {
    console.log('Reset link requested for:', this.email);
    // Simulate API call
    setTimeout(() => {
      this.router.navigate(['/forgot-password-confirmation']);
    }, 500);
  }
}
