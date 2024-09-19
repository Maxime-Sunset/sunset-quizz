import { ReactElement } from "react";
import DirectorLayout from "../director/layout";

export default function TemplatePlayerLayout({children}: { children: ReactElement }) {
    return <DirectorLayout children={children} />
}