# 🎓 Campus Market - Marketplace Étudiante de Lomé

## 📋 Vue d'ensemble

**Campus Market** est une plateforme e-commerce et marketplace complète dédiée aux étudiants de Lomé, Togo. Elle permet aux étudiants d'acheter, vendre et échanger des produits, services et billets d'événements au sein de la communauté étudiante.

### 🌟 Caractéristiques principales

- **Services étudiants** : Graphisme, développement web, photographie, cours particuliers, etc.
- **Produits** : Fournitures scolaires, électronique, vêtements, livres d'occasion
- **Événements BDE** : Soirées, concerts, conférences, événements sportifs
- **Paiements locaux** : Flooz, T-Money, cartes bancaires via FedaPay
- **Points de retrait** : Sur campus pour réduire les frais de livraison
- **Système de confiance** : Vérification des vendeurs, notation et avis

---

## 🚀 Technologies utilisées

### Frontend
- **React 18** - Framework JavaScript moderne
- **Tailwind CSS 3** - Framework CSS utilitaire
- **React Router 6** - Navigation SPA
- **Lucide React** - Bibliothèque d'icônes
- **Context API** - Gestion d'état globale

### Contextes React
- **ThemeContext** - Mode clair/sombre
- **AuthContext** - Authentification et profils utilisateurs
- **CartContext** - Gestion du panier d'achat
- **SellerContext** - Gestion des vendeurs et leurs produits/services
- **PaymentContext** - Système de paiement multi-opérateurs

---

## 📁 Structure du projet

```
E-Commerce/
├── src/
│   ├── components/
│   │   ├── marketplace/
│   │   │   ├── MarketplaceHeader.js      # Header adapté marketplace
│   │   │   ├── MarketplaceHome.js        # Page d'accueil marketplace
│   │   │   ├── ServicesPage.js           # Liste des services
│   │   │   ├── EventsPage.js             # Événements BDE
│   │   │   └── SellerDashboard.js        # Tableau de bord vendeur
│   │   ├── Header.js                     # Header original
│   │   ├── Footer.js                     # Footer
│   │   ├── CartSidebar.js                # Panier latéral
│   │   └── ...                           # Autres composants
│   ├── contexts/
│   │   ├── ThemeContext.js               # Gestion thème
│   │   ├── AuthContext.js                # Authentification
│   │   ├── CartContext.js                # Panier
│   │   ├── SellerContext.js              # Vendeurs
│   │   └── PaymentContext.js             # Paiements
│   ├── data/
│   │   ├── studentServices.js            # Services étudiants
│   │   ├── studentProducts.js            # Produits étudiants
│   │   ├── bdeEvents.js                  # Événements BDE
│   │   ├── campusLocations.js            # Campus et points de retrait
│   │   └── products.js                   # Produits originaux
│   ├── App.js                            # Composant principal
│   ├── index.js                          # Point d'entrée
│   └── index.css                         # Styles globaux
├── public/
├── package.json
├── tailwind.config.js
├── README_MARKETPLACE.md                 # Ce fichier
└── MARKETPLACE_ETUDIANTE_LOME.md        # Documentation du projet

```

---

## 🎯 Fonctionnalités implémentées

### ✅ Système de Services Étudiants

**Catégories disponibles :**
- Graphisme & Design
- Développement Web
- Photographie & Vidéo
- Cours & Formation
- Beauté & Bien-être
- Rédaction & Traduction
- Marketing Digital
- Musique & Audio

**Fonctionnalités :**
- Recherche et filtres avancés
- Système de notation (étoiles)
- Badges de vérification vendeur
- Prix en FCFA
- Délais de livraison
- Portfolio des vendeurs

### ✅ Marketplace de Produits

**Catégories :**
- Fournitures scolaires
- Électronique
- Vêtements & Goodies BDE
- Livres d'occasion
- Accessoires
- Nourriture

**Fonctionnalités :**
- État des produits (Neuf/Occasion)
- Réductions et promotions
- Stock en temps réel
- Livraison ou retrait campus
- Vendeurs étudiants et commerçants vérifiés

### ✅ Événements BDE

**Types d'événements :**
- Soirées et fêtes
- Événements sportifs
- Conférences et formations
- Concerts
- Job fairs

**Fonctionnalités :**
- Billetterie en ligne
- Différents types de billets (Standard, VIP, Early bird)
- Jauge de remplissage en temps réel
- Organisateurs vérifiés (BDE officiels)
- Système de réservation

### ✅ Système d'Authentification

- Inscription avec email universitaire
- Connexion sécurisée
- Profils utilisateurs
- Vérification du statut étudiant
- Gestion des adresses de livraison
- Wishlist personnalisée
- Historique des commandes

### ✅ Tableau de Bord Vendeur

- Vue d'ensemble des statistiques
- Gestion des produits et services
- Suivi des commandes
- Analytics et performances
- Gestion du stock
- Historique des ventes

### ✅ Système de Paiement

**Méthodes disponibles :**
- **Flooz** (Togocom Mobile Money)
- **T-Money** (Moov Mobile Money)
- **Carte Bancaire** (Visa, Mastercard)
- **FedaPay** (Passerelle unifiée)
- **Espèces** (Paiement à la livraison)

**Fonctionnalités :**
- Calcul automatique des frais
- Vérification des numéros de téléphone
- Historique des transactions
- Demandes de remboursement
- Méthodes de paiement sauvegardées

### ✅ Points de Retrait Campus

**Universités couvertes :**
- Université de Lomé (UL)
- ESTBA
- Université de Kara
- Institut Africain d'Informatique (IAI)
- ESAM
- École Nationale d'Administration (ENA)

**Avantages :**
- Réduction des frais de livraison
- Horaires adaptés aux étudiants
- Points de retrait sécurisés
- Partenariats avec les BDE

---

## 🎨 Design & UX

### Thèmes
- **Mode clair** : Design épuré avec tons clairs
- **Mode sombre** : Interface moderne avec tons sombres
- Basculement instantané via toggle

### Responsive Design
- **Mobile First** : Optimisé d'abord pour mobile
- **Tablette** : Mise en page adaptée
- **Desktop** : Expérience complète

### Couleurs principales
- **Primary** : Purple (#9333EA) - Actions principales
- **Secondary** : Pink (#EC4899) - Accents
- **Success** : Green (#10B981) - Validations
- **Warning** : Yellow (#F59E0B) - Alertes
- **Error** : Red (#EF4444) - Erreurs

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation

```bash
# Cloner le projet (si applicable)
cd E-Commerce

# Installer les dépendances
npm install

# Lancer en mode développement
npm start
```

L'application sera disponible sur : **http://localhost:3000**

### Scripts disponibles

```bash
npm start      # Développement (port 3000)
npm build      # Build de production
npm test       # Tests unitaires
npm eject      # Éjection configuration (⚠️ irréversible)
```

---

## 📊 Données de démonstration

### Services (8 exemples)
- Design de logo professionnel
- Développement site web
- Photographie événementielle
- Cours particuliers mathématiques
- Coiffure & tresses africaines
- Montage vidéo professionnel
- Rédaction de CV
- Animation 3D & motion design

### Produits (8 exemples)
- Sac à dos universitaire
- Calculatrice scientifique
- T-shirt UL édition limitée
- Écouteurs Bluetooth
- Cahiers pack de 5
- Chargeur USB-C
- Livres de Droit L1
- Gourde isotherme

### Événements (6 exemples)
- Soirée d'intégration UL 2024
- Tournoi de football inter-facs
- Conférence Tech & Innovation
- Concert live artistes locaux
- Job Fair 2024
- Soirée karaoké campus

---

## 🔐 Sécurité et Confiance

### Vérification des vendeurs
- Validation de la carte étudiante
- Vérification email universitaire
- Confirmation par SMS (numéro togolais)
- Badge "Vendeur Vérifié" visible

### Système de notation
- Notes de 1 à 5 étoiles
- Commentaires des acheteurs
- Historique des transactions
- Badges de confiance (Bronze, Argent, Or)

### Protection des données
- Stockage local sécurisé (localStorage)
- Mots de passe non stockés en clair (prod)
- Validation des paiements
- Politique de confidentialité

---

## 🌍 Contexte togolais

### Adaptation locale
- Prix en **FCFA** (Franc CFA)
- Paiements mobiles (Flooz, T-Money)
- Points de retrait sur campus de Lomé
- Interface en français
- Support des universités locales

### Partenaires potentiels
- **Livraison** : Kaba Delivery, Gozem
- **Paiement** : FedaPay (agrégateur local)
- **Campus** : Tous les campus de Lomé
- **BDE** : Associations étudiantes officielles

---

## 📱 Fonctionnalités à venir

### Phase 2 (Court terme)
- [ ] Page détail service
- [ ] Page détail événement
- [ ] Système de chat vendeur-acheteur
- [ ] Notifications push
- [ ] Recherche avancée avec IA
- [ ] Application mobile (React Native)

### Phase 3 (Moyen terme)
- [ ] Système de parrainage
- [ ] Programme de fidélité
- [ ] Carte interactive des campus
- [ ] Intégration vraie API FedaPay
- [ ] Backend avec Node.js/Express
- [ ] Base de données (MongoDB/PostgreSQL)

### Phase 4 (Long terme)
- [ ] Extension à d'autres villes (Kara, Sokodé)
- [ ] Marketplace de stages et emplois
- [ ] Forum communautaire
- [ ] Système de mentorat étudiant
- [ ] API publique pour développeurs

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT.

---

## 👥 Équipe

**Campus Market** - Marketplace créée par des étudiants pour les étudiants de Lomé.

### Contact
- 📧 Email : contact@campusmarket.tg
- 📱 WhatsApp : +228 XX XX XX XX
- 🌐 Web : www.campusmarket.tg (à venir)
- 📍 Adresse : Lomé, Togo

---

## 🙏 Remerciements

- Tous les étudiants testeurs
- Les BDE partenaires
- La communauté React
- Les contributeurs open source

---

**Campus Market** - Votre campus, votre marketplace ! 🎓✨

*Dernière mise à jour : Novembre 2024*
