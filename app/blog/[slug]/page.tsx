import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  })

  if (!post || post.status !== "published") {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/golive_capital_vect.svg"
                alt="GoLive Capital"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link href="/#time" className="text-muted-foreground hover:text-foreground transition-colors">
                Time
              </Link>
              <Link href="/#teses" className="text-muted-foreground hover:text-foreground transition-colors">
                Teses
              </Link>
              <Link href="/glossario" className="text-muted-foreground hover:text-foreground transition-colors">
                Glossário
              </Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
              <Link
                href="/contato"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
              >
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article>
          <header className="mb-8">
            <Link href="/blog" className="inline-flex items-center text-primary mb-4 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Blog
            </Link>
            <Badge variant="outline" className="border-primary/20 text-primary mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.publishedAt.toISOString()}>
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR", { dateStyle: "long" })}
                </time>
              </div>
            </div>
          </header>
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: (post.content || "").replace(/\n/g, "<br />") }}
          />
        </article>
      </main>
    </div>
  )
}
