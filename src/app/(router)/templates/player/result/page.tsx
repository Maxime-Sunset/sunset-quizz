"use client"

import PlayerResultView from "@/views/player/PlayerResultView";

export default function TemplatePlayerResult() {

    return (
        <PlayerResultView
            currentReponse={{
                text: "player.reponse.choice"
            }}
            result="question.result"
        />
    )
}