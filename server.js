import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

const API_ENDPOINT = `http://${hostname}:${port}/api`
const QUESTION_TIME_DISPLAY = 10 *1000
const RESPONSE_TIME_DISPLAY = 5 *1000

// CACHE
let room = {}
let questions = []

const getdb = async () => {
  const db = await fetch(API_ENDPOINT)
  .then((res) => res.json())
  .catch((e) => console.log(e))
  return db
}

const incrementeScore = (io) => {
  // calculate score for each players
  // let playerData = {
  //   id: socket.id,
  //   username: socket.data.username,
  //   score: socket.data.score,
  //   current_reponse: socket.data.current_reponse
  // }
  room.players.forEach((player) => {
    if(player.current_reponse == questions[0].reponseId) {
      player.score += 1
    }
    player.current_reponse = -1
  })

  io.to(room.director).emit("director:room:update", room)
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
  setTimeout(nextQuestion, RESPONSE_TIME_DISPLAY, io)
}

const nextQuestion = (io) => {
  questions.shift()
  
  if(questions.length <= 0) {
    // GAME FINISH

    room.players.sort((a, b) => a.score - b.score ) // score context

    io.to(room.director).emit("director:game:finish", room.players)
    io.to(room.uid).emit("player:game:finish", room.players)
    return
  }

  room.current_question_id = questions[0].id
  var current_question = questions[0]

  io.to(room.director).emit("director:room:update", room)
  io.to(room.director).emit("director:game:question:changed", current_question)
  io.to(room.uid).emit("player:game:question:changed", current_question.reponses)
  setTimeout(displayReponse, QUESTION_TIME_DISPLAY, io)
}

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log(`io: socket connected ${socket.id}`)

    // ## DIRECTOR EVENTS ##
    // WHEN DIRECTOR ASK TO JOIN A ROOM
    socket.on("director:join", ({room_uid, serie_id}, callback) => {
      socket.join(`${room_uid}`)

      room = {
        uid: room_uid,
        players: [],
        director: socket.id,
        serie_id: serie_id,
        current_question_id: null,
      }

      callback(room)
      console.log("room create: ", room)
    })

    socket.on("director:game:start", async () => {
      // load questions in cache
      questions = await getQuestions(room.serie_id)
      shuffleArray(questions)

      // get next questions
      room.current_question_id = questions[0].id
      var current_question = questions[0]

      console.log("Question: ", current_question)

      // send next question to director
      io.to(room.director).emit("director:room:update", room)
      io.to(room.director).emit("director:game:question:changed", current_question)
      
      // send next responses to players
      io.to(room.uid).emit("player:game:question:changed", current_question.reponses)

      setTimeout(displayReponse, QUESTION_TIME_DISPLAY, io)
    })

    
    // ## PLAYER EVENTS ##
    // WHEN THE PLAYER ASK TO JOIN A ROOM
    socket.on("player:join", ({username, room_uid}) => {

      // Load new Player or reload a reconnection player
      if(socket.data.username == null) {
        socket.data.username = username
      }
      if(socket.data.score == null) {
        socket.data.score = -1
      }
      if(socket.data.current_reponse == null) {
        socket.data.current_reponse = -1
      }

      socket.join(room_uid)

      let playerData = {
        id: socket.id,
        username: socket.data.username,
        score: socket.data.score,
        current_reponse: socket.data.current_reponse
      }

      // add new player or replace if exist
      if(room.players.find((player) => player.id == socket.id)) {
        let p_index = room.players.findIndex((player) => player.id == socket.id)
        room.players[p_index] = playerData
      } else {
        room.players.push(playerData)
      }

      io.to(room.director).emit("player:join", playerData, room)
    })

    socket.on("player:reponse", ({reponse_id}) => {
      socket.data.current_reponse = reponse_id
      let p_index = room.players.findIndex((player) => player.id == socket.id)
      room.players[p_index] = {
        ...room.players[p_index],
        current_reponse: reponse_id 
      }
      io.to(room.director).emit("director:room:update", room)
      console.log("player:reponse: ", socket.data.username, socket.data.current_reponse)
    })

    // ## DB CALLS ##
    socket.on("get:serie:title", async ({}, callback) => {
      const db = await getdb()
      const title = db.series.find((serie) => serie.id == room.serie_id).title
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
}