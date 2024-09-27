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

    const miss_label = "Aucune"
    const player_reponse = currentReponse ? currentReponse.text : miss_label
    let label = "FAUX"

    if (player_reponse == result) {
        label = "VRAI"
    }

    return (
        <Box display="flex" flexDirection="column" h="100%" justifyContent="center" m="auto">
            <Heading
                as="h4"
                m="1rem"
                color={label == "FAUX" ? "red" : "#00fe00"}
                fontSize="5rem"
                fontWeight="bolder"
                textShadow="2px 0px 0px black, 0px 2px 0px black, 0px -2px 0px black, -2px 0px 0px black, -2px -2px 0px black, 2px 2px 0px black, 0px 3px 5px black"

            >{label}
            </Heading>

            <Box m="1rem">
                <Text
                    color="white"
                    fontSize="1.5rem"
                    fontWeight="bolder"
                    textShadow="2px 2px 5px black"
                    mb="1rem"
                >{result}</Text>
            </Box>
        </Box>
    )
}