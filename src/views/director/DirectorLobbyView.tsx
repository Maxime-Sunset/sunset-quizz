import PlayerList from "@/components/PlayerList";
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { Room } from "@/types/socket.type";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Socket } from "socket.io-client";
import { SiGooglelens } from "react-icons/si";
import React from "react";
import Image from "next/legacy/image";
import ImageTitle from "../../../public/titre_mario.png";

interface DirectorLobbyViewProps {
  socket: Socket
  room: Room
}

export default function DirectorLobbyView({ socket, room }: DirectorLobbyViewProps) {

  const handleStartGame = () => {
    socket.emit("director:game:start")
  }

  const DisplayFastLink = () => {
    if(process.env.NEXT_PUBLIC_NODE_ENV == "dev") {
      return <a href={`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`}>{`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`}</a>
    }
    return <React.Fragment></React.Fragment>
  }
  
  const QRcode = () => {
    if(process.env.NEXT_PUBLIC_NODE_ENV == "dev") {
      return <QRCodeGenerator href={`${process.env.NEXT_PUBLIC_DOMAIN_DEV}/player/${room.uid}`} />
    }
    return <QRCodeGenerator href={`${process.env.NEXT_PUBLIC_DOMAIN}/player/${room.uid}`} />
  }

  return (
    <Box display="flex">
      <PlayerList players={room.players} />
      <Box display="flex" flex="1" flexDirection="column" justifyContent="center" gap="1rem" alignItems="center" h="100vh">
        
        <Image src={ImageTitle} alt="" />
        
        <Heading
          as="h3"
          color="white"
          textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black,
                      1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
          fontSize="3.5rem">Scannez le QrCode pour participez</Heading>

        <Box borderRadius="20%" border="solid 10px #00ff00" bg="white" boxShadow="0 3px 15px -3px black">
          <QRcode />
        </Box>
        
        <DisplayFastLink />

        <Box display="flex" textAlign="center" bg="white" borderWidth="3px" borderColor="cyan.400" color="cyan.400" borderRadius="50px" padding="3px 10px"
          boxShadow="0 3px 15px -3px black" fontSize="1.2rem"
        >
          {`Pour scannez, recherchez le logo`}<Box m="auto" padding="0 5px"><SiGooglelens size="20px" /></Box>{`sur votre mobile`}
        </Box>

        <Button onClick={() => handleStartGame()} _hover={{ bg:"cyan" }} boxShadow="0 3px 15px -3px black" fontSize="1.5rem" mt="2rem" bg="cyan.400" borderRadius="50px" color="white" border="solid 3px white" padding="20px">START</Button>
      </Box>
    </Box>

  )
}