import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



export async function GET(){
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json({ success: true, message: 'Products fetched successfully', res: products }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Products fetching failed', res: error }, { status: 500 })
  }
}


export async function POST(request: Request) {
  const data = await request.json();
  const product = await prisma.product.create({data});
  return Response.json(product);
}