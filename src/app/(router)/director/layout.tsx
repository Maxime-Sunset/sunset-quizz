import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function DirectorLayout({ children }: { children: ReactElement }) {
    return (
        <Box display="flex" flexDirection="column" h="100vh" w="100%" mx="auto" textAlign="center" overflowY="hidden">
            <Box zIndex="-1" position="absolute" opacity="1" bg="#291700" backgroundImage={"/bgquiz80.webp"} h="100vh" w="100%" />
            <Box zIndex="0" position="absolute" opacity="0.8" bg="#291700" h="100vh" w="100%" />
            <Box zIndex="10">{children}</Box>
        </Box>
    )
}