"use client"

import { socket } from "@/socket";
import DirectorLobbyView from "@/views/director/DirectorLobbyView";

export default function TemplateDirectorLobby() {
    
    return (
        <DirectorLobbyView
            socket={socket}
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
                serie_id: 0
            }}
        />
    )
}