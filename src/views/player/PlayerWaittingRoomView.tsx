import { Box, Text } from "@chakra-ui/react"
import { animate, motion } from "framer-motion"

interface PlayerWaittingRoomViewProps {
    serieTitle: string,
    username: string
}

export default function PlayerWaittingRoomView({
    serieTitle,
    username
}: PlayerWaittingRoomViewProps) {
    
    return (
        <>
            <motion.h2
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "auto"
                }}
                animate={{ 
                    translateY: ["-200px", "0px"],
                    opacity: [0, 1],
                }}
                transition={{ 
                    type: "spring",
                    stiffness: 100
                }}
            >   
                <Text textAlign="center">{`Préparé vous `}<b>{username}</b>{`, le Quiz `}<b>{serieTitle}</b>{` va bientôt commencé !`}</Text>
            </motion.h2>
        </>
    )
}