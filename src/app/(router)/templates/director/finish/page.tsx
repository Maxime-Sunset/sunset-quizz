"use client"

import DirectorFinishView from "@/views/director/DirectorFinishView";

export default function TemplateDirectorFinish() {
    
    return (
        <DirectorFinishView
            room={{
                uid: 0,
                players: [{
                    id: "QSDE56-4QSdq6s4daz",
                    username: "Maxime",
                    current_reponse: -1,
                    score: 15,
                },{
                    id: "QSDE56-4QSdq6s4daz",
                    username: "Antony",
                    current_reponse: -1,
                    score: 8,
                }],
                director: "DFS5qsS5qsd6-AZE6",
                current_question_id: 0,
                serie_id: 0
            }}
            total_question={20}
        />
    )
}