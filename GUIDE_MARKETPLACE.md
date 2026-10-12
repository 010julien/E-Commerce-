# 🚀 Guide de Démarrage - Campus Market

## ⚡ Lancement Rapide (5 minutes)

### 1. Installation des dépendances

```bash
# Ouvrir un terminal dans le dossier du projet
cd C:\Users\DELL\Desktop\DONNEE\E-Commerce

# Installer les dépendances
npm install
```

### 2. Lancer l'application

```bash
# Démarrer le serveur de développement
npm start
```

L'application s'ouvrira automatiquement sur **http://localhost:3000**

---

## 🎯 Parcours de Test Recommandé

### 1. Page d'accueil (/)
**Ce que vous verrez :**
- Hero section avec présentation Campus Market
- Statistiques de la plateforme
- Services en vedette
- Produits populaires
- Événements à venir

**Actions à tester :**
- ✅ Cliquer sur "Explorer les Services"
- ✅ Cliquer sur "Devenir Vendeur"
- ✅ Utiliser la barre de recherche
- ✅ Basculer entre mode clair/sombre

### 2. Services étudiants (/services)
**Ce que vous verrez :**
- 8 services de démonstration
- Filtres par catégorie, prix, note
- Système de tri
- Vue grille/liste

**Services disponibles :**
- Design de logo (15,000 FCFA)
- Développement web (75,000 FCFA)
- Photographie (35,000 FCFA)
- Cours particuliers (5,000 FCFA)
- Coiffure (8,000 FCFA)
- Montage vidéo (25,000 FCFA)
- Rédaction CV (10,000 FCFA)
- Animation 3D (40,000 FCFA)

**Actions à tester :**
- ✅ Filtrer par catégorie (ex: "Graphisme & Design")
- ✅ Ajuster le prix maximum
- ✅ Filtrer par note minimum (4.5+)
- ✅ Trier par prix croissant/décroissant
- ✅ Changer la vue (grille/liste)
- ✅ Cliquer sur un service pour voir les détails

### 3. Événements BDE (/events)
**Ce que vous verrez :**
- 6 événements de démonstration
- Filtres par catégorie, date, prix
- Jauge de remplissage des billets
- Organisateurs vérifiés (BDE)

**Événements disponibles :**
- Soirée d'intégration UL (3,000-8,000 FCFA)
- Tournoi de football (500-15,000 FCFA)
- Conférence Tech (Gratuit-2,000 FCFA)
- Concert live (4,000-6,000 FCFA)
- Job Fair (Gratuit)
- Soirée karaoké (2,000 FCFA)

**Actions à tester :**
- ✅ Filtrer par catégorie (Soirées, Sport, Conférences...)
- ✅ Filtrer par date (Cette semaine, Ce mois-ci)
- ✅ Filtrer événements gratuits/payants
- ✅ Observer la jauge de remplissage
- ✅ Cliquer sur "Réserver"

### 4. Tableau de bord vendeur (/seller-dashboard)
**Ce que vous verrez :**
- Message "Devenez vendeur" (si non connecté)
- Vue d'ensemble des statistiques
- Gestion des produits/services
- Commandes récentes
- Analytics

**Onglets disponibles :**
- Vue d'ensemble (stats et KPIs)
- Produits (liste des produits à vendre)
- Services (liste des services proposés)
- Commandes (suivi des ventes)
- Statistiques (graphiques de performance)

**Actions à tester :**
- ✅ Cliquer sur "Créer mon profil vendeur"
- ✅ Naviguer entre les onglets
- ✅ Observer les statistiques de vente
- ✅ Voir les commandes en attente

### 5. Authentification (/auth)
**Ce que vous verrez :**
- Formulaire de connexion/inscription
- Champs pour email universitaire
- Validation du statut étudiant

**Actions à tester :**
- ✅ S'inscrire avec un nouvel email
- ✅ Renseigner l'université (ex: Université de Lomé)
- ✅ Choisir la faculté
- ✅ Se connecter avec les identifiants

### 6. Profil utilisateur (/profile)
**Ce que vous verrez :**
- Informations personnelles
- Historique des commandes
- Wishlist
- Adresses de livraison

**Actions à tester :**
- ✅ Modifier les informations
- ✅ Ajouter une adresse de livraison
- ✅ Consulter l'historique

---

## 🎨 Fonctionnalités à explorer

### Header Marketplace
- **Logo Campus Market** avec icône graduation cap
- **Barre de recherche** globale
- **Toggle thème** clair/sombre (icône soleil/lune)
- **Wishlist** avec compteur
- **Panier** avec nombre d'articles
- **Compte utilisateur** avec avatar
- **Navigation** : Services, Produits, Événements, BDE, Points de retrait

### Système de thème
- **Mode clair** : Fond blanc, tons clairs
- **Mode sombre** : Fond gris foncé, tons sombres
- **Basculement** : Clic sur icône soleil/lune
- **Persistance** : Se souvient de votre choix

### Filtres et recherche
- **Recherche textuelle** : Dans tous les contenus
- **Filtres par catégorie** : Classement par type
- **Filtres de prix** : Ajustement du budget
- **Filtres de note** : Minimum 3, 3.5, 4, 4.5 étoiles
- **Tri** : En vedette, Prix, Note, Popularité

---

## 💡 Données de démonstration

### Comptes de test

Vous pouvez créer votre propre compte ou utiliser ces données fictives :

**Étudiant 1**
- Email : kofi.mensah@ul.edu.tg
- Université : Université de Lomé
- Faculté : Arts & Design

**Étudiant 2**
- Email : aicha.toure@estba.edu.tg
- Université : ESTBA
- Faculté : Informatique

### Campus et points de retrait

**Université de Lomé (UL)**
- Cafétéria Centrale (Lun-Ven 8h-18h)
- BDE Faculté de Droit (Lun-Ven 10h-16h)
- Librairie Campus (Lun-Sam 7h30-19h)

**ESTBA**
- Réception ESTBA (Lun-Ven 7h30-18h30)
- BDE ESTBA (Lun-Ven 9h-17h)

**Autres campus**
- Université de Kara
- Institut Africain d'Informatique (IAI)
- ESAM
- École Nationale d'Administration (ENA)

### Méthodes de paiement

**Mobile Money (simulation)**
- Flooz (Togocom) : +228 90 XX XX XX
- T-Money (Moov) : +228 91 XX XX XX

**Carte bancaire (simulation)**
- Numéro : 4242 4242 4242 4242
- Date : 12/25
- CVV : 123

**Espèces**
- Paiement à la livraison (sans frais)

---

## 🐛 Résolution de problèmes

### Port 3000 déjà utilisé

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F

# Ou utiliser un autre port
set PORT=3001 && npm start
```

### Erreur de dépendances

```bash
# Supprimer node_modules et réinstaller
rmdir /s node_modules
del package-lock.json
npm install
```

### Erreur de cache

```bash
# Vider le cache React
npm start -- --reset-cache
```

### Images ne s'affichent pas

Les images utilisent Unsplash. Vérifiez :
- ✅ Connexion internet active
- ✅ Pas de bloqueur de contenu
- ✅ Accès autorisé à images.unsplash.com

---

## 📊 Statistiques de la plateforme (Démo)

### Utilisateurs
- **2,500+** étudiants actifs
- **150+** vendeurs vérifiés
- **4.8/5** note moyenne

### Contenu
- **8 services** de démonstration
- **8 produits** de démonstration
- **6 événements** à venir
- **6 campus** couverts

### Transactions (simulation)
- **300+** services proposés
- **1,000+** transactions mensuelles
- **95%** de satisfaction client

---

## 🎯 Prochaines étapes

### Pour tester davantage

1. **Créer un compte vendeur**
   - Aller sur /seller-dashboard
   - Cliquer "Créer mon profil vendeur"
   - Remplir les informations

2. **Ajouter des produits au panier**
   - Naviguer dans les services/produits
   - Cliquer sur "Ajouter au panier"
   - Voir le panier latéral s'ouvrir

3. **Tester le système de wishlist**
   - Cliquer sur l'icône cœur
   - Aller sur /wishlist
   - Gérer vos favoris

4. **Explorer les événements**
   - Filtrer par catégorie
   - Réserver des billets
   - Voir les détails d'organisation

---

## 💻 Développement

### Structure des fichiers importants

```
src/
├── App.js                          # Point d'entrée principal
├── components/
│   └── marketplace/
│       ├── MarketplaceHeader.js   # Navigation principale
│       ├── MarketplaceHome.js     # Page d'accueil
│       ├── ServicesPage.js        # Liste services
│       ├── EventsPage.js          # Liste événements
│       └── SellerDashboard.js     # Interface vendeur
├── contexts/
│   ├── AuthContext.js             # Gestion auth
│   ├── SellerContext.js           # Gestion vendeurs
│   └── PaymentContext.js          # Gestion paiements
└── data/
    ├── studentServices.js         # 8 services
    ├── studentProducts.js         # 8 produits
    ├── bdeEvents.js               # 6 événements
    └── campusLocations.js         # 6 campus
```

### Modifier les données

Pour ajouter vos propres services/produits/événements :

1. Ouvrir le fichier correspondant dans `src/data/`
2. Copier un objet existant
3. Modifier les propriétés
4. Sauvegarder

Exemple pour ajouter un service :

```javascript
// src/data/studentServices.js
{
  id: 'srv009',
  title: 'Votre service',
  category: 'Votre catégorie',
  description: 'Description',
  price: 10000,
  currency: 'FCFA',
  deliveryTime: '2-3 jours',
  seller: { /* ... */ },
  images: ['url1', 'url2'],
  tags: ['tag1', 'tag2'],
  featured: false
}
```

---

## 🌟 Fonctionnalités avancées

### Contextes React utilisés

1. **ThemeContext** - Gestion du thème
2. **AuthContext** - Authentification
3. **CartContext** - Panier d'achat
4. **SellerContext** - Gestion vendeurs
5. **PaymentContext** - Paiements multi-opérateurs

### LocalStorage

Les données suivantes sont sauvegardées localement :
- Préférence de thème
- Utilisateur connecté
- Panier d'achat
- Profil vendeur
- Wishlist

---

## 📞 Support

### Questions fréquentes

**Q: Puis-je vraiment payer avec Flooz/T-Money ?**
R: Pour le moment, c'est une simulation. L'intégration réelle FedaPay est prévue en Phase 2.

**Q: Les événements sont-ils réels ?**
R: Non, ce sont des exemples de démonstration. Les vrais événements seront ajoutés par les BDE.

**Q: Comment devenir vendeur réellement ?**
R: Le système de vérification sera activé lors du déploiement en production.

**Q: L'application fonctionne-t-elle hors ligne ?**
R: Partiellement. Certaines données en cache sont accessibles hors ligne.

---

## ✨ Bon développement !

Vous avez maintenant tout ce qu'il faut pour explorer **Campus Market** !

Pour toute question : contact@campusmarket.tg

---

**Campus Market** - Votre campus, votre marketplace ! 🎓

*Dernière mise à jour : Novembre 2024*
