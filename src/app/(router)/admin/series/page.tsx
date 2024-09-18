"use client"

import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import db, { Difficulty, Serie, Series } from "@/db";

export default function AdminSeriesPage() {
    const router = useRouter()
    const series: Series = [...db.series, ...db.series, ...db.series, ...db.series]

    const handlePlay = (id: number) => {
        const room_uid = Math.random().toString(16).slice(10)
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/director/rooms?roomUID=${room_uid}&serieId=${id}`)
    }

    return (
        <Box display="flex">
            <Box display="flex" flexWrap="wrap">
                {
                    series.map((serie: Serie, index) => {
                        return (
                            <Box key={index} display="flex" minWidth="400px" flex="1 1 auto" justifyContent="flex-start">
                                <Box display="flex" flexDirection="column" textAlign="center">
                                    <Box display="flex" flexDirection="column">
                                        <Heading as="h3">{serie.title}</Heading>
                                        <Box>{serie.questionId.length} Questions</Box>
                                        <Box>Difficulté: {serie.difficulty}</Box>
                                        <Image src="https://placehold.co/400x250" alt="" />
                                        <Button onClick={() => handlePlay(serie.id)} margin="10px 0" width="100%" colorScheme="green">PLAY</Button>
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