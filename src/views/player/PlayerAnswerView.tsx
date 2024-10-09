import { Reponse, Reponses } from "@/db";
import { Box } from "@chakra-ui/react";
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
        socket.emit("player:reponse", { reponse_id })
        setCurrentReponse(reponse)
    }

    const ResponseButton = ({ reponse, reponse_id }: { reponse: Reponse, reponse_id: number }) => {
        return (
            <Box
                onClick={() => handleSendReponse(reponse, reponse_id)}
                my="1rem"
                fontSize="1.2rem"
                borderRadius="30px"
                color="white"
                fontWeight="bolder"
                border="solid 3px white"
                padding="5px 10px"
                boxShadow="0 3px 15px -3px black"
                bg={reponse != currentReponse ? "#24b3fb" : "#f203a6"}
            >{reponse.text}</Box>
        )
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" h="100%" w="100%">
            {
                reponses.map((reponse: Reponse, index: number) => {
                    return <ResponseButton key={index} reponse={reponse} reponse_id={index} />
                })
            }
        </Box>
    )
}