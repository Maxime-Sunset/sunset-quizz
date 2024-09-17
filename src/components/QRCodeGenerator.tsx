import QRCode from "react-qr-code";

interface QRCodeGeneratorProps {
    href: string
}

export default function QRCodeGenerator({ href }: QRCodeGeneratorProps) {
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={href}
                viewBox={`0 0 256 256`}
            />
        </div>
    )
}