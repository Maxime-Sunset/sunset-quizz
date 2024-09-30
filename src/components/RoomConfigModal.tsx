import { Serie } from '@/db'
import { RoomConfig } from '@/types/socket.type'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Input,
    FormLabel,
    FormHelperText,
    FormControl,
    Spinner,
} from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'
import CircleLoader from './CicleLoader'


interface RoomConfigModalProps {
    openner: ReactElement
    serie: Serie
    onValidate: ({id, config}: {id: number, config: RoomConfig}) => void
}

export default function RoomConfigModal({ openner, serie, onValidate}: RoomConfigModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [loading, setLoading] = useState<boolean>(false)

    const Handler: React.ReactElement = React.cloneElement(openner, { onClick: onOpen})

    const [config, setConfig] = useState<RoomConfig>({
        question_time_display: 25,
        reponse_time_display: 10,
    })

    const handleQuestionTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig({
            ...config,
            question_time_display: Number(e.target.value)
        })
    }

    const handleReponseTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfig({
            ...config,
            reponse_time_display: Number(e.target.value)
        })
    }

    return (
      <>
        {Handler}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <Box textAlign="center"><u>Quizz Config</u></Box>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box><b>Title:</b> {serie.title}</Box>
                <Box><b>Difficulty:</b> {serie.difficulty}</Box>
                <Box><b>Questions:</b> {serie.questionId.length}</Box>
                <hr style={{margin: "20px 0"}} />
                <FormControl>
                    <FormLabel>{`Temp d'affichage des questions. (en secondes)`}</FormLabel>
                    <FormHelperText>{`(recommended >25s)`}</FormHelperText>
                    <Input type="number" value={config.question_time_display} onChange={(e) => handleQuestionTimeChange(e)} />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <FormLabel>{`Temp d'affichage des reponses. (en secondes)`}</FormLabel>
                    <FormHelperText>{`(recommended >10s)`}</FormHelperText>
                    <Input type="number" value={config.reponse_time_display} onChange={(e) => handleReponseTimeChange(e)} />
                </FormControl>
            </ModalBody>
  
            <ModalFooter>
              {
                <Button onClick={() => {onValidate({id: serie.id, config}); setLoading(true)}} colorScheme="green" minW="150px">
                    { !loading ? "Create Game" : <Spinner _selected="none" thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='sm'/> }
                </Button>
              }
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }