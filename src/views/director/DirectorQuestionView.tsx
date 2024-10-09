import LogoDisplay from "@/components/LogoDisplay"
import { Question, Reponse } from "@/db"
import { Room } from "@/types/socket.type"
import { Box, Progress } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

interface DirectorQuestionViewProps {
  room: Room
  currentQuestion: Question | null
  response_mode: boolean
}

export default function DirectorQuestionView({ room, currentQuestion, response_mode }: DirectorQuestionViewProps) {

  const [progressTime, setProgressTime] = useState(0)
  
  const audioIntervalRef = useRef<NodeJS.Timeout| null>(null)

  const reponseSoundRef = useRef<HTMLAudioElement>(null)
  const playReponseSound = () => {
    reponseSoundRef.current?.play()
  }

  const reponseSoundRef2 = useRef<HTMLAudioElement>(null)
  const playReponseSound2 = () => {
    reponseSoundRef2.current?.play()
  }

  const audioRef = useRef<HTMLAudioElement>(null)
  const playSound = () => {
    audioRef.current?.play()
  }

  const ResponseBox = ({true_response, response}: {true_response: boolean, response: Reponse}) => {
    const defineBg = () => {
      if (response_mode) {
        if (true_response) {
          return "#00fe00"
        } else {
          return "grey"
        }
      } else {
        return "#f203a6"
      }
    }

    return <Box
        fontSize="2rem"
        borderRadius="100px"
        color="white"
        fontWeight="bolder"
        border="solid 3px white"
        padding="10px 30px"
        width="100%"
        height="100%"
        backgroundColor={defineBg()}
    >
      {response.text}
    </Box>
  }

  useEffect(() => {
    const timeout = setInterval(() => {
      setProgressTime((current) => current += 0.01)
    }, 10)

    if(response_mode) {
      playReponseSound()
      playReponseSound2()
      
      return () => {
        clearInterval(timeout)
        setProgressTime(0)
        audioIntervalRef.current && clearInterval(audioIntervalRef.current)
        audioIntervalRef.current = null
      }
    }

    return () => {
      clearInterval(timeout)
      setProgressTime(0)
      audioIntervalRef.current && clearInterval(audioIntervalRef.current)
      audioIntervalRef.current = null
    }
  }, [response_mode])

  useEffect(() => {
    if(progressTime >= ((room.ttq/1000) - 6) && audioIntervalRef.current == null && response_mode == false) {
      audioIntervalRef.current = setInterval(() => {
        playSound()
      }, 1000)
    }
  }, [progressTime])

  return (
    <Box display="flex" overflowY="hidden">
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
                  fontSize: "3.5rem",
                  width: "70vw",
                  margin: "auto"
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

              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex="1" m="auto" w="100%" gap="50px" h="50%">
                <Box display="flex" alignItems="end" justifyContent="center" gap="20px" w="100%">
                  <ResponseBox response={currentQuestion.reponses[0]} true_response={currentQuestion.reponseId == 0} />
                  <ResponseBox response={currentQuestion.reponses[1]} true_response={currentQuestion.reponseId == 1} />
                </Box>
                <Box display="flex" alignItems="start" justifyContent="center" gap="20px" w="100%">
                  <ResponseBox response={currentQuestion.reponses[2]} true_response={currentQuestion.reponseId == 2} />
                  <ResponseBox response={currentQuestion.reponses[3]} true_response={currentQuestion.reponseId == 3} />
                </Box>
              </Box>

              <Box my="10px">
                {
                  !response_mode
                  &&
                  <Progress
                    sx={{
                      ">div": {
                        background: "#fec110"
                      }
                    }}
                    opacity={response_mode ? 0 : 1}
                    w="100%"
                    h="50px"
                    borderRadius="150px"
                    border="solid 3px black"
                    min={0}
                    max={room.ttq / 1000}
                    value={progressTime}

                  />
                }
              </Box>
            </Box>
          )
        }
      </motion.div>
      <LogoDisplay top />
      <audio ref={reponseSoundRef} src="/hehe.mp3" />
      <audio ref={reponseSoundRef2} src="/reponse.wav" />
      <audio ref={audioRef} src="/clock.mp3">Sound are not compatible.</audio>
    </Box>
  )
}