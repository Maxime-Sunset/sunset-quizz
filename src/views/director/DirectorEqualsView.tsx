import { Player } from "@/types/socket.type";
import { Box, Button } from "@chakra-ui/react";
import { Socket } from "socket.io-client";

export default function DirectorEqualsView({socket, player_equals}: {socket: Socket, player_equals: Player[]}) {
    
    const handleStartUltimate = () => {
        socket.emit("director:game:equals:question")
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100%" gap="20px">
            <Box>{"Les joueurs suivant sont à égalité"}</Box>
            <Box>
                {
                    player_equals.map((player: Player) => {
                        return <Box>{player.username}</Box>
                    })
                }
            </Box>
            <Box>{"Préparé vous à être départagé"}</Box>
            <Button onClick={() => handleStartUltimate()}>START</Button>
        </Box>
    )
}