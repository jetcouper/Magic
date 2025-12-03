# 🔧 Exemples de Configuration pour Différentes APIs

## 1️⃣ Replicate - Flux 1.1 Pro (RECOMMANDÉ)

**Meilleure qualité et bon prix**

```javascript
const CONFIG = {
  apiProvider: 'replicate',
  replicateModel: 'black-forest-labs/flux-1.1-pro',
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 2000,
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art, professional quality, dramatic lighting, epic composition',
};
```

**Commandes** :
```bash
export API_KEY="r8_votre_clé_replicate"
npm start
```

---

## 2️⃣ Replicate - Flux Schnell (GRATUIT/RAPIDE)

**Version plus rapide et moins chère**

```javascript
const CONFIG = {
  apiProvider: 'replicate',
  replicateModel: 'black-forest-labs/flux-schnell',
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 1000, // Plus rapide
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art',
};
```

---

## 3️⃣ Replicate - SDXL

**Alternative stable**

```javascript
const CONFIG = {
  apiProvider: 'replicate',
  replicateModel: 'stability-ai/sdxl',
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 2000,
  stylePrompt: 'fantasy card game illustration, detailed, digital art',
};
```

---

## 4️⃣ Stability AI

**Excellente qualité, API stable**

```javascript
const CONFIG = {
  apiProvider: 'stability',
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 2000,
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art, professional quality',
};
```

**Commandes** :
```bash
export API_KEY="sk-votre_clé_stability"
npm start
```

---

## 5️⃣ OpenAI DALL-E 3

**Très haute qualité, plus cher**

```javascript
const CONFIG = {
  apiProvider: 'openai',
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 3000, // Rate limit plus strict
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art, professional quality, dramatic lighting',
};
```

**Commandes** :
```bash
export API_KEY="sk-votre_clé_openai"
npm start
```

---

## 🎨 Styles Personnalisés

### Style Réaliste / Cinématique
```javascript
stylePrompt: 'photorealistic, cinematic lighting, movie quality, 8k resolution, ultra detailed, dramatic composition'
```

### Style Cartoon / Animé
```javascript
stylePrompt: 'cartoon style, vibrant colors, animated art, cel shaded, dynamic poses, playful atmosphere'
```

### Style Peinture à l'Huile
```javascript
stylePrompt: 'oil painting, fantasy art, brushstrokes visible, rich colors, dramatic lighting, epic scene, masterpiece'
```

### Style Manga / Anime
```javascript
stylePrompt: 'manga style, anime art, detailed linework, dynamic action pose, Japanese comic book art, vibrant'
```

### Style Dark / Sombre
```javascript
stylePrompt: 'dark fantasy art, moody lighting, atmospheric, gothic, ominous mood, highly detailed shadows'
```

### Style Pixel Art
```javascript
stylePrompt: '16-bit pixel art, retro game style, vibrant colors, sharp pixels, nostalgic game aesthetic'
```

---

## 🔧 Ajustements selon vos besoins

### Pour économiser de l'argent
- Utilisez `flux-schnell` (gratuit/très peu cher)
- Réduisez la qualité d'output si disponible

### Pour la meilleure qualité
- Utilisez `flux-1.1-pro` ou `dall-e-3`
- Augmentez le `output_quality`
- Ajoutez plus de détails au prompt

### Pour la vitesse
- Réduisez `delayBetweenRequests`
- Utilisez `flux-schnell`
- Générez en parallèle (avancé)

### Pour éviter les rate limits
- Augmentez `delayBetweenRequests` à 5000ms
- Générez en petits batches
- Vérifiez les limites de votre API

---

## 📊 Comparaison des APIs

| Critère | Flux 1.1 Pro | Flux Schnell | SDXL | Stability | DALL-E 3 |
|---------|--------------|--------------|------|-----------|----------|
| **Qualité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Vitesse** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Prix** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Cohérence** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 💡 Conseils Pro

1. **Testez d'abord** : Utilisez `npm test` pour générer 3 images avant tout
2. **Gardez vos prompts en anglais** : Meilleurs résultats avec toutes les APIs
3. **Soyez cohérent** : Utilisez le même style pour toutes vos cartes
4. **Sauvegardez** : Les images sont stockées localement, sauvegardez-les !
5. **Budget** : Vérifiez vos crédits API avant de lancer 109 générations

---

## 🆘 Support

Problèmes ? Vérifiez :
- Votre clé API est valide
- Vous avez des crédits dans votre compte
- La variable `API_KEY` est bien définie
- Votre connexion internet fonctionne
- Les logs d'erreur dans la console
