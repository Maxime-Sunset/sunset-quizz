import { Player } from "@/types/socket.type";
import { Box, Heading, List } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface PlayerListProps {
    players: Player[]
}

export default function PlayerList({ players }: PlayerListProps) {
    const [_players, setPlayers] = useState<Player[]>([])
    
    useEffect(() => {
        if(players.length == 0) { return }
        if(_players.length > 30) {
            const x = [..._players]
            x.splice(0, _players.length - 30)
            setPlayers(x)
        } else {
            setPlayers(players)
        }
    }, [players])

    const PlayerName = ({ username }: { username: string }) => {
        return (
            <Box
                style={{
                    textAlign: "center",
                    color: "white",
                    textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                }}
            >{`${username}`}</Box>
        )
    }

    return (
        <Box
            display="flex"
            m="20px"
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            bg="#24b3fb"
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
                    _players.map((player: Player, index: number) => {
                        return <PlayerName key={index+"in"} username={player.username} />
                    })
                }
            </List>
        </Box>
    )
}