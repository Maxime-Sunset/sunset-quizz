"use client"

import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { socket } from "@/socket";
import { Reponse, Reponses } from "@/db";
import { PlayerViewMode } from "@/types/view.type";
import PlayerLoginView from "@/views/player/PlayerLoginView";
import PlayerWaittingRoomView from "@/views/player/PlayerWaittingRoomView";
import PlayerAnswerView from "@/views/player/PlayerAnswerView";
import PlayerResultView from "@/views/player/PlayerResultView";
import PlayerFinishView from "@/views/player/PlayerFinishView";


export default function PlayerView({ params }: any) {
    const room_uid = params.roomid
    const [username, setUsername] = useState<string>("")
    const [view, setView] = useState<PlayerViewMode>(PlayerViewMode.LOGIN)
    const [serieTitle, setSerieTitle] = useState<string>("")
    const [reponses, setReponses] = useState<Reponses>([])
    const [currentReponse, setCurrentReponse] = useState<Reponse | null>(null)
    const [result, setResult] = useState<string>("")

    const getSerieTitleCallback = (title: string) => {
        setSerieTitle(title)
    }
    useEffect(() => {

        const onPlayerGameQuestionChanged = (_reponses: Reponses) => {
            if(view != PlayerViewMode.ANSWER) {
                setView(PlayerViewMode.ANSWER)
            }
            setReponses(_reponses)
        }
    
        const onPlayerGameResult = (_reponse: string) => {
            if(view != PlayerViewMode.RESULT) {
                setView(PlayerViewMode.RESULT)
            }
            setResult(_reponse)
        }
    
        const onPlayerGameFinish = (_players_score: any) => {
            setView(PlayerViewMode.FINISH)
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

    if(view == PlayerViewMode.LOGIN) {
        return <PlayerLoginView 
            socket={socket}
            roomId={room_uid}
            serieTitle={serieTitle}
            usernameState={[username, setUsername]}
            viewState={[view, setView]}
        />
    }

    if(view == PlayerViewMode.WAITTING) {
        return <PlayerWaittingRoomView 
            serieTitle={serieTitle}
            username={username}
        />
    }

    if(view == PlayerViewMode.ANSWER) {
        return <PlayerAnswerView
            socket={socket}
            currentReponseState={[currentReponse, setCurrentReponse]}
            reponses={reponses}
        />
    }
    
    if(view == PlayerViewMode.RESULT) {
        return <PlayerResultView
            result={result}
        />
    }

    if(view == PlayerViewMode.FINISH) {
        return <PlayerFinishView />
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            Vous avez rejoin la room #{room_uid}
        </Box>
    )
}