# 🚀 Guide de Démarrage Rapide

## Étape 1 : Installation (2 minutes)

```bash
# Installer les dépendances
npm install
```

## Étape 2 : Obtenir une clé API (5 minutes)

### Option recommandée : Replicate (Flux 1.1 Pro)

1. Allez sur https://replicate.com/
2. Créez un compte (gratuit)
3. Allez dans votre profil → API tokens
4. Copiez votre clé API (commence par `r8_`)

**Coût estimé** : ~$4.36 pour 109 cartes

### Alternatives

- **Stability AI** : https://platform.stability.ai/ (~$5.45)
- **OpenAI DALL-E 3** : https://platform.openai.com/ (~$8.72)

## Étape 3 : Configuration (1 minute)

```bash
# Linux/Mac
export API_KEY="r8_votre_clé_replicate_ici"

# Windows PowerShell
$env:API_KEY="r8_votre_clé_replicate_ici"
```

## Étape 4 : Test (2 minutes)

Testez d'abord avec 3 cartes :

```bash
npm test
```

Vérifiez le dossier `test-images/` pour voir les résultats.

## Étape 5 : Génération complète (8 minutes)

Si le test fonctionne :

```bash
npm start
```

Les 109 images seront générées dans `generated-images/`

---

## ⚙️ Options de configuration

Éditez `generate-card-images.js` :

```javascript
const CONFIG = {
  apiProvider: 'replicate',      // ou 'stability', 'openai'
  replicateModel: 'black-forest-labs/flux-1.1-pro',
  outputDir: './generated-images',
  delayBetweenRequests: 2000,    // Augmentez si rate limit
};
```

## 🎨 Changer le style

Modifiez le `stylePrompt` :

```javascript
// Pour un style plus réaliste
stylePrompt: 'photorealistic, cinematic lighting, 8k, ultra detailed'

// Pour un style cartoon
stylePrompt: 'cartoon style, vibrant colors, animated art'

// Pour un style peinture
stylePrompt: 'digital painting, fantasy art, epic, masterpiece'
```

## ❓ Problèmes courants

**"API key not defined"**
→ Vérifiez que vous avez bien défini `API_KEY`

**"Rate limit exceeded"**
→ Augmentez `delayBetweenRequests` à 5000 (5 secondes)

**Qualité médiocre**
→ Utilisez Flux 1.1 Pro (recommandé) ou ajoutez plus de détails au prompt

## 💰 Coûts par API

| API | Coût/image | Total (109 cartes) | Qualité |
|-----|------------|-------------------|---------|
| Replicate (Flux) | $0.04 | **$4.36** | ⭐⭐⭐⭐⭐ |
| Stability AI | $0.05 | $5.45 | ⭐⭐⭐⭐ |
| OpenAI DALL-E 3 | $0.08 | $8.72 | ⭐⭐⭐⭐⭐ |

## 📝 Checklist

- [ ] `npm install` exécuté
- [ ] Clé API obtenue
- [ ] Variable `API_KEY` définie
- [ ] Test réussi (`npm test`)
- [ ] Génération complète lancée (`npm start`)
- [ ] Vérification des images dans `generated-images/`

## 🎉 C'est tout !

Vos images seront prêtes en quelques minutes. Bon courage ! 🌟
