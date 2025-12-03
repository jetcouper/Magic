import Replicate from 'replicate';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

// Vos cartes
const cartes = [
  {
    "id": 1,
    "name": "Jawas Scrapper",
    "illustration": "Un petit Jawa encapuchonné fouille un tas de pièces métalliques fumantes. Dans son dos : un sac rempli de composants. Les dunes de Tatooine s'étendent derrière lui, avec deux soleils à l'horizon."
  },
  {
    "id": 2,
    "name": "Gamorrean Guard",
    "illustration": "Un imposant garde Gamorréen, armé d'une hache lourde. Éclairage verdâtre, la "porcherie" derrière lui ressemble à un enclos crasseux du palais de Jabba. Style brutal et massif."
  },
  {
    "id": 3,
    "name": "Rebel Footman",
    "illustration": "Un jeune soldat rebelle en tenue orange, arme E-11 à la main, prêt à courir. Fond : tranchées enneigées de Hoth ou jungle de Yavin 4."
  },
  {
    "id": 4,
    "name": "Scout Trooper",
    "illustration": "Un scout trooper blanc, accroupi, observant à travers des jumelles impériales. Flou de vitesse derrière lui, ou forêt d'Endor éclairée par les rayons du soleil."
  },
  {
    "id": 5,
    "name": "Rebel Soldier",
    "illustration": "Soldat rebelle vétéran, veston brun, blaster levé et expression déterminée. Derrière lui : un mur explosé, symbole de résistance."
  },
  {
    "id": 6,
    "name": "B1 Droid Engineer",
    "illustration": "Un droïde B1 un peu tordu, penché sur un générateur cassé avec des outils. Étincelles et fumée légère. Expression maladroite typique des B1 ("Roger roger")."
  },
  {
    "id": 7,
    "name": "Wookie Shieldbearer",
    "illustration": "Un Wookiee immense portant un bouclier rond tribal en duracier décoré. Posture défensive, bouclier levé pour protéger un allié. Forêt de Kashyyyk en arrière-plan."
  },
  {
    "id": 8,
    "name": "Mandalorian Raider",
    "illustration": "Guerrier mandalorien sombre, armure cabossée, jetpack activé. Il attaque un convoi. Explosion orange derrière lui qui illumine sa visière en T."
  },
  {
    "id": 9,
    "name": "Nightsister Adept",
    "illustration": "Une jeune sorcière de Dathomir, yeux brillants rouges, manipulant de la magie verte spectrale. Arbres morts et brume violette autour."
  },
  {
    "id": 10,
    "name": "Cal Kestis",
    "illustration": "Cal dans sa tenue d'apprenti Jedi, sabre bleu visible à sa ceinture. Pose calme, vent soufflant sur ses cheveux, ruines Jedi derrière lui."
  },
  {
    "id": 11,
    "name": "Clone Shocktrooper",
    "illustration": "Un clone Shocktrooper en armure rouge et blanche, avançant dans un couloir en ruines. Éclairs d'explosions rouges éclairant sa silhouette. Son blaster lourd fume encore."
  },
  {
    "id": 12,
    "name": "STAP Rider",
    "illustration": "Un droïde ou soldat monté sur un STAP volant au ras du sol. Ligne de vitesse derrière lui. Plan désertique de Geonosis ou canyon rocheux. Laser bleu traversant l'écran."
  },
  {
    "id": 13,
    "name": "Wookie Defender",
    "illustration": "Wookiee massif tenant une lance énergétique. Il protège un groupe de civils wookiees derrière lui. Arbres immenses de Kashyyyk et brume orangée du matin."
  },
  {
    "id": 14,
    "name": "Jedi Healer",
    "illustration": "Jedi robed clair, mains levées, énergie bleu-blanche douce entourant un blessé. La lumière forme des motifs circulaires harmonieux. Temple Jedi en ruines derrière eux."
  },
  {
    "id": 15,
    "name": "Sith Acolyte",
    "illustration": "Un apprenti Sith encapuchonné, sabre rouge partiellement allumé. Ombres mouvantes autour de lui. Yeux jaunes brillants. Fond : chambre obscure éclairée par la lueur du sabre."
  },
  {
    "id": 16,
    "name": "Droideka Defender",
    "illustration": "Droideka déployé, boucliers activés en sphère transparente bleutée. Trois canons braqués vers l'avant. Sol métallique, murs perforés par des impacts laser."
  },
  {
    "id": 17,
    "name": "ARC Trooper Demolitionist",
    "illustration": "Trooper ARC élite, armure bleu foncé, portant des charges explosives. Il pose une bombe sur une paroi de bunker séparatiste. Lueur rouge d'activation sur la bombe."
  },
  {
    "id": 18,
    "name": "Capitaine Rex",
    "illustration": "Capitaine Rex posant héroïquement, deux blasters DC-17 dégainés. Derrière lui : une explosion spectaculaire. Le ciel bleu de Felucia contraste avec le chaos du combat."
  },
  {
    "id": 19,
    "name": "Mandalorian Warrior",
    "illustration": "Un mandalorien armure argentée, debout sur un rocher, cape battue par le vent. Soleil couchant rouge derrière lui, donnant une aura mythique à sa silhouette."
  },
  {
    "id": 20,
    "name": "Nightsister Bloodmage",
    "illustration": "Nightsister aux tatouages noirs, entourée d'une aura rouge sang en lévitation. Elle manipule du sang flottant formant des formes tourbillonnantes. Cimetière dathomiri en fond."
  },
  {
    "id": 21,
    "name": "Wookie Champion",
    "illustration": "Un Wookiee immense, posture de défense, tenant une hache énergétique. Arbres gigantesques et brume matinale de Kashyyyk en arrière-plan."
  },
  {
    "id": 22,
    "name": "Hoth Guardian",
    "illustration": "Un soldat rebelle lourdement armé sur Hoth, canon braqué, neige tourbillonnante autour de lui."
  },
  {
    "id": 23,
    "name": "Mandalorian Commander",
    "illustration": "Mandarorien en armure complète, deux droïdes mineurs à ses côtés. Il déploie ses troupes sur un terrain accidenté."
  },
  {
    "id": 24,
    "name": "Droide Combat Elite",
    "illustration": "Droïde lourdement armé, tirant sur plusieurs ennemis. Éclats d'explosions autour et sol métallique froissé."
  },
  {
    "id": 25,
    "name": "Mandalorian Striker",
    "illustration": "Un mandalorien en armure rouge, chargeant avec son blaster et jetpack activé, arrière-plan en flammes."
  },
  {
    "id": 26,
    "name": "Wookie Shieldmaster",
    "illustration": "Wookiee imposant brandissant un bouclier massif, prêt à protéger ses alliés. Arrière-plan forêt dense de Kashyyyk."
  },
  {
    "id": 27,
    "name": "Darth Maul",
    "illustration": "Darth Maul en position d'attaque, sabre double rouge allumé, ombres menaçantes et flammes rouges derrière."
  },
  {
    "id": 28,
    "name": "Jedi Strategist",
    "illustration": "Jedi en méditation tactique, sabre bleu sur le côté, cartes holographiques flottantes devant lui."
  },
  {
    "id": 29,
    "name": "Imperial Juggernaut",
    "illustration": "Soldat lourd impérial, bouclier énergétique activé, armure noire brillante, menaçant les ennemis au sol."
  },
  {
    "id": 30,
    "name": "Sith Enforcer",
    "illustration": "Sith puissant en posture agressive, sabre rouge brillant, éclairs rouges et noirs autour, atmosphère sombre."
  },
  {
    "id": 31,
    "name": "Imperial Titan",
    "illustration": "Géant impérial armé d'un canon énergétique, lourdement blindé, bouclier partiel actif. Fond : ruines de planète en guerre."
  },
  {
    "id": 32,
    "name": "Luke Skywalker",
    "illustration": "Luke Skywalker avec sabre vert allumé, vent soufflant sur ses vêtements, paysage désertique à l'arrière-plan."
  },
  {
    "id": 33,
    "name": "Emperor's Wrath",
    "illustration": "Sith encapuchonné, sabre rouge, bras tendu, énergie noire détruisant des droïdes et soldats autour de lui."
  },
  {
    "id": 34,
    "name": "Jedi Protector",
    "illustration": "Jedi en armure légère, mains levées, énergie bleue guérissant des alliés, arrière-plan lumineux et apaisant."
  },
  {
    "id": 35,
    "name": "Death Trooper Commander",
    "illustration": "Trooper noir avec armure spéciale, tirant sur tous les ennemis, arrière-plan en fumée et laser vert."
  },
  {
    "id": 36,
    "name": "Padawan Energized",
    "illustration": "Padawan jeune, sabre bleu en main, chaque action renforce sa posture et éclaire légèrement l'arrière-plan."
  },
  {
    "id": 37,
    "name": "Sith Marauder",
    "illustration": "Sith à l'apparence féroce, yeux jaunes brillants, énergie rouge dans les mains, prêt à lancer des attaques."
  },
  {
    "id": 38,
    "name": "Imperial Artillery",
    "illustration": "Canon lourd impérial tirant des obus sur un champ de bataille, fumée et flammes autour, soldats à côté."
  },
  {
    "id": 39,
    "name": "Droid Bombardier",
    "illustration": "Droïde au centre de l'explosion, lançant des bombes sur des ennemis, étincelles et flammes tout autour."
  },
  {
    "id": 40,
    "name": "Mandalorian Hunter",
    "illustration": "Mandalorien avec armure et jetpack, chargeant après un droïde ennemi, fond désertique ou canyon rocheux."
  },
  {
    "id": 41,
    "name": "Rebel Saboteur",
    "illustration": "Soldat rebelle posant une charge explosive sur un droïde ennemi. Fond : base impériale en ruines, fumée et étincelles."
  },
  {
    "id": 42,
    "name": "Padawan Collector",
    "illustration": "Jeune Padawan concentré, entouré de cristaux de Force flottants, gain de puissance visible sur ses bras et son sabre."
  },
  {
    "id": 43,
    "name": "Battlefield Scout",
    "illustration": "Soldat agile sur le front, observant le terrain et renforçant les alliés autour, explosions au loin."
  },
  {
    "id": 44,
    "name": "Sith Trickster",
    "illustration": "Sith sournois, entouré d'énergie rouge qui endommage subtilement ses alliés, arrière-plan ombres mouvantes."
  },
  {
    "id": 45,
    "name": "Dark Apprentice",
    "illustration": "Apprenti Sith infligeant des dégâts à ses propres alliés pour augmenter sa puissance, sabre rouge brillant."
  },
  {
    "id": 46,
    "name": "Imperial Thief",
    "illustration": "Agent impérial subtil, prenant une carte ennemie dans sa main. Ombres et néons verts autour, atmosphère furtive."
  },
  {
    "id": 47,
    "name": "Dark Mind Controller",
    "illustration": "Sith manipule un droïde ennemi par la Force, yeux jaunes et énergie rouge autour, arrière-plan sombre et menaçant."
  },
  {
    "id": 48,
    "name": "Wookie Guardian",
    "illustration": "Wookiee protecteur, entouré de petits alliés 1/1 avec boucliers, postures défensives, forêt dense derrière."
  },
  {
    "id": 49,
    "name": "Rebel Reinforcer",
    "illustration": "Soldat rebelle invoquant un droïde allié 2/2 à chaque tour, posture héroïque sur un terrain de bataille."
  },
  {
    "id": 50,
    "name": "Death Star Destructor",
    "illustration": "Machine immense détruisant simultanément tous les ennemis, explosions et lumière intense autour, fond spatial noir."
  },
  {
    "id": 51,
    "name": "Wookie Shieldbearer",
    "illustration": "Wookiee avec bouclier massif, chaque soin à l'allié renforce sa force et son armure, forêt de Kashyyyk derrière."
  },
  {
    "id": 52,
    "name": "Stealth Charger",
    "illustration": "Assassin mandalorien en furtivité, chargeant sur un allié 1 attaque, énergie bleue furtive autour."
  },
  {
    "id": 53,
    "name": "Clone Legionnaire",
    "illustration": "Clone posant quatre droïdes 1/1 avec charge sur le champ de bataille, lignes de vitesse et explosions au loin."
  },
  {
    "id": 54,
    "name": "Darth Nihilus",
    "illustration": "Sith encapuchonné, détruisant tous les ennemis, énergie rouge tourbillonnante autour de lui."
  },
  {
    "id": 55,
    "name": "Jedi Protector",
    "illustration": "Jedi entourant ses alliés avec une barrière énergétique, renforce ses minions taunt."
  },
  {
    "id": 56,
    "name": "Mandalorian Enforcer",
    "illustration": "Mandalorien debout avec un petit droïde 2/1 à ses côtés, prêt au combat, fond désertique."
  },
  {
    "id": 57,
    "name": "Sith Avenger",
    "illustration": "Sith lançant un puissant tir sur le héros ennemi, énergie rouge flamboyante autour."
  },
  {
    "id": 58,
    "name": "Jedi Commander",
    "illustration": "Jedi utilisant la Force pour renforcer l'attaque de ses alliés, fond lumineux et ciel bleu dramatique."
  },
  {
    "id": 59,
    "name": "Rebel Supporter",
    "illustration": "Soldat rebelle donnant un bonus à un allié aléatoire, lumière douce sur l'allié favorisé."
  },
  {
    "id": 60,
    "name": "Jedi Lightning",
    "illustration": "Jedi utilisant la Force pour infliger des dégâts à tous les ennemis après son pouvoir héroïque, éclairs bleus et arrière-plan dramatique."
  },
  {
    "id": 61,
    "name": "Vampire Jedi",
    "illustration": "Jedi utilisant la Force pour absorber la vie de l'ennemi, lumière rougeâtre autour de ses mains et sabre bleu en position offensive."
  },
  {
    "id": 62,
    "name": "Force Sentinel",
    "illustration": "Jedi encapuchonné, infligeant des dégâts à tous les ennemis après l'usage de son pouvoir, énergie bleue tourbillonnante."
  },
  {
    "id": 63,
    "name": "Deathrattle Apprentice",
    "illustration": "Jeune Padawan dessinant des cartes dans sa main à la mort de ses alliés, concentration et lumière bleue autour."
  },
  {
    "id": 64,
    "name": "Ancient Guardian",
    "illustration": "Vieux Wookiee ou Jedi ancien, invoquant un puissant minion 7/7 avec bouclier taunt, forêt dense ou ruines derrière."
  },
  {
    "id": 65,
    "name": "Wookie Deathshield",
    "illustration": "Wookiee imposant, chaque mort alliée détruit un ennemi aléatoire, armure massive et épée énergétique."
  },
  {
    "id": 66,
    "name": "Assault Droid",
    "illustration": "Droïde chargeant avec son droïde 2/1 à sa suite, explosion et étincelles autour, décor métallique."
  },
  {
    "id": 67,
    "name": "Jedi Rejuvenator",
    "illustration": "Jedi levant les mains, mort alliée donnant des bonus aux minions alliés, lumière bleue et verte apaisante."
  },
  {
    "id": 68,
    "name": "Deathrattle Wookiee",
    "illustration": "Wookiee imposant, mort provoque dégâts à tous, environnement en flammes et ruines, muscles saillants et arme massive."
  },
  {
    "id": 69,
    "name": "Sith Healer",
    "illustration": "Sith utilisant la Force noire pour restaurer sa vie, énergie rouge sombre entourant le corps, arrière-plan obscur."
  },
  {
    "id": 70,
    "name": "Sith Purger",
    "illustration": "Sith détruisant tous les minions taunt ennemis sur le champ, sabre rouge brillant et atmosphère sombre."
  },
  {
    "id": 71,
    "name": "Death Whisperer",
    "illustration": "Assassin Sith ou droïde, mort inflige 2 dégâts au héros ennemi, ombres rouges et atmosphère sinistre."
  },
  {
    "id": 72,
    "name": "Necro Droid",
    "illustration": "Droïde mourant, spawn de deux minions 2/3, explosions de particules bleues autour, posture mécanique."
  },
  {
    "id": 73,
    "name": "Padawan Crystal",
    "illustration": "Padawan concentré, gain d'un cristal, lumière bleue et cristaux flottants autour, fond ruines Jedi."
  },
  {
    "id": 74,
    "name": "Sith Life Leech",
    "illustration": "Sith mortel, redonne vie à l'ennemi, énergie rouge sombre autour, arrière-plan en flammes ou ruines."
  },
  {
    "id": 75,
    "name": "Rebel Medic",
    "illustration": "Soldat rebelle soignant les ennemis involontairement, expression concentrée, énergie verte douce autour."
  },
  {
    "id": 76,
    "name": "Sith Life Drainer",
    "illustration": "Sith puissant infligeant des dégâts à ses alliés pour restaurer la vie de l'ennemi, sabre rouge et atmosphère dramatique."
  },
  {
    "id": 77,
    "name": "Force Dual Healer",
    "illustration": "Jedi ou Sith bénissant les deux héros, aura verte et bleue se mêlant dans un effet visuel harmonieux."
  },
  {
    "id": 78,
    "name": "Sith Nullifier",
    "illustration": "Sith silencieux, empêche toute action des minions ennemis, énergie rouge et noire circulant autour."
  },
  {
    "id": 79,
    "name": "Gamorrean Bulwark",
    "illustration": "Garde Gamorréen massif, position défensive, prêt à encaisser tous les dégâts, forêt ou ruine en fond."
  },
  {
    "id": 80,
    "name": "Jedi Taunt Master",
    "illustration": "Jedi invoquant un allié taunt à chaque tour, posture héroïque, sabre bleu tenu verticalement, ciel lumineux en arrière-plan."
  },
  {
    "id": 81,
    "name": "Immovable Jedi",
    "illustration": "Jedi massif ne pouvant attaquer, mais extrêmement résistant, sabre bleu éteint, fond rocheux."
  },
  {
    "id": 82,
    "name": "Stealthy Scout",
    "illustration": "Assassin mandalorien en furtivité, chaque tour augmente sa puissance, arrière-plan de jungle ou ruine."
  },
  {
    "id": 83,
    "name": "Silent Assassin",
    "illustration": "Droïde ou Sith furtif, invisible mais prêt à attaquer, ombres bleues autour."
  },
  {
    "id": 84,
    "name": "Stealth Master",
    "illustration": "Jedi ou mandalorien donnant un bonus aux minions furtifs, énergie bleu clair, fond sombre et mystérieux."
  },
  {
    "id": 85,
    "name": "Hidden Healer",
    "illustration": "Droïde ou petit Jedi furtif, augmente la vie d'un allié aléatoire, lumière douce sur le minion choisi."
  },
  {
    "id": 86,
    "name": "Stealth Titan",
    "illustration": "Énorme Jedi ou Wookiee en furtivité, prêt à frapper, aura bleue et verte subtile, forêt ou ruines derrière."
  },
  {
    "id": 87,
    "name": "Stealth Charger",
    "illustration": "Mandalorien furtif, charge et attaque, lumière bleue et éclats d'énergie autour, fond désertique."
  },
  {
    "id": 88,
    "name": "Stealth Spy",
    "illustration": "Droïde ou Jedi furtif, attentif et prêt à agir, lumière subtile et ombre profonde, arrière-plan mystérieux."
  },
  {
    "id": 89,
    "name": "Stealth Hunter",
    "illustration": "Chasseur furtif, prêt à bondir sur la cible, arrière-plan forêt sombre, éclairs bleus subtils."
  },
  {
    "id": 90,
    "name": "Stealth Striker",
    "illustration": "Mandalorien furtif et agile, charge avec attaque, ombres et éclats lumineux derrière."
  },
  {
    "id": 91,
    "name": "Taunt Charger",
    "illustration": "Soldat combinant taunt et charge, tenant une arme énergétique et prêt à attaquer, éclats de lumière autour."
  },
  {
    "id": 92,
    "name": "Cost Reducer Droid",
    "illustration": "Droïde futuriste manipulant les cartes, réduisant leur coût, hologrammes lumineux flottant autour."
  },
  {
    "id": 93,
    "name": "Battlefield Bomber",
    "illustration": "Droïde ou soldat lançant des dégâts à tous les ennemis à la fin de son tour, explosions et fumée autour."
  },
  {
    "id": 94,
    "name": "Charge Taunt Droid",
    "illustration": "Droïde imposant avec charge et bouclier taunt, générant deux minions lors de sa mort, terrain métallique."
  },
  {
    "id": 95,
    "name": "Mind Trick Sith",
    "illustration": "Sith lançant des illusions pour forcer l'ennemi à perdre des cartes, énergie rouge et noire autour."
  },
  {
    "id": 96,
    "name": "Stealth Transformer",
    "illustration": "Droïde ou Jedi en furtivité, transforme tous les minions en versions moins puissantes, fond obscur et lumineux."
  },
  {
    "id": 97,
    "name": "Sith Confuser",
    "illustration": "Sith utilisant la Force pour désorienter un minion ennemi, lumière rouge subtile, arrière-plan sombre."
  },
  {
    "id": 98,
    "name": "Charge Confuser",
    "illustration": "Mandalorien chargeant et confondant l'ennemi, éclats rouges et bleus autour, désert rocheux en fond."
  },
  {
    "id": 99,
    "name": "Taunt Confuser",
    "illustration": "Soldat combinant taunt et confusion ennemie, posture agressive et éclats lumineux derrière, terrain en ruines."
  },
  {
    "id": 100,
    "name": "Stealth Confuser",
    "illustration": "Assassin furtif perturbant un minion ennemi, aura bleue et noire, forêt ou ruines derrière."
  },
  {
    "id": 101,
    "name": "Jedi Recall",
    "illustration": "Jedi ramenant un allié sur le côté, sabre bleu allumé, fond lumineux avec ruines Jedi."
  },
  {
    "id": 102,
    "name": "Stealth Commander",
    "illustration": "Jedi ou Mandalorien furtif donnant furtivité à son allié le plus à gauche, arrière-plan de forêt ou ruines."
  },
  {
    "id": 103,
    "name": "Taunt Healer",
    "illustration": "Wookiee ou Jedi imposant avec taunt, utilisant la Force pour restaurer 12 PV à son héros, éclats lumineux autour."
  },
  {
    "id": 104,
    "name": "Dual Draw Master",
    "illustration": "Jedi ou droïde faisant piocher deux cartes à chaque joueur, hologrammes flottants, lumière bleue et rouge."
  },
  {
    "id": 105,
    "name": "Stealth Summoner",
    "illustration": "Jedi ou droïde en furtivité invoquant deux minions #71 après sa mort, fond sombre avec éclats lumineux."
  },
  {
    "id": 106,
    "name": "Hero Power Refresh",
    "illustration": "Jedi ou technicien réinitialisant le pouvoir héroïque, énergie bleue tournoyante autour de lui."
  },
  {
    "id": 107,
    "name": "Healing Charger",
    "illustration": "Mandalorien chargeant et gagnant +1/+1 chaque fois que le héros est soigné, fond désertique avec éclats lumineux."
  },
  {
    "id": 108,
    "name": "Force Vitality",
    "illustration": "Jedi recevant des soins et renforçant sa force +2/+2, énergie verte et bleue circulant autour de lui."
  },
  {
    "id": 109,
    "name": "Stealth Parasite",
    "illustration": "Jedi ou droïde furtif qui gagne en puissance quand l'ennemi est soigné, ombre subtile et aura bleue."
  }
];

// Configuration
const CONFIG = {
  apiProvider: 'replicate', // 'replicate', 'stability', or 'openai'
  replicateModel: 'black-forest-labs/flux-1.1-pro', // ou 'stability-ai/sdxl'
  outputDir: './generated-images',
  imageFormat: 'png',
  delayBetweenRequests: 2000, // 2 secondes entre chaque requête
  // Ajout de style pour améliorer la qualité
  stylePrompt: 'fantasy card game illustration, highly detailed, digital art, professional quality, dramatic lighting, epic composition',
};

// ============================================
// REPLICATE API (Flux / SDXL)
// ============================================
async function generateWithReplicate(card, apiKey) {
  const replicate = new Replicate({
    auth: apiKey,
  });

  // Construire le prompt en anglais pour de meilleurs résultats
  const prompt = `${card.illustration}. ${CONFIG.stylePrompt}`;
  
  console.log(`🎨 Génération de l'image pour: ${card.name}`);
  console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);

  try {
    const output = await replicate.run(
      CONFIG.replicateModel,
      {
        input: {
          prompt: prompt,
          aspect_ratio: '3:4', // Format carte
          output_format: 'png',
          output_quality: 90,
        }
      }
    );

    // L'output est une URL de l'image générée
    const imageUrl = Array.isArray(output) ? output[0] : output;
    
    // Télécharger l'image
    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return buffer;
  } catch (error) {
    console.error(`❌ Erreur pour ${card.name}:`, error.message);
    throw error;
  }
}

// ============================================
// STABILITY AI API
// ============================================
async function generateWithStability(card, apiKey) {
  const prompt = `${card.illustration}. ${CONFIG.stylePrompt}`;
  
  console.log(`🎨 Génération de l'image pour: ${card.name}`);

  try {
    const response = await fetch(
      'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
              weight: 1,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 768,
          samples: 1,
          steps: 30,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const imageBase64 = data.artifacts[0].base64;
    const buffer = Buffer.from(imageBase64, 'base64');

    return buffer;
  } catch (error) {
    console.error(`❌ Erreur pour ${card.name}:`, error.message);
    throw error;
  }
}

// ============================================
// OPENAI DALL-E API
// ============================================
async function generateWithOpenAI(card, apiKey) {
  const prompt = `${card.illustration}. ${CONFIG.stylePrompt}`;
  
  console.log(`🎨 Génération de l'image pour: ${card.name}`);

  try {
    const response = await fetch(
      'https://api.openai.com/v1/images/generations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt: prompt,
          n: 1,
          size: '1024x1792', // Format portrait
          quality: 'hd',
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const imageUrl = data.data[0].url;

    // Télécharger l'image
    const imageResponse = await fetch(imageUrl);
    const arrayBuffer = await imageResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return buffer;
  } catch (error) {
    console.error(`❌ Erreur pour ${card.name}:`, error.message);
    throw error;
  }
}

// ============================================
// FONCTION PRINCIPALE
// ============================================
async function generateAllImages() {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.error('❌ Erreur: La clé API n\'est pas définie.');
    console.error('   Définissez la variable d\'environnement API_KEY');
    console.error('   Exemple: export API_KEY="votre_clé_ici"');
    process.exit(1);
  }

  // Créer le dossier de sortie
  await fs.mkdir(CONFIG.outputDir, { recursive: true });
  console.log(`📁 Dossier de sortie: ${CONFIG.outputDir}\n`);

  const results = {
    success: [],
    failed: [],
  };

  // Générer les images
  for (let i = 0; i < cartes.length; i++) {
    const card = cartes[i];
    const filename = `card-${String(card.id).padStart(3, '0')}-${card.name.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.${CONFIG.imageFormat}`;
    const filepath = path.join(CONFIG.outputDir, filename);

    try {
      console.log(`\n[${i + 1}/${cartes.length}] Traitement de: ${card.name}`);

      // Vérifier si l'image existe déjà
      try {
        await fs.access(filepath);
        console.log(`⏭️  Image existe déjà, passage à la suivante`);
        results.success.push({ card, filename });
        continue;
      } catch {
        // L'image n'existe pas, on continue
      }

      // Générer l'image selon le provider
      let imageBuffer;
      switch (CONFIG.apiProvider) {
        case 'replicate':
          imageBuffer = await generateWithReplicate(card, apiKey);
          break;
        case 'stability':
          imageBuffer = await generateWithStability(card, apiKey);
          break;
        case 'openai':
          imageBuffer = await generateWithOpenAI(card, apiKey);
          break;
        default:
          throw new Error(`Provider inconnu: ${CONFIG.apiProvider}`);
      }

      // Sauvegarder l'image
      await fs.writeFile(filepath, imageBuffer);
      console.log(`✅ Image sauvegardée: ${filename}`);
      
      results.success.push({ card, filename });

      // Attendre avant la prochaine requête
      if (i < cartes.length - 1) {
        console.log(`⏳ Pause de ${CONFIG.delayBetweenRequests / 1000}s...`);
        await new Promise(resolve => setTimeout(resolve, CONFIG.delayBetweenRequests));
      }
    } catch (error) {
      console.error(`❌ Échec pour ${card.name}:`, error.message);
      results.failed.push({ card, error: error.message });
    }
  }

  // Résumé
  console.log('\n' + '='.repeat(50));
  console.log('📊 RÉSUMÉ DE LA GÉNÉRATION');
  console.log('='.repeat(50));
  console.log(`✅ Succès: ${results.success.length}/${cartes.length}`);
  console.log(`❌ Échecs: ${results.failed.length}/${cartes.length}`);
  
  if (results.failed.length > 0) {
    console.log('\n❌ Cartes échouées:');
    results.failed.forEach(({ card, error }) => {
      console.log(`   - ${card.name}: ${error}`);
    });
  }

  console.log(`\n📁 Images sauvegardées dans: ${CONFIG.outputDir}`);
}

// Lancer la génération
generateAllImages().catch(console.error);
