export type Reponse = {
  text: string
}

export type Question = {
  id: number,
  text: string,
  reponses: Reponse[],
  reponseId: number
}

export type Serie = {
  id: number
  title: string,
  difficulty: Difficulty
  questionId: number[]
}

export type Series = Serie[]
export type Questions = Question[]
export type Reponses = Reponse[]

export type Db = {
  series: Serie[]
  questions: Question[],
}

export enum Difficulty {
  CASUAL = "CASUAL",
  GEEK = "GEEK",
  EVIL = "EVIL",
}

export const db = {
  series: [
    {
      id: 0,
      title: "Retro Gaming",
      difficulty: Difficulty.CASUAL,
      questionId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      id: 1,
      title: "Retro Gaming",
      difficulty: Difficulty.GEEK,
      questionId: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    },
    {
      id: 2,
      title: "Retro Gaming",
      difficulty: Difficulty.EVIL,
      questionId: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
      id: 3,
      title: "Test 3 questions",
      difficulty: Difficulty.CASUAL,
      questionId: [100, 103]
    }
  ],
  questions: [
    {
      "id": 100,
      "text": "Quel était le premier jeu où Mario est apparu ?",
      "reponses": [
        { "text": "Super Mario Bros" },
        { "text": "Mario Kart" },
        { "text": "Donkey Kong" },
        { "text": "Super Mario 64" }
      ],
      "ultimate": false,
      "reponseId": 2
    },
    {
      "id": 101,
      "text": "Dans quel jeu un hérisson bleu doit ramasser des anneaux dorés ?",
      "reponses": [
        { "text": "Super Mario Bros" },
        { "text": "Sonic the Hedgehog" },
        { "text": "Pac-Man" },
        { "text": "Mega Man" }
      ],
      "ultimate": false,
      "reponseId": 1
    },
    {
      "id": 102,
      "text": "Quel personnage essaye de sauver la princesse Peach ?",
      "reponses": [
        { "text": "Link" },
        { "text": "Donkey Kong" },
        { "text": "Sonic" },
        { "text": "Mario" }
      ],
      "ultimate": false,
      "reponseId": 3
    },
    {
      "id": 103,
      "text": "Quel était le premier jeu où Mario est apparu ?",
      "reponses": [
        { "text": "Super Mario Bros" },
        { "text": "Mario Kart" },
        { "text": "Donkey Kong" },
        { "text": "Super Mario 64" }
      ],
      "ultimate": true,
      "reponseId": 2
    },



    

    {
      "id": 1,
      "text": "Quel était le premier jeu où Mario est apparu ?",
      "reponses": [
        { "text": "Super Mario Bros" },
        { "text": "Mario Kart" },
        { "text": "Donkey Kong" },
        { "text": "Super Mario 64" }
      ],
      "reponseId": 2
    },
    {
      "id": 2,
      "text": "Dans quel jeu un hérisson bleu doit ramasser des anneaux dorés ?",
      "reponses": [
        { "text": "Super Mario Bros" },
        { "text": "Sonic the Hedgehog" },
        { "text": "Pac-Man" },
        { "text": "Mega Man" }
      ],
      "reponseId": 1
    },
    {
      "id": 3,
      "text": "Quel personnage essaye de sauver la princesse Peach ?",
      "reponses": [
        { "text": "Link" },
        { "text": "Donkey Kong" },
        { "text": "Sonic" },
        { "text": "Mario" }
      ],
      "reponseId": 3
    },
    {
      "id": 4,
      "text": "Quel jeu a popularisé le personnage de Pikachu ?",
      "reponses": [
        { "text": "Digimon" },
        { "text": "Metroid" },
        { "text": "Pokémon" },
        { "text": "Yu-Gi-Oh!" }
      ],
      "reponseId": 2
    },
    {
      "id": 5,
      "text": "Quel jeu de Nintendo inclut un gorille nommé Donkey Kong ?",
      "reponses": [
        { "text": "Donkey Kong" },
        { "text": "Super Mario Bros" },
        { "text": "Street Fighter" },
        { "text": "Kirby's Dream Land" }
      ],
      "reponseId": 0
    },
    {
      "id": 6,
      "text": "Quel jeu d'arcade implique de faire tomber des blocs pour former des lignes ?",
      "reponses": [
        { "text": "Pac-Man" },
        { "text": "Space Invaders" },
        { "text": "Tetris" },
        { "text": "Frogger" }
      ],
      "reponseId": 2
    },
    {
      "id": 7,
      "text": "Qui est le rival de Mario dans la série de jeux 'Mario Kart' ?",
      "reponses": [
        { "text": "Luigi" },
        { "text": "Bowser" },
        { "text": "Toad" },
        { "text": "Yoshi" }
      ],
      "reponseId": 1
    },
    {
      "id": 8,
      "text": "Quel jeu utilise une manette en forme de croix ?",
      "reponses": [
        { "text": "Atari 2600" },
        { "text": "NES" },
        { "text": "GameCube" },
        { "text": "Dreamcast" }
      ],
      "reponseId": 1
    },
    {
      "id": 9,
      "text": "Quel jeu met en vedette une boule jaune mangeant des fantômes ?",
      "reponses": [
        { "text": "Pac-Man" },
        { "text": "Space Invaders" },
        { "text": "Donkey Kong" },
        { "text": "Sonic" }
      ],
      "reponseId": 0
    },
    {
      "id": 10,
      "text": "Quel jeu vidéo se déroule dans une galaxie lointaine où vous combattez des aliens ?",
      "reponses": [
        { "text": "Metroid" },
        { "text": "Star Fox" },
        { "text": "Super Mario Galaxy" },
        { "text": "Zelda" }
      ],
      "reponseId": 0
    },
    {
      "id": 11,
      "text": "En quelle année est sortie la console NES en Amérique du Nord ?",
      "reponses": [
        { "text": "1983" },
        { "text": "1985" },
        { "text": "1987" },
        { "text": "1990" }
      ],
      "reponseId": 1
    },
    {
      "id": 12,
      "text": "Quel est le nom du créateur de la série 'The Legend of Zelda' ?",
      "reponses": [
        { "text": "Hideo Kojima" },
        { "text": "Shigeru Miyamoto" },
        { "text": "Satoru Iwata" },
        { "text": "Yu Suzuki" }
      ],
      "reponseId": 1
    },
    {
      "id": 13,
      "text": "Dans quel jeu de combat de 1992 peut-on effectuer des 'Fatalities' ?",
      "reponses": [
        { "text": "Street Fighter II" },
        { "text": "Tekken" },
        { "text": "Mortal Kombat" },
        { "text": "Killer Instinct" }
      ],
      "reponseId": 2
    },
    {
      "id": 14,
      "text": "Quel jeu est connu pour la princesse Zelda et le héros Link ?",
      "reponses": [
        { "text": "Final Fantasy" },
        { "text": "The Legend of Zelda" },
        { "text": "Dragon Quest" },
        { "text": "Fire Emblem" }
      ],
      "reponseId": 1
    },
    {
      "id": 15,
      "text": "Quel jeu d'arcade a introduit les tirs pour éliminer des envahisseurs extraterrestres ?",
      "reponses": [
        { "text": "Space Invaders" },
        { "text": "Galaga" },
        { "text": "Asteroids" },
        { "text": "Defender" }
      ],
      "reponseId": 0
    },
    {
      "id": 16,
      "text": "Quel est le nom du frère de Mario, souvent vêtu de vert ?",
      "reponses": [
        { "text": "Luigi" },
        { "text": "Toad" },
        { "text": "Wario" },
        { "text": "Bowser" }
      ],
      "reponseId": 0
    },
    {
      "id": 17,
      "text": "Dans quel jeu d'aventure Link doit-il sauver Hyrule ?",
      "reponses": [
        { "text": "Metroid" },
        { "text": "Fire Emblem" },
        { "text": "The Legend of Zelda" },
        { "text": "Castlevania" }
      ],
      "reponseId": 2
    },
    {
      "id": 18,
      "text": "Quel jeu a popularisé l'exploration de donjons et de dragons ?",
      "reponses": [
        { "text": "Zelda" },
        { "text": "Final Fantasy" },
        { "text": "Diablo" },
        { "text": "Dragon Quest" }
      ],
      "reponseId": 0
    },
    {
      "id": 19,
      "text": "Qui est l'antagoniste principal dans la série des jeux Sonic ?",
      "reponses": [
        { "text": "Shadow" },
        { "text": "Knuckles" },
        { "text": "Dr. Robotnik" },
        { "text": "Silver" }
      ],
      "reponseId": 2
    },
    {
      "id": 20,
      "text": "Quel jeu de rôle japonais est connu pour ses batailles en tour par tour et ses cristaux magiques ?",
      "reponses": [
        { "text": "Chrono Trigger" },
        { "text": "Final Fantasy" },
        { "text": "Secret of Mana" },
        { "text": "Xenogears" }
      ],
      "reponseId": 1
    },
    {
      "id": 21,
      "text": "Quel est le nom de l'attaque spéciale ultime de Ness dans 'Earthbound' ?",
      "reponses": [
        { "text": "PK Fire" },
        { "text": "PK Thunder" },
        { "text": "PSI Rockin" },
        { "text": "PK Starstorm" }
      ],
      "reponseId": 2
    },
    {
      "id": 22,
      "text": "Quel est le code pour débloquer 30 vies dans le jeu 'Contra' sur NES ?",
      "reponses": [
        { "text": "Haut, bas, gauche, droite, A, B, Start" },
        { "text": "Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A, Start" },
        { "text": "Bas, bas, haut, haut, A, B, B, A, Start" },
        { "text": "Gauche, droite, gauche, droite, B, A, Select, Start" }
      ],
      "reponseId": 1
    },
    {
      "id": 23,
      "text": "Quel jeu sur Super Nintendo a pour protagonistes Chrono et Marle ?",
      "reponses": [
        { "text": "Final Fantasy VI" },
        { "text": "Chrono Trigger" },
        { "text": "Secret of Mana" },
        { "text": "Terranigma" }
      ],
      "reponseId": 1
    },
    {
      "id": 24,
      "text": "Dans 'Castlevania', quel est le nom du chasseur de vampires ?",
      "reponses": [
        { "text": "Simon Belmont" },
        { "text": "Richter Belmont" },
        { "text": "Alucard" },
        { "text": "Dracula" }
      ],
      "reponseId": 0
    },
    {
      "id": 25,
      "text": "Dans quel jeu texte des années 80 doit-on éviter un monstre appelé 'Grue' ?",
      "reponses": [
        { "text": "Zork" },
        { "text": "Adventure" },
        { "text": "King's Quest" },
        { "text": "The Hitchhiker's Guide to the Galaxy" }
      ],
      "reponseId": 0
    },
    {
      "id": 26,
      "text": "Quel est le boss final dans 'The Legend of Zelda: Ocarina of Time' ?",
      "reponses": [
        { "text": "Ganondorf" },
        { "text": "Majora" },
        { "text": "Dark Link" },
        { "text": "Vaati" }
      ],
      "reponseId": 0
    },
    {
      "id": 27,
      "text": "Dans 'Final Fantasy VII', quel personnage brandit une épée appelée 'Buster Sword' ?",
      "reponses": [
        { "text": "Cloud Strife" },
        { "text": "Sephiroth" },
        { "text": "Zack Fair" },
        { "text": "Barret Wallace" }
      ],
      "reponseId": 0
    },
    {
      "id": 28,
      "text": "Dans quel jeu Mega Man doit-il affronter les Robot Masters pour voler leurs capacités ?",
      "reponses": [
        { "text": "Mega Man 2" },
        { "text": "Mega Man X" },
        { "text": "Mega Man Legends" },
        { "text": "Mega Man 4" }
      ],
      "reponseId": 0
    },
    {
      "id": 29,
      "text": "Quel jeu SNES met en scène une quête pour restaurer un monde brisé et inclut un personnage appelé Terra ?",
      "reponses": [
        { "text": "Chrono Trigger" },
        { "text": "Secret of Mana" },
        { "text": "Final Fantasy VI" },
        { "text": "Illusion of Gaia" }
      ],
      "reponseId": 2
    },
    {
      "id": 30,
      "text": "Dans quel jeu est introduit un héros appelé Samus Aran, qui porte une armure et combat des pirates de l'espace ?",
      "reponses": [
        { "text": "Metroid" },
        { "text": "Star Fox" },
        { "text": "Contra" },
        { "text": "F-Zero" }
      ],
      "reponseId": 0
    }
  ]
}

export default db