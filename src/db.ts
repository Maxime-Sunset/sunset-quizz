export type Reponse = {
    text: string
}

export type Question = {
    id: number,
    text: string,
    reponses: Reponse[],
    responseId: number
}

export type Serie = {
    id: number
    title: string,
    questionId: number[]
}

export type Series = Serie[]
export type Questions = Question[]
export type Reponses = Reponse[]

export type Db = {
    series: Serie[]
    questions: Question[],
}

export const db = {
    series: [
        {
            id: 0,
            title: "Super Mario and Co",
            questionId: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
    ],
    questions: [
        {
            id: 0,
            text: "Quel était le premier jeu où Mario est apparu ?",
            reponses: [
                { text: "Super Mario Bros" },
                { text: "Mario Kart" },
                { text: "Donkey Kong" },
                { text: "Super Mario 64" }
            ],
            responseId: 2
        },
        {
            id: 1,
            text: "Quel est le vrai nom de la princesse Peach dans le film Super Mario Bros de 2023 ?",
            reponses: [
                { text: "Princesse Peach Toadstool" },
                { text: "Princesse Daisy" },
                { text: "Princesse Rosalina" },
                { text: "Princesse Pauline" }
            ],
            responseId: 0
        },
        {
            id: 2,
            text: "Quel personnage est le rival maléfique de Mario, reconnaissable à son chapeau jaune ?",
            reponses: [
                { text: "Bowser" },
                { text: "Waluigi" },
                { text: "Wario" },
                { text: "Donkey Kong" }
            ],
            responseId: 2
        },
        {
            id: 3,
            text: "Dans quel royaume Mario se rend-il pour la première fois dans Super Mario Odyssey ?",
            reponses: [
                { text: "Royaume Champignon" },
                { text: "Royaume des Chapeaux" },
                { text: "Royaume des Sables" },
                { text: "Royaume des Forêts" }
            ],
            responseId: 1
        },
        {
            id: 4,
            text: "Comment s’appelle l’acteur qui prête sa voix à Mario dans le film Super Mario Bros de 2023 ?",
            reponses: [
                { text: "Chris Pratt" },
                { text: "Charles Martinet" },
                { text: "Jack Black" },
                { text: "Seth Rogen" }
            ],
            responseId: 0
        },
        {
            id: 5,
            text: "Quel est le tout premier jeu dérivé de l'univers de Mario ?",
            reponses: [
                { text: "Mario Kart" },
                { text: "Dr. Mario" },
                { text: "Super Smash Bros" },
                { text: "Mario Party" }
            ],
            responseId: 1
        },
        {
            id: 6,
            text: "Quel est le prénom du frère de Mario qui porte une casquette verte ?",
            reponses: [
                { text: "Wario" },
                { text: "Luigi" },
                { text: "Toad" },
                { text: "Bowser Jr." }
            ],
            responseId: 1
        },
        {
            id: 7,
            text: "Qui est le méchant principal dans le film Super Mario Bros de 2023 ?",
            reponses: [
                { text: "Bowser" },
                { text: "Wario" },
                { text: "King Boo" },
                { text: "Donkey Kong" }
            ],
            responseId: 0
        },
        {
            id: 8,
            text: "Quel personnage apparaît comme un méchant puis devient allié de Mario dans Super Mario RPG ?",
            reponses: [
                { text: "Geno" },
                { text: "Toad" },
                { text: "Bowser" },
                { text: "Wario" }
            ],
            responseId: 2
        },
        {
            id: 9,
            text: "Dans quel monde de Super Mario Bros 3 Mario utilise-t-il pour la première fois la tenue de Tanooki ?",
            reponses: [
                { text: "Monde 1 : Terre des Plaines" },
                { text: "Monde 2 : Désert" },
                { text: "Monde 4 : Géant" },
                { text: "Monde 5 : Ciel" }
            ],
            responseId: 1
        }
    ]
}

export default db