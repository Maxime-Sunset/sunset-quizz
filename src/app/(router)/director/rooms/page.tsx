"use client"

import { socket } from "@/socket";
import { useSearchParams, notFound } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Player, Room } from "@/types/socket.type";
import { Question, Serie } from "@/db";
import DirectorLobbyView from "@/views/director/DirectorLobbyView";
import DirectorQuestionView from "@/views/director/DirectorQuestionView";
import DirectorFinishView from "@/views/director/DirectorFinishView";
import DirectorReponseView from "@/views/director/DirectorReponseView";
import CircleLoader from "@/components/CicleLoader";

enum ViewMode {
  LOBBY,
  QUESTION,
  RESPONSE,
  FINISH
}

export default function DirectorView() {

  const searchParams = useSearchParams()
  const room_uid: string | null = searchParams.get('roomUID')
  const serie_id: string | null = searchParams.get('serieId')

  const [view, setView] = useState<ViewMode>(ViewMode.LOBBY)
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [room, setRoom] = useState<any>(null)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)

  const fetchSerie = useCallback(async(_serie_id?: number | undefined) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/series/questions${_serie_id != undefined ? "?serie_id="+_serie_id : ""}`)
    .then((res) => { return res.json()} )
    .catch((e) => console.log(e))
    
    if(response) {
      console.log(response)
      setSerie(response)
    } else {
      notFound()
    }
  }, [])

  useEffect(() => {
    if(serie_id == null || room_uid == null) {
      notFound()
    }
    
    // load serie
    if(serie_id) {
      fetchSerie(Number(serie_id))
      .catch(console.error)
    }

    const directorJoinCallback = (_room: any) => {
      setRoom(_room)
    }

    const onPlayerJoin = (_player: Player, _room: Room) => {
      console.log("player:join", {_player, _room})
      setRoom(_room)
    }
    const onDirectorRoomUpdate = (_room: Room) => {
      console.log("director:room:update", { _room })
      setRoom(_room)
    }

    const onDirectorGameFinish =  (_players_score: any) => {
      console.log("fini ", serie)
      setView(ViewMode.FINISH)
    }

    const onDirectorGameResult = (_room: Room) => {
      setView(ViewMode.RESPONSE)
      setRoom(_room)
    }

    const onDirectorGameQuestionChanged = (_currentQuestion: Question) => {
      console.log("director:game:question:changed", {_currentQuestion})
      view != ViewMode.QUESTION && setView(ViewMode.QUESTION)
      setCurrentQuestion(_currentQuestion)
    }

    socket.on("player:join", onPlayerJoin) 
    socket.on("director:room:update", onDirectorRoomUpdate) 
    socket.on("director:game:finish", onDirectorGameFinish)
    socket.on("director:game:result", onDirectorGameResult)
    socket.on("director:game:question:changed", onDirectorGameQuestionChanged)

    socket.emit("director:join", {room_uid, serie_id}, directorJoinCallback)

    return () => {
      socket.off("player:join", onPlayerJoin),
      socket.off("director:room:update", onDirectorRoomUpdate),
      socket.off("director:game:finish", onDirectorGameFinish),
      socket.off("director:game:result", onDirectorGameResult),
      socket.off("director:game:question:changed", onDirectorGameQuestionChanged)
    }
  }, [])

  if(serie == undefined || room == null) { return <CircleLoader /> }

  if(view == ViewMode.LOBBY) {
    return <DirectorLobbyView
      socket={socket}
      room={room} 
    />
  }

  if(view == ViewMode.QUESTION) {
    return <DirectorQuestionView
      room={room}
      currentQuestion={currentQuestion} 
    />
  }

  if(view == ViewMode.RESPONSE) {
    return <DirectorReponseView
      room={room}
      currentQuestion={currentQuestion} 
    /> 
  }

  if(view == ViewMode.FINISH) {
    return <DirectorFinishView
      total_question={serie.questionId.length}
      room={room} 
    />
  }

  return <CircleLoader />
}
