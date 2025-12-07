import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest, { params }) {
  const category = String(params.category);
  const products = await prisma.product.findMany(
    {
      where: {
        category: category,
      }
    }
  )

  if (!products.length) {
    return new NextResponse("Not found", { status: 404 });
  }

  return NextResponse.json(products);
}