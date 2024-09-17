import PlayerList from "@/components/PlayerList";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Room } from "@/types/socket.type";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Socket } from "socket.io-client";

interface DirectorLobbyViewProps {
    socket: Socket
    room: Room
}

export default function DirectorLobbyView({ socket, room }: DirectorLobbyViewProps) {
    const handleStartGame = () => {
        socket.emit("director:game:start")
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading as="h3">Scan le QR Code ou rend toi à cette url:</Heading>
          {/* <QRCodeGenerator href={`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`} /> */}
          <QRCodeGenerator href={`http://192.168.1.96:3000/player/${room.uid}`} />
          <Box>{`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`}</Box>
          
          <br />
          <PlayerList room={room} />
          
          <Button onClick={() => handleStartGame()} margin="10px 0" colorScheme="green">Start Game</Button>
        </Box>
      )
}