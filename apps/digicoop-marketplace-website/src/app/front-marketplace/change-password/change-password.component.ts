import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  private router = inject(Router);
  passwords = {
    newPassword: '',
    confirmPassword: ''
  };

  onSubmit() {
    if (this.passwords.newPassword !== this.passwords.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }
    console.log('Password changed successfully');
    // Simulate API call
    setTimeout(() => {
        // Redirect to login after successful reset
       this.router.navigate(['/login']);
    }, 500);
  }
}
