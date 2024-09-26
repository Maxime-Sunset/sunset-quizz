import { Box } from "@chakra-ui/react";
import QRCode from "react-qr-code";

interface QRCodeGeneratorProps {
    href: string
}

export default function QRCodeGenerator({ href }: QRCodeGeneratorProps) {
    return (
        <Box height="auto" margin="0 auto" padding="12%" maxWidth={128*2} width="100%">
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={href}
                viewBox={`0 0 256 256`}
            />
        </Box>
    )
}