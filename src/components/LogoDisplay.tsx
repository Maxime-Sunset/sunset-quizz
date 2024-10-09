import { Box } from "@chakra-ui/react";
import Image from "next/legacy/image";
import ImageLogo from "../../public/logo-80.png"

interface LogoDisplayProps {
    top?: boolean
}

export default function LogoDisplay({top=false}: LogoDisplayProps) {
    return (
        <Box position="absolute" display="flex" alignItems={top ? "flex-start" : "flex-end"} right={0} w="15vw" h="100vh">
            <Image src={ImageLogo} alt={ImageLogo.src} objectFit="contain" />
        </Box>
    )
}