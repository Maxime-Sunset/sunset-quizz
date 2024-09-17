"use client"

import { socket } from "@/socket";
import { useSearchParams, notFound, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import PlayerList from "@/components/PlayerList";
import { Player, Room } from "@/types/socket.type";
import { Question, Reponse, Serie } from "@/db";
import ScoreBoard from "@/components/ScoreBoard";

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

  const router = useRouter()

  const [view, setView] = useState<ViewMode>(ViewMode.LOBBY)
  const [serie, setSerie] = useState<Serie | undefined>(undefined)
  const [room, setRoom] = useState<any>(null)
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)

  const fetchSerie = useCallback(async(_serie_id?: number) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/series/questions${_serie_id ? "?serie_id="+_serie_id : ""}`)
    .then((res) => res.json())
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

  // BUTTON HANDLERS
  const handleStartGame = () => {
    socket.emit("director:game:start")
  }

  const handleReturnToSeries = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`)
  }

  if(serie == undefined || room == null) { return <Box>Loading DATA</Box> }

  if(view == ViewMode.LOBBY) {
    return (
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading as="h3">Scan le QR Code ou rend toi à cette url:</Heading>
        <p>{`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`}</p>

        <PlayerList room={room} />
        
        <Button onClick={() => handleStartGame()} margin="10px 0" colorScheme="green">Start Game</Button>
      </Box>
    )
  }

  if(view == ViewMode.QUESTION) {
    return (
      <Box>
        <Box>
          <PlayerList room={room} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          {
            currentQuestion && (
              <>
                <Heading as="h3">{currentQuestion.text}</Heading>
                  <Box>
                  {
                    currentQuestion.reponses.map((response: Reponse, index) => {
                      return <Button key={index}>{response.text}</Button>
                    })
                  }   
                  </Box>
              </>
            )
          }
        </Box>
      </Box>
    )
  }

  if(view == ViewMode.RESPONSE) {
    return (
      <Box>
        <PlayerList room={room} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading as="h3">Reponse</Heading>
          <Heading as="h4">{currentQuestion && currentQuestion.reponses[currentQuestion.responseId].text}</Heading>
        </Box>
      </Box>
    )
  }

  if(view == ViewMode.FINISH) {
    return (
      <Box display="flex" flexDirection="column" flex="1">
        <ScoreBoard room={room} />
        <Button colorScheme="green" onClick={() => handleReturnToSeries()}>Retour aux series</Button>
      </Box>
    )
  }


  return <Box>Loading PAGE</Box>
}
