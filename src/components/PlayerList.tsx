import { Player } from "@/types/socket.type";
import { Box, Heading, List } from "@chakra-ui/react";

interface PlayerListProps {
    players: Player[]
}

export default function PlayerList({ players }: PlayerListProps) {
    
    const ExistPlayer = ({ player }: { player: Player }) => {
        return (
            <Box
                style={{
                    textAlign: "center",
                    color: "white",
                    textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                }}
            >{`${player.username}`}</Box>
        )
    }

    return (
        <Box
            display="flex"
            m="20px"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            bg="#00fe00"
            padding="10px"
            border="solid 5px white"
            borderRadius="20px"
            boxShadow="0 3px 15px -3px black"
        >   
            <Heading
                as="h3"
                color="white"
                textShadow="2px 0 black, -2px 0 black, 0 2px 5px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
            >PLAYERS</Heading>
            <List>
                {
                    players.map((player: Player, index: number) => {
                        return <ExistPlayer key={index+"in"} player={player} />
                    })
                }
            </List>
        </Box>
    )
}