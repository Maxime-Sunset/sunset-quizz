"use client"

import { socket } from "@/socket";
import PlayerEqualsView from "@/views/player/PlayerEqualsView";

export default function TemplatePlayerEquals() {
    return <PlayerEqualsView
        socket={socket}
        player_equals={[
            {
                id: String(socket.id),
                current_reponse: -1,
                score: 10,
                username: "Maxime"
            },
            {
                id: "1",
                current_reponse: -1,
                score: 10,
                username: "Antony"
            },
            {
                id: "2",
                current_reponse: -1,
                score: 10,
                username: "Emilie"
            },
        ]}
    />
}