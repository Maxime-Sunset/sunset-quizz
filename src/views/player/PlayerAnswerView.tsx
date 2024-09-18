import { Reponse, Reponses } from "@/db";
import { Box, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { Socket } from "socket.io-client";

interface PlayerAnswerViewProps {
    socket: Socket
    reponses: Reponses
    currentReponseState: [currentReponse: Reponse | null, setCurrentReponse: Dispatch<SetStateAction<Reponse | null>>]
}

export default function PlayerAnswerView({
    socket,
    reponses,
    currentReponseState: [currentReponse, setCurrentReponse]
}: PlayerAnswerViewProps) {
    
    const handleSendReponse = (reponse: Reponse, reponse_id: number) => {
        socket.emit("player:reponse", {reponse_id})
        setCurrentReponse(reponse)
    }

    return (
        <>
            <Box display="flex" flexDirection="column" justifyContent="center" h="100%" m="1rem">
                {
                    reponses.map((reponse: Reponse, index: number) => {
                        return <Button onClick={() => handleSendReponse(reponse, index)} my="1rem" key={index} bg={reponse == currentReponse?"green.700":"green.500"}>{reponse.text}</Button>
                    })
                }
            </Box>
        </>
    )
}