"use client"

import { socket } from "@/socket";
import { PlayerViewMode } from "@/types/view.type";
import PlayerLoginView from "@/views/player/PlayerLoginView";
import { useState } from "react";

export default function TemplatePlayerLogin() {
    const [username, setUsername] = useState<string>("")
    const [view, setView] = useState<PlayerViewMode>(PlayerViewMode.LOGIN)

    console.log(view)
    return (
        <PlayerLoginView
            socket={socket}
            roomId="L33T"
            serieTitle="{Titre de la serie}"
            usernameState={[username, setUsername]}
            setViewState={setView}
        />
    )
}