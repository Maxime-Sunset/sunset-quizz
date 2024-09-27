"use client"

import PlayerFinishView from "@/views/player/PlayerFinishView";
import { Socket } from "socket.io-client";

export default function TemplatePlayerFinish({ socket }: { socket: Socket }) {
    
    
    return (
        // Can't moke, requrie socket to calculate score and classement
        <PlayerFinishView
            socket={socket}
            players={[]}
            total_questions={0}
        />
    )
}