"use client"

import { socket } from "@/socket";
import { useSearchParams, notFound } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { Player, Room } from "@/types/socket.type";
import { Question, Serie } from "@/db";
import DirectorLobbyView from "@/views/director/DirectorLobbyView";
import DirectorQuestionView from "@/views/director/DirectorQuestionView";
import DirectorFinishView from "@/views/director/DirectorFinishView";
import CircleLoader from "@/components/CicleLoader";
import DirectorEqualsView from "@/views/director/DirectorEqualsView";

enum ViewMode {
  LOBBY,
  QUESTION,
  RESPONSE,
  EQUALS,
  FINISH,
}

export default function DirectorView() {
  return (
    <Suspense>
      <DirectorViewComponent />
    </Suspense>
  )
} 

const DirectorViewComponent = () => {

  const searchParams = useSearchParams()
  const room_uid: string | null = searchParams.get('roomUID')
  const serie_id: string | null = searchParams.get('serieId')
  const ttq: string | null = searchParams.get('ttq')
  const ttr: string | null = searchParams.get('ttr')

  const [view, setView] = useState<ViewMode>(ViewMode.LOBBY)
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [room, setRoom] = useState<Room | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [player_equals, setPlayerEquals] = useState<Player[]>([])

  const fetchSerie = useCallback(async(_serie_id?: number | undefined) => {
    const response: Serie = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/series${_serie_id != undefined ? "?serie_id="+_serie_id : ""}`)
    .then((res) => { return res.json()} )
    .then((res) => { return res[0]} )
    .catch((e) => console.log(e))

    if(response) {
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

    const directorJoinCallback = (_room: Room) => {
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

    const onDirectorGameFinish =  () => {
      setView(ViewMode.FINISH)
    }

    const onDirectorGameResult = (_room: Room) => {
      setView(ViewMode.RESPONSE)
      setRoom(_room)
    }

    const onDirectorGameEquals = (_player_equals: Player[]) => {
      setView(ViewMode.EQUALS)
      setPlayerEquals(_player_equals)
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
    socket.on("director:game:equals", onDirectorGameEquals)
    socket.on("director:game:question:changed", onDirectorGameQuestionChanged)

    socket.emit("director:join", {room_uid, serie_id, ttq, ttr}, directorJoinCallback)

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
      response_mode={false}
    />
  }

  if(view == ViewMode.RESPONSE) {
    // return <DirectorReponseView
    //   room={room}
    //   currentQuestion={currentQuestion} 
    // /> 
    return <DirectorQuestionView
      room={room}
      currentQuestion={currentQuestion}
      response_mode={true}
    />
  }

  if(view == ViewMode.EQUALS) {
    return <DirectorEqualsView
      socket={socket}
      player_equals={player_equals}
    />
  }

  if(view == ViewMode.FINISH) {
    return <DirectorFinishView
      room={room} 
    />
  }

  return <CircleLoader />
}
