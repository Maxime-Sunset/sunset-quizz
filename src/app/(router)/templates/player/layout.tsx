import { ReactElement } from "react";
import PlayerLayout from "../../player/layout";

export default function TemplatePlayerLayout({children}: { children: ReactElement }) {
    return <PlayerLayout children={children} />
}