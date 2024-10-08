"use client"

import { Reponse } from "@/db";
import { socket } from "@/socket";
import PlayerAnswerView from "@/views/player/PlayerAnswerView";
import { useState } from "react";

export default function TemplatePlayerAnswer() {
    const [currentReponse, setCurrentReponse] = useState<Reponse | null>(null)
    
    return (
        <PlayerAnswerView
            socket={socket}
            currentReponseState={[currentReponse, setCurrentReponse]}
            reponses={[
                { text: "{reponse.0 reponse.0}" },
                { text: "{reponse.1, reponse.0}" },
                { text: "Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A, Start" },
                { text: "{reponse.3}" },
            ]}
        />
    )
}