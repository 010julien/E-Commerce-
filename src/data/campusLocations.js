// Points de retrait et campus de Lomé
export const campusLocations = [
  {
    id: 'campus001',
    name: 'Université de Lomé',
    shortName: 'UL',
    address: 'Boulevard du 13 Janvier, Lomé',
    coordinates: { lat: 6.1670, lng: 1.2206 },
    pickupPoints: [
      {
        id: 'pp001',
        name: 'Cafétéria Centrale',
        description: 'À côté de la bibliothèque centrale',
        hours: 'Lun-Ven: 8h-18h, Sam: 9h-13h',
        contact: '+228 90 12 34 56',
        manager: 'Koffi Mensah'
      },
      {
        id: 'pp002',
        name: 'BDE - Faculté de Droit',
        description: 'Local du BDE, bâtiment Droit',
        hours: 'Lun-Ven: 10h-16h',
        contact: '+228 91 23 45 67',
        manager: 'Amina Diallo'
      },
      {
        id: 'pp003',
        name: 'Librairie Campus',
        description: 'Face à l\'entrée principale',
        hours: 'Lun-Sam: 7h30-19h',
        contact: '+228 92 34 56 78',
        manager: 'Sénam Koffi'
      }
    ],
    facilities: ['WiFi gratuit', 'Parking', 'Cafétéria', 'Bibliothèque'],
    students: 15000,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800'
  },
  {
    id: 'campus002',
    name: 'École Supérieure de Technologie et du Business en Afrique',
    shortName: 'ESTBA',
    address: 'Tokoin Gbadago, Lomé',
    coordinates: { lat: 6.1256, lng: 1.2114 },
    pickupPoints: [
      {
        id: 'pp004',
        name: 'Réception ESTBA',
        description: 'Hall d\'entrée principal',
        hours: 'Lun-Ven: 7h30-18h30',
        contact: '+228 93 45 67 89',
        manager: 'Afi Mensah'
      },
      {
        id: 'pp005',
        name: 'BDE ESTBA',
        description: 'Local des étudiants, 2ème étage',
        hours: 'Lun-Ven: 9h-17h',
        contact: '+228 94 56 78 90',
        manager: 'Dodzi Kpade'
      }
    ],
    facilities: ['WiFi gratuit', 'Parking sécurisé', 'Restaurant', 'Salles informatiques'],
    students: 3500,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800'
  },
  {
    id: 'campus003',
    name: 'Université de Kara',
    shortName: 'UK',
    address: 'Quartier Kara-Baga, Kara',
    coordinates: { lat: 9.5519, lng: 1.1864 },
    pickupPoints: [
      {
        id: 'pp006',
        name: 'Secrétariat Général',
        description: 'Bâtiment administratif',
        hours: 'Lun-Ven: 8h-17h',
        contact: '+228 95 67 89 01',
        manager: 'Edem Agbodjan'
      }
    ],
    facilities: ['WiFi', 'Cafétéria', 'Cité universitaire'],
    students: 8000,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800'
  },
  {
    id: 'campus004',
    name: 'Institut Africain d\'Informatique',
    shortName: 'IAI',
    address: 'Avenue Sarakawa, Lomé',
    coordinates: { lat: 6.1319, lng: 1.2131 },
    pickupPoints: [
      {
        id: 'pp007',
        name: 'Accueil IAI',
        description: 'Réception principale',
        hours: 'Lun-Ven: 8h-18h',
        contact: '+228 96 78 90 12',
        manager: 'Kossi Ablavi'
      }
    ],
    facilities: ['WiFi haut débit', 'Labos info', 'Parking'],
    students: 1200,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800'
  },
  {
    id: 'campus005',
    name: 'ESAM - École Supérieure d\'Agronomie et de Management',
    shortName: 'ESAM',
    address: 'Route de Kpalimé, Lomé',
    coordinates: { lat: 6.1583, lng: 1.2425 },
    pickupPoints: [
      {
        id: 'pp008',
        name: 'Cantine ESAM',
        description: 'Proche du parking étudiant',
        hours: 'Lun-Ven: 9h-17h',
        contact: '+228 97 89 01 23',
        manager: 'Akossiwa Lawson'
      }
    ],
    facilities: ['Ferme pédagogique', 'WiFi', 'Restaurant'],
    students: 2500,
    image: 'https://images.unsplash.com/photo-1567168539593-59673ababaae?w=800'
  },
  {
    id: 'campus006',
    name: 'École Nationale d\'Administration',
    shortName: 'ENA',
    address: 'Boulevard du Mono, Lomé',
    coordinates: { lat: 6.1278, lng: 1.2097 },
    pickupPoints: [
      {
        id: 'pp009',
        name: 'Bibliothèque ENA',
        description: 'Rez-de-chaussée, entrée gauche',
        hours: 'Lun-Ven: 8h30-17h30',
        contact: '+228 98 90 12 34',
        manager: 'Mawuli Assih'
      }
    ],
    facilities: ['Bibliothèque', 'WiFi', 'Parking'],
    students: 1800,
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800'
  }
];

// Points de livraison populaires en dehors des campus
export const deliveryZones = [
  {
    id: 'zone001',
    name: 'Centre-Ville Lomé',
    areas: ['Administratif', 'Hédzranawoé', 'Tokoin'],
    deliveryFee: 1500,
    estimatedTime: '45-60 min',
    available: true
  },
  {
    id: 'zone002',
    name: 'Nyékonakpoè',
    areas: ['Nyékonakpoè', 'Agoé', 'Adidogomé'],
    deliveryFee: 2000,
    estimatedTime: '60-90 min',
    available: true
  },
  {
    id: 'zone003',
    name: 'Bè-Klikamé',
    areas: ['Bè', 'Klikamé', 'Dékon'],
    deliveryFee: 1500,
    estimatedTime: '45-60 min',
    available: true
  },
  {
    id: 'zone004',
    name: 'Cacavéli - Aéroport',
    areas: ['Cacavéli', 'Aéroport', 'Tokoin-Gbadago'],
    deliveryFee: 2000,
    estimatedTime: '60-90 min',
    available: true
  },
  {
    id: 'zone005',
    name: 'Kara',
    areas: ['Centre Kara', 'Kara-Baga'],
    deliveryFee: 0,
    estimatedTime: 'Retrait uniquement',
    available: true,
    pickupOnly: true
  }
];

// Partenaires de livraison
export const deliveryPartners = [
  {
    id: 'partner001',
    name: 'Kaba Delivery',
    logo: 'https://via.placeholder.com/100x40/FF6B35/FFFFFF?text=KABA',
    description: 'Service de livraison rapide à Lomé',
    rating: 4.5,
    estimatedTime: '30-60 min',
    contact: '+228 90 00 11 22',
    zones: ['zone001', 'zone002', 'zone003', 'zone004'],
    active: true
  },
  {
    id: 'partner002',
    name: 'Gozem',
    logo: 'https://via.placeholder.com/100x40/00A86B/FFFFFF?text=GOZEM',
    description: 'Livraison moto-taxi disponible 24/7',
    rating: 4.7,
    estimatedTime: '20-45 min',
    contact: '+228 91 11 22 33',
    zones: ['zone001', 'zone002', 'zone003', 'zone004'],
    active: true
  },
  {
    id: 'partner003',
    name: 'Campus Express',
    logo: 'https://via.placeholder.com/100x40/4169E1/FFFFFF?text=CAMPUS',
    description: 'Service de livraison étudiant inter-campus',
    rating: 4.8,
    estimatedTime: '60-120 min',
    contact: '+228 92 22 33 44',
    zones: ['campus'],
    active: true,
    studentDiscount: 500
  }
];
