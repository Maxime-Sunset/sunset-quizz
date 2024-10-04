import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3000;

console.log(dev ? "development" : "production", hostname, port)

const app = next({ dev, hostname, port })
const handler = app.getRequestHandler();

const API_ENDPOINT = dev ? `http://${hostname}:${port}/api` : `${process.env.NEXT_PUBLIC_DOMAIN}/api`

// CACHE
let room = {}
let questions = []
let connected_sockets = new Set()

// equals context
let ultimate_question = null
let players_equal = []
let players_equal_result = []

const getdb = async () => {
  const db = await fetch(API_ENDPOINT)
    .then((res) => res.json())
    .catch((e) => console.log(e))
  return db
}

const incrementeScore = (io) => {
  room.players.forEach((player) => {
    if (player.current_reponse == questions[0].reponseId) {
      player.score += 1
    }
    player.current_reponse = -1
  })

  io.to(room.director).emit("director:room:update", room)
}

const getEquals = (players) => {
  players.sort((a, b) => b.score - a.score)
  let scores = {}

  players.forEach((player) => {
    if (!scores[player.score]) {
      scores[player.score] = [player]
    } else {
      scores[player.score] = [
        ...scores[player.score],
        player
      ]
    }
  })

  console.log("scores", scores)

  let sorted_scores_keys = Object.keys(scores).sort((a, b) => b - a)
  console.log(sorted_scores_keys)
  let sorted_scores = []

  for (let i = 0; i < sorted_scores_keys.length; i++) {
    sorted_scores.push(scores[sorted_scores_keys[i]])
  }

  let equals = []
  let count = 0
  sorted_scores.forEach((top, index) => {
    top.forEach((p) => {
      p.score = 10000 - (index * 1000)
    })
    if (top.length != 1 && count < 3) {
      top.forEach((p) => {
        equals.push(p)
        count += 1
      })
    } else {
      count += 1
    }
  })

  console.log(equals)
  return equals
}

const getQuestions = async (serie_id) => {
  const questions = await fetch(`${API_ENDPOINT}/series/questions?serie_id=${serie_id}`)
    .then((res) => res.json())
    .catch((e) => console.log(e))
  return questions
}

const displayReponse = (io) => {
  let question = questions[0]
  let reponse = question.reponses[question.reponseId].text

  // Calculate score
  incrementeScore(io)

  io.to(room.director).emit("director:game:result", room)
  io.to(room.uid).emit("player:game:result", reponse)
  setTimeout(nextQuestion, room.ttr, io)
}

const displayUltimateReponse = (io) => {
  let question = ultimate_question
  let reponse = question.reponses[question.reponseId].text

  // Calculate ultimate score
  players_equal_result.reverse()
  let player_result = []
  players_equal_result.forEach((result) => {
    if (!player_result.find((res) => res.player.id == result.player.id)) {
      player_result.push(result)
    }
  })
  player_result.reverse()

  for (let i = 0; i < player_result.length; i++) {
    let p_index = room.players.findIndex((player) => player.id == player_result[i].player.id)
    let new_score = room.players[p_index].score

    if (player_result[i].reponse_id == question.reponseId) {
      new_score += (player_result.length - i)
    } else {
      new_score -= 100
      new_score += (player_result.length - i)
    }

    room.players[p_index] = {
      ...room.players[p_index],
      score: new_score
    }
  }

  io.to(room.director).emit("director:game:result", room)
  io.to(room.uid).emit("player:game:result", reponse)
  setTimeout(finishGameAfterUltimate, room.ttr, io)
}

const finishGameAfterUltimate = (io) => {
  io.to(room.director).emit("director:game:finish", room.players)
  io.to(room.uid).emit("player:game:finish", room.players)
  room = {}
}

const nextQuestion = (io) => {
  questions.shift()

  if (questions.length <= 0) {
    // GAME FINISH

    // count equals
    players_equal = getEquals(room.players)

    if (players_equal.length > 1) {
      players_equal_result = []
      io.to(room.director).emit("director:game:equals", players_equal)
      io.to(room.uid).emit("player:game:equals", players_equal)
      return
    }

    io.to(room.director).emit("director:game:finish", room.players)
    io.to(room.uid).emit("player:game:finish", room.players)
    room = {}
    return
  }

  room.current_question_id = questions[0].id
  var current_question = questions[0]

  io.to(room.director).emit("director:room:update", room)
  io.to(room.director).emit("director:game:question:changed", current_question)
  io.to(room.uid).emit("player:game:question:changed", current_question.reponses)
  setTimeout(displayReponse, room.ttq, io)
}

const disconnect_all_socket = () => {
  Array.from(connected_sockets).forEach((s) => {
    if (!s.data.is_director) {
      s.disconnect(true)
    }
  })
}


app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`io: socket connected ${socket.id}`)

    connected_sockets.add(socket)

    socket.on("disconnect", () => {
      console.log(`io: socket disconnect ${socket.id} .. ${socket.data.is_director}`)
      connected_sockets.delete(socket)
    })

    // ## DIRECTOR EVENTS ##
    // WHEN DIRECTOR ASK TO JOIN A ROOM
    socket.on("director:join", ({ room_uid, serie_id, ttq, ttr }, callback) => {
      socket.join(`${room_uid}`)
      socket.data.is_director = true

      disconnect_all_socket()

      room = {
        uid: room_uid,
        players: [],
        director: socket.id,
        serie_id: serie_id,
        current_question_id: null,
        ttq: ttq * 1000,
        ttr: ttr * 1000
      }

      console.log("room create: ", room)
      callback(room)
    })

    socket.on("director:game:start", async () => {
      // load questions in cache
      var data = await getQuestions(room.serie_id)
      questions = data.filter((q) => q.ultimate == false)
      ultimate_question = data.filter((q) => q.ultimate == true)[0]

      questions = shuffleArray(questions)

      // get next questions
      room.current_question_id = questions[0].id
      var current_question = questions[0]

      console.log("Question: ", current_question)

      // send next question to director
      io.to(room.director).emit("director:room:update", room)
      io.to(room.director).emit("director:game:question:changed", current_question)

      // send next responses to players
      io.to(room.uid).emit("player:game:question:changed", current_question.reponses)

      setTimeout(displayReponse, room.ttq, io)
    })

    socket.on("director:game:equals:question", async () => {
      // get ultimate questions
      var current_question = ultimate_question

      console.log("Question: ", current_question)

      // send next question to director
      io.to(room.director).emit("director:room:update", room)
      io.to(room.director).emit("director:game:question:changed", current_question)

      // send next responses to players contested
      players_equal.forEach((p) => {
        io.to(p.id).emit("player:game:question:changed", current_question.reponses)
      })

      setTimeout(displayUltimateReponse, room.ttq, io)
    })


    // ## PLAYER EVENTS ##
    // WHEN THE PLAYER ASK TO JOIN A ROOM
    socket.on("player:join", ({ username, room_uid }) => {

      // Load new Player or reload a reconnection player
      if (socket.data.username == null) {
        socket.data.username = username
      }
      if (socket.data.score == null) {
        socket.data.score = -1
      }
      if (socket.data.current_reponse == null) {
        socket.data.current_reponse = -1
      }

      if (room.uid != room_uid) {
        socket.disconnect(true)
        return
      }

      socket.join(room_uid)

      let playerData = {
        id: socket.id,
        username: socket.data.username,
        score: socket.data.score,
        current_reponse: socket.data.current_reponse
      }

      // add new player or replace if exist
      if (room.players.find((player) => player.id == socket.id)) {
        let p_index = room.players.findIndex((player) => player.id == socket.id)
        room.players[p_index] = playerData
      } else {
        room.players.push(playerData)
      }

      io.to(room.director).emit("player:join", playerData, room)
    })

    socket.on("player:reponse", ({ reponse_id }) => {
      socket.data.current_reponse = reponse_id
      let p_index = room.players.findIndex((player) => player.id == socket.id)
      room.players[p_index] = {
        ...room.players[p_index],
        current_reponse: reponse_id
      }

      // on ultimate question
      if (ultimate_question != null) {
        players_equal_result.push({ player: room.players[p_index], reponse_id })
      }

      io.to(room.director).emit("director:room:update", room)
      console.log("player:reponse: ", socket.data.username, socket.data.current_reponse)
    })

    // ## DB CALLS ##
    socket.on("get:serie:title", async ({ }, callback) => {
      const db = await getdb()
      const title = room.serie_id ? db.series.find((serie) => serie.id == room.serie_id).title : ""
      callback(title)
    })
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    })
});

function shuffleArray(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}