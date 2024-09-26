"use client"

import DirectorReponseView from "@/views/director/DirectorReponseView";

export default function TemplateDirectorReponse() {
    
    return (
        <DirectorReponseView
            room={{
                uid: 0,
                players: [{
                    id: "QSDE56-4QSdq6s4daz",
                    username: "Maxime",
                    current_reponse: -1,
                    score: 10,
                }],
                director: "DFS5qsS5qsd6-AZE6",
                current_question_id: 0,
                serie_id: 0,
                ttq: 10,
                ttr: 10
            }}
            currentQuestion={{
                id: 0,
                reponseId: 1,
                text: "question.text",
                reponses: [
                    { text: "reponse.0" },
                    { text: "reponse.1" },
                    { text: "reponse.2" },
                    { text: "reponse.3" },
                ],
            }}
        />
    )
}