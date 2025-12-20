import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginMethod = signal<'email' | 'phone'>('email');
  
  countries = [
    { name: 'Cameroun', code: '+237', flag: '🇨🇲' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Côte d\'Ivoire', code: '+225', flag: '🇨🇮' },
    { name: 'Sénégal', code: '+221', flag: '🇸🇳' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦' }
  ];
  
  selectedCountry = signal(this.countries[0]);
  isDropdownOpen = signal(false);

  setLoginMethod(method: 'email' | 'phone') {
    this.loginMethod.set(method);
    this.isDropdownOpen.set(false); // Close dropdown if switching methods
  }

  toggleDropdown() {
    this.isDropdownOpen.update(v => !v);
  }

  selectCountry(country: any) {
    this.selectedCountry.set(country);
    this.isDropdownOpen.set(false);
  }
}
