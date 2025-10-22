import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;
    const post = await prisma.post.findUnique({
      where: { slug },
    });

    if (!post) {
      return NextResponse.json({ error: "Post não encontrado." }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error(`Erro ao buscar post com slug: ${params.slug}`, error);
    return NextResponse.json({ error: "Erro ao buscar o post." }, { status: 500 });
  }
}