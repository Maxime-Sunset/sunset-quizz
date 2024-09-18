import PlayerList from "@/components/PlayerList";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Room } from "@/types/socket.type";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Socket } from "socket.io-client";
import { SiGooglelens } from "react-icons/si";

interface DirectorLobbyViewProps {
    socket: Socket
    room: Room
}

export default function DirectorLobbyView({ socket, room }: DirectorLobbyViewProps) {
    const handleStartGame = () => {
        socket.emit("director:game:start")
    }

    return (
      <Box display="flex">
        <PlayerList room={room} />
        <Box display="flex" flex="1" flexDirection="column" justifyContent="center" gap="1rem" alignItems="center" h="100vh">
          <Heading as="h3">Scan le QR Code ou rend toi à cette url</Heading>
          {/* <QRCodeGenerator href={`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`} /> */}
          <QRCodeGenerator href={`${process.env.NEXT_PUBLIC_CLIENT_LOCAL_DOMAIN}/player/${room.uid}`} />
          <Box textAlign="center" bg="grey" border="solid 1px black">{`Recherché le logo`}<Box display="flex" justifyContent="center"><SiGooglelens size="60px" /></Box>{`sur votre mobile pour scanné le QrCode et accedé à au jeux.`}</Box>
          <Box>{`${process.env.NEXT_PUBLIC_CLIENT_LOCAL_DOMAIN}/player/${room.uid}`}</Box>
          <Button onClick={() => handleStartGame()} colorScheme="green">Start Game</Button>
        </Box>
      </Box>

      )
}