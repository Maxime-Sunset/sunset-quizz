"use client"

import { useEffect, useState } from "react";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { socket } from "@/socket";
import { Reponse, Reponses } from "@/db";

enum ViewMode {
    LOGIN,
    WAITTING,
    ANSWER,
    RESULT,
    FINISH
}

export default function PlayerView({ params }: any) {
    const room_uid = params.roomid
    const [username, setUsername] = useState<string>("")
    const [view, setView] = useState<ViewMode>(ViewMode.LOGIN)
    const [serieTitle, setSerieTitle] = useState<string>("")
    const [reponses, setReponses] = useState<Reponses>([])
    const [currentReponse, setCurrentReponse] = useState<Reponse | null>(null)
    const [result, setResult] = useState<string>("")

    const handleUsername = () => {
        socket.emit("player:join", { username, room_uid })
        setView(ViewMode.WAITTING)
    }

    const handleSendReponse = (reponse: Reponse, reponse_id: number) => {
        socket.emit("player:reponse", reponse_id)
        setCurrentReponse(reponse)
    }

    const getSerieTitleCallback = (title: string) => {
        setSerieTitle(title)
    }

    useEffect(() => {
        const onPlayerGameQuestionChanged = (_reponses: Reponses) => {
            if(view != ViewMode.ANSWER) {
                setView(ViewMode.ANSWER)
            }
            setReponses(_reponses)
        }
        const onPlayerGameResult = (_reponse: string) => {
            if(view != ViewMode.RESULT) {
                setView(ViewMode.RESULT)
            }
            console.log(_reponse)
            setResult(_reponse)
        }

        const onPlayerGameFinish = (_players_score: any) => {
            setView(ViewMode.FINISH)
        }

        socket.on("player:game:question:changed", onPlayerGameQuestionChanged)
        socket.on("player:game:result", onPlayerGameResult)
        socket.on("player:game:finish", onPlayerGameFinish)
        
        socket.emit("get:serie:title", { room_uid }, getSerieTitleCallback)

        return () => {
            socket.off("player:game:question:changed", onPlayerGameQuestionChanged)
            socket.off("player:game:result", onPlayerGameResult)
            socket.off("player:game:finish", onPlayerGameFinish)
        }
    }, [])

    if(view == ViewMode.LOGIN) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center">
                <Heading as="h1">{serieTitle}</Heading>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} />
                <Button onClick={() => handleUsername()}>Validate</Button>
            </Box>
        )
    }

    if(view == ViewMode.WAITTING) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Heading as="h1">{serieTitle}</Heading>
                <Heading as="h2">{`Préparé vous ${username}, le Quiz va bientôt commencé !`}</Heading>
            </Box>
        )
    }

    if(view == ViewMode.ANSWER) {
        return (
            <Box display="flex" flexDirection="column" h="100vh" justifyContent="center">
                <Box display="flex" flexDirection="column" h="auto" m="1rem">
                    {
                        reponses.map((reponse: Reponse, index) => {
                            return <Button onClick={() => handleSendReponse(reponse, index)} my="1rem" key={index} bg={reponse == currentReponse?"green.700":"green.500"}>{reponse.text}</Button>
                        })
                    }
                </Box>
            </Box>
        )
    }
    
    if(view == ViewMode.RESULT) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center">
                <Heading as="h3">REPONSE</Heading>
                <Heading as="h4">{result}</Heading>
            </Box>
        )
    }

    if(view == ViewMode.FINISH) {
        return (
            <Box display="flex" flexDirection="column" alignItems="center">
                <Heading as="h3">Le Quiz est fini.</Heading>
                <Heading as="h4"></Heading>
            </Box>
        )
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            Vous avez rejoin la room #{room_uid}
        </Box>
    )
}