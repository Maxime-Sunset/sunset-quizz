export type Player = {
    id: string
    username: string
    score: number
    current_reponse: number
}

export type Room = {
    uid: number,
    players: Player[],
    director: string,
    serie_id: number,
    current_question_id: number,
    ttq: number, //( time to question )
    ttr: number, //( time to response )
}

export type RoomConfig = {
    question_time_display: number
    reponse_time_display: number
}