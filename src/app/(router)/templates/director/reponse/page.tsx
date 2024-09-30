"use client"

import DirectorReponseView from "@/views/director/DirectorReponseView";

export default function TemplateDirectorReponse() {
    
    return (
        <DirectorReponseView
            currentQuestion={{
                id: 0,
                reponseId: 1,
                text: "question.text",
                reponses: [
                    { text: "reponse.0" },
                    { text: "reponse.1" },
                    { text: "reponse.2" },
                    { text: "reponse.3" },
                ],
                ultimate: false
            }}
        />
    )
}