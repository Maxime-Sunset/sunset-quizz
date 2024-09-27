"use client"

import PlayerResultView from "@/views/player/PlayerResultView";

export default function TemplatePlayerResult() {

    // Bad reponse
    return (
        <PlayerResultView
            currentReponse={{
                text: "{player.reponse.choice}"
            }}
            result="Donkey kong"
        />
    )

    // Good reponse
    return (
        <PlayerResultView
            currentReponse={{
                text: "Donkey kong"
            }}
            result="Donkey kong"
        />
    )

    // Aucune reponse
    return (
        <PlayerResultView
            currentReponse={null}
            result="Donkey kong"
        />
    )
}