import PlayerResultView from "@/views/player/PlayerResultView";

export default function TestPage() {
    return (
        <PlayerResultView
            currentReponse={{
                text: "some text"
            }}
            result={"test"}
        />
    )
}