import CircleLoader from "@/components/CicleLoader";
import { PlayerViewMode } from "@/types/view.type";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

interface PlayerLoginViewProps {
    socket: Socket
    serieTitle: string
    usernameState: [username: string, setUsername: Dispatch<SetStateAction<string>>]
    setViewState: Dispatch<SetStateAction<PlayerViewMode>>
    roomId: string
}

export default function PlayerLoginView({
    socket,
    serieTitle,
    usernameState: [username, setUsername],
    setViewState: setViewState,
    roomId
}: PlayerLoginViewProps) {

    const handleUsername = () => {
        socket.emit("player:join", { username, room_uid: roomId })
        setViewState(PlayerViewMode.WAITTING)
    }

    if (serieTitle == "") {
        return <CircleLoader />
    }

    return (
        <Box display="flex" textAlign="center" flex="1" flexDirection="column" justifyContent="center">
            <Text
                color="white"
                fontSize="1.5rem"
                fontWeight="bolder"
                textShadow="2px 2px 5px black"
                mb="1rem"
            >Choisit ton pseudo</Text>

            <Input
                autoFocus={true}
                mb="3rem"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                borderRadius="50px"
                h="60px"
                border="solid 3px #00ff00"
                bg="white"
                boxShadow="0 3px 15px -3px black"
                _focus={{
                    border:"solid 3px #00ff00"
                }}
            />

            <Button
                onClick={() => handleUsername()}
                _hover={{ bg: "cyan" }}
                fontSize="1.5rem"
                bg="cyan.400"
                borderRadius="50px"
                color="white"
                border="solid 3px white"
                padding="20px"
                boxShadow="0 3px 15px -3px black"
                w="50%"
                mx="auto"
                >START</Button>
        </Box>
    )
}