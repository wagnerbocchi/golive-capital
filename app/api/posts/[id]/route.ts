import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions"
import { prisma } from "@/lib/prisma"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  const id = Number(params.id)
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 })
  }

  try {
    const body = await request.json()
    const allowedFields = [
      "title",
      "slug",
      "excerpt",
      "content",
      "category",
      "imageUrl",
      "author",
      "readTime",
      "status",
    ] as const

    const data: Record<string, unknown> = {}
    for (const key of allowedFields) {
      if (key in body) data[key] = body[key]
    }

    const updated = await prisma.post.update({ where: { id }, data })
    return NextResponse.json(updated)
  } catch (error) {
    console.error("Erro ao atualizar post:", error)
    if (error instanceof Error && (error as any).code === "P2002") {
      return NextResponse.json({ error: "Título ou slug já em uso." }, { status: 409 })
    }
    return NextResponse.json({ error: "Erro ao atualizar post." }, { status: 500 })
  }
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  const id = Number(params.id)
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 })
  }

  try {
    await prisma.post.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao deletar post:", error)
    return NextResponse.json({ error: "Erro ao deletar post." }, { status: 500 })
  }
}

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id)
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "ID inválido" }, { status: 400 })
  }

  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const post = await prisma.post.findUnique({ where: { id } })
    if (!post) return NextResponse.json({ error: "Post não encontrado" }, { status: 404 })
    return NextResponse.json(post)
  } catch (error) {
    console.error("Erro ao buscar post por id:", error)
    return NextResponse.json({ error: "Erro ao buscar post." }, { status: 500 })
  }
}
