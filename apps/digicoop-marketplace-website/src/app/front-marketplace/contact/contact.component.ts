import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactCard {
  title: string;
  subtitle: string;
  icon: string;
  content: string; // HTML content or text
  link?: string;
  linkText?: string;
  linkType?: 'tel' | 'mailto' | 'action';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactCards = signal<ContactCard[]>([
    {
      title: 'Service Client',
      subtitle: 'Pour vos commandes et suivis',
      icon: 'support_agent',
      content: '+33 1 23 45 67 89',
      link: 'tel:+33123456789',
      linkText: 'support@digicoops.com',
      linkType: 'mailto' // This one has two links in the design, I'll adapt the template or structure.
      // Actually the specific design has diverse structures. I'll keep it simple or make the template handle specific types if I want to be very generic, 
      // but for this specific layout, data-driving the "Cards" is smart.
      // Let's look at the cards:
      // 1. Phone link + Email link
      // 2. Address text
      // 3. Email link + Button
      
      // I will implement the cards statically in HTML if they are too diverse, OR make a smart data structure.
      // The user wants "maintainable", so separate data is good, but "clean code" is better than over-engineered generic cards for 3 different items.
      // However, I will separate the "Subject" options for the form.
    }
  ]);

  subjects = [
    "Demande d'information produit",
    "Service Après-Vente",
    "Partenariat",
    "Autre demande"
  ];

  formData = {
    name: '',
    company: '',
    email: '',
    subject: this.subjects[0],
    message: ''
  };

  submitForm() {
    console.log('Form submitted', this.formData);
    // Add logic to send data to backend or show success message
    alert('Votre message a bien été envoyé !');
  }
}
