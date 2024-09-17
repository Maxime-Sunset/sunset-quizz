import { Box, Heading } from "@chakra-ui/react";

export default function PlayerFinishView() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Heading as="h3">Le Quiz est fini.</Heading>
            <Heading as="h4"></Heading>
        </Box>
    )
}