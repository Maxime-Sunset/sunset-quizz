import { NextResponse } from "next/server";
import db from "@/db"

// /api
export async function GET(/*request: NextRequest*/) {
    return new NextResponse(JSON.stringify(db))
}