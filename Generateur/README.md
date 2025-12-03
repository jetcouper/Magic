# 🎴 Générateur d'Images pour Cartes Star Wars

Ce projet génère automatiquement des images pour vos 109 cartes Star Wars en utilisant des APIs d'intelligence artificielle.

## 🚀 Mise en route rapide

### 1. Installation

```bash
npm install
```

### 2. Choisir votre API

Vous avez 3 options d'API au choix :

#### Option A : Replicate (RECOMMANDÉ) 
**Meilleur rapport qualité/prix**

- **Modèle recommandé** : Flux 1.1 Pro (résultats exceptionnels)
- **Coût** : ~$0.04 par image = ~$4.36 pour 109 cartes
- **Inscription** : https://replicate.com/
- **Obtenez votre clé API** : https://replicate.com/account/api-tokens

**Modèles disponibles** :
- `black-forest-labs/flux-1.1-pro` (meilleur qualité)
- `black-forest-labs/flux-schnell` (plus rapide, gratuit)
- `stability-ai/sdxl` (alternatif)

#### Option B : Stability AI
**Excellente qualité, légèrement plus cher**

- **Coût** : ~$0.05 par image = ~$5.45 pour 109 cartes
- **Inscription** : https://platform.stability.ai/
- **Obtenez votre clé API** : Dans votre compte

#### Option C : OpenAI DALL-E 3
**Plus cher mais très performant**

- **Coût** : ~$0.08 par image = ~$8.72 pour 109 cartes
- **Inscription** : https://platform.openai.com/
- **Obtenez votre clé API** : https://platform.openai.com/api-keys

### 3. Configuration

Éditez le fichier `generate-card-images.js` et modifiez la configuration :

```javascript
const CONFIG = {
  apiProvider: 'replicate', // 'replicate', 'stability', ou 'openai'
  replicateModel: 'black-forest-labs/flux-1.1-pro', // Seulement pour Replicate
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 2000, // 2 secondes entre chaque requête
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art, professional quality, dramatic lighting, epic composition',
};
```

### 4. Définir votre clé API

**Linux/Mac** :
```bash
export API_KEY="votre_clé_api_ici"
```

**Windows (PowerShell)** :
```powershell
$env:API_KEY="votre_clé_api_ici"
```

**Windows (CMD)** :
```cmd
set API_KEY=votre_clé_api_ici
```

### 5. Lancer la génération

```bash
npm start
```

## 📋 Fonctionnalités

✅ Génération automatique de 109 images  
✅ Support de 3 APIs différentes  
✅ Détection des images déjà générées (reprend où ça s'est arrêté)  
✅ Pause entre les requêtes pour éviter les rate limits  
✅ Gestion des erreurs et rapport détaillé  
✅ Nommage automatique des fichiers  
✅ Progression en temps réel  

## 📊 Exemple de sortie

```
[1/109] Traitement de: Jawas Scrapper
🎨 Génération de l'image pour: Jawas Scrapper
📝 Prompt: Un petit Jawa encapuchonné fouille un tas de pièces...
✅ Image sauvegardée: card-001-jawas-scrapper.png
⏳ Pause de 2s...

[2/109] Traitement de: Gamorrean Guard
🎨 Génération de l'image pour: Gamorrean Guard
...
```

## 🎨 Personnalisation du style

Vous pouvez modifier le `stylePrompt` dans la configuration pour changer le style des images :

```javascript
// Style réaliste
stylePrompt: 'photorealistic, cinematic, movie quality, 8k resolution'

// Style cartoon
stylePrompt: 'cartoon style, vibrant colors, animated, playful'

// Style peinture
stylePrompt: 'oil painting, fantasy art, dramatic, epic, masterpiece'

// Style manga
stylePrompt: 'manga style, anime art, detailed linework, dynamic'
```

## 📁 Structure des fichiers générés

```
generated-images/
├── card-001-jawas-scrapper.png
├── card-002-gamorrean-guard.png
├── card-003-rebel-footman.png
└── ...
```

## 🔧 Résolution de problèmes

### Erreur : "API key not defined"
Solution : Assurez-vous d'avoir défini la variable d'environnement `API_KEY`

### Erreur : "Rate limit exceeded"
Solution : Augmentez le délai entre les requêtes dans la config :
```javascript
delayBetweenRequests: 5000, // 5 secondes
```

### Erreur : "Module not found"
Solution : Exécutez `npm install` pour installer les dépendances

### Images de mauvaise qualité
Solution : 
1. Utilisez Flux 1.1 Pro pour Replicate (meilleure qualité)
2. Ajoutez plus de détails au `stylePrompt`
3. Traduisez les prompts en anglais pour de meilleurs résultats

## 💡 Conseils

1. **Testez d'abord avec quelques cartes** : Modifiez temporairement le script pour ne générer que les 5 premières cartes
2. **Sauvegardez vos clés API** : Ne les partagez jamais publiquement
3. **Vérifiez votre budget** : Consultez le coût estimé avant de lancer toutes les générations
4. **Patience** : La génération de 109 images prend environ 6-8 minutes avec les délais de sécurité

## 🎯 Prochaines étapes

Une fois les images générées, vous pouvez :
- Les intégrer dans votre application de jeu
- Les optimiser pour le web (compression)
- Créer des versions de différentes tailles
- Les imprimer pour des cartes physiques

## 📝 Notes importantes

- Les images sont générées en format portrait (3:4 ou similaire) adapté aux cartes
- Le script reprend automatiquement là où il s'est arrêté si interrompu
- Toutes les images générées sont sauvegardées localement
- Respectez les conditions d'utilisation de chaque API

## 🆘 Support

En cas de problème :
1. Vérifiez que votre clé API est valide
2. Vérifiez votre connexion internet
3. Consultez la documentation de l'API choisie
4. Vérifiez les logs d'erreur dans la console

## 📄 Licence

MIT - Libre d'utilisation pour vos projets personnels et commerciaux.

---

**Bon courage avec vos cartes Star Wars ! 🌟**
