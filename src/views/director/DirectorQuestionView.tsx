import PlayerList from "@/components/PlayerList"
import { Question, Reponse } from "@/db"
import { Room } from "@/types/socket.type"
import { Box, Progress } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

interface DirectorQuestionViewProps {
  room: Room
  currentQuestion: Question | null
  response_mode: boolean
}

export default function DirectorQuestionView({ room, currentQuestion, response_mode }: DirectorQuestionViewProps) {

  const [progressTime, setProgressTime] = useState(0)

  const ResponseBox = ({ response, true_response }: { response: Reponse, true_response?: boolean }) => {
    const defineBg = () => {
      if(response_mode) {
        if(true_response) {
          return "#00fe00"
        } else {
          return "grey"
        }
      } else {
        return "orange.600"
      }
    }

    return <Box
      fontSize="2rem"
      bg={defineBg()}
      borderRadius="100px"
      color="white"
      fontWeight="bolder"
      border="solid 3px white"
      padding="10px 30px"
    >
      {response.text}
    </Box>
  }

  useEffect(() => {
  console.log(currentQuestion)

    const timeout = setInterval(() => {
      setProgressTime((current) => current += 0.01)
    }, 10)

    return () => {
      clearInterval(timeout)
    }
  }, [])

  return (
    <Box display="flex" overflow="hidden" bg="blue.200">
      <PlayerList room={room} />
      <motion.div
        style={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          height: "100vh",
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
            <Box display="flex" flexDirection="column" height="auto" minHeight="80vh" w="90%">
              <motion.h3
                style={{
                  color: "white",
                  textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black",
                  fontSize: "3.5rem"
                }}
                animate={{
                  opacity: [0, 1],
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                  type: "spring",
                  stiffness: 100
                }}
              >{currentQuestion.text}</motion.h3>

              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex="1 0" m="auto" w="auto" gap="50px" h="50%">
                <Box display="flex" alignItems="center" justifyContent="space-between" gap="20px" w="100%">
                  <ResponseBox response={currentQuestion.reponses[0]} true_response={currentQuestion.reponseId == 0} />
                  <ResponseBox response={currentQuestion.reponses[1]} true_response={currentQuestion.reponseId == 1} />
                </Box>
                <Box display="flex" justifyContent="space-between" gap="20px" w="100%">
                  <ResponseBox response={currentQuestion.reponses[2]} true_response={currentQuestion.reponseId == 2} />
                  <ResponseBox response={currentQuestion.reponses[3]} true_response={currentQuestion.reponseId == 3} />
                </Box>
              </Box>

              <Box my="10px">
                <Progress
                  sx={{
                    ">div": {
                      background: "#00fe00"
                    }
                  }}
                  opacity={response_mode ? 0 : 1}
                  w="100%"
                  h="50px"
                  borderRadius="150px"
                  border="solid 3px black"
                  min={0}
                  max={3}
                  value={progressTime}

                />
              </Box>
            </Box>
          )
        }
      </motion.div>
    </Box>
  )
}