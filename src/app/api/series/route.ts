import { NextRequest, NextResponse } from "next/server";
import db, { Serie, Series } from "@/db"

// /api/series?serie_id
//      serie_id => optional params
//      return Serie[]
//
// return list of all series or 1 serie if params meet a serie.
export async function GET(request: NextRequest) {
    let response: Series = db.series

    const serie_id = request.nextUrl.searchParams.get("serie_id")
    if(serie_id) {
        const serie: Serie | undefined = db.series.find((s: Serie) => s.id == Number(serie_id))
        if(serie) {
            response = [serie]
        }
    }

    return new NextResponse<Serie | Serie[]>(JSON.stringify(response))
}