import { Player } from "@/types/socket.type";
import { Box, Heading, List, ListItem } from "@chakra-ui/react";

export default function PlayerList({room}: any) {
    return (
        <Box display="flex" flexDirection="column" justifyContent="start" alignItems="center" bg="grey" padding="10px" border="solid 1px black">
            <Heading as="h3">PLAYERS</Heading>
            <List>
                {
                    room.players.map((player: Player, index: number) => {
                        return <ListItem key={index} textAlign="center">{`${player.username} ${player.score >= 0 ? player.score+1 : ""}`}</ListItem>
                    })
                }
            </List>
        </Box>
    )
}