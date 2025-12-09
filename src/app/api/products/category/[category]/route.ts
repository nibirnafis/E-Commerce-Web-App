import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(_request: NextRequest, { params }: { params: Promise<{ category: string }>}){

  try {

      const category = (await params).category;
      const products = await prisma.product.findMany(
        {
          where: {
            category: category,
          }
        }
      )


      if (!products) {
        return new NextResponse("Not found", { status: 404 });
      }

      return NextResponse.json({ success: true, message: 'Product fetched successfully', res: products }, { status: 201 });

  } catch (error) {

      console.log(error)
      return NextResponse.json({ success: false, message: 'Products fetching failed', res: error }, { status: 500 })
  }

}