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
} from '@chakra-ui/react'
import React, { ReactElement, useState } from 'react'


interface RoomConfigModalProps {
    openner: ReactElement
    serie: Serie
    onValidate: ({id, config}: {id: number, config: RoomConfig}) => void
}

export default function RoomConfigModal({ openner, serie, onValidate}: RoomConfigModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const Handler: React.ReactElement = React.cloneElement(openner, { onClick: onOpen})

    const [config, setConfig] = useState<RoomConfig>({
        question_time_display: 10,
        reponse_time_display: 5,
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
                    <FormHelperText>{`(recommended >10s)`}</FormHelperText>
                    <Input type="number" value={config.question_time_display} onChange={(e) => handleQuestionTimeChange(e)} />
                </FormControl>
                <br />
                <br />
                <FormControl>
                    <FormLabel>{`Temp d'affichage des questions. (en secondes)`}</FormLabel>
                    <FormHelperText>{`(recommended >5s)`}</FormHelperText>
                    <Input value={config.reponse_time_display} onChange={(e) => handleReponseTimeChange(e)} />
                </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={() => onValidate({id: serie.id, config})} colorScheme="green">Create Game</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }