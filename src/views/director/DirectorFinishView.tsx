import ScoreBoard from "@/components/ScoreBoard";
import { Room } from "@/types/socket.type";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface DirectorFinishViewProps {
    room: Room,
    total_question: number
}

export default function DirectorFinishView({ room, total_question }: DirectorFinishViewProps) {
    const router = useRouter()

    const handleReturnToSeries = () => {
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`)
    }

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh" gap="20px">
          <ScoreBoard room={room} total_question={total_question} />
          <Button colorScheme="green" onClick={() => handleReturnToSeries()}>Retour aux series</Button>
        </Box>
      )
}