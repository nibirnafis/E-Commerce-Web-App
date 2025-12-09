import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(_request: Request, { params }: { params: Promise<{ id: string }>} ) {


  try {

    const id = Number((await params).id);
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

    return NextResponse.json({ success: true, message: 'Product fetched successfully', res: product }, { status: 201 });

    } catch (error) {
      
      console.log(error)
      return NextResponse.json({ success: false, message: 'Product fetching failed', res: error }, { status: 500 })
    }

}