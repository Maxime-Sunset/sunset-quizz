import { Player } from "@/types/socket.type";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Socket } from "socket.io-client";

export default function PlayerEqualsView({ socket, player_equals }: { socket: Socket, player_equals: Player[] }) {

    const isEquals = player_equals.find((player) => player.id == (socket.id))

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" h="100%">
            {
                isEquals
                    ?
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        color="white"
                        fontSize="1.5rem"
                        fontWeight="bolder"
                        textShadow="2px 2px 5px black"
                    >
                        <Text mb="1rem">{`Vous etes en égalité avec:`}</Text>
                        <Box>
                            {
                                player_equals.map((player, index) => {
                                    return player.id != socket.id ? <Box key={index}>{player.username}</Box> : <React.Fragment key={index} />
                                })
                            }
                        </Box>
                        <Box>{`Préparé vous à être départagé !`}</Box>
                    </Box>
                    :
                    <Box
                        display="flex"
                        flexDirection="column"
                        gap="20px"
                        color="white"
                        fontSize="1.5rem"
                        fontWeight="bolder"
                        textShadow="2px 2px 5px black"
                    >{`Une égalité est en cours de résolution`}</Box>
            }
        </Box>
    )
}