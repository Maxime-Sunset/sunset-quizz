"use client";

import { useEffect, useState } from "react";
import { socket } from "../../../socket.js";

type Message = {
  username: string,
  text: string
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessage] = useState<Message[]>([{username: "ADMIN", text: "Hello World"}])
  const [input, setInput] = useState<string>("")

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    const onMessageReceived = (messageReceived: Message) => {
      setMessage(messages => [...messages, messageReceived])
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("msg", onMessageReceived)

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("msg", onMessageReceived)
    };

  }, []);

  function handleInput() {
    if(input == "/history") {
      socket.emit("get-history")
      setInput("")
      return
    }

    if(input.length > 0) {
      const message: Message = {username: socket.id || "Anonymous", text: input}
      socket.emit("msg", message)
      setInput("")
    }
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <p>Status: { isConnected ? "connected" : "disconnected" }</p>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "start", height: "500px", background: "darkgrey"}}>
        <ul style={{listStyleType: "none"}}>
        {
          messages.map((message: Message, index) => {
            return <li key={index}><b>{message.username}</b>: {message.text}</li>
          })
        }
        </ul>
        <div style={{display: "flex", justifyContent: "center", height: "40px", width: "100%", padding: "5px 1%", background: "grey"}}>
          <input onKeyDown={(e) => e.key === "Enter"?handleInput():0} onChange={(e) => setInput(e.target.value)} value={input} style={{height: "100%", width: "100%"}} />
          <button onClick={() => handleInput()} style={{minWidth: "70px"}}>SEND</button>
        </div>
      </div>
    </div>
  );
}