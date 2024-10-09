import CircleLoader from "@/components/CicleLoader";
import { PlayerViewMode } from "@/types/view.type";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import TitleText from "@/components/TitleText";
import Image from "next/legacy/image";
import ImageLogo from "../../../public/logo-80.png"

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

    const CARACTERE_MIN_LABEL = "Minimum 5 caractères"
    const CARACTERE_MAX_LABEL = "Maximum 12 caractères"

    const [isInputValid, setIsInputValid] = useState<boolean>(false)
    const [validMsg, setValidMsg] = useState<string>(CARACTERE_MIN_LABEL)

    useEffect(() => {
        if (username.length < 5) {
            setValidMsg(CARACTERE_MIN_LABEL)
            setIsInputValid(false)
        } else if (username.length > 12) {
            setValidMsg(CARACTERE_MAX_LABEL)
            setIsInputValid(false)
        } else {
            setValidMsg(" ")
            setIsInputValid(true)
        }
    }, [username])

    const handleUsername = () => {
        socket.emit("player:join", { username, room_uid: roomId })
        setViewState(PlayerViewMode.WAITTING)
    }

    if (serieTitle == "") {
        return <CircleLoader />
    }

    return (
        <Box display="flex" textAlign="center" flex="1" flexDirection="column" justifyContent="flex-start">

            <Box flex="1" display="flex" justifyContent="center" alignItems="center">
                <TitleText />
            </Box>

            <Box flex="1">
                <Text
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="bolder"
                    textShadow="2px 2px 5px black"
                    mb="1rem"
                >Choisit ton pseudo</Text>

                <Input
                    autoFocus={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                    borderRadius="50px"
                    h="60px"
                    border="solid 3px #f203a6"
                    bg="white"
                    boxShadow="0 3px 15px -3px black"
                    mb="1rem"
                    _focus={{
                        border: "solid 5px #f203a6"
                    }}
                />
                <Box h="20px" color="white">{!isInputValid ? <span>{validMsg}</span> : <span> </span>}</Box>
                <Button
                    isDisabled={!isInputValid}
                    onClick={() => handleUsername()}
                    _hover={{ bg: "cyan" }}
                    bg="#24b3fb"
                    fontSize="1.5rem"
                    borderRadius="50px"
                    color="white"
                    border="solid 3px white"
                    padding="20px"
                    boxShadow="0 3px 15px -3px black"
                    w="50%"
                    mx="auto"
                    mt="3rem"
                >START</Button>
            </Box>
            <Box flex="0.5" h="auto" w="60%" mx="auto">
                <Image src={ImageLogo} alt={ImageLogo.src} objectFit="contain" />
            </Box>
        </Box>
    )
}