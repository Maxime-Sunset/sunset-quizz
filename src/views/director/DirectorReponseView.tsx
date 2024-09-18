import PlayerList from "@/components/PlayerList";
import { Question } from "@/db";
import { Room } from "@/types/socket.type";
import { Box, Heading, Text } from "@chakra-ui/react";

interface DirectorReponseViewProps {
    room: Room,
    currentQuestion: Question | null
}
export default function DirectorReponseView({ room, currentQuestion}: DirectorReponseViewProps) {
    return (
        <Box>
          <PlayerList room={room} />
          <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as="h3">Reponse</Heading>
            <Text>{currentQuestion && currentQuestion.reponses[currentQuestion.reponseId].text}</Text>
          </Box>
        </Box>
      )
}