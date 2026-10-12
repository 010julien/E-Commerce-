# ⚡ Démarrage Ultra-Rapide - Campus Market

## 🚀 En 3 commandes

```bash
# 1. Installer les dépendances (première fois uniquement)
npm install

# 2. Lancer l'application
npm start

# 3. Ouvrir dans le navigateur
# L'application s'ouvre automatiquement sur http://localhost:3000
```

---

## 🎯 Que faire maintenant ?

### Option 1 : Explorer la plateforme (Recommandé)

1. **Page d'accueil** : Voir les services, produits et événements
2. **Services** : Cliquer sur "Explorer les Services"
3. **Événements** : Naviguer vers "Événements"
4. **Thème** : Cliquer sur l'icône soleil/lune pour changer de mode
5. **Recherche** : Taper "design" dans la barre de recherche

### Option 2 : Créer un compte

1. Cliquer sur l'icône utilisateur (en haut à droite)
2. Remplir le formulaire d'inscription
3. Choisir "Université de Lomé" comme université
4. Se connecter

### Option 3 : Devenir vendeur

1. Cliquer sur "Devenir vendeur" (header ou page d'accueil)
2. Accéder au tableau de bord vendeur
3. Explorer les statistiques

---

## 📱 Navigation Rapide

| Page | URL | Description |
|------|-----|-------------|
| **Accueil** | `/` | Page d'accueil marketplace |
| **Services** | `/services` | 8 services de démo |
| **Événements** | `/events` | 6 événements BDE |
| **Dashboard** | `/seller-dashboard` | Interface vendeur |
| **Connexion** | `/auth` | Se connecter/inscrire |
| **Profil** | `/profile` | Mon profil |

---

## 🎨 Raccourcis Clavier (à venir)

- `Ctrl + K` : Ouvrir la recherche
- `Ctrl + Shift + D` : Basculer mode sombre
- `Ctrl + B` : Ouvrir le panier

---

## 📊 Données de Démonstration

### Services (8)
- Design de logo - 15,000 FCFA
- Développement web - 75,000 FCFA
- Photographie - 35,000 FCFA
- Cours maths - 5,000 FCFA
- Coiffure - 8,000 FCFA
- Montage vidéo - 25,000 FCFA
- Rédaction CV - 10,000 FCFA
- Animation 3D - 40,000 FCFA

### Événements (6)
- Soirée d'intégration UL
- Tournoi de football
- Conférence Tech
- Concert live
- Job Fair (Gratuit)
- Soirée karaoké

### Campus (6)
- Université de Lomé
- ESTBA
- Université de Kara
- IAI
- ESAM
- ENA

---

## 🐛 Problème de Lancement ?

### Port déjà utilisé
```bash
# Windows
netstat -ano | findstr :3000
# Tuer le processus ou utiliser autre port
set PORT=3001 && npm start
```

### Erreur de dépendances
```bash
# Réinstaller proprement
rmdir /s node_modules
del package-lock.json
npm install
```

### Cache React
```bash
# Vider le cache
npm start -- --reset-cache
```

---

## 📚 Documentation Complète

| Document | Contenu |
|----------|---------|
| **README_MARKETPLACE.md** | Documentation technique complète |
| **GUIDE_MARKETPLACE.md** | Guide d'utilisation détaillé |
| **MARKETPLACE_ETUDIANTE_LOME.md** | Compte-rendu de réunion |
| **SYNTHESE_DEVELOPPEMENT.md** | Récapitulatif du développement |

---

## ✅ Checklist Première Utilisation

- [ ] Installation des dépendances (`npm install`)
- [ ] Lancement de l'application (`npm start`)
- [ ] Exploration de la page d'accueil
- [ ] Test du changement de thème (clair/sombre)
- [ ] Navigation dans les services
- [ ] Navigation dans les événements
- [ ] Création d'un compte de test
- [ ] Exploration du dashboard vendeur

---

## 🎯 Prochaines Étapes

1. **Tester toutes les fonctionnalités**
2. **Lire la documentation complète**
3. **Identifier les améliorations souhaitées**
4. **Planifier le développement backend**
5. **Préparer les tests utilisateurs**

---

## 💡 Astuces

**Pour développer :**
- Les données sont dans `src/data/`
- Les composants marketplace dans `src/components/marketplace/`
- Les contextes dans `src/contexts/`

**Pour personnaliser :**
- Couleurs dans `tailwind.config.js`
- Logo et nom dans `MarketplaceHeader.js`
- Données de démo dans les fichiers `src/data/*.js`

---

## 🆘 Besoin d'Aide ?

1. **Consulter** : GUIDE_MARKETPLACE.md
2. **Lire** : README_MARKETPLACE.md
3. **Contacter** : contact@campusmarket.tg

---

## 🎉 C'est Parti !

**Tout est prêt. Lancez l'application et explorez !**

```bash
npm start
```

**Campus Market** - Votre marketplace étudiante ! 🎓✨
