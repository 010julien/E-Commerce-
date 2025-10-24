# 🔧 Guide de Dépannage - Cool-Chic

Ce guide vous aide à résoudre les problèmes courants rencontrés avec l'application Cool-Chic.

## 🚨 Erreurs Communes

### 1. Erreur JSON.parse: unexpected character

**Symptômes :**
```
JSON.parse: unexpected character at line 1 column 1 of the JSON data
```

**Cause :** Données corrompues dans le localStorage du navigateur.

**Solutions :**

#### Option 1 : Vider le cache du navigateur
1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet "Application" ou "Storage"
3. Cliquez sur "Local Storage"
4. Supprimez les entrées `theme` et `cart`
5. Rechargez la page

#### Option 2 : Vider le localStorage via la console
```javascript
// Ouvrez la console (F12) et exécutez :
localStorage.clear();
location.reload();
```

#### Option 3 : Mode navigation privée
Testez l'application en mode navigation privée pour confirmer que le problème vient du cache.

### 2. Erreurs de CSS Tailwind

**Symptômes :**
```
Unknown at rule @tailwind
Unknown at rule @apply
```

**Cause :** L'IDE ne reconnaît pas les directives Tailwind CSS.

**Solution :** Ces avertissements sont normaux et n'affectent pas le fonctionnement de l'application. Pour les supprimer :

1. **VS Code :** Installez l'extension "Tailwind CSS IntelliSense"
2. **Autres IDE :** Configurez la reconnaissance des directives CSS personnalisées

### 3. Port 3000 déjà utilisé

**Symptômes :**
```
Something is already running on port 3000
```

**Solutions :**

#### Option 1 : Changer le port
```bash
set PORT=3001 && npm start
```

#### Option 2 : Arrêter le processus existant
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

### 4. Erreurs de dépendances

**Symptômes :**
```
Module not found
Cannot resolve dependency
```

**Solutions :**

#### Réinstallation complète
```bash
# Supprimer node_modules et package-lock.json
rm -rf node_modules package-lock.json

# Réinstaller
npm install
```

#### Vider le cache npm
```bash
npm cache clean --force
npm install
```

### 5. Images ne s'affichent pas

**Cause :** URLs d'images externes non disponibles.

**Solution :** Les images utilisent Unsplash. Vérifiez votre connexion internet ou remplacez les URLs par des images locales.

### 6. Animations saccadées

**Causes possibles :**
- Performance du navigateur
- Trop d'onglets ouverts
- Ressources système limitées

**Solutions :**
- Fermez les onglets inutiles
- Redémarrez le navigateur
- Utilisez Chrome ou Firefox récents

## 🛠️ Commandes de Diagnostic

### Vérifier la version de Node.js
```bash
node --version
npm --version
```
**Requis :** Node.js 16+ et npm 8+

### Vérifier les dépendances
```bash
npm list --depth=0
```

### Analyser les erreurs de build
```bash
npm run build
```

### Tester en mode production
```bash
npm run build
npx serve -s build
```

## 🔍 Debugging Avancé

### 1. Activer les logs détaillés
Dans le fichier `.env.local` :
```
REACT_APP_DEBUG=true
REACT_APP_LOG_LEVEL=debug
```

### 2. Inspecter le localStorage
```javascript
// Console du navigateur
console.log('Theme:', localStorage.getItem('theme'));
console.log('Cart:', localStorage.getItem('cart'));
```

### 3. Vérifier les contextes React
```javascript
// Dans les composants
console.log('Theme Context:', useTheme());
console.log('Cart Context:', useCart());
```

## 🚀 Optimisation des Performances

### 1. Vider le cache de développement
```bash
npm start -- --reset-cache
```

### 2. Optimiser les images
- Utilisez des formats WebP
- Compressez les images
- Implémentez le lazy loading

### 3. Analyser le bundle
```bash
npm install -g webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer build/static/js/*.js
```

## 📱 Problèmes Mobile

### 1. Affichage incorrect sur mobile
- Vérifiez la balise viewport dans `index.html`
- Testez avec les outils de développement mobile
- Utilisez les classes responsive de Tailwind

### 2. Touch events ne fonctionnent pas
- Vérifiez les event listeners
- Testez sur un vrai appareil mobile
- Utilisez les classes `touch-action` de Tailwind

## 🌐 Problèmes de Déploiement

### 1. Build échoue
```bash
# Vérifier les erreurs de TypeScript/ESLint
npm run build 2>&1 | tee build.log
```

### 2. Paths incorrects en production
Vérifiez le `homepage` dans `package.json` :
```json
{
  "homepage": "https://votre-domaine.com"
}
```

### 3. Variables d'environnement
Assurez-vous que toutes les variables commencent par `REACT_APP_`

## 📞 Obtenir de l'Aide

### 1. Informations à fournir
Lors d'une demande d'aide, incluez :
- Version de Node.js et npm
- Navigateur et version
- Message d'erreur complet
- Étapes pour reproduire le problème

### 2. Logs utiles
```bash
# Logs de développement
npm start > dev.log 2>&1

# Logs de build
npm run build > build.log 2>&1
```

### 3. Contacts
- 📧 Email : support@cool-chic.fr
- 📖 Documentation : README.md
- 🐛 Issues : Repository GitHub

## ✅ Checklist de Vérification

Avant de signaler un problème :

- [ ] J'ai vidé le cache du navigateur
- [ ] J'ai réinstallé les dépendances
- [ ] J'ai testé en mode navigation privée
- [ ] J'ai vérifié la console pour d'autres erreurs
- [ ] J'ai testé sur un autre navigateur
- [ ] J'ai redémarré le serveur de développement

## 🎯 Solutions Rapides

### Reset complet de l'application
```bash
# 1. Arrêter le serveur (Ctrl+C)
# 2. Nettoyer complètement
rm -rf node_modules package-lock.json
npm cache clean --force

# 3. Réinstaller et relancer
npm install
npm start

# 4. Vider le localStorage
# Dans la console du navigateur :
localStorage.clear(); location.reload();
```

Cette procédure résout 90% des problèmes courants ! 🎉
