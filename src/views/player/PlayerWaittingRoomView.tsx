import { Box, Heading } from "@chakra-ui/react";

interface PlayerWaittingRoomViewProps {
    serieTitle: string,
    username: string
}

export default function PlayerWaittingRoomView({
    serieTitle,
    username
}: PlayerWaittingRoomViewProps) {
    
    return (
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
            <Heading as="h1">{serieTitle}</Heading>
            <Heading as="h2">{`Préparé vous ${username}, le Quiz va bientôt commencé !`}</Heading>
        </Box>
    )
}