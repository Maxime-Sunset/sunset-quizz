import { Reponse } from "@/db";
import { Box, Heading, Text } from "@chakra-ui/react";

interface PlayerResultViewProps {
    result: string
    currentReponse: Reponse | null
}

export default function PlayerResultView({ 
    result, 
    currentReponse
}: PlayerResultViewProps) {
    
    let miss_label = "Aucune"
    let player_reponse = currentReponse ? currentReponse.text : miss_label
    let label = "FAUX"

    if(player_reponse == result) {
        label = "VRAI"
    }

    return (
        <Box display="flex" flexDirection="column" h="100%" justifyContent="center" m="auto">
            <Box m="1rem">
                <Heading as="h3">VOTRE REPONSE</Heading>
                <Text>{player_reponse}</Text>
            </Box>

            <Heading as="h4" m="1rem">{player_reponse != miss_label ? label: " "}</Heading>
            
            <Box m="1rem">
                <Heading as="h3">REPONSE</Heading>
                <Text>{result}</Text>
            </Box>
        </Box>
    )
}