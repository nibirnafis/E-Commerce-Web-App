import { prisma } from "@/lib/prisma";

/* export async function GET() {
  const products = await prisma.product.findMany();
  return Response.json(products);
}
 */



export async function POST(request: Request) {
  const data = await request.json();

  const product = await prisma.product.create({data});

  return Response.json(product);
}