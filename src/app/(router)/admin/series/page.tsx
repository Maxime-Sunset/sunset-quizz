"use client"

import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import db, { Serie, Series } from "@/db";
import RoomConfigModal from "@/components/RoomConfigModal";
import { RoomConfig } from "@/types/socket.type";
import { fonts } from "@/app/fonts";

export default function AdminSeriesPage() {
    const router = useRouter()
    const series: Series = db.series

    const handlePlay = ({ id, config }: { id: number, config: RoomConfig }) => {
        const room_uid = Math.random().toString(16).slice(10)
        router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/director/rooms?roomUID=${room_uid}&serieId=${id}&ttq=${config.question_time_display}&ttr=${config.reponse_time_display}`)
    }

    return (
        <Box display="flex" flexDirection="column" minH="100vh" bgGradient={"linear(to-tl, #fbae8a, #e23552, #333333)"}>
            <Box position="absolute" zIndex="10" display="flex" w="100%" h="150px" mb="3rem" pt="2rem" justifyContent="space-between">
                <Image src="/sunset-brand.png" w="20%" alt="sunset-brand" objectFit="contain" />
            </Box>

            <Box display="flex" h="155px" zIndex="1" color="white" alignItems="end" justifyContent="center">
                <Text
                    fontFamily={fonts.fugaz_one.style.fontFamily}
                    fontSize="4rem"
                    textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                >QUIZ</Text>
            </Box>

            <Box display="flex" gap="20px" flexWrap="wrap" px="10%" mt="1rem">
                {
                    series.map((serie: Serie, index) => {
                        return (
                            <Box key={index} zIndex="10" display={serie.id == 99 ? "none" : "flex"} flex="1 1 auto" minWidth="400px" textAlign="center" mx="auto" mt="1rem">
                                <Box display="flex" flexDirection="column" m={["auto", "auto", "auto", "0"]}>
                                    <Box bg="whitesmoke" boxShadow="0 0 10px black">
                                        <Box pt="1rem">
                                            <Heading
                                                as="h3"
                                                fontFamily={fonts.fugaz_one.style.fontFamily}
                                                textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                                                color="white"
                                            >{serie.title}</Heading>
                                            <Box>{serie.questionId.length} Questions</Box>
                                        </Box>
                                        {/* <Box>Difficulté: {serie.difficulty}</Box> */}
                                        <Box display="flex" w="450px" h="250px" borderY="solid 2px black">
                                            <Image src="/mario-splash.jpg" alt="mario-splash" objectFit="cover" />
                                        </Box>

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
            <Box zIndex="0" position="fixed" display="flex" w="100%" bg="#11121E" justifyContent="center" alignItems="center" opacity="0.1" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Image src="/sunset-logo.png" alt="sunset-logo" />
            </Box>
        </Box>
    )
}