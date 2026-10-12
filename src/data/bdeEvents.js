// Événements et billets vendus par les BDE
export const bdeEvents = [
  {
    id: 'evt001',
    title: 'Soirée d\'Intégration UL 2024',
    category: 'Soirée',
    description: 'Grande soirée d\'intégration pour accueillir les nouveaux étudiants. DJ live, animations, buffet inclus.',
    date: '2024-11-15',
    time: '20:00',
    venue: 'Espace Sarakawa, Lomé',
    capacity: 500,
    soldTickets: 342,
    organizer: {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      logo: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      verified: true,
      email: 'bde@ul.tg',
      phone: '+228 90 00 00 00'
    },
    tickets: [
      {
        type: 'Prévente',
        price: 3000,
        currency: 'FCFA',
        available: 158,
        perks: ['Entrée prioritaire', 'Bracelet VIP']
      },
      {
        type: 'Standard',
        price: 5000,
        currency: 'FCFA',
        available: 250,
        perks: ['Entrée standard']
      },
      {
        type: 'VIP',
        price: 8000,
        currency: 'FCFA',
        available: 45,
        perks: ['Accès VIP', 'Boissons offertes', 'Zone exclusive']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800'
    ],
    tags: ['Soirée', 'Intégration', 'DJ', 'Party'],
    featured: true,
    highlights: [
      'DJ Resident en live',
      'Buffet inclus',
      'Concours et cadeaux',
      'Photo booth gratuit'
    ]
  },
  {
    id: 'evt002',
    title: 'Tournoi de Football Inter-Facs',
    category: 'Sport',
    description: 'Grand tournoi de football inter-facultés. Représentez votre faculté !',
    date: '2024-11-20',
    time: '08:00',
    venue: 'Stade du Campus UL',
    capacity: 200,
    soldTickets: 87,
    organizer: {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      logo: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      verified: true
    },
    tickets: [
      {
        type: 'Équipe (10 joueurs)',
        price: 15000,
        currency: 'FCFA',
        available: 12,
        perks: ['Maillot offert', 'Repas après match']
      },
      {
        type: 'Spectateur',
        price: 500,
        currency: 'FCFA',
        available: 300,
        perks: ['Entrée stade']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800'
    ],
    tags: ['Sport', 'Football', 'Tournoi', 'Inter-Facs'],
    featured: true,
    highlights: [
      'Coupe et médailles pour les gagnants',
      'Arbitrage professionnel',
      'Rafraîchissements sur place'
    ]
  },
  {
    id: 'evt003',
    title: 'Conférence Tech & Innovation',
    category: 'Conférence',
    description: 'Conférence sur les technologies émergentes et l\'innovation en Afrique. Speakers internationaux.',
    date: '2024-11-25',
    time: '14:00',
    venue: 'Amphithéâtre A, ESTBA',
    capacity: 300,
    soldTickets: 156,
    organizer: {
      id: 'bde002',
      name: 'BDE ESTBA',
      logo: 'https://i.pravatar.cc/150?img=55',
      university: 'ESTBA',
      verified: true
    },
    tickets: [
      {
        type: 'Gratuit - Étudiant ESTBA',
        price: 0,
        currency: 'FCFA',
        available: 100,
        perks: ['Accès conférence', 'Kit participant']
      },
      {
        type: 'Externe',
        price: 2000,
        currency: 'FCFA',
        available: 44,
        perks: ['Accès conférence', 'Kit participant', 'Certificat']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800'
    ],
    tags: ['Conférence', 'Tech', 'Innovation', 'AI'],
    featured: true,
    highlights: [
      'Speakers de Google Africa',
      'Session networking',
      'Certificat de participation',
      'Goodies tech'
    ]
  },
  {
    id: 'evt004',
    title: 'Concert Live - Artistes Locaux',
    category: 'Concert',
    description: 'Concert spécial mettant en avant les talents musicaux étudiants de Lomé.',
    date: '2024-12-05',
    time: '19:00',
    venue: 'Palais des Congrès, Lomé',
    capacity: 800,
    soldTickets: 423,
    organizer: {
      id: 'bde003',
      name: 'BDE Université de Kara',
      logo: 'https://i.pravatar.cc/150?img=63',
      university: 'Université de Kara',
      verified: true
    },
    tickets: [
      {
        type: 'Early Bird',
        price: 4000,
        currency: 'FCFA',
        available: 77,
        perks: ['Prix réduit', 'Poster offert']
      },
      {
        type: 'Normal',
        price: 6000,
        currency: 'FCFA',
        available: 300,
        perks: ['Entrée standard']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800'
    ],
    tags: ['Concert', 'Musique', 'Live', 'Local'],
    featured: false,
    highlights: [
      '5 artistes en live',
      'Open mic session',
      'Food trucks sur place'
    ]
  },
  {
    id: 'evt005',
    title: 'Job Fair 2024 - Forum Emploi',
    category: 'Professionnel',
    description: 'Forum de l\'emploi réunissant +30 entreprises qui recrutent stagiaires et jeunes diplômés.',
    date: '2024-12-10',
    time: '09:00',
    venue: 'Centre de Conférences UL',
    capacity: 1000,
    soldTickets: 567,
    organizer: {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      logo: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      verified: true
    },
    tickets: [
      {
        type: 'Gratuit',
        price: 0,
        currency: 'FCFA',
        available: 433,
        perks: ['Accès forum', 'CV book', 'Ateliers gratuits']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800'
    ],
    tags: ['Emploi', 'Carrière', 'Stage', 'Recrutement'],
    featured: true,
    highlights: [
      '+30 entreprises présentes',
      'Ateliers CV et entretien',
      'Speed-dating professionnel',
      'Conférences métiers'
    ]
  },
  {
    id: 'evt006',
    title: 'Soirée Karaoké Campus',
    category: 'Soirée',
    description: 'Soirée karaoké décontractée entre étudiants. Chantez vos hits préférés !',
    date: '2024-11-28',
    time: '18:00',
    venue: 'Cafétéria Centrale UL',
    capacity: 100,
    soldTickets: 67,
    organizer: {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      logo: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      verified: true
    },
    tickets: [
      {
        type: 'Entrée + Boisson',
        price: 2000,
        currency: 'FCFA',
        available: 33,
        perks: ['Entrée', '1 boisson offerte']
      }
    ],
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
    ],
    tags: ['Karaoké', 'Soirée', 'Fun', 'Musique'],
    featured: false,
    highlights: [
      'Large catalogue de chansons',
      'Concours avec prix',
      'Ambiance conviviale'
    ]
  }
];

export const eventCategories = [
  { id: 'ecat001', name: 'Soirées', icon: 'PartyPopper', color: 'purple' },
  { id: 'ecat002', name: 'Sport', icon: 'Trophy', color: 'green' },
  { id: 'ecat003', name: 'Conférences', icon: 'Presentation', color: 'blue' },
  { id: 'ecat004', name: 'Concerts', icon: 'Music', color: 'red' },
  { id: 'ecat005', name: 'Professionnel', icon: 'Briefcase', color: 'indigo' },
  { id: 'ecat006', name: 'Culture', icon: 'Theater', color: 'pink' }
];
