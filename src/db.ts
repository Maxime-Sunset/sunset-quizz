export type Reponse = {
    text: string
}

export type Question = {
    id: number,
    text: string,
    reponses: Reponse[],
    ultimate: boolean
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
            title: "Super Mario and Co",
            difficulty: Difficulty.CASUAL,
            questionId: [
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
                60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89
            ]
        },
        {
            id: 99,
            title: "Test",
            difficulty: Difficulty.CASUAL,
            questionId: [100, 101, 102]
        },
        // ,
        // {
        //     id: 1,
        //     title: "Spécial 80's",
        //     difficulty: Difficulty.CASUAL,
        //     questionId: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
        // },
        // {
        //     id: 99,
        //     title: "Test Equal 1 question",
        //     difficulty: Difficulty.CASUAL,
        //     questionId: [100, 101, 102]
        // },
    ],
    questions: [
        {
            "id": 100,
            "text": "Dans quel jeu Mario fait-il sa première apparition ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong" },
                { "text": "Mario Kart" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 101,
            "text": "Dans quel jeu Mario fait-il sa première apparition ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong" },
                { "text": "Mario Kart" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 102,
            "text": "Dans quel jeu Mario fait-il sa première apparition ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong" },
                { "text": "Mario Kart" },
            ],
            "ultimate": true,
            "reponseId": 2
        },


        // SUPER MARIO
        // SUPER MARIO
        // SUPER MARIO
        {
            "id": 0,
            "text": "Quel est le nom complet du créateur de Mario ?",
            "reponses": [
                { "text": "Hideo Kojima" },
                { "text": "Shigeru Miyamoto" },
                { "text": "Satoru Iwata" },
                { "text": "Koji Kondo" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 1,
            "text": "Dans quel jeu Mario fait-il sa première apparition ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong" },
                { "text": "Mario Kart" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 2,
            "text": "Quel est le métier de Mario ?",
            "reponses": [
                { "text": "Charpentier" },
                { "text": "Plombier" },
                { "text": "Électricien" },
                { "text": "Cuisinier" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 3,
            "text": "Comment s'appelle le frère de Mario ?",
            "reponses": [
                { "text": "Luigi" },
                { "text": "Wario" },
                { "text": "Toad" },
                { "text": "Yoshi" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 4,
            "text": "Dans quel jeu Mario peut-il voler grâce à une casquette ailée ?",
            "reponses": [
                { "text": "Super Mario 64" },
                { "text": "Super Mario Galaxy" },
                { "text": "Super Mario Odyssey" },
                { "text": "Super Mario Sunshine" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 5,
            "text": "Quel est le nom du méchant principal que Mario combat souvent ?",
            "reponses": [
                { "text": "Wario" },
                { "text": "Donkey Kong" },
                { "text": "Bowser" },
                { "text": "King Boo" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 6,
            "text": "Quel est le nom de la princesse que Mario doit sauver dans la plupart des jeux ?",
            "reponses": [
                { "text": "Princesse Daisy" },
                { "text": "Princesse Peach" },
                { "text": "Princesse Zelda" },
                { "text": "Princesse Rosalina" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 7,
            "text": "Comment s'appelle la créature verte qui aide Mario en tant que monture ?",
            "reponses": [
                { "text": "Toad" },
                { "text": "Yoshi" },
                { "text": "Koopa Troopa" },
                { "text": "Lakitu" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 8,
            "text": "Dans quel jeu Mario est-il équipé d'un canon à eau pour nettoyer une île ?",
            "reponses": [
                { "text": "Super Mario Galaxy" },
                { "text": "Super Mario Odyssey" },
                { "text": "Super Mario Sunshine" },
                { "text": "Super Mario 64" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 9,
            "text": "Quel était le premier jeu Mario en 3D ?",
            "reponses": [
                { "text": "Super Mario Galaxy" },
                { "text": "Super Mario Odyssey" },
                { "text": "Super Mario 64" },
                { "text": "Super Mario Sunshine" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 10,
            "text": "Quel est le nom complet du jeu sorti en 1985 qui a popularisé Mario dans le monde entier ?",
            "reponses": [
                { "text": "Super Mario World" },
                { "text": "Super Mario Bros." },
                { "text": "Mario Kart" },
                { "text": "Mario Party" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 11,
            "text": "Quel était le nom original de Mario lors de sa première apparition dans Donkey Kong ?",
            "reponses": [
                { "text": "Plumber Man" },
                { "text": "Mr. Video" },
                { "text": "Jumpman" },
                { "text": "Mario Bros" },
            ],
            "ultimate": true,
            "reponseId": 2
        },
        {
            "id": 12,
            "text": "Quel est le tout premier jeu dans lequel Luigi est jouable ?",
            "reponses": [
                { "text": "Mario Bros" },
                { "text": "Super Mario Bros" },
                { "text": "Super Mario Bros: The Lost Levels" },
                { "text": "Super Mario World" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 13,
            "text": "Quel était le premier jeu Mario à introduire les niveaux aquatiques ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong Jr." },
                { "text": "Super Mario Land" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 14,
            "text": "Quel est le nom du compositeur principal de la musique des jeux Mario ?",
            "reponses": [
                { "text": "Koji Kondo" },
                { "text": "Nobuo Uematsu" },
                { "text": "Shigeru Miyamoto" },
                { "text": "Satoru Iwata" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 15,
            "text": "Dans quel jeu Mario peut-on entendre pour la première fois la voix de Charles Martinet, doubleur de Mario ?",
            "reponses": [
                { "text": "Super Mario 64" },
                { "text": "Mario Kart 64" },
                { "text": "Super Mario Sunshine" },
                { "text": "Mario's Game Gallery" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 16,
            "text": "Quelle console a accueilli la première apparition de Mario en 3D isométrique ?",
            "reponses": [
                { "text": "Super Nintendo" },
                { "text": "Nintendo 64" },
                { "text": "GameCube" },
                { "text": "Nintendo DS" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 17,
            "text": "Quel ennemi emblématique des jeux Mario était initialement censé être un bœuf et non une tortue ?",
            "reponses": [
                { "text": "Goomba" },
                { "text": "Koopa Troopa" },
                { "text": "Lakitu" },
                { "text": "Bowser" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 18,
            "text": "Dans Super Mario World, quelle couleur de Yoshi gagne des ailes lorsqu'il mange une carapace de Koopa ?",
            "reponses": [
                { "text": "Rouge" },
                { "text": "Bleu" },
                { "text": "Vert" },
                { "text": "Jaune" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 19,
            "text": "Quel jeu de la série Mario a été entièrement conçu par Shigeru Miyamoto pour être joué à une seule main ?",
            "reponses": [
                { "text": "Super Mario Run" },
                { "text": "New Super Mario Bros" },
                { "text": "Super Mario 3D Land" },
                { "text": "Super Mario Galaxy" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 20,
            "text": "Dans le film 'The Super Mario Bros. Movie' (2023), quelle célèbre chanson des années 80 est utilisée pendant une course de karts ?",
            "reponses": [
                { "text": "Take on Me" },
                { "text": "Jump" },
                { "text": "Eye of the Tiger" },
                { "text": "Don't Stop Believin'" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 21,
            "text": "Dans Super Mario Bros. 3, quel était le nom original japonais du personnage de Bowser ?",
            "reponses": [
                { "text": "King Koopa" },
                { "text": "Bowser Jr." },
                { "text": "Daimao Koopa" },
                { "text": "Koopa Troopa" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 22,
            "text": "Dans quel jeu Mario le personnage Waluigi fait-il sa première apparition ?",
            "reponses": [
                { "text": "Mario Kart 64" },
                { "text": "Mario Party 3" },
                { "text": "Super Smash Bros Melee" },
                { "text": "Mario Tennis" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 23,
            "text": "Quel est le jeu Mario dans lequel un mode coopératif à 2 joueurs a été introduit pour la première fois ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Super Mario World" },
                { "text": "Mario Bros" },
                { "text": "New Super Mario Bros Wii" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 24,
            "text": "Quel personnage issu de la série Mario est connu sous le nom de 'Foreman Spike' ?",
            "reponses": [
                { "text": "Un boss dans Super Mario World" },
                { "text": "Un ennemi dans Donkey Kong" },
                { "text": "Le père de Wario" },
                { "text": "Le chef de chantier de Wrecking Crew" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 25,
            "text": "Dans quel jeu Mario apparaît pour la première fois le costume de la grenouille ?",
            "reponses": [
                { "text": "Super Mario World" },
                { "text": "Super Mario Bros 3" },
                { "text": "Super Mario Land 2" },
                { "text": "Super Mario 64" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 26,
            "text": "Quel était le nom de la princesse dans Donkey Kong avant d'être renommée Princesse Peach ?",
            "reponses": [
                { "text": "Daisy" },
                { "text": "Tina" },
                { "text": "Rosalina" },
                { "text": "Pauline" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 27,
            "text": "Quel est le nom de l’ennemi de Mario, ressemblant à un soleil, que l’on rencontre dans Super Mario Bros. 3 ?",
            "reponses": [
                { "text": "Solar Koopa" },
                { "text": "Fire Orb" },
                { "text": "Sunny Koopa" },
                { "text": "Angry Sun" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 28,
            "text": "Dans Super Mario 64, combien d'étoiles minimum faut-il collecter pour affronter Bowser une dernière fois ?",
            "reponses": [
                { "text": "120" },
                { "text": "50" },
                { "text": "80" },
                { "text": "70" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 29,
            "text": "Dans Mario Kart: Super Circuit, combien de circuits sont disponibles au total, y compris ceux issus de Super Mario Kart ?",
            "reponses": [
                { "text": "20" },
                { "text": "32" },
                { "text": "40" },
                { "text": "24" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 30,
            "text": "Dans Super Mario RPG: Legend of the Seven Stars, quel est le nom du personnage qui ressemble à une poupée et qui rejoint l'équipe de Mario ?",
            "reponses": [
                { "text": "Mallow" },
                { "text": "Smithy" },
                { "text": "Culex" },
                { "text": "Geno" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 31,
            "text": "Dans le jeu Donkey Kong (1981), combien de points peut-on obtenir en atteignant directement Pauline sans toucher les barils ?",
            "reponses": [
                { "text": "100" },
                { "text": "300" },
                { "text": "500" },
                { "text": "800" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 60,
            "text": "Quel est le premier jeu de la franchise Super Mario à introduire Yoshi ?",
            "reponses": [
                { "text": "Super Mario World" },
                { "text": "Super Mario 64" },
                { "text": "Super Mario Bros 3" },
                { "text": "Super Mario Sunshine" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 61,
            "text": "Dans quel jeu Mario porte-t-il pour la première fois un costume de raton laveur ?",
            "reponses": [
                { "text": "Super Mario Bros 3" },
                { "text": "Super Mario World" },
                { "text": "Super Mario Sunshine" },
                { "text": "Super Mario Odyssey" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 62,
            "text": "Quel personnage de Super Mario est connu pour être souvent kidnappé ?",
            "reponses": [
                { "text": "Princesse Peach" },
                { "text": "Princesse Daisy" },
                { "text": "Luigi" },
                { "text": "Toad" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 63,
            "text": "Dans quel jeu Super Mario a-t-on introduit l'ennemi Bowser Jr. ?",
            "reponses": [
                { "text": "Super Mario Sunshine" },
                { "text": "Super Mario Galaxy" },
                { "text": "New Super Mario Bros" },
                { "text": "Super Mario 64" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 64,
            "text": "Quel jeu Mario a été le premier à permettre de jouer avec quatre personnages différents ?",
            "reponses": [
                { "text": "Super Mario 3D World" },
                { "text": "Super Mario 64 DS" },
                { "text": "Super Mario Galaxy" },
                { "text": "Super Mario Kart" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 65,
            "text": "Quel personnage est l'alter ego maléfique de Mario ?",
            "reponses": [
                { "text": "Wario" },
                { "text": "Bowser" },
                { "text": "Donkey Kong" },
                { "text": "Luigi" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 66,
            "text": "Quelle année marque la sortie du tout premier jeu Super Mario Bros sur la NES ?",
            "reponses": [
                { "text": "1985" },
                { "text": "1983" },
                { "text": "1987" },
                { "text": "1990" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 67,
            "text": "Avant de devenir plombier, quel métier Mario exerçait-il dans le jeu d'origine ?",
            "reponses": [
                { "text": "Charpentier" },
                { "text": "Cuisinier" },
                { "text": "Pilote" },
                { "text": "Docteur" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 68,
            "text": "Dans quel jeu Mario utilise-t-il un aspirateur pour capturer des fantômes ?",
            "reponses": [
                { "text": "Luigi's Mansion" },
                { "text": "Super Mario Sunshine" },
                { "text": "Mario Party" },
                { "text": "Super Mario RPG" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 69,
            "text": "Dans 'Super Mario Bros 2', quel personnage jouable peut flotter brièvement dans les airs ?",
            "reponses": [
                { "text": "Princesse Peach" },
                { "text": "Mario" },
                { "text": "Toad" },
                { "text": "Luigi" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 70,
            "text": "Dans 'Super Mario Galaxy', qui est la mystérieuse gardienne des étoiles qui aide Mario ?",
            "reponses": [
                { "text": "Harmonie" },
                { "text": "Peach" },
                { "text": "Daisy" },
                { "text": "Pauline" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 71,
            "text": "Quelle capacité Mario obtient-il après avoir mangé un champignon rouge et blanc ?",
            "reponses": [
                { "text": "Lancer des boules de feu" },
                { "text": "Grandir en taille" },
                { "text": "Voler" },
                { "text": "Devenir invisible" }
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 72,
            "text": "Quelle couleur est le chapeau de Mario ?",
            "reponses": [
                { "text": "Bleu" },
                { "text": "Vert" },
                { "text": "Jaune" },
                { "text": "Rouge" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 73,
            "text": "Quel est le principal véhicule de Mario dans 'Mario Kart' ?",
            "reponses": [
                { "text": "Bicyclette" },
                { "text": "Avion" },
                { "text": "Moto" },
                { "text": "Kart" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 74,
            "text": "Quel animal est Yoshi ?",
            "reponses": [
                { "text": "Un oiseau" },
                { "text": "Un poisson" },
                { "text": "Un cheval" },
                { "text": "Un dinosaure" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 75,
            "text": "Quel est l'objet qui permet à Mario de lancer des boules de feu ?",
            "reponses": [
                { "text": "Champignon" },
                { "text": "Étoile" },
                { "text": "Tortue" },
                { "text": "Fleur de feu" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 76,
            "text": "Quel type de créature est souvent un ennemi classique de Mario ?",
            "reponses": [
                { "text": "Lapin" },
                { "text": "Tortue" },
                { "text": "Chien" },
                { "text": "Oiseau" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 77,
            "text": "Quel est le nom de l'ami de Mario qui est une petite créature champignon ?",
            "reponses": [
                { "text": "Yoshi" },
                { "text": "Toad" },
                { "text": "Wario" },
                { "text": "Luigi" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 78,
            "text": "Quel est le but des pièces dans la série Super Mario ?",
            "reponses": [
                { "text": "Obtenir des pouvoirs" },
                { "text": "Gagner des vies" },
                { "text": "Acheter des objets" },
                { "text": "Vaincre des ennemis" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 79,
            "text": "Quel est le nom de la piste emblématique qui a été présente dans presque tous les jeux Mario Kart ?",
            "reponses": [
                { "text": "Moo Moo Farm" },
                { "text": "Rainbow Road" },
                { "text": "Bowser Castle" },
                { "text": "Peach Garden" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 80,
            "text": "Quel personnage est connu pour sa vitesse dans Mario Kart ?",
            "reponses": [
                { "text": "Toad" },
                { "text": "Wario" },
                { "text": "Metal Mario" },
                { "text": "Donkey Kong" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 81,
            "text": "Quel est l'effet de l'objet Banane dans Mario Kart ?",
            "reponses": [
                { "text": "Gagner de la vitesse" },
                { "text": "Éviter les carapaces" },
                { "text": "Faire déraper les adversaires" },
                { "text": "Devenir invincible" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 82,
            "text": "Quel est le nom de la carapace qui vise le premier joueur ?",
            "reponses": [
                { "text": "Carapace rouge" },
                { "text": "Carapace verte" },
                { "text": "Carapace bleue" },
                { "text": "Carapace dorée" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 83,
            "text": "Quel est le mode de jeu où les joueurs s'affrontent dans une arène plutôt que sur une piste ?",
            "reponses": [
                { "text": "Course" },
                { "text": "Contre-la-montre" },
                { "text": "Mode bataille" },
                { "text": "Championnat" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 84,
            "text": "Quel est le chapeau caractéristique de Toad ?",
            "reponses": [
                { "text": "Un chapeau de cow-boy" },
                { "text": "Un casque de pilote" },
                { "text": "Un chapeau en forme de champignon" },
                { "text": "Un chapeau de sorcier" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 85,
            "text": "Dans quel jeu Luigi est-il le personnage principal ?",
            "reponses": [
                { "text": "Super Mario Galaxy" },
                { "text": "Mario Kart" },
                { "text": "Luigi's Mansion" },
                { "text": "Super Mario Bros" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 86,
            "text": "Quel est le principal ennemi que Luigi affronte dans 'Luigi's Mansion' ?",
            "reponses": [
                { "text": "Bowser" },
                { "text": "Wario" },
                { "text": "Fantômes" },
                { "text": "Kamek" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 87,
            "text": "Quel est le type de créature que Toad représente ?",
            "reponses": [
                { "text": "Un dinosaure" },
                { "text": "Un poisson" },
                { "text": "Un champignon" },
                { "text": "Un oiseau" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 88,
            "text": "Quel est le cri emblématique de Toad lorsqu'il est heureux ?",
            "reponses": [
                { "text": "Luigi!" },
                { "text": "Mario!" },
                { "text": "Toad!" },
                { "text": "Yoshi!" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 89,
            "text": "Que dit Mario lorsqu'il est content ?",
            "reponses": [
                { "text": "Mamma mia!" },
                { "text": "Let's-a go!" },
                { "text": "Yahoo!" },
                { "text": "It's-a me, Mario!" },
            ],
            "ultimate": false,
            "reponseId": 2
        },

        // Special 80's
        // Special 80's
        // Special 80's
        // Special 80's
        {
            "id": 40,
            "text": "Quel groupe de rock a sorti l'album 'The Joshua Tree' en 1987 ?",
            "reponses": [
                { "text": "The Police" },
                { "text": "Queen" },
                { "text": "Guns N' Roses" },
                { "text": "U2" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 41,
            "text": "Quel film de 1985 met en scène un adolescent voyageant dans le temps grâce à une DeLorean ?",
            "reponses": [
                { "text": "Les Goonies" },
                { "text": "E.T. l'extra-terrestre" },
                { "text": "Star Wars: Le Retour du Jedi" },
                { "text": "Retour vers le futur" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 42,
            "text": "Quel joueur de basket-ball a mené les Chicago Bulls à six titres de champion NBA dans les années 90 ?",
            "reponses": [
                { "text": "Shaquille O'Neal" },
                { "text": "Magic Johnson" },
                { "text": "Michael Jordan" },
                { "text": "Larry Bird" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 43,
            "text": "Quel événement marquant a eu lieu à Berlin en 1989 ?",
            "reponses": [
                { "text": "La réunification de l'Allemagne" },
                { "text": "Le lancement du premier satellite" },
                { "text": "Les Jeux Olympiques d'été" },
                { "text": "La chute du mur de Berlin" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 44,
            "text": "Quelle célèbre série télévisée des années 90 mettait en scène des adolescents dans le lycée fictif de Bayside ?",
            "reponses": [
                { "text": "Beverly Hills 90210" },
                { "text": "Sauvés par le gong" },
                { "text": "Friends" },
                { "text": "Dawson" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 45,
            "text": "Quel chanteur a interprété la célèbre chanson 'Thriller' en 1982 ?",
            "reponses": [
                { "text": "Prince" },
                { "text": "David Bowie" },
                { "text": "George Michael" },
                { "text": "Michael Jackson" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 46,
            "text": "En quelle année la première console Nintendo, la NES, a-t-elle été lancée à l'international ?",
            "reponses": [
                { "text": "1990" },
                { "text": "1988" },
                { "text": "1983" },
                { "text": "1985" },
            ],
            "ultimate": false,
            "reponseId": 3
        },
        {
            "id": 47,
            "text": "Quelle série de science-fiction britannique emblématique a été relancée en 1987, après une première série des années 60 ?",
            "reponses": [
                { "text": "Doctor Who" },
                { "text": "Star Trek: The Next Generation" },
                { "text": "Battlestar Galactica" },
                { "text": "Babylon 5" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 48,
            "text": "Quelle équipe de football a remporté la Coupe du Monde en 1998 ?",
            "reponses": [
                { "text": "Brésil" },
                { "text": "Allemagne" },
                { "text": "France" },
                { "text": "Italie" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 49,
            "text": "Quel film a remporté l'Oscar du meilleur film en 1994, racontant l'histoire d'un homme simple d'esprit traversant l'histoire des États-Unis ?",
            "reponses": [
                { "text": "Forrest Gump" },
                { "text": "Pulp Fiction" },
                { "text": "Le Roi Lion" },
                { "text": "Titanic" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 50,
            "text": "Quel groupe britannique a marqué la scène rock des années 90 avec l'album '(What's the Story) Morning Glory' ?",
            "reponses": [
                { "text": "Oasis" },
                { "text": "Blur" },
                { "text": "Radiohead" },
                { "text": "The Verve" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 51,
            "text": "Dans quel sport Diego Maradona est-il devenu une légende dans les années 80 ?",
            "reponses": [
                { "text": "Basket-ball" },
                { "text": "Football" },
                { "text": "Tennis" },
                { "text": "Formule 1" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 52,
            "text": "Quel célèbre jeu de puzzle a été développé par le Russe Alexey Pajitnov en 1984 ?",
            "reponses": [
                { "text": "Tetris" },
                { "text": "Pac-Man" },
                { "text": "Snake" },
                { "text": "Breakout" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 53,
            "text": "Qui a remporté le tournoi de Wimbledon en 1985 à l'âge de 17 ans, devenant le plus jeune champion de l'histoire ?",
            "reponses": [
                { "text": "Pete Sampras" },
                { "text": "Boris Becker" },
                { "text": "Andre Agassi" },
                { "text": "Stefan Edberg" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 54,
            "text": "Quel film d'animation de Disney est sorti en 1994 et présente la chanson 'Hakuna Matata' ?",
            "reponses": [
                { "text": "Aladdin" },
                { "text": "Le Roi Lion" },
                { "text": "La Petite Sirène" },
                { "text": "Mulan" },
            ],
            "ultimate": true,
            "reponseId": 1
        },
        {
            "id": 55,
            "text": "Quel artiste a dominé les charts des années 80 avec des hits comme 'Purple Rain' et 'When Doves Cry' ?",
            "reponses": [
                { "text": "Prince" },
                { "text": "David Bowie" },
                { "text": "George Michael" },
                { "text": "Elton John" },
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 56,
            "text": "Quel événement tragique a eu lieu en 1986 lorsque la navette spatiale Challenger s'est désintégrée peu après son lancement ?",
            "reponses": [
                { "text": "Elle a été touchée par un météore" },
                { "text": "Elle a perdu le contrôle et s'est écrasée" },
                { "text": "Elle a explosé en plein vol" },
                { "text": "Elle a fait un retour d'urgence sur Terre" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 57,
            "text": "Quelle série télévisée policière populaire des années 80 mettait en vedette Don Johnson et Philip Michael Thomas dans les rues de Miami ?",
            "reponses": [
                { "text": "Magnum" },
                { "text": "Starsky et Hutch" },
                { "text": "Miami Vice" },
                { "text": "Hawaï 5-0" },
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 58,
            "text": "Quel était le surnom du joueur de tennis suédois Björn Borg, célèbre dans les années 80 ?",
            "reponses": [
                { "text": "Le Viking" },
                { "text": "L'Iceborg" },
                { "text": "Le Tigre" },
                { "text": "L'Éclair" },
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 59,
            "text": "Quel film d'action culte de 1988 met en vedette Bruce Willis dans le rôle de John McClane, un policier luttant contre des terroristes ?",
            "reponses": [
                { "text": "Die Hard" },
                { "text": "L'Arme Fatale" },
                { "text": "Terminator" },
                { "text": "Piège de Cristal" },
            ],
            "ultimate": false,
            "reponseId": 0
        }
    ]
}

export default db