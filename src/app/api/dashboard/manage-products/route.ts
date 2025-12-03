import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";




export async function POST(req: NextRequest){
    const data = await req.json()
    const result = await prisma.product.create({
        data
    })

    return NextResponse.json(result)
}
