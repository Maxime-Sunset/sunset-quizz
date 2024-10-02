import { Box } from "@chakra-ui/react";
import { ReactElement } from "react";

export default function DirectorLayout({ children }: { children: ReactElement }) {
    return (
        <Box display="flex" flexDirection="column" h="100vh" w="100%" mx="auto" textAlign="center" overflowY="hidden"
            bgGradient="linear(to-t, cyan.300, cyan.500)" backgroundImage={"/fond_mario.jpg"} 
        >
            {children}
        </Box>
    )
}