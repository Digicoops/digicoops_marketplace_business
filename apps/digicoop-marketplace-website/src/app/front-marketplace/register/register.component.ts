import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthManagementService } from '../../core/services/auth/auth-managment.service';
import { SignUpData } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private authManagement = inject(AuthManagementService);
  private router = inject(Router);

  registerMethod = signal<'email' | 'phone'>('email');
  
  showPassword = false;
  isChecked = false;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  // Form fields
  fname = '';
  lname = '';
  shopName = '';
  shopAdresse = '';
  email = '';
  password = '';
  phone = '';
  displayPhone = '';

  countries = [
    { name: 'Sénégal', code: '+221', flag: '��' },
    { name: 'Cameroun', code: '+237', flag: '��' },
    { name: 'France', code: '+33', flag: '��' },
    { name: 'Côte d\'Ivoire', code: '+225', flag: '��' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦' }
  ];
  
  selectedCountry = signal(this.countries[0]);
  isDropdownOpen = signal(false);

  ngOnInit() {}

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

  togglePasswordVisibility() {
    if (!this.isLoading) {
      this.showPassword = !this.showPassword;
    }
  }

  handlePhoneNumberChange(phoneNumber: string) {
    this.phone = phoneNumber.replace(/\s+/g, '');
    this.displayPhone = phoneNumber;
  }

  formatPhoneNumber(phone: string): string {
    if (!phone) return '';
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length <= 2) {
      return cleanPhone;
    } else if (cleanPhone.length <= 5) {
      return `${cleanPhone.substring(0, 2)} ${cleanPhone.substring(2)}`;
    } else if (cleanPhone.length <= 7) {
      return `${cleanPhone.substring(0, 2)} ${cleanPhone.substring(2, 5)} ${cleanPhone.substring(5)}`;
    } else {
      return `${cleanPhone.substring(0, 2)} ${cleanPhone.substring(2, 5)} ${cleanPhone.substring(5, 7)} ${cleanPhone.substring(7, 9)}`;
    }
  }

  onPhoneInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value;
    const cleanValue = rawValue.replace(/\D/g, '');
    const limitedValue = cleanValue.slice(0, 9);
    this.phone = limitedValue;
    this.displayPhone = this.formatPhoneNumber(limitedValue);
    input.value = this.displayPhone;
  }

  isValidPhoneFormat(): boolean {
    if (!this.phone) return true;
    const phoneRegex = /^(77|78|76|70|33)\d{7}$/;
    return phoneRegex.test(this.phone.replace(/\s+/g, ''));
  }

  isFormValid(): boolean {
    return !!this.fname?.trim() &&
        !!this.lname?.trim() &&
        !!this.email?.trim() &&
        !!this.shopAdresse?.trim() &&
        !!this.password &&
        this.password.length >= 8 &&
        this.isChecked &&
        !!this.phone && this.isValidPhoneFormat();
  }

  async onSubmit() {
    if (!this.isFormValid()) {
      if (this.phone && !this.isValidPhoneFormat()) {
        this.errorMessage = 'Format de téléphone invalide. Utilisez un numéro sénégalais (ex: 77 660 61 06)';
      } else {
        this.errorMessage = 'Veuillez remplir tous les champs obligatoires et accepter les conditions.';
      }
      return; 
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const signUpData: SignUpData = {
      first_name: this.fname.trim(),
      last_name: this.lname.trim(),
      shop_name: this.shopName?.trim() || 'Particulier',
      shop_adresse: this.shopAdresse.trim(),
      profile: 'customer',
      email: this.email.trim(),
      password: this.password,
      phone: this.selectedCountry().code + this.phone
    };

    try {
      const result = await this.authManagement.register(signUpData);

      if (result.success) {
        this.successMessage = 'Inscription réussie ! Redirection...';
        setTimeout(() => {
          this.router.navigate(['/register-success']);
        }, 1500);
      } else {
        this.errorMessage = this.getErrorMessage(result.error);
      }
    } catch (error) {
      this.errorMessage = 'Une erreur inattendue est survenue.';
      console.error('Erreur inscription:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async signInWithGoogle() {
    this.isLoading = true;
    this.errorMessage = '';
    setTimeout(() => {
      this.isLoading = false;
      this.errorMessage = 'Connexion Google non implémentée pour le moment.';
    }, 1000);
  }

  private getErrorMessage(error: string | undefined): string {
    const errorMap: { [key: string]: string } = {
      'User already registered': 'Un compte existe déjà avec cet email.',
      'Invalid email': 'Adresse email invalide.',
      'Weak password': 'Le mot de passe est trop faible.',
      'Email not confirmed': 'Email non confirmé.',
      'Network error': 'Erreur de connexion. Vérifiez votre internet.',
      'Invalid phone number': 'Numéro de téléphone invalide.'
    };
    return errorMap[error || ''] || error || 'Erreur lors de l\'inscription.';
  }
}
