import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function PlayerLayout({children}: {children: ReactElement}) {
    return (
        <Box bgGradient="linear(to-t, cyan.300, cyan.500)" backgroundImage={"../fond_mario.jpg"} backgroundPosition="center" overflow="hidden">
            <Box display="flex" flexDirection="column" h="100vh" maxW="80%" mx="auto" py="20px" textAlign="center">
                {children}
            </Box>
        </Box>
    )
}