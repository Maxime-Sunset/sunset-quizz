import ScoreBoard from "@/components/ScoreBoard";
import { Room } from "@/types/socket.type";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface DirectorFinishViewProps {
    room: Room
}

export default function DirectorFinishView({ room }: DirectorFinishViewProps) {
    const router = useRouter()

    const handleReturnToSeries = () => {
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`)
    }

    return (
        <Box display="flex" flexDirection="column" flex="1">
          <ScoreBoard room={room} />
          <Button colorScheme="green" onClick={() => handleReturnToSeries()}>Retour aux series</Button>
        </Box>
      )
}