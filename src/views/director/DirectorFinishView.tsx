import { Player, Room } from "@/types/socket.type";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface DirectorFinishViewProps {
  room: Room,
  total_question: number
}

export default function DirectorFinishView({ room, total_question }: DirectorFinishViewProps) {
  const router = useRouter()

  const handleReturnToSeries = () => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN}/admin/series`)
  }

  const getTopThree = (): Player[][] => {
    const sort_by_score: Player[] = room.players.sort((a, b) => b.score - a.score)
    let result: Player[][] = [[], [], []]

    for (var player of sort_by_score) {
      if (result[0].length == 0 || player.score == result[0][0].score) {
        result[0].push(player)
        continue
      }

      if (result[1].length == 0 || player.score == result[1][0].score) {
        result[1].push(player)
        continue
      }

      if (result[2].length == 0 || player.score == result[2][0].score) {
        result[2].push(player)
        continue
      }
    }

    return result
  }

  const Podium = ({ players }: { players: Player[][] }) => {
    console.log(players)
    return (
      <Box display="flex" alignItems="flex-end" justifyContent="center" h="auto" overflow="hidden">
        <Box display="block" h="75%">
          {
            players[1].map((player: Player, index: number) => {
              return (
                <Box
                  key={index + "-1"}
                  color="white"
                  textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                  fontSize="2rem"
                  fontWeight="bolder"
                >{player.username}</Box>
              )
            })
          }
          <Box bg="red.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="red.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="red.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">2</Text>
          </Box>
        </Box>

        <Box display="block" h="100%">
          {
            players[0].map((player: Player, index: number) => {
              return (
                <Box
                  key={index + "-1"}
                  color="white"
                  textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                  fontSize="2rem"
                  fontWeight="bolder"
                >{player.username}</Box>
              )
            })
          }
          <Box bg="green.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="green.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="green.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">1</Text>
          </Box>
        </Box>

        <Box display="block" h="55%">
          {
            players[2].map((player: Player, index: number) => {
              return (
                <Box
                  key={index + "-1"}
                  color="white"
                  textShadow="2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black"
                  fontSize="2rem"
                  fontWeight="bolder"
                >{player.username}</Box>
              )
            })
          }
          <Box bg="pink.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="pink.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="pink.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">3</Text>
          </Box>
        </Box>

      </Box>
    )
  }

  return (
    <Box display="flex" flexDirection="column" flex="1" justifyContent="space-between" alignItems="center" h="100vh">
      <motion.div
        style={{
          margin: "auto",
          color: "white",
          textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black",
          fontSize: "3.5rem",
          fontWeight: "bolder"
        }}
        animate={{
          opacity: [0, 0.5, 1],
          scale: [0, 0.5, 1],
          rotateZ: [0, 90, 360]
        }}
        transition={{
          delay: 0.5,
          duration: 1,
          type: "spring",
          stiffness: 100
        }}
      >
        {`Bravo aux gagnants !`}
      </motion.div>

      <Box display="flex" justifyContent="flex-end" h="60%">
        <Podium players={getTopThree()} />
      </Box>

    </Box>
  )
}