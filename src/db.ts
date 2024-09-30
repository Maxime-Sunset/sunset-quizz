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
            questionId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        },
        {
            id: 2,
            title: "Super Mario and Co",
            difficulty: Difficulty.GEEK,
            questionId: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
        },
        {
            id: 3,
            title: "Super Mario and Co",
            difficulty: Difficulty.EVIL,
            questionId: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        },
    ],
    questions: [
        {
            "id": 0,
            "text": "Quel est le nom complet du créateur de Mario ?",
            "reponses": [
                { "text": "Shigeru Miyamoto" },
                { "text": "Hideo Kojima" },
                { "text": "Satoru Iwata" },
                { "text": "Koji Kondo" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 1,
            "text": "Dans quel jeu Mario fait-il sa première apparition ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Mario Bros" },
                { "text": "Donkey Kong" },
                { "text": "Mario Kart" }
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 2,
            "text": "Quel est le métier de Mario ?",
            "reponses": [
                { "text": "Plombier" },
                { "text": "Charpentier" },
                { "text": "Électricien" },
                { "text": "Cuisinier" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 3,
            "text": "Comment s'appelle le frère de Mario ?",
            "reponses": [
                { "text": "Luigi" },
                { "text": "Wario" },
                { "text": "Toad" },
                { "text": "Yoshi" }
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
                { "text": "Super Mario Sunshine" }
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
                { "text": "King Boo" }
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
                { "text": "Princesse Rosalina" }
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
                { "text": "Lakitu" }
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
                { "text": "Super Mario 64" }
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
                { "text": "Super Mario Sunshine" }
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
                { "text": "Mario Party" }
            ],
            "ultimate": true,
            "reponseId": 1
        },
        {
            "id": 11,
            "text": "Quel était le nom original de Mario lors de sa première apparition dans Donkey Kong ?",
            "reponses": [
                { "text": "Plumber Man" },
                { "text": "Mr. Video" },
                { "text": "Jumpman" },
                { "text": "Mario Bros" }
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 12,
            "text": "Quel est le tout premier jeu dans lequel Luigi est jouable ?",
            "reponses": [
                { "text": "Mario Bros" },
                { "text": "Super Mario Bros" },
                { "text": "Super Mario Bros: The Lost Levels" },
                { "text": "Super Mario World" }
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
                { "text": "Super Mario Land" }
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
                { "text": "Satoru Iwata" }
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
                { "text": "Mario's Game Gallery" }
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
                { "text": "Nintendo DS" }
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
                { "text": "Bowser" }
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
                { "text": "Jaune" }
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
                { "text": "Super Mario Galaxy" }
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
                { "text": "Don't Stop Believin'" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 21,
            "text": "Dans Super Mario Bros. 3, quel était le nom original japonais du personnage de Bowser ?",
            "reponses": [
                { "text": "Daimao Koopa" },
                { "text": "King Koopa" },
                { "text": "Bowser Jr." },
                { "text": "Koopa Troopa" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 22,
            "text": "Dans quel jeu Mario le personnage Waluigi fait-il sa première apparition ?",
            "reponses": [
                { "text": "Mario Tennis" },
                { "text": "Mario Kart 64" },
                { "text": "Mario Party 3" },
                { "text": "Super Smash Bros Melee" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 23,
            "text": "Quel est le jeu Mario dans lequel un mode coopératif à 2 joueurs a été introduit pour la première fois ?",
            "reponses": [
                { "text": "Super Mario Bros" },
                { "text": "Super Mario World" },
                { "text": "Mario Bros" },
                { "text": "New Super Mario Bros Wii" }
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 24,
            "text": "Quel personnage issu de la série Mario est connu sous le nom de 'Foreman Spike' ?",
            "reponses": [
                { "text": "Le chef de chantier de Wrecking Crew" },
                { "text": "Un boss dans Super Mario World" },
                { "text": "Un ennemi dans Donkey Kong" },
                { "text": "Le père de Wario" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 25,
            "text": "Dans quel jeu Mario apparaît pour la première fois le costume de la grenouille ?",
            "reponses": [
                { "text": "Super Mario World" },
                { "text": "Super Mario Bros 3" },
                { "text": "Super Mario Land 2" },
                { "text": "Super Mario 64" }
            ],
            "ultimate": false,
            "reponseId": 1
        },
        {
            "id": 26,
            "text": "Quel était le nom de la princesse dans Donkey Kong avant d'être renommée Princesse Peach ?",
            "reponses": [
                { "text": "Pauline" },
                { "text": "Daisy" },
                { "text": "Tina" },
                { "text": "Rosalina" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 27,
            "text": "Quel est le nom de l’ennemi de Mario, ressemblant à un soleil, que l’on rencontre dans Super Mario Bros. 3 ?",
            "reponses": [
                { "text": "Angry Sun" },
                { "text": "Solar Koopa" },
                { "text": "Fire Orb" },
                { "text": "Sunny Koopa" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 28,
            "text": "Dans Super Mario 64, combien d'étoiles minimum faut-il collecter pour affronter Bowser une dernière fois ?",
            "reponses": [
                { "text": "70" },
                { "text": "120" },
                { "text": "50" },
                { "text": "80" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 29,
            "text": "Dans Mario Kart: Super Circuit, combien de circuits sont disponibles au total, y compris ceux issus de Super Mario Kart ?",
            "reponses": [
                { "text": "20" },
                { "text": "32" },
                { "text": "40" },
                { "text": "24" }
            ],
            "ultimate": false,
            "reponseId": 2
        },
        {
            "id": 30,
            "text": "Dans Super Mario RPG: Legend of the Seven Stars, quel est le nom du personnage qui ressemble à une poupée et qui rejoint l'équipe de Mario ?",
            "reponses": [
                { "text": "Geno" },
                { "text": "Mallow" },
                { "text": "Smithy" },
                { "text": "Culex" }
            ],
            "ultimate": false,
            "reponseId": 0
        },
        {
            "id": 31,
            "text": "Dans le jeu Donkey Kong (1981), combien de points peut-on obtenir en atteignant directement Pauline sans toucher les barils ?",
            "reponses": [
                { "text": "100" },
                { "text": "500" },
                { "text": "300" },
                { "text": "800" }
            ],
            "ultimate": true,
            "reponseId": 1
        }
    ]
}

export default db