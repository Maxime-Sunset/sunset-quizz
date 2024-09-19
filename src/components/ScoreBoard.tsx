"use client"

import { Player, Room } from "@/types/socket.type";
import { Box, List, ListItem, Progress } from "@chakra-ui/react";

interface ScoreBoardProps {
    room: Room,
    total_question: number,
    items?: number
}

export default function ScoreBoard({ room, total_question, items }: ScoreBoardProps) {
    /*
    room.players = [
        ...room.players,
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
        {
            id: "qsd561az6qsd",
            current_reponse: -1,
            score: Math.floor(Math.random() * 10),
            username: "test"
        },
    ]
    */
   
    room.players.sort((a, b) => b.score - a.score)

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100%">
            <List display="flex" flexDirection="column" justifyContent="center" alignItems="center" w="100%">
            {
                room.players.map((player: Player, index: number) => {
                    if(items && index >= items) return <></>
                    return (
                        <ListItem key={index} display="flex" alignItems="center" gap="20px" w="50%">
                            <Box>{player.username}</Box>
                            <Progress value={player.score+1} min={0} max={total_question} w="100%" />
                        </ListItem>
                    )
                })
            }
            </List>
        </Box>
    )
}