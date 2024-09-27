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
import { Player } from "@/types/socket.type";
import PlayerEqualsView from "@/views/player/PlayerEqualsView";

export default function PlayerView({ params }: { params: { roomid: string } }) {
    const room_uid = params.roomid
    const [username, setUsername] = useState<string>("")
    const [view, setView] = useState<PlayerViewMode>(PlayerViewMode.LOGIN)
    const [serieTitle, setSerieTitle] = useState<string>("")
    const [reponses, setReponses] = useState<Reponses>([])
    const [currentReponse, setCurrentReponse] = useState<Reponse | null>(null)
    const [result, setResult] = useState<string>("")
    const [player_equals, setPlayerEquals] = useState<Player[]>([])

    const [players, setPlayers] = useState<Player[]>([])
    const [totalQuestions, setTotalQuestions] = useState<number>(-1)

    const getSerieTitleCallback = (title: string) => {
        setSerieTitle(title)
    }
    
    useEffect(() => {

        const onPlayerGameQuestionChanged = (_reponses: Reponses) => {
            if(view != PlayerViewMode.ANSWER) {
                setView(PlayerViewMode.ANSWER)
            }
            setReponses(_reponses)
            setCurrentReponse(null)
        }
    
        const onPlayerGameResult = (_reponse: string) => {
            if(view != PlayerViewMode.RESULT) {
                setView(PlayerViewMode.RESULT)
            }
            setResult(_reponse)
        }
        
        const onPlayerGameEquals = (_player_equals: Player[]) => {
            if(view != PlayerViewMode.EQUALS) {
                setView(PlayerViewMode.EQUALS)
            }
            setPlayerEquals(_player_equals)
        }

        const onPlayerGameFinish = (_players: Player[], _total_questions: number) => {
            setTotalQuestions(_total_questions)
            setPlayers(_players)
            setView(PlayerViewMode.FINISH)
        }

        socket.on("player:game:question:changed", onPlayerGameQuestionChanged)
        socket.on("player:game:result", onPlayerGameResult)
        socket.on("player:game:equals", onPlayerGameEquals)
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
            setViewState={setView}
        />
    }

    if(view == PlayerViewMode.WAITTING) {
        return <PlayerWaittingRoomView 
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
            currentReponse={currentReponse}
        />
    }

    if(view == PlayerViewMode.EQUALS) {
        return <PlayerEqualsView
            socket={socket}
            player_equals={player_equals}
        />
    }

    if(view == PlayerViewMode.FINISH) {
        return <PlayerFinishView socket={socket} players={players} total_questions={totalQuestions} />
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            Vous avez rejoin la room #{room_uid}
        </Box>
    )
}