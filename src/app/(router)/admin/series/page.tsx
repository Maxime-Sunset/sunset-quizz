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
        <Box display="flex" justifyContent="space-evenly">
            <Box display="flex" gap="20px" flexWrap="wrap">
                {
                    series.map((serie: Serie, index) => {
                        return (
                            <Box key={index} display="flex" minWidth="400px" flex="1 1 auto" textAlign="center">
                                <Box display="flex" flexDirection="column">
                                    <Heading as="h3">{serie.title}</Heading>
                                    <Box>{serie.questionId.length} Questions</Box>
                                    <Box>Difficulté: {serie.difficulty}</Box>
                                    <Image src="https://placehold.co/400x250" alt="" />
                                    {/* <Button margin="10px 0" width="100%" colorScheme="green" onClick={() => handlePlay(serie.id)}>PLAY</Button> */}

                                    <RoomConfigModal
                                        openner={<Button margin="10px 0" width="100%" colorScheme="green">PLAY</Button>}
                                        serie={serie}
                                        onValidate={handlePlay}
                                    />
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}