import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  mainCategory: 'produit agricole' | 'service agricole' | 'materiel agricole'; // Catégorie principale
  category: string; // Sous-catégorie
  price: number;
  image: string;
  images?: string[]; // Galerie d'images secondaires
  rating?: number;
  isNew?: boolean;
  isPromo?: boolean;
  ref?: string;
  description?: string;
  oldPrice?: number;
  stock?: string;
  specs?: {
    power?: string;
    tank?: string;
    width?: string;
    warranty?: string;
  };
  reviews?: any[]; // Pour les avis clients
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: Product[] = [
    {
      id: '1',
      name: 'Semences de Blé Hiver - 50kg',
      mainCategory: 'produit agricole',
      category: 'Semences',
      price: 55.00,
      ref: 'S-BLE-001',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1ZmCV35CsWUmCvPGYrBODPMz3xxRUFLKXY2Nc3ITk1pcBOdthzg5vuSoR0YyXfSApnvWx8RTf8aImZzAju0tZKqyB650zD5jtfBPYox-grHItvrlYBmlMf1EAicVbQaO-Dfu-pJP9wqW_CxemkDVD95seRuxjjSOXHWnysjqIkycIOk2rnuWJFM-uVK1QRsLqle7YRmdjsbihib4zzX3w6ruiLicbtR12SGcEhWQvzi4WYt7llr4VzCSFeqJkH4oniMMBh-BODM',
      isNew: true,
      description: 'Semences certifiées de blé d\'hiver résistantes aux maladies, rendement élevé pour vos cultures céréalières.',
      stock: 'En stock'
    },
    {
      id: '2',
      name: 'Engrais Organique Bio',
      mainCategory: 'produit agricole',
      category: 'Fertilisants',
      price: 45.00,
      ref: 'E-ORG-220',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFA5G7Zp1_V2pp700csosW-SL-5SkqdX_hJaXtI2x88HVcUaisKQrRK8GnKprGCf76s-R_fQXKasw2Y17UDXMKGuGqVJfMao9QWL7zF2MKP8YDUcPyMkoxZy2kWHNSVghfFFIV7pyAXqzikYrbzjeC4NS3gmWe4QLxz-iiRVzL1Cp_tEht_zKIg4AWaL4PPUsxPB81Oaai4m5B6pYl1s6KueNffS0o5nH-sz-0DsRfpnYFvqSLJBt4GDpPxDj-P8YDUcPyMkoxZy2kWHNSVghfFFIV7pyAXqzikYrbzjeC4NS3gmWe4QLxz-iiRVzL1Cp_tEht_zKIg4AWaL4PPUsxPB81Oaai4m5B6pYl1s6KueNffS0o5nH-sz-0DsRfpnYFvqSLJBt4GDpPxDj-WNG0Yfc7VrPAEVM',
      rating: 5,
      description: 'Formule enrichie pour une croissance optimale de vos cultures maraîchères.',
      stock: 'En stock'
    },
    {
      id: '3',
      name: 'Service de Maintenance Tracteur',
      mainCategory: 'service agricole',
      category: 'Maintenance',
      price: 150.00,
      ref: 'SVC-MAINT',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQCuJNSr1aNIwHu1fearNwIJyWeUVNfx6hNVoJZ2wJCoaaaTJ1zAPkZfKrPmJRIKlQI9I4RY0kG98dMb0vO1AHWkWvZl_Rcm0xOWCPh_10Cnkj_jBSr5tE8n_MbAWSZ0MRQfeXxEIfyZgMqSfo70h4EGUTXDtsCLoP-GCmswo8pllzj70WY8mAonET1kl9umNCDcs6IOTxsJfKgF_iSrrzHcHH1jvREEAlimfGOpjcjugjsPNFCWd1tiszoPU8gQqS5zIl_y2SjPI',
      description: 'Maintenance complète de votre tracteur avec pièces d\'origine et garantie.',
      stock: 'Sur commande'
    },
    {
      id: '4',
      name: 'Drone d\'analyse AgroTech X2',
      mainCategory: 'materiel agricole',
      category: 'Technologie',
      price: 1290.00,
      ref: 'TEC-DRN-X2',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVDod34xBz76N6fD5RM9NyKFzH8pD9QZFKfiM6qx_6_b0s2wAWhUHw2WXEoxDX1J6CUFZPEobH_2Ml8uVOYmMMPJqcizj6JuvxG-Bm1o6q78hge9yN_pIB4DcQSFNW81XpPDiDziXCg7Mf5rQiJ5GsGEoEe_hhgpMH1Ftzfpd9ZN3j1lOOtgAcOUGpSK4qblqL778101iymmBmz3D6mU6X1xWdk8tXRqwxT2oOW4iz0slKgp4yAKole1FzpJxPI1Md4dd1t0J2x7g',
      isNew: true,
      description: 'Cartographie aérienne haute précision et analyse multispectrale des sols.',
      stock: 'Stock limité'
    },
    {
      id: '5',
      name: 'Tracteur Compact X-500',
      mainCategory: 'materiel agricole',
      category: 'Machinerie',
      price: 21250.00,
      ref: 'MCH-TRC-500',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
      isPromo: true,
      description: 'Idéal pour les vergers et petites exploitations. Puissance et maniabilité.',
      oldPrice: 25000.00,
      stock: 'Sur commande'
    },
    {
        id: '6',
        name: 'Moissonneuse X-Series 2024',
        mainCategory: 'materiel agricole',
        category: 'Machinerie',
        price: 125000.00,
        ref: 'AGRI-X-2024-PRO',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bCS2_loxRmo8EE6edf6NjurHUdXqyQLmoMeAd1YfrPFFs5X0yb_NhaD70G3aqdmmT83hQyvRjhW_048_YrKbgaFbj_D52xQTOTInyjoZ4aKkrFc4_8vh5CKiUVUn-iObnszusJSmVCZ4XlgXcd_TNbmfDrR1ct0MoEU-FtcoNJOMmAqf2iLSlHGoiJxMl_DrGhzAhIoBaApZAZetux8T5fEA_z9p8XwvOEuYsI9KXF1li8oB1C5uikAXvFRYvsfaLg6iCdZfqZs',
        images: [
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bCS2_loxRmo8EE6edf6NjurHUdXqyQLmoMeAd1YfrPFFs5X0yb_NhaD70G3aqdmmT83hQyvRjhW_048_YrKbgaFbj_D52xQTOTInyjoZ4aKkrFc4_8vh5CKiUVUn-iObnszusJSmVCZ4XlgXcd_TNbmfDrR1ct0MoEU-FtcoNJOMmAqf2iLSlHGoiJxMl_DrGhzAhIoBaApZAZetux8T5fEA_z9p8XwvOEuYsI9KXF1li8oB1C5uikAXvFRYvsfaLg6iCdZfqZs',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAVDod34xBz76N6fD5RM9NyKFzH8pD9QZFKfiM6qx_6_b0s2wAWhUHw2WXEoxDX1J6CUFZPEobH_2Ml8uVOYmMMPJqcizj6JuvxG-Bm1o6q78hge9yN_pIB4DcQSFNW81XpPDiDziXCg7Mf5rQiJ5GsGEoEe_hhgpMH1Ftzfpd9ZN3j1lOOtgAcOUGpSK4qblqL778101iymmBmz3D6mU6X1xWdk8tXRqwxT2oOW4iz0slKgp4yAKole1FzpJxPI1Md4dd1t0J2x7g',
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAx1ZmCV35CsWUmCvPGYrBODPMz3xxRUFLKXY2Nc3ITk1pcBOdthzg5vuSoR0YyXfSApnvWx8RTf8aImZzAju0tZKqyB650zD5jtfBPYox-grHItvrlYBmlMf1EAicVbQaO-Dfu-pJP9wqW_CxemkDVD95seRuxjjSOXHWnysjqIkycIOk2rnuWJFM-uVK1QRsLqle7YRmdjsbihib4zzX3w6ruiLicbtR12SGcEhWQvzi4WYt7llr4VzCSFeqJkH4oniMMBh-BODM'
        ],
        isNew: true,
        description: "La Moissonneuse-batteuse X-Series 2024 redéfinit les standards de la récolte moderne. Conçue pour les grandes exploitations céréalières, elle intègre un système de battage double rotor axial.",
        stock: 'Sur commande',
        specs: {
          power: '450 ch',
          tank: '1200 L',
          width: '9.50 m',
          warranty: '3 Ans'
        },
        reviews: []
    },
    {
      id: '7',
      name: 'Semences de Maïs Bio - 25kg',
      mainCategory: 'produit agricole',
      category: 'Semences',
      price: 85,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2N6p0Zty1pWyOGBFEUG_663_HQpwhdZeKev3g75_89mJOnhnoIJwoUoz_x6jXU-CibQV_upc_SS-ULs6gNvLzet3aPzERUz7KPV9f4kKsXuAbTB_KDyswsn52BfXE2wvDQfAEL2VCUDNBBIXupl30ouzdFQzzpaeOYF8Mcut88TA3JXwkVjrYE3KRikbWARU62UjdtAaZiWhTDHOXTUbym02JZ2I5KyyiDU6_e2sfQws0CyJYFmUWZCrhM6xu_3B35NPA7VAEdOU',
      stock: 'En stock',
      rating: 5,
      isNew: true,
      isPromo: false,
      description: 'Semences de maïs biologique certifiées, rendement optimal.'
    },
    {
      id: '8',
      name: 'Tournesol Hybride - 15kg',
      mainCategory: 'produit agricole',
      category: 'Semences',
      price: 72,
      oldPrice: 90,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2N6p0Zty1pWyOGBFEUG_663_HQpwhdZeKev3g75_89mJOnhnoIJwoUoz_x6jXU-CibQV_upc_SS-ULs6gNvLzet3aPzERUz7KPV9f4kKsXuAbTB_KDyswsn52BfXE2wvDQfAEL2VCUDNBBIXupl30ouzdFQzzpaeOYF8Mcut88TA3JXwkVjrYE3KRikbWARU62UjdtAaZiWhTDHOXTUbym02JZ2I5KyyiDU6_e2sfQws0CyJYFmUWZCrhM6xu_3B35NPA7VAEdOU',
      stock: 'Stock limité',
      rating: 4,
      isNew: false,
      isPromo: true,
      description: 'Semences de tournesol hybride haute performance avec excellente résistance.'
    },
    {
      id: '9',
      name: 'Engrais Organique Premium - 50kg',
      mainCategory: 'produit agricole',
      category: 'Fertilisants',
      price: 45,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtKAt-12lqksch_K9kbHfSh3qYgpmbKs31doMHSzu8vHUqxI5H9q7YsYQeC2J_c7bx0WnKauV6cznyRNi-5hM4mJoY92ljDqHwqhJHgzDzKHHfRAsWopitKk0L5McdeFoLCII3BapX-mtlHTM1QwOlbakGpgJewAgtYEU0XpFxGG6OpzdmX9q_kyjfFByh3LaGEdYLsnNm4AS_UEoHShOqLrye5eOHO11OyB_u6QwONURyMpnOpwNhua0xIdkEx0snK7kBVA0b8eM',
      stock: 'En stock',
      rating: 5,
      isNew: false,
      isPromo: false,
      description: 'Engrais 100% organique pour une agriculture durable et respectueuse.'
    },
    {
      id: '10',
      name: 'Compost Enrichi - 100L',
      mainCategory: 'produit agricole',
      category: 'Fertilisants',
      price: 28,
      oldPrice: 35,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtKAt-12lqksch_K9kbHfSh3qYgpmbKs31doMHSzu8vHUqxI5H9q7YsYQeC2J_c7bx0WnKauV6cznyRNi-5hM4mJoY92ljDqHwqhJHgzDzKHHfRAsWopitKk0L5McdeFoLCII3BapX-mtlHTM1QwOlbakGpgJewAgtYEU0XpFxGG6OpzdmX9q_kyjfFByh3LaGEdYLsnNm4AS_UEoHShOqLrye5eOHO11OyB_u6QwONURyMpnOpwNhua0xIdkEx0snK7kBVA0b8eM',
      stock: 'En stock',
      rating: 4,
      isNew: false,
      isPromo: true,
      description: 'Compost enrichi en nutriments essentiels pour vos cultures.'
    },
    {
      id: '11',
      name: 'Analyse de Sol Complète',
      mainCategory: 'service agricole',
      category: 'Maintenance',
      price: 120,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBT9nSOyWwuY0QVR_c0hsEEg1hePrw8i92lBqA2wxOsOOLe9c_pnkxhnBnHSnGK69iFqx8I0n_VKqF9Mk7idfkXvfANIO6AN3bXfZAmowlnP7Ry5owPidxKeGW3HkXjnOXENKqNxkfyg8CQ7Slk8xsXy8t8JdS4wcgM9iDnni6sSibfArRrzgsxiMysL437vuMXO6-lqnq_LIDlDsYU69pcbpFCQ6HWgqQYN0-11w9ww0V7YDwxDquMR6zNh5DuO4U1z9w0sWVdV8',
      stock: 'Sur commande',
      rating: 5,
      isNew: true,
      isPromo: false,
      description: 'Analyse complète de votre sol avec recommandations personnalisées.'
    },
    {
      id: '12',
      name: 'Consultation Agronomique - 2h',
      mainCategory: 'service agricole',
      category: 'Maintenance',
      price: 150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBT9nSOyWwuY0QVR_c0hsEEg1hePrw8i92lBqA2wxOsOOLe9c_pnkxhnBnHSnGK69iFqx8I0n_VKqF9Mk7idfkXvfANIO6AN3bXfZAmowlnP7Ry5owPidxKeGW3HkXjnOXENKqNxkfyg8CQ7Slk8xsXy8t8JdS4wcgM9iDnni6sSibfArRrzgsxiMysL437vuMXO6-lqnq_LIDlDsYU69pcbpFCQ6HWgqQYN0-11w9ww0V7YDwxDquMR6zNh5DuO4U1z9w0sWVdV8',
      stock: 'En stock',
      rating: 5,
      isNew: false,
      isPromo: false,
      description: 'Consultation avec un agronome expert pour optimiser vos rendements.'
    },
    {
      id: '13',
      name: 'Formation Irrigation Goutte-à-goutte',
      mainCategory: 'service agricole',
      category: 'Technologie',
      price: 250,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBT9nSOyWwuY0QVR_c0hsEEg1hePrw8i92lBqA2wxOsOOLe9c_pnkxhnBnHSnGK69iFqx8I0n_VKqF9Mk7idfkXvfANIO6AN3bXfZAmowlnP7Ry5owPidxKeGW3HkXjnOXENKqNxkfyg8CQ7Slk8xsXy8t8JdS4wcgM9iDnni6sSibfArRrzgsxiMysL437vuMXO6-lqnq_LIDlDsYU69pcbpFCQ6HWgqQYN0-11w9ww0V7YDwxDquMR6zNh5DuO4U1z9w0sWVdV8',
      stock: 'Sur commande',
      rating: 4,
      isNew: true,
      isPromo: false,
      description: 'Formation pratique sur l\'installation et la gestion d\'un système d\'irrigation.'
    },
    {
      id: '14',
      name: 'Tracteur Compact 45CV',
      mainCategory: 'materiel agricole',
      category: 'Machinerie',
      price: 18500,
      oldPrice: 21000,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
      stock: 'Stock limité',
      rating: 5,
      isNew: false,
      isPromo: true,
      description: 'Tracteur compact polyvalent, idéal pour petites et moyennes exploitations.'
    },
    {
      id: '15',
      name: 'Pulvérisateur Trainé 800L',
      mainCategory: 'materiel agricole',
      category: 'Machinerie',
      price: 3200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
      stock: 'En stock',
      rating: 4,
      isNew: true,
      isPromo: false,
      description: 'Pulvérisateur trainé professionnel avec rampe 12m pour traitement efficace.'
    },
    {
      id: '16',
      name: 'Motoculteur 9CV',
      mainCategory: 'materiel agricole',
      category: 'Machinerie',
      price: 1450,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
      stock: 'En stock',
      rating: 4,
      isNew: false,
      isPromo: false,
      description: 'Motoculteur puissant pour le travail du sol, labour et préparation de terrain.'
    },
    {
      id: '17',
      name: 'Système Irrigation Automatique',
      mainCategory: 'materiel agricole',
      category: 'Technologie',
      price: 2800,
      oldPrice: 3500,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHZI9XWc33KdB97HeyNq1M7CxPLBu4wPBy1GOkaMRE6UwNtXP4QF-pn2rpprmmuxuTULG59Q3Gp3ml8e2hf6HZxfmhWOWFq_7QsBaCkYHYvd8sgGLOpLbalUZ72zr841d-d5IvC8A0zjfl-HOLe8Z6fbjEZI6oAewVI6-Rj9Ksuhu_mF8zR-vFkiAh8QRX7rWwQ3QhCdz9hGgxtk3o3inPt7aPMBsNt3qETzei4kShHWK6z9M129PL2OHcW3J7vjRMtar5lsqkHLc',
      stock: 'En stock',
      rating: 5,
      isNew: true,
      isPromo: true,
      description: 'Système d\'irrigation intelligent avec programmation automatique et capteurs.'
    },
    {
      id: '18',
      name: 'Serre Tunnel 50m²',
      mainCategory: 'materiel agricole',
      category: 'Technologie',
      price: 1200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHZI9XWc33KdB97HeyNq1M7CxPLBu4wPBy1GOkaMRE6UwNtXP4QF-pn2rpprmmuxuTULG59Q3Gp3ml8e2hf6HZxfmhWOWFq_7QsBaCkYHYvd8sgGLOpLbalUZ72zr841d-d5IvC8A0zjfl-HOLe8Z6fbjEZI6oAewVI6-Rj9Ksuhu_mF8zR-vFkiAh8QRX7rWwQ3QhCdz9hGgxtk3o3inPt7aPMBsNt3qETzei4kShHWK6z9M129PL2OHcW3J7vjRMtar5lsqkHLc',
      stock: 'Stock limité',
      rating: 4,
      isNew: false,
      isPromo: false,
      description: 'Serre tunnel robuste avec bâche anti-UV pour cultures sous abri.'
    },
    {
      id: '19',
      name: 'Station Météo Connectée Pro',
      mainCategory: 'materiel agricole',
      category: 'Technologie',
      price: 450,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBT9nSOyWwuY0QVR_c0hsEEg1hePrw8i92lBqA2wxOsOOLe9c_pnkxhnBnHSnGK69iFqx8I0n_VKqF9Mk7idfkXvfANIO6AN3bXfZAmowlnP7Ry5owPidxKeGW3HkXjnOXENKqNxkfyg8CQ7Slk8xsXy8t8JdS4wcgM9iDnni6sSibfArRrzgsxiMysL437vuMXO6-lqnq_LIDlDsYU69pcbpFCQ6HWgqQYN0-11w9ww0V7YDwxDquMR6zNh5DuO4U1z9w0sWVdV8',
      stock: 'En stock',
      rating: 5,
      isNew: true,
      isPromo: false,
      description: 'Station météo professionnelle avec alertes et historique détaillé.'
    },
    {
      id: '20',
      name: 'Kit Panneau Solaire Agricole',
      mainCategory: 'materiel agricole',
      category: 'Technologie',
      price: 3500,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBT9nSOyWwuY0QVR_c0hsEEg1hePrw8i92lBqA2wxOsOOLe9c_pnkxhnBnHSnGK69iFqx8I0n_VKqF9Mk7idfkXvfANIO6AN3bXfZAmowlnP7Ry5owPidxKeGW3HkXjnOXENKqNxkfyg8CQ7Slk8xsXy8t8JdS4wcgM9iDnni6sSibfArRrzgsxiMysL437vuMXO6-lqnq_LIDlDsYU69pcbpFCQ6HWgqQYN0-11w9ww0V7YDwxDquMR6zNh5DuO4U1z9w0sWVdV8',
      stock: 'Sur commande',
      rating: 5,
      isNew: true,
      isPromo: false,
      description: 'Kit solaire complet pour alimentation autonome d\'équipements agricoles.'
    },
    {
      id: '21',
      name: 'Remorque Agricole 3 Tonnes',
      mainCategory: 'materiel agricole',
      category: 'Machinerie',
      price: 2200,
      oldPrice: 2600,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjStnHbz-d1jf_SWGOwx7HoCQ0jeVEJuxPoTBuY0k7kBL9weKtYcGirgCIw9-Hkzda76dO3Hy9MVEv5wPSX-3DFirsoQE5rwTR99OqhEeJvfiU--kNIFGZ0JlfV_PaVlHblN-3wugKx5HfFuImsP0Ik1qtW0Oi1LpLHC-B_EMHfPzkUaxEwke-0T_tnfMCQr9c-P2b74173F47qk9vE7ZMdoy22RjXjFEd5M1ayRSLWL3-wFPkVKOAFb_q7lQOj-F6mQcK6sA1eks',
      stock: 'En stock',
      rating: 4,
      isNew: false,
      isPromo: true,
      description: 'Remorque basculante robuste pour transport de matériaux et récoltes.'
    }
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: string) {
    return this.products.find(p => p.id === id);
  }

  /**
   * Retourne le type de composant à utiliser pour afficher le détail d'un produit
   * - 'produit agricole' -> 'product-agricol-detail'
   * - 'service agricole' -> 'product-custom-services'
   * - 'materiel agricole' -> 'product-custom-services'
   */
  getProductDetailRoute(product: Product): string {
    if (product.mainCategory === 'produit agricole') {
      return '/product-agricol-detail';
    }
    return '/product-custom-services';
  }

  /**
   * Retourne les catégories principales disponibles
   */
  getMainCategories(): string[] {
    return ['produit agricole', 'service agricole', 'materiel agricole'];
  }

  /**
   * Retourne les produits filtrés par catégorie principale
   */
  getProductsByMainCategory(mainCategory: 'produit agricole' | 'service agricole' | 'materiel agricole'): Product[] {
    return this.products.filter(p => p.mainCategory === mainCategory);
  }

  /**
   * Retourne toutes les sous-catégories uniques des produits
   */
  getSubCategories(): string[] {
    const subCategories = [...new Set(this.products.map(p => p.category))];
    return subCategories.sort();
  }
}