import { Player } from "@/types/socket.type";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Socket } from "socket.io-client";

export default function PlayerEqualsView({ socket, player_equals }: { socket: Socket, player_equals: Player[] }) {

    const isEquals = player_equals.find((player) => player.id == (socket.id))

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" h="100%">
            {
                isEquals
                    ?
                    <Box display="flex" flexDirection="column" gap="20px">
                        <Box>{`Vous etes en égalité avec:`}</Box>
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
                    <Box>{`Une égalité est en cours de résolution`}</Box>
            }
        </Box>
    )
}