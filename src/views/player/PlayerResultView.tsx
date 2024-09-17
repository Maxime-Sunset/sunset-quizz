import { Box, Heading } from "@chakra-ui/react";

interface PlayerResultViewProps {
    result: string
}

export default function PlayerResultView({ result }: PlayerResultViewProps) {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as="h3">REPONSE</Heading>
            <Heading as="h4">{result}</Heading>
        </Box>
    )
}