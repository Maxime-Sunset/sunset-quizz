import { Player } from "@/types/socket.type";
import { Box, Heading } from "@chakra-ui/react";
import { Socket } from "socket.io-client";

interface PlayerFinishViewProps {
    socket: Socket,
    players: Player[],
    total_questions: number
}

export default function PlayerFinishView({ socket, players, total_questions }: PlayerFinishViewProps) {
    players.sort((a, b) => b.score - a.score)
    let player_position: number = players.findIndex((player: Player) => player.id == socket.id)+1
    let player: Player | undefined = players.find((player: Player) => player.id == socket.id)
    let player_score = player ? player.score : 0

    return (
        <Box display="flex" h="100vh" m="auto" textAlign="center">
            <Box display="flex" flexDirection="column" justifyContent="center" m="1rem">
                <Heading as="h3">Le Quiz est fini.</Heading>
                <Box>Classement</Box>
                <Box>{player_position}</Box>
                <Box>{player_score+1}/{total_questions}</Box>
            </Box>
        </Box>
    )
}