import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  stats = signal<Stat[]>([
    { value: '5k+', label: 'Agriculteurs' },
    { value: '200+', label: 'Produits' },
    { value: '15k+', label: 'Livraisons' },
    { value: '100%', label: 'Senegalais' },
  ]);

  values = signal<Value[]>([
    {
      icon: 'visibility',
      title: 'Transparence',
      description: 'Des prix clairs, une traçabilité totale de nos produits et une communication honnête avec nos partenaires. Pas de coûts cachés.'
    },
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'Nous sommes en perpétuelle recherche des meilleures technologies (IoT, Drones, Data) pour faciliter votre quotidien.'
    },
    {
      icon: 'handshake',
      title: 'Proximité',
      description: 'Une équipe support dédiée, experte du monde agricole, disponible pour vous accompagner à chaque étape de votre développement.'
    }
  ]);

  team = signal<TeamMember[]>([
    {
      name: 'Mbaye Ndiaye',
      role: 'Fondateur & CEO',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDifg60oiPJQySUle2Lagd79yukEIug0lfeKIm3RKuUDgPvhL3CRBVASBGVPGUiOczGyLTWO08Tk5Ay03_egzYPuIPv3QrgpoO6a_hQBvga-JYUpwaYEnDvCoMEofHux1sRpXkNzducISzGQSvA1LLojksQ83PMrWu1dJRwbxxAtunI7eexhh1USfCeSC7Ab1ZaWcfghu1ipW-lRgTtKjfEJ6wem5W3Dgym-h5kADWSDNExsHyZ0mIRnr9HR8WGRYVfPfw4cS-Fu34',
      socials: { facebook: '#', linkedin: '#', instagram: '#' }
    },
    {
      name: 'ALDRICH Clement D',
      role: 'Developer fullstack',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTvvqCpiVgobUvUcfVWAhlFt-UbVwezP_Zq2MXS8py3FWxu9w-eXF7EH0b8UWv4RisKhyd30KBGAnoKXlAzmTNfaDlOdect5WLAayn4YDNeeZRzm8HaRFwkVKkb3ObSyoQm4PQTjpsdu9ek-fXdTrcZ6Mc_OE7Zxobe_-Y6NXw4K__E1pg0sUQCiqPB93oMD53P8R3IQ9KR1R6_GWbxUlkPrEcIqVHCimHvRRJir8rvS22i11EdrkHuZhnOjbyyvYVDl70a4ErJuI',
      socials: { facebook: '#', linkedin: '#', instagram: '#' }
    },
    {
      name: 'Aziz Ndiaye',
      role: 'Expert en sécurité & SI',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDETfZtg4yCK5tuWQj2YXBdLXO_cUpPsU0eSRqFxhz4ovnboXo0o_zLE2MinDYgtkzJ5mcZkCfDbPN0TALZbWkK5b49_EjnPaeC-iNajIgi_6Q5IXKkX5-4oYjTfx7-vNs_s9-8SB7ET3uwD-m-RK49PwUOVczuH81r_zCOowiJjq1XruadSQvPO61yAcaGld8vJNw6_s_yEOi5o5BT_NKIwpW82YU9UjMtyPNMZBdYcwJZYdnM0pLNrG9m5NCA1ceOe6pCZvom5tU',
      socials: { facebook: '#', linkedin: '#', instagram: '#' }
    },
    {
      name: 'Khadija Ndiaye',
      role: 'Developper web',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1TGBw_i02EIu2pBEt5PbzmuAM1qvWejNaoVvRBWESJOTy7vxWg4Ej5t-hB_doakh838Bpg_csjwH3EAWmIW3FdCTUdJFbU6g7UPeeL8CP9UfbJeIE0TvCZridgr_QPyAPvHnxlT1yCBbJQAka568akLcVVIX6UFJk18_W3Z8Pxk1XBbKUnBF4KJhoRZSQbHqWH9-4m-1day8NlD3S2ZQt-HftaVmXEshiivdLr2XPWqISbst4XiHoDYM3SqcE_CEodm-Ypl33vMQ',
      socials: { facebook: '#', linkedin: '#', instagram: '#' }
    }
  ]);
}
