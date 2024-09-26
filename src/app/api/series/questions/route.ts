import { NextRequest, NextResponse } from "next/server";
import db, { Question, Serie } from "@/db"

// /api/series/questions?serie_id={id}
export async function GET(request: NextRequest) {
    const serie_id: number = request.nextUrl.searchParams.get("serie_id") as unknown as number
    const serie = db.series.find((s: Serie) => s.id == serie_id)
    const questions = db.questions.filter((q: Question) => serie?.questionId.includes(q.id)) || []
    return new NextResponse(JSON.stringify(questions))
}