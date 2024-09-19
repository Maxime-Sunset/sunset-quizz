import { Player, Room } from "@/types/socket.type";
import { Box, Heading, List } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface PlayerListProps {
    room: Room
}

export default function PlayerList({ room }: PlayerListProps) {

    return (
        <Box display="flex" flexDirection="column" justifyContent="start" alignItems="center" bg="grey" padding="10px" border="solid 1px black">
            <Heading as="h3">PLAYERS</Heading>
            <List>
                {
                    room.players.map((player: Player, index: number) => {
                        return <motion.p
                            key={index}
                            style={{
                                opacity: 0,
                                textAlign: "center"
                            }}
                            animate={{
                                opacity: [0, 1],
                                translateX: [1200, 0]
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50
                            }}

                        >{`${player.username} ${player.score >= 0 ? player.score+1 : ""}`}</motion.p>
                    })
                }
            </List>
        </Box>
    )
}