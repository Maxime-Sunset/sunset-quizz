import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function PlayerLayout({children}: {children: ReactElement}) {
    return (
        <Box display="flex" flexDirection="column" h="100vh" maxW="80%" mx="auto" py="20px" textAlign="center">
            {children}
        </Box>
    )
}