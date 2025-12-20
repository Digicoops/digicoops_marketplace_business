import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerMethod = signal<'email' | 'phone'>('email');
  
  countries = [
    { name: 'Cameroun', code: '+237', flag: '🇨🇲' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Côte d\'Ivoire', code: '+225', flag: '🇨🇮' },
    { name: 'Sénégal', code: '+221', flag: '🇸🇳' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦' }
  ];
  
  selectedCountry = signal(this.countries[0]);
  isDropdownOpen = signal(false);

  setRegisterMethod(method: 'email' | 'phone') {
    this.registerMethod.set(method);
    this.isDropdownOpen.set(false);
  }

  toggleDropdown() {
    this.isDropdownOpen.update(v => !v);
  }

  selectCountry(country: any) {
    this.selectedCountry.set(country);
    this.isDropdownOpen.set(false);
  }
}
