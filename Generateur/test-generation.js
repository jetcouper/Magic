import Replicate from 'replicate';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

// TEST: Générer seulement les 3 premières cartes
const testCartes = [
  {
    "id": 1,
    "name": "Jawas Scrapper",
    "illustration": "Un petit Jawa encapuchonné fouille un tas de pièces métalliques fumantes. Dans son dos : un sac rempli de composants. Les dunes de Tatooine s'étendent derrière lui, avec deux soleils à l'horizon."
  },
  {
    "id": 2,
    "name": "Gamorrean Guard",
    "illustration": "Un imposant garde Gamorréen, armé d'une hache lourde. Éclairage verdâtre, la porcherie derrière lui ressemble à un enclos crasseux du palais de Jabba. Style brutal et massif."
  },
  {
    "id": 3,
    "name": "Rebel Footman",
    "illustration": "Un jeune soldat rebelle en tenue orange, arme E-11 à la main, prêt à courir. Fond : tranchées enneigées de Hoth ou jungle de Yavin 4."
  }
];

// Configuration identique au script principal
const CONFIG = {
  apiProvider: 'replicate',
  replicateModel: 'black-forest-labs/flux-1.1-pro',
  outputDir: './test-images',
  imageFormat: 'png',
  delayBetweenRequests: 12000, // 12 secondes (6 requêtes/minute max)
  stylePrompt: 'Star Wars universe style, science fiction card game art, cinematic quality, detailed character design, Star Wars aesthetic, sci-fi fantasy, dramatic lighting, epic composition, professional digital illustration',
};

async function generateWithReplicate(card, apiKey) {
  const replicate = new Replicate({ auth: apiKey });
  const prompt = `${card.illustration}. ${CONFIG.stylePrompt}`;
  
  console.log(`🎨 Génération de l'image pour: ${card.name}`);
  console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);

  const output = await replicate.run(CONFIG.replicateModel, {
    input: {
      prompt: prompt,
      aspect_ratio: '3:4',
      output_format: 'png',
      output_quality: 90,
    }
  });

  const imageUrl = Array.isArray(output) ? output[0] : output;
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function testGeneration() {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error('❌ Erreur: Définissez la variable API_KEY');
    console.error('   Exemple: export API_KEY="votre_clé"');
    process.exit(1);
  }

  await fs.mkdir(CONFIG.outputDir, { recursive: true });
  console.log(`📁 Test avec ${testCartes.length} cartes\n`);

  for (let i = 0; i < testCartes.length; i++) {
    const card = testCartes[i];
    const filename = `test-card-${String(card.id).padStart(3, '0')}-${card.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.${CONFIG.imageFormat}`;
    const filepath = path.join(CONFIG.outputDir, filename);

    try {
      console.log(`\n[${i + 1}/${testCartes.length}] ${card.name}`);
      
      const imageBuffer = await generateWithReplicate(card, apiKey);
      await fs.writeFile(filepath, imageBuffer);
      
      console.log(`✅ Sauvegardé: ${filename}`);

      if (i < testCartes.length - 1) {
        console.log(`⏳ Pause de 12s...`);
        await new Promise(resolve => setTimeout(resolve, 12000));
      }
    } catch (error) {
      console.error(`❌ Erreur: ${error.message}`);
    }
  }

  console.log(`\n✅ Test terminé! Images dans: ${CONFIG.outputDir}`);
  console.log(`💡 Si tout fonctionne, utilisez: npm start`);
}

testGeneration().catch(console.error);