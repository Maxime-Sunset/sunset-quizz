import { Player } from "@/types/socket.type";
import { Box, Button, Text } from "@chakra-ui/react";
import { Socket } from "socket.io-client";

export default function DirectorEqualsView({socket, player_equals}: {socket: Socket, player_equals: Player[]}) {
    
    const handleStartUltimate = () => {
        socket.emit("director:game:equals:question")
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" h="100%" gap="20px">
            <Text
                color="white"
                fontSize="1.7rem"
                fontWeight="bolder"
                textShadow="2px 2px 5px black"
                mb="1rem"
            >{`Les joueurs suivant sont à égalité`}</Text>
            <Box>
                {
                    player_equals.map((player: Player, index: number) => {
                        return (
                            <Text
                                key={index}
                                color="white"
                                fontSize="1.5rem"
                                fontWeight="bolder"
                                textShadow="2px 2px 5px black"
                            >{player.username}</Text>
                        )
                    })
                }
            </Box>
            <Box>
                <Text
                    color="white"
                    fontSize="1.7rem"
                    fontWeight="bolder"
                    textShadow="2px 2px 5px black"
                    
                >{`Préparé vous à être départagé`}</Text>

                <Button 
                    onClick={() => handleStartUltimate()}
                    _hover={{ bg:"cyan" }}
                    boxShadow="0 3px 15px -3px black"
                    fontSize="1.5rem"
                    mt="2rem"
                    bg="cyan.400"
                    borderRadius="50px"
                    color="white"
                    border="solid 3px white"
                    padding="20px"
                    >{`START`}
                </Button>
            </Box>
        </Box>
    )
}