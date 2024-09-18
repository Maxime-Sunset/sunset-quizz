import CircleLoader from "@/components/CicleLoader";
import { PlayerViewMode } from "@/types/view.type";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from "react";
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

    if(serieTitle == "") {
        return <CircleLoader />
    }

    return (
        <>
            <Heading as="h1">{serieTitle}</Heading>
            <Box display="flex" textAlign="center" flex="1" flexDirection="column" justifyContent="center">
                <Box as="i">Choisit ton pseudo</Box>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                <Button onClick={() => handleUsername()} my="20px">Validate</Button>
            </Box>
            <Box as="b" color="lightgrey" textAlign="end">#{roomId}</Box>
        </>
    )
}