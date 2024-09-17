import { Player } from "@/types/socket.type";
import { Box, List, ListItem } from "@chakra-ui/react";

export default function ScoreBoard({ room, items }: { room: any, items?: number }) {
    return (
        <Box display="flex" flexDirection="column" width="100%">
            <List>
            {
                room.players.map((player: Player, index: number) => {
                    if(items && index >= items) return <></>
                    return (
                        <ListItem key={index}>
                            <Box>{player.username}</Box>
                            <Box>{player.score}</Box>
                        </ListItem>
                    )
                })
            }
            </List>
        </Box>
    )
}