const cartes = [
  {
    "id": 1,
    "name": "Jawas Scrapper",
    "image": "/images/cartes/card-001-jawas-scrapper.png",
    "illustration": "Un petit Jawa encapuchonné fouille un tas de pièces métalliques fumantes. Dans son dos : un sac rempli de composants. Les dunes de Tatooine s'étendent derrière lui, avec deux soleils à l'horizon."
  },
  {
    "id": 2,
    "name": "Gamorrean Guard",
    "image": "/images/cartes/card-002-gamorrean-guard.png",
    "illustration": "Un imposant garde Gamorréen, armé d'une hache lourde. Éclairage verdâtre, la 'porcherie' derrière lui ressemble à un enclos crasseux du palais de Jabba. Style brutal et massif."
  },
  {
    "id": 3,
    "name": "Rebel Footman",
    "image": "/images/cartes/card-003-rebel-footman.png",
    "illustration": "Un jeune soldat rebelle en tenue orange, arme E-11 à la main, prêt à courir. Fond : tranchées enneigées de Hoth ou jungle de Yavin 4."
  },
  {
    "id": 4,
    "name": "Scout Trooper",
    "image": "/images/cartes/card-004-scout-trooper.png",
    "illustration": "Un scout trooper blanc, accroupi, observant à travers des jumelles impériales. Flou de vitesse derrière lui, ou forêt d'Endor éclairée par les rayons du soleil."
  },
  {
    "id": 5,
    "name": "Rebel Soldier",
    "image": "/images/cartes/card-005-rebel-soldier.png",
    "illustration": "Soldat rebelle vétéran, veston brun, blaster levé et expression déterminée. Derrière lui : un mur explosé, symbole de résistance."
  },
  {
    "id": 6,
    "name": "B1 Droid Engineer",
    "image": "/images/cartes/card-006-b1-droid-engineer.png",
    "illustration": "Un droïde B1 un peu tordu, penché sur un générateur cassé avec des outils. Étincelles et fumée légère. Expression maladroite typique des B1 ('Roger roger')."
  },
  {
    "id": 7,
    "name": "Wookie Shieldbearer",
    "image": "/images/cartes/card-007-wookie-shieldbearer.png",
    "illustration": "Un Wookiee immense portant un bouclier rond tribal en duracier décoré. Posture défensive, bouclier levé pour protéger un allié. Forêt de Kashyyyk en arrière-plan."
  },
  {
    "id": 8,
    "name": "Mandalorian Raider",
    "image": "/images/cartes/card-008-mandalorian-raider.png",
    "illustration": "Guerrier mandalorien sombre, armure cabossée, jetpack activé. Il attaque un convoi. Explosion orange derrière lui qui illumine sa visière en T."
  },
  {
    "id": 9,
    "name": "Nightsister Adept",
    "image": "/images/cartes/card-009-nightsister-adept.png",
    "illustration": "Une jeune sorcière de Dathomir, yeux brillants rouges, manipulant de la magie verte spectrale. Arbres morts et brume violette autour."
  },
  {
    "id": 10,
    "name": "Cal Kestis",
    "image": "/images/cartes/card-010-cal-kestis.png",
    "illustration": "Cal dans sa tenue d'apprenti Jedi, sabre bleu visible à sa ceinture. Pose calme, vent soufflant sur ses cheveux, ruines Jedi derrière lui."
  },
  {
    "id": 11,
    "name": "Clone Shocktrooper",
    "image": "/images/cartes/card-011-clone-shocktrooper.png",
    "illustration": "Un clone Shocktrooper en armure rouge et blanche, avançant dans un couloir en ruines. Éclairs d'explosions rouges éclairant sa silhouette. Son blaster lourd fume encore."
  },
  {
    "id": 12,
    "name": "STAP Rider",
    "image": "/images/cartes/card-012-stap-rider.png",
    "illustration": "Un droïde ou soldat monté sur un STAP volant au ras du sol. Ligne de vitesse derrière lui. Plan désertique de Geonosis ou canyon rocheux. Laser bleu traversant l'écran."
  },
  {
    "id": 13,
    "name": "Wookie Defender",
    "image": "/images/cartes/card-013-wookie-defender.png",
    "illustration": "Wookiee massif tenant une lance énergétique. Il protège un groupe de civils wookiees derrière lui. Arbres immenses de Kashyyyk et brume orangée du matin."
  },
  {
    "id": 14,
    "name": "Jedi Healer",
    "image": "/images/cartes/card-014-jedi-healer.png",
    "illustration": "Jedi robed clair, mains levées, énergie bleu-blanche douce entourant un blessé. La lumière forme des motifs circulaires harmonieux. Temple Jedi en ruines derrière eux."
  },
  {
    "id": 15,
    "name": "Sith Acolyte",
    "image": "/images/cartes/card-015-sith-acolyte.png",
    "illustration": "Un apprenti Sith encapuchonné, sabre rouge partiellement allumé. Ombres mouvantes autour de lui. Yeux jaunes brillants. Fond : chambre obscure éclairée par la lueur du sabre."
  },
  {
    "id": 16,
    "name": "Droideka Defender",
    "image": "/images/cartes/card-016-droideka-defender.png",
    "illustration": "Droideka déployé, boucliers activés en sphère transparente bleutée. Trois canons braqués vers l'avant. Sol métallique, murs perforés par des impacts laser."
  },
  {
    "id": 17,
    "name": "ARC Trooper Demolitionist",
    "image": "/images/cartes/card-017-arc-trooper-demolitionist.png",
    "illustration": "Trooper ARC élite, armure bleu foncé, portant des charges explosives. Il pose une bombe sur une paroi de bunker séparatiste. Lueur rouge d'activation sur la bombe."
  },
  {
    "id": 18,
    "name": "Capitaine Rex",
    "image": "/images/cartes/card-018-capitaine-rex.png",
    "illustration": "Capitaine Rex posant héroïquement, deux blasters DC-17 dégainés. Derrière lui : une explosion spectaculaire. Le ciel bleu de Felucia contraste avec le chaos du combat."
  },
  {
    "id": 19,
    "name": "Mandalorian Warrior",
    "image": "/images/cartes/card-019-mandalorian-warrior.png",
    "illustration": "Un mandalorien armure argentée, debout sur un rocher, cape battue par le vent. Soleil couchant rouge derrière lui, donnant une aura mythique à sa silhouette."
  },
  {
    "id": 20,
    "name": "Nightsister Bloodmage",
    "image": "/images/cartes/card-020-nightsister-bloodmage.png",
    "illustration": "Nightsister aux tatouages noirs, entourée d'une aura rouge sang en lévitation. Elle manipule du sang flottant formant des formes tourbillonnantes. Cimetière dathomiri en fond."
  },
  {
    "id": 21,
    "name": "Wookie Champion",
    "image": "/images/cartes/card-021-wookie-champion.png",
    "illustration": "Un Wookiee immense, posture de défense, tenant une hache énergétique. Arbres gigantesques et brume matinale de Kashyyyk en arrière-plan."
  },
  {
    "id": 22,
    "name": "Hoth Guardian",
    "image": "/images/cartes/card-022-hoth-guardian.png",
    "illustration": "Un soldat rebelle lourdement armé sur Hoth, canon braqué, neige tourbillonnante autour de lui."
  },
  {
    "id": 23,
    "name": "Mandalorian Commander",
    "image": "/images/cartes/card-023-mandalorian-commander.png",
    "illustration": "Mandarorien en armure complète, deux droïdes mineurs à ses côtés. Il déploie ses troupes sur un terrain accidenté."
  },
  {
    "id": 24,
    "name": "Droide Combat Elite",
    "image": "/images/cartes/card-024-droide-combat-elite.png",
    "illustration": "Droïde lourdement armé, tirant sur plusieurs ennemis. Éclats d'explosions autour et sol métallique froissé."
  },
  {
    "id": 25,
    "name": "Mandalorian Striker",
    "image": "/images/cartes/card-025-mandalorian-striker.png",
    "illustration": "Un mandalorien en armure rouge, chargeant avec son blaster et jetpack activé, arrière-plan en flammes."
  },
  {
    "id": 26,
    "name": "Wookie Shieldmaster",
    "image": "/images/cartes/card-026-wookie-shieldmaster.png",
    "illustration": "Wookiee imposant brandissant un bouclier massif, prêt à protéger ses alliés. Arrière-plan forêt dense de Kashyyyk."
  },
  {
    "id": 27,
    "name": "Darth Maul",
    "image": "/images/cartes/card-027-darth-maul.png",
    "illustration": "Darth Maul en position d'attaque, sabre double rouge allumé, ombres menaçantes et flammes rouges derrière."
  },
  {
    "id": 28,
    "name": "Jedi Strategist",
    "image": "/images/cartes/card-028-jedi-strategist.png",
    "illustration": "Jedi en méditation tactique, sabre bleu sur le côté, cartes holographiques flottantes devant lui."
  },
  {
    "id": 29,
    "name": "Imperial Juggernaut",
    "image": "/images/cartes/card-029-imperial-juggernaut.png",
    "illustration": "Soldat lourd impérial, bouclier énergétique activé, armure noire brillante, menaçant les ennemis au sol."
  },
  {
    "id": 30,
    "name": "Sith Enforcer",
    "image": "/images/cartes/card-030-sith-enforcer.png",
    "illustration": "Sith puissant en posture agressive, sabre rouge brillant, éclairs rouges et noirs autour, atmosphère sombre."
  },
  {
    "id": 31,
    "name": "Imperial Titan",
    "image": "/images/cartes/card-031-imperial-titan.png",
    "illustration": "Géant impérial armé d'un canon énergétique, lourdement blindé, bouclier partiel actif. Fond : ruines de planète en guerre."
  },
  {
    "id": 32,
    "name": "Luke Skywalker",
    "image": "/images/cartes/card-032-luke-skywalker.png",
    "illustration": "Luke Skywalker avec sabre vert allumé, vent soufflant sur ses vêtements, paysage désertique à l'arrière-plan."
  },
  {
    "id": 33,
    "name": "Emperor's Wrath",
    "image": "/images/cartes/card-033-emperors-wrath.png",
    "illustration": "Sith encapuchonné, sabre rouge, bras tendu, énergie noire détruisant des droïdes et soldats autour de lui."
  },
  {
    "id": 34,
    "name": "Jedi Protector",
    "image": "/images/cartes/card-034-jedi-protector.png",
    "illustration": "Jedi en armure légère, mains levées, énergie bleue guérissant des alliés, arrière-plan lumineux et apaisant."
  },
  {
    "id": 35,
    "name": "Death Trooper Commander",
    "image": "/images/cartes/card-035-death-trooper-commander.png",
    "illustration": "Trooper noir avec armure spéciale, tirant sur tous les ennemis, arrière-plan en fumée et laser vert."
  },
  {
    "id": 36,
    "name": "Padawan Energized",
    "image": "/images/cartes/card-036-padawan-energized.png",
    "illustration": "Padawan jeune, sabre bleu en main, chaque action renforce sa posture et éclaire légèrement l'arrière-plan."
  },
  {
    "id": 37,
    "name": "Sith Marauder",
    "image": "/images/cartes/card-037-sith-marauder.png",
    "illustration": "Sith à l'apparence féroce, yeux jaunes brillants, énergie rouge dans les mains, prêt à lancer des attaques."
  },
  {
    "id": 38,
    "name": "Imperial Artillery",
    "image": "/images/cartes/card-038-imperial-artillery.png",
    "illustration": "Canon lourd impérial tirant des obus sur un champ de bataille, fumée et flammes autour, soldats à côté."
  },
  {
    "id": 39,
    "name": "Droid Bombardier",
    "image": "/images/cartes/card-039-droid-bombardier.png",
    "illustration": "Droïde au centre de l'explosion, lançant des bombes sur des ennemis, étincelles et flammes tout autour."
  },
  {
    "id": 40,
    "name": "Mandalorian Hunter",
    "image": "/images/cartes/card-040-mandalorian-hunter.png",
    "illustration": "Mandalorien avec armure et jetpack, chargeant après un droïde ennemi, fond désertique ou canyon rocheux."
  },
  {
    "id": 41,
    "name": "Rebel Saboteur",
    "image": "/images/cartes/card-041-rebel-saboteur.png",
    "illustration": "Soldat rebelle posant une charge explosive sur un droïde ennemi. Fond : base impériale en ruines, fumée et étincelles."
  },
  {
    "id": 42,
    "name": "Padawan Collector",
    "image": "/images/cartes/card-042-padawan-collector.png",
    "illustration": "Jeune Padawan concentré, entouré de cristaux de Force flottants, gain de puissance visible sur ses bras et son sabre."
  },
  {
    "id": 43,
    "name": "Battlefield Scout",
    "image": "/images/cartes/card-043-battlefield-scout.png",
    "illustration": "Soldat agile sur le front, observant le terrain et renforçant les alliés autour, explosions au loin."
  },
  {
    "id": 44,
    "name": "Sith Trickster",
    "image": "/images/cartes/card-044-sith-trickster.png",
    "illustration": "Sith sournois, entouré d'énergie rouge qui endommage subtilement ses alliés, arrière-plan ombres mouvantes."
  },
  {
    "id": 45,
    "name": "Dark Apprentice",
    "image": "/images/cartes/card-045-dark-apprentice.png",
    "illustration": "Apprenti Sith infligeant des dégâts à ses propres alliés pour augmenter sa puissance, sabre rouge brillant."
  },
  {
    "id": 46,
    "name": "Imperial Thief",
    "image": "/images/cartes/card-046-imperial-thief.png",
    "illustration": "Agent impérial subtil, prenant une carte ennemie dans sa main. Ombres et néons verts autour, atmosphère furtive."
  },
  {
    "id": 47,
    "name": "Dark Mind Controller",
    "image": "/images/cartes/card-047-dark-mind-controller.png",
    "illustration": "Sith manipule un droïde ennemi par la Force, yeux jaunes et énergie rouge autour, arrière-plan sombre et menaçant."
  },
  {
    "id": 48,
    "name": "Wookie Guardian",
    "image": "/images/cartes/card-048-wookie-guardian.png",
    "illustration": "Wookiee protecteur, entouré de petits alliés 1/1 avec boucliers, postures défensives, forêt dense derrière."
  },
  {
    "id": 49,
    "name": "Rebel Reinforcer",
    "image": "/images/cartes/card-049-rebel-reinforcer.png",
    "illustration": "Soldat rebelle invoquant un droïde allié 2/2 à chaque tour, posture héroïque sur un terrain de bataille."
  },
  {
    "id": 50,
    "name": "Death Star Destructor",
    "image": "/images/cartes/card-050-death-star-destructor.png",
    "illustration": "Machine immense détruisant simultanément tous les ennemis, explosions et lumière intense autour, fond spatial noir."
  },
  {
    "id": 51,
    "name": "Wookie Shieldbearer",
    "image": "/images/cartes/card-051-wookie-shieldbearer.png",
    "illustration": "Wookiee avec bouclier massif, chaque soin à l'allié renforce sa force et son armure, forêt de Kashyyyk derrière."
  },
  {
    "id": 52,
    "name": "Stealth Charger",
    "image": "/images/cartes/card-052-stealth-charger.png",
    "illustration": "Assassin mandalorien en furtivité, chargeant sur un allié 1 attaque, énergie bleue furtive autour."
  },
  {
    "id": 53,
    "name": "Clone Legionnaire",
    "image": "/images/cartes/card-053-clone-legionnaire.png",
    "illustration": "Clone posant quatre droïdes 1/1 avec charge sur le champ de bataille, lignes de vitesse et explosions au loin."
  },
  {
    "id": 54,
    "name": "Darth Nihilus",
    "image": "/images/cartes/card-054-darth-nihilus.png",
    "illustration": "Sith encapuchonné, détruisant tous les ennemis, énergie rouge tourbillonnante autour de lui."
  },
  {
    "id": 55,
    "name": "Jedi Protector",
    "image": "/images/cartes/card-055-jedi-protector.png",
    "illustration": "Jedi entourant ses alliés avec une barrière énergétique, renforce ses minions taunt."
  },
  {
    "id": 56,
    "name": "Mandalorian Enforcer",
    "image": "/images/cartes/card-056-mandalorian-enforcer.png",
    "illustration": "Mandalorien debout avec un petit droïde 2/1 à ses côtés, prêt au combat, fond désertique."
  },
  {
    "id": 57,
    "name": "Sith Avenger",
    "image": "/images/cartes/card-057-sith-avenger.png",
    "illustration": "Sith lançant un puissant tir sur le héros ennemi, énergie rouge flamboyante autour."
  },
  {
    "id": 58,
    "name": "Jedi Commander",
    "image": "/images/cartes/card-058-jedi-commander.png",
    "illustration": "Jedi utilisant la Force pour renforcer l'attaque de ses alliés, fond lumineux et ciel bleu dramatique."
  },
  {
    "id": 59,
    "name": "Rebel Supporter",
    "image": "/images/cartes/card-059-rebel-supporter.png",
    "illustration": "Soldat rebelle donnant un bonus à un allié aléatoire, lumière douce sur l'allié favorisé."
  },
  {
    "id": 60,
    "name": "Jedi Lightning",
    "image": "/images/cartes/card-060-jedi-lightning.png",
    "illustration": "Jedi utilisant la Force pour infliger des dégâts à tous les ennemis après son pouvoir héroïque, éclairs bleus et arrière-plan dramatique."
  },
  {
    "id": 61,
    "name": "Vampire Jedi",
    "image": "/images/cartes/card-061-vampire-jedi.png",
    "illustration": "Jedi utilisant la Force pour absorber la vie de l'ennemi, lumière rougeâtre autour de ses mains et sabre bleu en position offensive."
  },
  {
    "id": 62,
    "name": "Force Sentinel",
    "image": "/images/cartes/card-062-force-sentinel.png",
    "illustration": "Jedi encapuchonné, infligeant des dégâts à tous les ennemis après l'usage de son pouvoir, énergie bleue tourbillonnante."
  },
  {
    "id": 63,
    "name": "Deathrattle Apprentice",
    "image": "/images/cartes/card-063-deathrattle-apprentice.png",
    "illustration": "Jeune Padawan dessinant des cartes dans sa main à la mort de ses alliés, concentration et lumière bleue autour."
  },
  {
    "id": 64,
    "name": "Ancient Guardian",
    "image": "/images/cartes/card-064-ancient-guardian.png",
    "illustration": "Vieux Wookiee ou Jedi ancien, invoquant un puissant minion 7/7 avec bouclier taunt, forêt dense ou ruines derrière."
  },
  {
    "id": 65,
    "name": "Wookie Deathshield",
    "image": "/images/cartes/card-065-wookie-deathshield.png",
    "illustration": "Wookiee imposant, chaque mort alliée détruit un ennemi aléatoire, armure massive et épée énergétique."
  },
  {
    "id": 66,
    "name": "Assault Droid",
    "image": "/images/cartes/card-066-assault-droid.png",
    "illustration": "Droïde chargeant avec son droïde 2/1 à sa suite, explosion et étincelles autour, décor métallique."
  },
  {
    "id": 67,
    "name": "Jedi Rejuvenator",
    "image": "/images/cartes/card-067-jedi-rejuvenator.png",
    "illustration": "Jedi levant les mains, mort alliée donnant des bonus aux minions alliés, lumière bleue et verte apaisante."
  },
  {
    "id": 68,
    "name": "Deathrattle Wookiee",
    "image": "/images/cartes/card-068-deathrattle-wookiee.png",
    "illustration": "Wookiee imposant, mort provoque dégâts à tous, environnement en flammes et ruines, muscles saillants et arme massive."
  },
  {
    "id": 69,
    "name": "Sith Healer",
    "image": "/images/cartes/card-069-sith-healer.png",
    "illustration": "Sith utilisant la Force noire pour restaurer sa vie, énergie rouge sombre entourant le corps, arrière-plan obscur."
  },
  {
    "id": 70,
    "name": "Sith Purger",
    "image": "/images/cartes/card-070-sith-purger.png",
    "illustration": "Sith détruisant tous les minions taunt ennemis sur le champ, sabre rouge brillant et atmosphère sombre."
  },
  {
    "id": 71,
    "name": "Death Whisperer",
    "image": "/images/cartes/card-071-death-whisperer.png",
    "illustration": "Assassin Sith ou droïde, mort inflige 2 dégâts au héros ennemi, ombres rouges et atmosphère sinistre."
  },
  {
    "id": 72,
    "name": "Necro Droid",
    "image": "/images/cartes/card-072-necro-droid.png",
    "illustration": "Droïde mourant, spawn de deux minions 2/3, explosions de particules bleues autour, posture mécanique."
  },
  {
    "id": 73,
    "name": "Padawan Crystal",
    "image": "/images/cartes/card-073-padawan-crystal.png",
    "illustration": "Padawan concentré, gain d'un cristal, lumière bleue et cristaux flottants autour, fond ruines Jedi."
  },
  {
    "id": 74,
    "name": "Sith Life Leech",
    "image": "/images/cartes/card-074-sith-life-leech.png",
    "illustration": "Sith mortel, redonne vie à l'ennemi, énergie rouge sombre autour, arrière-plan en flammes ou ruines."
  },
  {
    "id": 75,
    "name": "Rebel Medic",
    "image": "/images/cartes/card-075-rebel-medic.png",
    "illustration": "Soldat rebelle soignant les ennemis involontairement, expression concentrée, énergie verte douce autour."
  },
  {
    "id": 76,
    "name": "Sith Life Drainer",
    "image": "/images/cartes/card-076-sith-life-drainer.png",
    "illustration": "Sith puissant infligeant des dégâts à ses alliés pour restaurer la vie de l'ennemi, sabre rouge et atmosphère dramatique."
  },
  {
    "id": 77,
    "name": "Force Dual Healer",
    "image": "/images/cartes/card-077-force-dual-healer.png",
    "illustration": "Jedi ou Sith bénissant les deux héros, aura verte et bleue se mêlant dans un effet visuel harmonieux."
  },
  {
    "id": 78,
    "name": "Sith Nullifier",
    "image": "/images/cartes/card-078-sith-nullifier.png",
    "illustration": "Sith silencieux, empêche toute action des minions ennemis, énergie rouge et noire circulant autour."
  },
  {
    "id": 79,
    "name": "Gamorrean Bulwark",
    "image": "/images/cartes/card-079-gamorrean-bulwark.png",
    "illustration": "Garde Gamorréen massif, position défensive, prêt à encaisser tous les dégâts, forêt ou ruine en fond."
  },
  {
    "id": 80,
    "name": "Jedi Taunt Master",
    "image": "/images/cartes/card-080-jedi-taunt-master.png",
    "illustration": "Jedi invoquant un allié taunt à chaque tour, posture héroïque, sabre bleu tenu verticalement, ciel lumineux en arrière-plan."
  },
  {
    "id": 81,
    "name": "Immovable Jedi",
    "image": "/images/cartes/card-081-immovable-jedi.png",
    "illustration": "Jedi massif ne pouvant attaquer, mais extrêmement résistant, sabre bleu éteint, fond rocheux."
  },
  {
    "id": 82,
    "name": "Stealthy Scout",
    "image": "/images/cartes/card-082-stealthy-scout.png",
    "illustration": "Assassin mandalorien en furtivité, chaque tour augmente sa puissance, arrière-plan de jungle ou ruine."
  },
  {
    "id": 83,
    "name": "Silent Assassin",
    "image": "/images/cartes/card-083-silent-assassin.png",
    "illustration": "Droïde ou Sith furtif, invisible mais prêt à attaquer, ombres bleues autour."
  },
  {
    "id": 84,
    "name": "Stealth Master",
    "image": "/images/cartes/card-084-stealth-master.png",
    "illustration": "Jedi ou mandalorien donnant un bonus aux minions furtifs, énergie bleu clair, fond sombre et mystérieux."
  },
  {
    "id": 85,
    "name": "Hidden Healer",
    "image": "/images/cartes/card-085-hidden-healer.png",
    "illustration": "Droïde ou petit Jedi furtif, augmente la vie d'un allié aléatoire, lumière douce sur le minion choisi."
  },
  {
    "id": 86,
    "name": "Stealth Titan",
    "image": "/images/cartes/card-086-stealth-titan.png",
    "illustration": "Énorme Jedi ou Wookiee en furtivité, prêt à frapper, aura bleue et verte subtile, forêt ou ruines derrière."
  },
  {
    "id": 87,
    "name": "Stealth Charger",
    "image": "/images/cartes/card-087-stealth-charger.png",
    "illustration": "Mandalorien furtif, charge et attaque, lumière bleue et éclats d'énergie autour, fond désertique."
  },
  {
    "id": 88,
    "name": "Stealth Spy",
    "image": "/images/cartes/card-088-stealth-spy.png",
    "illustration": "Droïde ou Jedi furtif, attentif et prêt à agir, lumière subtile et ombre profonde, arrière-plan mystérieux."
  },
  {
    "id": 89,
    "name": "Stealth Hunter",
    "image": "/images/cartes/card-089-stealth-hunter.png",
    "illustration": "Chasseur furtif, prêt à bondir sur la cible, arrière-plan forêt sombre, éclairs bleus subtils."
  },
  {
    "id": 90,
    "name": "Stealth Striker",
    "image": "/images/cartes/card-090-stealth-striker.png",
    "illustration": "Mandalorien furtif et agile, charge avec attaque, ombres et éclats lumineux derrière."
  },
  {
    "id": 91,
    "name": "Taunt Charger",
    "image": "/images/cartes/card-091-taunt-charger.png",
    "illustration": "Soldat combinant taunt et charge, tenant une arme énergétique et prêt à attaquer, éclats de lumière autour."
  },
  {
    "id": 92,
    "name": "Cost Reducer Droid",
    "image": "/images/cartes/card-092-cost-reducer-droid.png",
    "illustration": "Droïde futuriste manipulant les cartes, réduisant leur coût, hologrammes lumineux flottant autour."
  },
  {
    "id": 93,
    "name": "Battlefield Bomber",
    "image": "/images/cartes/card-093-battlefield-bomber.png",
    "illustration": "Droïde ou soldat lançant des dégâts à tous les ennemis à la fin de son tour, explosions et fumée autour."
  },
  {
    "id": 94,
    "name": "Charge Taunt Droid",
    "image": "/images/cartes/card-094-charge-taunt-droid.png",
    "illustration": "Droïde imposant avec charge et bouclier taunt, générant deux minions lors de sa mort, terrain métallique."
  },
  {
    "id": 95,
    "name": "Mind Trick Sith",
    "image": "/images/cartes/card-095-mind-trick-sith.png",
    "illustration": "Sith lançant des illusions pour forcer l'ennemi à perdre des cartes, énergie rouge et noire autour."
  },
  {
    "id": 96,
    "name": "Stealth Transformer",
    "image": "/images/cartes/card-096-stealth-transformer.png",
    "illustration": "Droïde ou Jedi en furtivité, transforme tous les minions en versions moins puissantes, fond obscur et lumineux."
  },
  {
    "id": 97,
    "name": "Sith Confuser",
    "image": "/images/cartes/card-097-sith-confuser.png",
    "illustration": "Sith utilisant la Force pour désorienter un minion ennemi, lumière rouge subtile, arrière-plan sombre."
  },
  {
    "id": 98,
    "name": "Charge Confuser",
    "image": "/images/cartes/card-098-charge-confuser.png",
    "illustration": "Mandalorien chargeant et confondant l'ennemi, éclats rouges et bleus autour, désert rocheux en fond."
  },
  {
    "id": 99,
    "name": "Taunt Confuser",
    "image": "/images/cartes/card-099-taunt-confuser.png",
    "illustration": "Soldat combinant taunt et confusion ennemie, posture agressive et éclats lumineux derrière, terrain en ruines."
  },
  {
    "id": 100,
    "name": "Stealth Confuser",
    "image": "/images/cartes/card-100-stealth-confuser.png",
    "illustration": "Assassin furtif perturbant un minion ennemi, aura bleue et noire, forêt ou ruines derrière."
  },
  {
    "id": 101,
    "name": "Jedi Recall",
    "image": "/images/cartes/card-101-jedi-recall.png",
    "illustration": "Jedi ramenant un allié sur le côté, sabre bleu allumé, fond lumineux avec ruines Jedi."
  },
  {
    "id": 102,
    "name": "Stealth Commander",
    "image": "/images/cartes/card-102-stealth-commander.png",
    "illustration": "Jedi ou Mandalorien furtif donnant furtivité à son allié le plus à gauche, arrière-plan de forêt ou ruines."
  },
  {
    "id": 103,
    "name": "Taunt Healer",
    "image": "/images/cartes/card-103-taunt-healer.png",
    "illustration": "Wookiee ou Jedi imposant avec taunt, utilisant la Force pour restaurer 12 PV à son héros, éclats lumineux autour."
  },
  {
    "id": 104,
    "name": "Dual Draw Master",
    "image": "/images/cartes/card-104-dual-draw-master.png",
    "illustration": "Jedi ou droïde faisant piocher deux cartes à chaque joueur, hologrammes flottants, lumière bleue et rouge."
  },
  {
    "id": 105,
    "name": "Stealth Summoner",
    "image": "/images/cartes/card-105-stealth-summoner.png",
    "illustration": "Jedi ou droïde en furtivité invoquant deux minions #71 après sa mort, fond sombre avec éclats lumineux."
  },
  {
    "id": 106,
    "name": "Hero Power Refresh",
    "image": "/images/cartes/card-106-hero-power-refresh.png",
    "illustration": "Jedi ou technicien réinitialisant le pouvoir héroïque, énergie bleue tournoyante autour de lui."
  },
  {
    "id": 107,
    "name": "Healing Charger",
    "image": "/images/cartes/card-107-healing-charger.png",
    "illustration": "Mandalorien chargeant et gagnant +1/+1 chaque fois que le héros est soigné, fond désertique avec éclats lumineux."
  },
  {
    "id": 108,
    "name": "Force Vitality",
    "image": "/images/cartes/card-108-force-vitality.png",
    "illustration": "Jedi recevant des soins et renforçant sa force +2/+2, énergie verte et bleue circulant autour de lui."
  },
  {
    "id": 109,
    "name": "Stealth Parasite",
    "image": "/images/cartes/card-109-stealth-parasite.png",
    "illustration": "Jedi ou droïde furtif qui gagne en puissance quand l'ennemi est soigné, ombre subtile et aura bleue."
  }
];

export default cartes;