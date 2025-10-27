import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(_request: Request, { params }: { params: { slug: string } }) {
  try {
    const post = await prisma.post.findUnique({ where: { slug: params.slug } })
    if (!post || post.status !== "published") {
      return NextResponse.json({ error: "Post não encontrado" }, { status: 404 })
    }
    return NextResponse.json(post)
  } catch (error) {
    console.error("Erro ao buscar post por slug:", error)
    return NextResponse.json({ error: "Erro ao buscar post." }, { status: 500 })
  }
}

