"use client"

import { socket } from "@/socket";
import DirectorEqualsView from "@/views/director/DirectorEqualsView";

export default function TemplateDirectorEquals() {

    return (
        <DirectorEqualsView
            socket={socket}
            player_equals={[
                {
                    id: "0",
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
                }
            ]}
        />
    )
}