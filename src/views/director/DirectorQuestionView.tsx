import PlayerList from "@/components/PlayerList"
import { Question, Reponse } from "@/db"
import { Room } from "@/types/socket.type"
import { Box, Heading } from "@chakra-ui/react"
import React from "react"

interface DirectorQuestionViewProps {
    room: Room
    currentQuestion: Question | null
}

export default function DirectorQuestionView({ room, currentQuestion }: DirectorQuestionViewProps) {
    return (
      <Box display="flex" flexFlow="column" h="100vh">
        <Box flex="0 1 auto">
          <PlayerList room={room} />
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" flex="1 1 auto">
          {
            currentQuestion && (
              <>
                <Heading as="h3">{currentQuestion.text}</Heading>
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
        </Box>
      </Box>
      )
}