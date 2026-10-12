// Services proposés par les étudiants
export const studentServices = [
  {
    id: 'srv001',
    title: 'Design de Logo Professionnel',
    category: 'Graphisme & Design',
    subcategory: 'Logo & Identité',
    description: 'Création de logos modernes et professionnels pour votre entreprise ou projet.',
    price: 15000,
    currency: 'FCFA',
    deliveryTime: '3-5 jours',
    seller: {
      id: 'std001',
      name: 'Kofi Mensah',
      avatar: 'https://i.pravatar.cc/150?img=12',
      university: 'Université de Lomé',
      faculty: 'Arts & Design',
      rating: 4.9,
      totalReviews: 47,
      verified: true,
      memberSince: '2023',
      completedOrders: 52
    },
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500'
    ],
    tags: ['Logo', 'Branding', 'Design', 'Illustration'],
    featured: true,
    reviews: [
      {
        id: 'rev001',
        author: 'Amina Diallo',
        rating: 5,
        comment: 'Excellent travail ! Très professionnel et à l\'écoute.',
        date: '2024-10-15'
      }
    ]
  },
  {
    id: 'srv002',
    title: 'Développement Site Web Vitrine',
    category: 'Développement Web',
    subcategory: 'Sites Web',
    description: 'Création de sites web modernes et responsives avec React et Tailwind CSS.',
    price: 75000,
    currency: 'FCFA',
    deliveryTime: '7-10 jours',
    seller: {
      id: 'std002',
      name: 'Aïcha Touré',
      avatar: 'https://i.pravatar.cc/150?img=45',
      university: 'ESTBA',
      faculty: 'Informatique',
      rating: 5.0,
      totalReviews: 38,
      verified: true,
      memberSince: '2023',
      completedOrders: 41
    },
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?w=500',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500'
    ],
    tags: ['React', 'Web', 'Responsive', 'Modern'],
    featured: true,
    reviews: []
  },
  {
    id: 'srv003',
    title: 'Photographie Événementielle',
    category: 'Photographie & Vidéo',
    subcategory: 'Événements',
    description: 'Couverture photo professionnelle de vos événements (mariages, anniversaires, soirées).',
    price: 35000,
    currency: 'FCFA',
    deliveryTime: 'Sur rdv',
    seller: {
      id: 'std003',
      name: 'Edem Agbodjan',
      avatar: 'https://i.pravatar.cc/150?img=33',
      university: 'Université de Kara',
      faculty: 'Communication',
      rating: 4.8,
      totalReviews: 62,
      verified: true,
      memberSince: '2022',
      completedOrders: 78
    },
    images: [
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500'
    ],
    tags: ['Photo', 'Événement', 'Mariage', 'Portrait'],
    featured: true,
    reviews: []
  },
  {
    id: 'srv004',
    title: 'Cours Particuliers Mathématiques',
    category: 'Cours & Formation',
    subcategory: 'Sciences',
    description: 'Soutien scolaire en mathématiques pour lycée et université. Méthodes efficaces.',
    price: 5000,
    currency: 'FCFA',
    deliveryTime: 'Par session (2h)',
    seller: {
      id: 'std004',
      name: 'Kossi Ablavi',
      avatar: 'https://i.pravatar.cc/150?img=68',
      university: 'Université de Lomé',
      faculty: 'Sciences Exactes',
      rating: 4.9,
      totalReviews: 124,
      verified: true,
      memberSince: '2022',
      completedOrders: 156
    },
    images: [
      'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500'
    ],
    tags: ['Maths', 'Cours', 'Tutorat', 'Soutien'],
    featured: false,
    reviews: []
  },
  {
    id: 'srv005',
    title: 'Coiffure & Tresses Africaines',
    category: 'Beauté & Bien-être',
    subcategory: 'Coiffure',
    description: 'Coiffure professionnelle, tresses, nattes, tissages. À domicile ou au campus.',
    price: 8000,
    currency: 'FCFA',
    deliveryTime: '2-3 heures',
    seller: {
      id: 'std005',
      name: 'Sénam Koffi',
      avatar: 'https://i.pravatar.cc/150?img=23',
      university: 'Université de Lomé',
      faculty: 'Économie',
      rating: 4.7,
      totalReviews: 89,
      verified: true,
      memberSince: '2023',
      completedOrders: 95
    },
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500',
      'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500'
    ],
    tags: ['Coiffure', 'Tresses', 'Beauté', 'Africain'],
    featured: false,
    reviews: []
  },
  {
    id: 'srv006',
    title: 'Montage Vidéo Professionnel',
    category: 'Photographie & Vidéo',
    subcategory: 'Montage',
    description: 'Montage vidéo pour YouTube, réseaux sociaux, événements. Adobe Premiere Pro.',
    price: 25000,
    currency: 'FCFA',
    deliveryTime: '3-7 jours',
    seller: {
      id: 'std006',
      name: 'Dodzi Kpade',
      avatar: 'https://i.pravatar.cc/150?img=56',
      university: 'ESTBA',
      faculty: 'Multimédia',
      rating: 4.9,
      totalReviews: 43,
      verified: true,
      memberSince: '2023',
      completedOrders: 48
    },
    images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500'
    ],
    tags: ['Vidéo', 'Montage', 'YouTube', 'Editing'],
    featured: true,
    reviews: []
  },
  {
    id: 'srv007',
    title: 'Rédaction de CV Professionnel',
    category: 'Rédaction & Traduction',
    subcategory: 'CV & Lettres',
    description: 'Rédaction de CV et lettres de motivation percutants pour décrocher un emploi.',
    price: 10000,
    currency: 'FCFA',
    deliveryTime: '2-3 jours',
    seller: {
      id: 'std007',
      name: 'Mawuli Assih',
      avatar: 'https://i.pravatar.cc/150?img=14',
      university: 'Université de Lomé',
      faculty: 'Lettres',
      rating: 4.8,
      totalReviews: 67,
      verified: true,
      memberSince: '2023',
      completedOrders: 72
    },
    images: [
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500'
    ],
    tags: ['CV', 'Rédaction', 'Emploi', 'Carrière'],
    featured: false,
    reviews: []
  },
  {
    id: 'srv008',
    title: 'Animation 3D & Motion Design',
    category: 'Graphisme & Design',
    subcategory: 'Animation',
    description: 'Création d\'animations 3D et motion design pour vos projets vidéo.',
    price: 40000,
    currency: 'FCFA',
    deliveryTime: '5-7 jours',
    seller: {
      id: 'std008',
      name: 'Afi Mensah',
      avatar: 'https://i.pravatar.cc/150?img=28',
      university: 'ESTBA',
      faculty: 'Design',
      rating: 5.0,
      totalReviews: 31,
      verified: true,
      memberSince: '2024',
      completedOrders: 33
    },
    images: [
      'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?w=500'
    ],
    tags: ['3D', 'Animation', 'Motion', 'Design'],
    featured: true,
    reviews: []
  }
];

export const serviceCategories = [
  {
    id: 'cat001',
    name: 'Graphisme & Design',
    icon: 'Palette',
    subcategories: ['Logo & Identité', 'Flyers & Affiches', 'Illustration', 'Animation', 'Branding'],
    color: 'purple'
  },
  {
    id: 'cat002',
    name: 'Développement Web',
    icon: 'Code',
    subcategories: ['Sites Web', 'Applications Web', 'E-commerce', 'Maintenance'],
    color: 'blue'
  },
  {
    id: 'cat003',
    name: 'Photographie & Vidéo',
    icon: 'Camera',
    subcategories: ['Événements', 'Portrait', 'Montage', 'Drone'],
    color: 'red'
  },
  {
    id: 'cat004',
    name: 'Cours & Formation',
    icon: 'GraduationCap',
    subcategories: ['Sciences', 'Langues', 'Informatique', 'Commerce'],
    color: 'green'
  },
  {
    id: 'cat005',
    name: 'Beauté & Bien-être',
    icon: 'Sparkles',
    subcategories: ['Coiffure', 'Maquillage', 'Manucure', 'Massage'],
    color: 'pink'
  },
  {
    id: 'cat006',
    name: 'Rédaction & Traduction',
    icon: 'FileText',
    subcategories: ['CV & Lettres', 'Articles', 'Traduction', 'Transcription'],
    color: 'orange'
  },
  {
    id: 'cat007',
    name: 'Marketing Digital',
    icon: 'TrendingUp',
    subcategories: ['Social Media', 'SEO', 'Publicité', 'Community Management'],
    color: 'indigo'
  },
  {
    id: 'cat008',
    name: 'Musique & Audio',
    icon: 'Music',
    subcategories: ['Production', 'Mixage', 'Voix-off', 'Composition'],
    color: 'cyan'
  }
];
