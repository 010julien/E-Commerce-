// Produits vendus par et pour les étudiants
export const studentProducts = [
  {
    id: 'prod001',
    title: 'Sac à Dos Universitaire 30L',
    category: 'Fournitures',
    subcategory: 'Sacs',
    description: 'Sac à dos spacieux avec compartiment laptop, poche bouteille, résistant à l\'eau.',
    price: 12000,
    originalPrice: 18000,
    currency: 'FCFA',
    discount: 33,
    stock: 15,
    condition: 'Neuf',
    seller: {
      id: 'std009',
      name: 'Akossiwa Shop',
      avatar: 'https://i.pravatar.cc/150?img=41',
      university: 'Université de Lomé',
      rating: 4.6,
      totalReviews: 234,
      verified: true,
      type: 'Étudiant Vendeur'
    },
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500'
    ],
    tags: ['Sac', 'Campus', 'Laptop', 'Étudiant'],
    featured: true,
    shipping: {
      available: true,
      price: 1000,
      campusPickup: true
    }
  },
  {
    id: 'prod002',
    title: 'Calculatrice Scientifique Casio FX-92',
    category: 'Fournitures',
    subcategory: 'Calculatrices',
    description: 'Calculatrice scientifique parfaite pour lycée et université. État impeccable.',
    price: 8500,
    originalPrice: 15000,
    currency: 'FCFA',
    discount: 43,
    stock: 3,
    condition: 'Occasion - Très bon état',
    seller: {
      id: 'std010',
      name: 'Komlan Tech',
      avatar: 'https://i.pravatar.cc/150?img=52',
      university: 'ESTBA',
      rating: 4.9,
      totalReviews: 87,
      verified: true,
      type: 'Étudiant Vendeur'
    },
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500'
    ],
    tags: ['Calculatrice', 'Maths', 'Sciences', 'Casio'],
    featured: false,
    shipping: {
      available: true,
      price: 500,
      campusPickup: true
    }
  },
  {
    id: 'prod003',
    title: 'T-Shirt UL Edition Limitée 2024',
    category: 'Vêtements',
    subcategory: 'T-shirts',
    description: 'T-shirt officiel Université de Lomé, coton premium, plusieurs tailles disponibles.',
    price: 5000,
    currency: 'FCFA',
    stock: 50,
    condition: 'Neuf',
    seller: {
      id: 'bde001',
      name: 'BDE Université de Lomé',
      avatar: 'https://i.pravatar.cc/150?img=70',
      university: 'Université de Lomé',
      rating: 4.8,
      totalReviews: 456,
      verified: true,
      type: 'BDE Officiel',
      badge: 'BDE'
    },
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500'
    ],
    tags: ['T-shirt', 'UL', 'BDE', 'Campus'],
    featured: true,
    shipping: {
      available: true,
      price: 1000,
      campusPickup: true
    },
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'prod004',
    title: 'Écouteurs Bluetooth Sans Fil',
    category: 'Électronique',
    subcategory: 'Audio',
    description: 'Écouteurs Bluetooth 5.0, autonomie 6h, étui de charge inclus, son de qualité.',
    price: 15000,
    originalPrice: 25000,
    currency: 'FCFA',
    discount: 40,
    stock: 8,
    condition: 'Neuf',
    seller: {
      id: 'seller001',
      name: 'TechZone Lomé',
      avatar: 'https://i.pravatar.cc/150?img=60',
      shopType: 'Boutique',
      rating: 4.7,
      totalReviews: 1234,
      verified: true,
      type: 'Commerçant Vérifié'
    },
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
      'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500'
    ],
    tags: ['Bluetooth', 'Audio', 'Tech', 'Musique'],
    featured: true,
    shipping: {
      available: true,
      price: 1500,
      campusPickup: false
    }
  },
  {
    id: 'prod005',
    title: 'Cahiers A4 - Pack de 5',
    category: 'Fournitures',
    subcategory: 'Papeterie',
    description: 'Pack de 5 cahiers 200 pages, ligné, couverture rigide, parfait pour cours.',
    price: 4000,
    currency: 'FCFA',
    stock: 100,
    condition: 'Neuf',
    seller: {
      id: 'seller002',
      name: 'Papeterie du Campus',
      avatar: 'https://i.pravatar.cc/150?img=35',
      shopType: 'Boutique',
      rating: 4.5,
      totalReviews: 678,
      verified: true,
      type: 'Commerçant Vérifié'
    },
    images: [
      'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=500'
    ],
    tags: ['Cahier', 'Fourniture', 'Cours', 'Papeterie'],
    featured: false,
    shipping: {
      available: true,
      price: 500,
      campusPickup: true
    }
  },
  {
    id: 'prod006',
    title: 'Chargeur Universel USB-C 65W',
    category: 'Électronique',
    subcategory: 'Accessoires',
    description: 'Chargeur rapide universel compatible laptop, téléphone, tablette. Port USB-C.',
    price: 18000,
    currency: 'FCFA',
    stock: 12,
    condition: 'Neuf',
    seller: {
      id: 'seller001',
      name: 'TechZone Lomé',
      avatar: 'https://i.pravatar.cc/150?img=60',
      rating: 4.7,
      totalReviews: 1234,
      verified: true,
      type: 'Commerçant Vérifié'
    },
    images: [
      'https://images.unsplash.com/photo-1591290619762-9b94eb5379c8?w=500'
    ],
    tags: ['Chargeur', 'USB-C', 'Tech', 'Rapide'],
    featured: false,
    shipping: {
      available: true,
      price: 1000,
      campusPickup: false
    }
  },
  {
    id: 'prod007',
    title: 'Livres de Droit L1 - Set Complet',
    category: 'Livres',
    subcategory: 'Droit',
    description: 'Set complet de livres pour Licence 1 Droit. Bon état, annotations légères.',
    price: 25000,
    originalPrice: 45000,
    currency: 'FCFA',
    discount: 44,
    stock: 1,
    condition: 'Occasion - Bon état',
    seller: {
      id: 'std011',
      name: 'Ama Lawson',
      avatar: 'https://i.pravatar.cc/150?img=25',
      university: 'Université de Lomé',
      rating: 4.8,
      totalReviews: 23,
      verified: true,
      type: 'Étudiant Vendeur'
    },
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500'
    ],
    tags: ['Livres', 'Droit', 'L1', 'Occasion'],
    featured: false,
    shipping: {
      available: true,
      price: 2000,
      campusPickup: true
    }
  },
  {
    id: 'prod008',
    title: 'Gourde Isotherme 750ml',
    category: 'Accessoires',
    subcategory: 'Sport',
    description: 'Gourde isotherme inox, garde chaud 12h et froid 24h. Design moderne.',
    price: 7500,
    originalPrice: 10000,
    currency: 'FCFA',
    discount: 25,
    stock: 20,
    condition: 'Neuf',
    seller: {
      id: 'std012',
      name: 'Campus Store',
      avatar: 'https://i.pravatar.cc/150?img=48',
      university: 'ESTBA',
      rating: 4.6,
      totalReviews: 145,
      verified: true,
      type: 'Étudiant Vendeur'
    },
    images: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'
    ],
    tags: ['Gourde', 'Sport', 'Isotherme', 'Campus'],
    featured: false,
    shipping: {
      available: true,
      price: 1000,
      campusPickup: true
    }
  }
];

export const productCategories = [
  {
    id: 'pcat001',
    name: 'Fournitures',
    icon: 'BookOpen',
    subcategories: ['Sacs', 'Calculatrices', 'Papeterie', 'Classeurs'],
    color: 'blue'
  },
  {
    id: 'pcat002',
    name: 'Électronique',
    icon: 'Laptop',
    subcategories: ['Laptops', 'Audio', 'Accessoires', 'Téléphones'],
    color: 'purple'
  },
  {
    id: 'pcat003',
    name: 'Vêtements',
    icon: 'Shirt',
    subcategories: ['T-shirts', 'Sweats', 'Casquettes', 'Goodies BDE'],
    color: 'pink'
  },
  {
    id: 'pcat004',
    name: 'Livres',
    icon: 'Book',
    subcategories: ['Droit', 'Économie', 'Sciences', 'Lettres'],
    color: 'green'
  },
  {
    id: 'pcat005',
    name: 'Accessoires',
    icon: 'Watch',
    subcategories: ['Sport', 'Montres', 'Lunettes', 'Bijoux'],
    color: 'orange'
  },
  {
    id: 'pcat006',
    name: 'Nourriture',
    icon: 'Pizza',
    subcategories: ['Snacks', 'Boissons', 'Repas', 'Fruits'],
    color: 'red'
  }
];
