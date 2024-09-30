"use client"

import { socket } from "@/socket";
import PlayerFinishView from "@/views/player/PlayerFinishView";

export default function TemplatePlayerFinish() {
    
    return (
        // Can't moke, requrie socket to calculate score and classement
        <PlayerFinishView
            socket={socket}
            players={[]}
        />
    )
}