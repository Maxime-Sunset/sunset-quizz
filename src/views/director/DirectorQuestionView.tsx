import PlayerList from "@/components/PlayerList"
import { Question, Reponse } from "@/db"
import { Room } from "@/types/socket.type"
import { Box, Heading } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"

interface DirectorQuestionViewProps {
    room: Room
    currentQuestion: Question | null
}

export default function DirectorQuestionView({ room, currentQuestion }: DirectorQuestionViewProps) {
    return (
      <Box display="flex" overflow="hidden">
        <PlayerList room={room} />
        <motion.div
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
            alignItems: "center",
            height:"100vh",
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
          {
            currentQuestion && (
              <>
                <motion.h2
                  animate={{ 
                    opacity: [0, 1],
                  }}
                  transition={{
                      delay: 0.5,
                      duration: 1,
                      type: "spring",
                      stiffness: 100
                  }}
                >{currentQuestion.text}</motion.h2>

                <Box w="80%">
                  <Box display="flex" justifyContent="space-around" w="100%" m="200px 0">
                  {
                    currentQuestion.reponses.map((response: Reponse, index: number) => {
                      if(index%2 != 0) { return <React.Fragment key={index+"q0"} /> }
                      return <Box key={index+"q0"} border="solid 1px black" p="0.5rem 1rem" fontSize="5vh">{response.text}</Box>
                    })
                  }
                  </Box>
                  <Box display="flex" justifyContent="space-around" w="100%" m="200px 0">
                  {
                    currentQuestion.reponses.map((response: Reponse, index: number) => {
                      if(index%2 == 0) { return <React.Fragment key={index+"q1"} /> }
                      return <Box key={index+"q1"} border="solid 1px black" p="0.5rem 1rem" fontSize="5vh">{response.text}</Box>
                    })
                  }
                  </Box>
                </Box>
              </>
            )
          }
        </motion.div>
      </Box>
      )
}