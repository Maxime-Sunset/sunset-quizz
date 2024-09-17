export type Player = {
    id: string
    username: string
    score: number
    current_reponse: number
}

export type Room = {
    uid: number,
    players: Player[],
    director: number,
    serie_id: number,
    current_question_id: number,
}