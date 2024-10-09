import { Player, Room } from "@/types/socket.type";
import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface DirectorFinishViewProps {
  room: Room,
}

export default function DirectorFinishView({ room }: DirectorFinishViewProps) {

  const victoryThemeRef = useRef<HTMLAudioElement>(null)
  const playVictoryThemeRef = () => {
    victoryThemeRef.current?.play()
  }

  useEffect(() => {
    playVictoryThemeRef()
  }, [])

  const getTopThree = (): Player[][] => {
    const sort_by_score: Player[] = room.players.sort((a, b) => b.score - a.score)
    const result: Player[][] = [[], [], []]

    for (const player of sort_by_score) {
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
    return (
      <Box display="flex" alignItems="flex-end" justifyContent="center" h="auto" overflow="visible">
        <motion.div
          style={{
            display: "block",
            height: "0%"
          }}

          animate={{
            height: ["0%", "75%"]
          }}

          transition={{
            delay: 2,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          {
            players[1].map((player: Player, index: number) => {
              return (
                <motion.div
                  key={index + "-1"}
                  style={{
                    color: "white",
                    textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                  }}

                  animate={{
                    opacity: [0, 1]
                  }}

                  transition={{
                    delay: 3,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}

                >{player.username}</motion.div>
              )
            })
          }
          <Box bg="red.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="red.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="red.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">2</Text>
          </Box>
        </motion.div>

        <motion.div
          style={{
            display: "block",
            height: "0%"
          }}

          animate={{
            height: ["0%", "100%"]
          }}

          transition={{
            delay: 3.5,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          {
            players[0].map((player: Player, index: number) => {
              return (
                <motion.div
                  key={index + "-0"}
                  style={{
                    color: "white",
                    textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                  }}

                  animate={{
                    opacity: [0, 1]
                  }}

                  transition={{
                    delay: 4.5,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                >{player.username}</motion.div>
              )
            })
          }
          <Box bg="green.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="green.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="green.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">1</Text>
          </Box>
        </motion.div>

        <motion.div
          style={{
            display: "block",
            height: "0%"
          }}

          animate={{
            height: ["0%", "55%"]
          }}

          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 100
          }}
        >
          {
            players[2].map((player: Player, index: number) => {
              return (
                <motion.div
                  key={index + "-2"}
                  style={{
                    color: "white",
                    textShadow: "2px 0 black, -2px 0 black, 0 2px 10px black, 0 -2px black, 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black",
                    fontSize: "2rem",
                    fontWeight: "bolder",
                  }}

                  animate={{
                    opacity: [0, 1]
                  }}

                  transition={{
                    delay: 1.5,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                >{player.username}</motion.div>
              )
            })
          }
          <Box bg="pink.500" w="230px" h="50px" m="auto" boxShadow="0 3px 15px -3px black"></Box>
          <Box bg="pink.600" w="200px" h="20px" m="auto" ></Box>
          <Box bg="pink.500" w="200px" h="100%" m="auto" boxShadow="0 5px 15px -3px black">
            <Text color="white" fontWeight="bolder" fontSize="140px">3</Text>
          </Box>
        </motion.div>

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
          fontWeight: "bolder",
          opacity: 0
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
      <audio ref={victoryThemeRef} src="/wltp.mp3" />
    </Box>
  )
}