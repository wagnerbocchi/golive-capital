import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const posts = await prisma.post.findMany({ orderBy: { publishedAt: "desc" } })
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Erro ao buscar todos os posts:", error)
    return NextResponse.json({ error: "Erro ao buscar todos os posts." }, { status: 500 })
  }
}

