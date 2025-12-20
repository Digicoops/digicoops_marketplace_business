import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  
  categories = signal<FaqCategory[]>([
    {
      id: 'commandes',
      name: 'Commandes',
      icon: 'shopping_bag',
      items: [
        {
          question: "Comment suivre l'état de ma commande ?",
          answer: "Une fois votre commande validée, vous recevrez un email de confirmation contenant un lien de suivi. Vous pouvez également retrouver ce suivi directement dans votre espace client, rubrique \"Mes Commandes\". Le statut est mis à jour en temps réel à chaque étape logistique."
        },
        {
          question: "Puis-je modifier ou annuler une commande ?",
          answer: "Vous disposez d'un délai de 2 heures après validation pour annuler ou modifier votre commande directement depuis votre espace client. Passé ce délai, la commande est transmise à nos entrepôts. Veuillez alors contacter notre service client au 01 23 45 67 89 pour une assistance immédiate."
        },
        {
          question: "Comment obtenir un devis pour de gros volumes ?",
          answer: "Pour les commandes de gros volumes (semences, engrais, matériel), ajoutez les produits à votre panier et sélectionnez l'option \"Demander un devis\" au lieu de payer. Nos experts commerciaux vous répondront sous 24h ouvrées avec une offre personnalisée incluant les frais de transport ajustés."
        }
      ]
    },
    {
      id: 'livraison',
      name: 'Livraison',
      icon: 'local_shipping',
      items: [
        {
          question: "Quels sont les délais de livraison pour le matériel lourd ?",
          answer: "Pour le petit matériel et les pièces détachées, la livraison s'effectue sous 24/48h. Pour le matériel lourd (tracteurs, moissonneuses, équipements d'irrigation), comptez entre 5 et 10 jours ouvrés selon la disponibilité et votre localisation géographique. Le transporteur prendra rendez-vous avec vous 24h avant la livraison."
        },
        {
          question: "Livrez-vous directement dans les champs ?",
          answer: "Oui, grâce à notre réseau de transporteurs spécialisés agricole. Lors de la commande, vous pouvez renseigner des coordonnées GPS précises pour une livraison sur parcelle. Assurez-vous simplement que l'accès est carrossable pour un poids lourd."
        }
      ]
    },
    {
      id: 'paiement',
      name: 'Paiement',
      icon: 'payments',
      items: [
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires instantanés et différés, ainsi que le prélèvement SEPA pour nos clients professionnels récurrents. Le paiement en 3x ou 4x sans frais est disponible via notre partenaire Alma pour les paniers jusqu'à 3000€."
        },
        {
          question: "Proposez-vous le paiement différé \"Campagne\" ?",
          answer: "Oui, pour les coopératives et agriculteurs éligibles (après validation du dossier financier), nous proposons le paiement \"Fin de Campagne\" qui permet de régler vos intrants après la récolte. Contactez votre responsable de compte pour activer cette option."
        }
      ]
    },
    {
      id: 'compte',
      name: 'Compte Client',
      icon: 'person',
      items: [
        {
          question: "Comment créer un compte professionnel ?",
          answer: "Lors de votre inscription, munissez-vous de votre numéro SIRET et de votre numéro de TVA intracommunautaire. L'inscription est immédiate, mais la validation du statut professionnel (pour l'exonération de TVA éventuelle et les tarifs pro) peut prendre jusqu'à 24h après vérification de vos documents."
        }
      ]
    },
     {
      id: 'technique',
      name: 'Support Technique',
      icon: 'settings_remote',
      items: [] // Placeholder based on UI nav but no content in provided HTML, keeping empty or omitting if not needed.
    }
  ]);
  
  scrollTo(id: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header if needed, or just smooth scroll
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
