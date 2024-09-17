import { PlayerViewMode } from "@/types/view.type";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

interface PlayerLoginViewProps {
    socket: Socket
    serieTitle: string
    usernameState: [username: string, setUsername: Dispatch<SetStateAction<string>>]
    viewState: [view: PlayerViewMode, setView: Dispatch<SetStateAction<PlayerViewMode>>]
    roomId: string
}

export default function PlayerLoginView({ 
    socket,
    serieTitle,
    usernameState: [username, setUsername],
    viewState: [view, setView],
    roomId
}: PlayerLoginViewProps) {
    
    const handleUsername = () => {
        socket.emit("player:join", { username, room_uid: roomId })
        setView(PlayerViewMode.WAITTING)
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as="h1">{serieTitle}</Heading>
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button onClick={() => handleUsername()}>Validate</Button>
        </Box>
    )
}