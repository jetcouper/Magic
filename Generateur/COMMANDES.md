# 🎯 Commandes Essentielles

## Installation

```bash
# Installer les dépendances
npm install
```

## Configuration de la Clé API

### Linux / macOS
```bash
export API_KEY="r8_votre_clé_replicate_ici"
```

### Windows PowerShell
```powershell
$env:API_KEY="r8_votre_clé_replicate_ici"
```

### Windows CMD
```cmd
set API_KEY=r8_votre_clé_replicate_ici
```

## Génération d'Images

```bash
# Test avec 3 cartes (RECOMMANDÉ en premier)
npm test

# Génération complète (109 cartes)
npm start

# Alternative : lancer directement le script
node generate-card-images.js
```

## Vérification

```bash
# Voir les images de test générées
ls -lh test-images/

# Voir les images complètes générées
ls -lh generated-images/

# Compter le nombre d'images
ls generated-images/ | wc -l
```

## Modification de la Configuration

### Ouvrir le fichier de configuration
```bash
# macOS
open generate-card-images.js

# Linux
nano generate-card-images.js
# ou
vim generate-card-images.js

# Windows
notepad generate-card-images.js
```

### Changer l'API
Dans `generate-card-images.js`, ligne ~112 :
```javascript
apiProvider: 'replicate',  // ou 'stability', 'openai'
```

### Changer le modèle Replicate
Ligne ~113 :
```javascript
replicateModel: 'black-forest-labs/flux-1.1-pro',
// ou 'black-forest-labs/flux-schnell'
// ou 'stability-ai/sdxl'
```

### Changer le délai entre requêtes
Ligne ~115 :
```javascript
delayBetweenRequests: 2000,  // en millisecondes (2000 = 2 secondes)
```

### Personnaliser le style
Ligne ~117 :
```javascript
stylePrompt: 'fantasy card game illustration, highly detailed...',
```

## Gestion des Erreurs

### Si npm install échoue
```bash
# Nettoyer le cache
npm cache clean --force

# Réessayer
npm install
```

### Si la génération s'arrête
Le script reprend automatiquement là où il s'est arrêté.
Relancez simplement :
```bash
npm start
```

### Si vous dépassez le rate limit
1. Arrêtez le script (Ctrl+C)
2. Augmentez le délai dans la config :
```javascript
delayBetweenRequests: 5000,  // 5 secondes
```
3. Relancez : `npm start`

## Nettoyage

```bash
# Supprimer les images de test
rm -rf test-images/

# Supprimer toutes les images générées
rm -rf generated-images/

# Supprimer node_modules pour réinstaller
rm -rf node_modules/
npm install
```

## Git (optionnel)

```bash
# Initialiser un repo git
git init

# Ajouter les fichiers
git add .

# Premier commit
git commit -m "Initial commit - Star Wars card generator"

# Note: .gitignore protège déjà vos clés API et images
```

## Vérification des Coûts

### Replicate
Consultez : https://replicate.com/account/billing

### Stability AI
Consultez : https://platform.stability.ai/account/billing

### OpenAI
Consultez : https://platform.openai.com/usage

## Commandes Utiles

```bash
# Voir la taille du dossier d'images
du -sh generated-images/

# Trouver les images les plus grandes
ls -lhS generated-images/ | head -10

# Compresser toutes les images (backup)
tar -czf images-backup.tar.gz generated-images/

# Renommer les images (exemple)
cd generated-images/
for f in *.png; do mv "$f" "sw-$f"; done
```

## Raccourcis de Test

### Générer seulement les 5 premières cartes
Modifiez `generate-card-images.js` ligne ~4 :
```javascript
const cartes = [ /* ... */ ].slice(0, 5);
```

### Générer une seule carte spécifique
```javascript
const cartes = [
  {
    "id": 27,
    "name": "Darth Maul",
    "illustration": "..."
  }
];
```

## Variables d'Environnement Avancées

```bash
# Définir plusieurs variables
export API_KEY="votre_clé"
export OUTPUT_DIR="./mes-images"
export DELAY_MS="3000"

# Utiliser dans le code (modificiation requise)
const outputDir = process.env.OUTPUT_DIR || './generated-images';
```

## Performance

### Générer plus rapidement
```javascript
delayBetweenRequests: 1000,  // 1 seconde (risque de rate limit)
```

### Générer en parallèle (avancé - non inclus)
Nécessite de modifier le script pour utiliser `Promise.all()`

## Debugging

```bash
# Mode verbose (ajouter des console.log)
# Déjà intégré dans le script

# Voir les erreurs détaillées
npm start 2>&1 | tee generation.log
```

## FAQ Rapide

**Q: Combien ça coûte ?**
A: ~$4.36 avec Replicate Flux 1.1 Pro

**Q: Combien de temps ?**
A: ~8 minutes pour 109 cartes

**Q: Puis-je arrêter et reprendre ?**
A: Oui, le script reprend automatiquement

**Q: Les images sont où ?**
A: Dans le dossier `generated-images/`

**Q: Comment changer le style ?**
A: Modifiez `stylePrompt` dans le fichier de config

**Q: Quelle API choisir ?**
A: Replicate Flux 1.1 Pro (meilleur rapport qualité/prix)

---

Pour plus de détails, consultez :
- `QUICK-START.md` - Guide rapide
- `README.md` - Documentation complète
- `API-EXAMPLES.md` - Exemples de configuration
