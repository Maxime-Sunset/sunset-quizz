import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function PlayerLayout({children}: {children: ReactElement}) {
    return (
        <Box bgGradient="linear(to-t, cyan.300, cyan.500)" backgroundImage={"/bgquiz80.webp"} backgroundPosition="center" overflow="hidden">
            <Box zIndex="0" position="absolute" opacity="0.8" bg="#291700" h="100vh" w="100%" />
            <Box zIndex="-1" position="absolute" opacity="1" bg="#291700" backgroundImage={"/bgquiz80.webp"} h="100vh" w="100%" />
            <Box zIndex="10" position="relative" display="flex" flexDirection="column" h="100vh" maxW="80%" mx="auto" py="20px" textAlign="center">
                {children}
            </Box>
        </Box>
    )
}