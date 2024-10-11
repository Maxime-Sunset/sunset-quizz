import { Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

interface PlayerWaittingRoomViewProps {
    username: string
}

export default function PlayerWaittingRoomView({
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
                <Text
                    textAlign="center"
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="bolder"
                    textShadow="2px 2px 5px black"
                    mb="1rem"
                >{`Préparez-vous ${username}, le Quiz va bientôt commencer !`}</Text>
            </motion.h2>
        </>
    )
}