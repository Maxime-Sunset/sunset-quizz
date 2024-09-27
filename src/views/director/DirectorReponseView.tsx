import PlayerList from "@/components/PlayerList";
import { Question } from "@/db";
import { Room } from "@/types/socket.type";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface DirectorReponseViewProps {
  room: Room,
  currentQuestion: Question | null
}

export default function DirectorReponseView({ room, currentQuestion }: DirectorReponseViewProps) {
  return (
    <Box display="flex">
      <PlayerList room={room} />
      <Box display="flex" flex="1" flexDirection="column" justifyContent="center" gap="1rem" alignItems="center" h="100vh">
        <motion.h3
          animate={{
            scale: ["0%", "100%"],
            opacity: [0, 1]
          }}
          transition={{
            type: "spring",
            stiffness: 100
          }}
        >Reponse</motion.h3>
        <motion.text
          animate={{
            translateY: [-50, 0],
            opacity: [0, 1]
          }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "spring ",
            stiffness: 100
          }}
        >{currentQuestion && currentQuestion.reponses[currentQuestion.reponseId].text}</motion.text>
      </Box>
    </Box>
  )
}