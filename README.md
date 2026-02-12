### Readme fait avec l'ia car j'ai toujours du mal a en faire

# Visualisation de Trajectoires Laser

Application Angular pour visualiser les trajectoires laser avec leurs caractéristiques (couleur, puissance)
.

##  Lancement de l'application

### Prérequis

- Node.js (v18 ou supérieur)
- npm

### Installation et démarrage

```bash
# Installation des dépendances
npm install

# Lancement du serveur
npm start
# ou
ng serve

# L'application sera accessible sur http://localhost:4200
```

## Réflexions et Choix

### Pourquoi cette visualisation ?

J'ai opté pour une approche **double vue** :

1. **Vue SVG principale** : Affichage fidèle des trajectoires laser

   - Permet aux opérateurs de voir exactement ce que le laser va graver
   - Conserve les proportions

2. **Panneau latéral d'information** : Liste détaillée et interactive

   - Offre une vue d'ensemble rapide
   - Facilite la comparaison entre différentes trajectoires

### Représentation visuelle des caractéristiques

#### Couleur du pen

- **Choix** : Utilisation directe de la couleur du pen pour le trait SVG
- **Justification** : Mapping  intuitif - rouge = rouge, bleu = bleu
- **Avantage** : Reconnaissance immédiate,

#### Puissance du laser

J'ai utilisé **trois indicateurs visuels** pour la puissance :

1. **Opacité du trait** (40% à 100%)
   - Plus la puissance est élevée, plus le trait est opaque

2. **Épaisseur du trait** (1.5px à 4px)
   - Trait plus épais = puissance plus élevée

3. **Barre de progression** (dans le panneau)
   - Représentation précise en pourcentage
   - Facile à comparer entre trajectoires


### Choix techniques

#### Technologies Angular utilisées

- **HttpClient** : Chargement du fichier JSON
- **CommonModule** : Directives structurelles (*ngFor, *ngIf)
- **Standalone Components** : Pas de modules
- **TypeScript strict** : Typage complet pour la robustesse

#### SVG natif

**Choix** : Utilisation du SVG natif plutôt qu'une librairie
**Justification** :

-  Pas de dépendance externe
-  Performance optimale
-  Contrôle total du rendu
-  Les paths SVG sont déjà fournis dans le bon format

### Compromis faits

####  Calcul simplifié pour les numéros de trajectoire

- **Problème** : Extraction du point de départ du path avec `split(' ')`
- **Limitation** : Fonctionne pour M x y, mais fragile pour des  formats complexes
- **Amélioration future** : Parser SVG robuste ou  utuliser une librairie de manipulation de paths



## 🔧 Difficultés rencontrées

### 1. Extraction du point de départ pour les numéros

**Problème** : Comment positionner le numéro d'ordre sur chaque trajectoire ?
**Reste à améliorer** : Parser plus robuste qui gère tous les cas edge

### 2. Équilibre visuel entre opacité et épaisseur

**Défi** : Trouver le bon ratio pour que la puissance soit visible sans être écrasante
**Approche** : Tests  avec les valeurs fournies (40-100%)
**Résultat** : Formules linéaires simples mais efficaces

### 3. Gestion du hover sur SVG

**Challenge** : Les events SVG peuvent être délicats
**Solution** : Combinaison de events natifs + classes CSS dynamiques
**Apprentissage** : cursor: pointer indispensable pour l'UX

## 🎯 Pistes d'amélioration

### Avec plus de temps


1. **Animation de l'ordre d'exécution**
   - Visualisation séquentielle des trajectoires
   - Utile pour comprendre le processus de gravure
   - Play/Pause/Step controls

2. **Export et sauvegarde**
   - Export SVG optimisé
   - Export PNG/PDF pour documentation


3. **Validation des données**
   - Vérification de la validité des paths SVG
   - Détection des trajectoires qui se chevauchent
   - Alertes sur les puissances inhabituelles



## 📋 Fonctionnalités implémentées

### Fonctionnalités de base ✅

- [x] Chargement des trajectoires depuis JSON
- [x] Affichage SVG des trajectoires
- [x] Visualisation des couleurs
- [x] Visualisation de la puissance (opacité + épaisseur)
- [x] Code structuré et fonctionnel

### Améliorations ✅

- [x] Légende explicative
- [x] Affichage de l'ordre des trajectoires (numéros)
- [x] Liste détaillée des trajectoires
- [x] Interactions : hover et sélection
- [x] Barre de puissance visuelle
- [x] Informations détaillées sur sélection
- [x] Design responsive

##  Structure du code

### Composant principal : TrajectoireViewerComponent

**Responsabilités** :

- Chargement des données via le service
- Gestion de l'état (sélection, hover)
- Calculs de rendu (opacité, épaisseur)
- Interactions utilisateur

**Méthodes clés** :

- `getOpacity(power)` : Convertit la puissance en opacité
- `getStrokeWidth(power)` : Calcule l'épaisseur du trait
- `onTrajectoireHover()` : Gestion du survol
- `onTrajectoireClick()` : Gestion de la sélection

### Service : TrajectoireService

**Responsabilité** :

- Chargement du fichier JSON
- Fourniture des données typées

**Design pattern** : Injection de dépendance Angular

### Modèles : trajectoire.model.ts

**Interfaces** :

- `Trajectoire` : Une trajectoire individuelle
- `Pen` : Caractéristiques du laser
- `TrajectoireData` : Structure complète du fichier

##  Décisions UX/UI

### Palette de couleurs

- Fond clair pour contraste optimal
- Couleurs des trajectoires : celles du fichier (authenticité)
- Accents : Vert pour hover, Bleu pour sélection

### Interactions

- **Hover** : Effet de glow + épaississement
- **Click** : Sélection persistante + fond bleu
- **Feedback visuel** : Toujours clair et immédiat

### Hiérarchie d'information

1. SVG principal (vision globale)
2. Liste des trajectoires (détails rapides)
3. Panneau de sélection (information complète)

### Accessibilité

- Curseur pointer sur éléments cliquables
- Contraste de couleurs respecté
- Tailles de police lisibles

## 🧪 Tests manuels effectués

- ✅ Chargement correct des 5 trajectoires
- ✅ Affichage correct des couleurs (rouge, bleu, vert)
- ✅ Puissances visuellement distinctes
- ✅ Hover fonctionnel sur toutes les trajectoires
- ✅ Sélection/désélection fonctionnelle
- ✅ Ordre d'exécution visible (1-5)
- ✅ Responsive sur différentes tailles d'écran

## Ce que j'ai appris

- Manipulation avancée de SVG dans Angular
- Équilibre entre simplicité et richesse fonctionnelle
- Importance de la redondance visuelle pour la clarté
- Trade-offs entre temps et perfection dans un contexte réel

