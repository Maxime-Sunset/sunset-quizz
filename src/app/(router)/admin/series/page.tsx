"use client"

import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import db, { Serie, Series } from "@/db";
import RoomConfigModal from "@/components/RoomConfigModal";
import { RoomConfig } from "@/types/socket.type";

export default function AdminSeriesPage() {
    const router = useRouter()
    const series: Series = db.series

    const handlePlay = ({id, config}: {id: number, config: RoomConfig}) => {
        const room_uid = Math.random().toString(16).slice(10)
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/director/rooms?roomUID=${room_uid}&serieId=${id}&ttq=${config.question_time_display}&ttr=${config.reponse_time_display}`)
    }
    
    return (
        <Box display="flex" justifyContent="space-evenly" h="100vh" bgGradient={"linear(to-t, #7928CA, #FF0080)"}>
            <Box display="flex" gap="20px" flexWrap="wrap">
                {
                    series.map((serie: Serie, index) => {
                        return (
                            <Box key={index} display="flex" flex="1 1 auto" minWidth="400px" textAlign="center" mt="1rem">
                                <Box display="flex" flexDirection="column">
                                    <Box bg="whitesmoke" boxShadow="0 0 10px black">
                                        <Heading as="h3">{serie.title}</Heading>
                                        <Box>{serie.questionId.length} Questions</Box>
                                        <Box>Difficulté: {serie.difficulty}</Box>
                                        <Image src="https://placehold.co/400x250" alt="" />

                                        <RoomConfigModal
                                            openner={<Button borderRadius="none" width="100%" colorScheme="green">PLAY</Button>}
                                            serie={serie}
                                            onValidate={handlePlay}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}