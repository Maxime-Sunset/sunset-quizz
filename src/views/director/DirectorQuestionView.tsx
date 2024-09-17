import PlayerList from "@/components/PlayerList"
import { Question, Reponse } from "@/db"
import { Room } from "@/types/socket.type"
import { Box, Button, Heading } from "@chakra-ui/react"

interface DirectorQuestionViewProps {
    room: Room
    currentQuestion: Question | null
}

export default function DirectorQuestionView({ room, currentQuestion }: DirectorQuestionViewProps) {
    return (
        <Box>
          <Box>
            <PlayerList room={room} />
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            {
              currentQuestion && (
                <>
                  <Heading as="h3">{currentQuestion.text}</Heading>
                    <Box>
                    {
                      currentQuestion.reponses.map((response: Reponse, index: number) => {
                        return <Button key={index}>{response.text}</Button>
                      })
                    }   
                    </Box>
                </>
              )
            }
          </Box>
        </Box>
      )
}