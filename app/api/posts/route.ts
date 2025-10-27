import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/authOptions"
import { prisma } from "@/lib/prisma"


/**
 * GET /api/posts
 * Busca todos os posts publicados.
 */
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      where: { status: "published" },
      orderBy: { publishedAt: "desc" },
    })
    return NextResponse.json(posts)
  } catch (error) {
    console.error("Erro ao buscar posts:", error)
    return NextResponse.json({ error: "Erro ao buscar posts." }, { status: 500 })
  }
}

/**
 * POST /api/posts
 * Cria um novo post.
 * (Em um projeto real, esta rota deve ser protegida para que apenas administradores possam usá-la)
 */
export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  // Proteção da rota: verifica se o usuário está logado
  if (!session || !session.user) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, slug, excerpt, content, category, imageUrl, author, readTime, status } = body

    // Validação básica
    if (!title || !slug || !content) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 })
    }

    // calcula readTime se não for fornecido (aprox. 200 palavras/min)
    const computedReadTime = (() => {
      if (typeof readTime === "string" && readTime.trim()) return readTime
      if (typeof content === "string" && content.trim()) {
        const words = content.trim().split(/\s+/).length
        const minutes = Math.max(1, Math.round(words / 200))
        return `${minutes} min`
      }
      return "1 min"
    })()

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        category,
        imageUrl,
        author,
        readTime: computedReadTime,
        status,
      },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error("Erro ao criar post:", error)
    // Código de erro para 'unique constraint' no Prisma
    if (error instanceof Error && "code" in error && (error as any).code === "P2002") {
      return NextResponse.json({ error: "Um post com este título ou slug já existe." }, { status: 409 })
    }
    return NextResponse.json({ error: "Erro ao criar o post." }, { status: 500 })
  }
}
