import { Player } from "@/types/socket.type";
import { Box, Heading } from "@chakra-ui/react";
import { Socket } from "socket.io-client";

interface PlayerFinishViewProps {
    socket: Socket,
    players: Player[],
}

export default function PlayerFinishView({ socket, players }: PlayerFinishViewProps) {
    players.sort((a, b) => b.score - a.score)
    const player_position: number = players.findIndex((player: Player) => player.id == socket.id)+1
    socket.disconnect()

    return (
        <Box display="flex" h="100vh" m="auto" textAlign="center">
            <Box display="flex" flexDirection="column" justifyContent="center" m="1rem">
                <Heading as="h3">Le Quiz est fini.</Heading>
                <Box>Classement</Box>
                <Box>{player_position}</Box>
            </Box>
        </Box>
    )
}