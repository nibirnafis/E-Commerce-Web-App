import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }) {
  const id = Number(params.id);
  const product = await prisma.product.findUnique(
    {
      where: {
        id: id,
      }
    }
  )

  if (!product) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json(product);
}