import { Player } from "@/types/socket.type";
import { Box, Heading, Text } from "@chakra-ui/react";
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
        <Box display="flex" flexDirection="column" h="100vh" m="auto" justifyContent="flex-start" textAlign="center">
            <Text
                as="h3"
                color="white"
                fontSize="2rem"
                fontWeight="bolder"
                textShadow="2px 2px 5px black"
                
            >{`Le Quiz est fini.`}</Text>
            <Box display="flex" h="100%" flexDirection="column" justifyContent="center" gap="2rem">
                <Box>
                    <Text
                        as="h3"
                        color="white"
                        fontSize="2rem"
                        fontWeight="bolder"
                        textShadow="2px 2px 5px black"
                        
                        >{`Vous etes`}</Text>
                    <Text
                        as="h3"
                        color="white"
                        fontSize="3rem"
                        fontWeight="bolder"
                        textShadow="2px 2px 5px black"
                        >{player_position}<Text as="span" fontSize="1rem" verticalAlign="top"> em</Text></Text>
                </Box>
            </Box>
        </Box>
    )
}