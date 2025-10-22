"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Calendar, Clock, Search, BookOpen, User, Loader2 } from "lucide-react"
import type { Post } from "@prisma/client"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true)
      const response = await fetch("/api/posts")
      const data = await response.json()
      setPosts(data)
      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  const categories = ["Todos", "Search Fund", "SaaS", "Métricas", "M&A", "Fintech", "Negócios"]
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <Link href="/blog" className="text-foreground font-medium">
                Blog
              </Link>
              <Link
                href="/#contato"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
              >
                Contato
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog Go Live Capital</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Insights sobre Search Fund, investimentos em SaaS, métricas de negócios e o mercado de M&A no Brasil
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                className="pl-10 bg-background border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border hover:bg-card"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto min-h-[400px]">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground">Tente ajustar sua busca ou filtros</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary/20 text-primary">
                        {post.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight mb-2 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        <span className="text-xs">{post.author}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-xs">
                          {new Date(post.publishedAt).toLocaleDateString("pt-BR", { dateStyle: "long" })}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 text-primary hover:text-primary/80" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Ler mais
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <Card className="bg-background border-border max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Receba nossos insights</CardTitle>
              <CardDescription>
                Assine nossa newsletter e receba conteúdos exclusivos sobre investimentos e M&A
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col sm:flex-row gap-4">
                <Input type="email" placeholder="Seu melhor email" className="flex-1 bg-card border-border" required />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Assinar Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">Sem spam. Cancele a qualquer momento.</p>
            </CardContent>
          </Card>
        </div>
      </section>

     {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/golive_capital_vect.svg"
                  alt="GoLive Capital"
                  width={240}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm mb-4">
                Empresa de investimentos que opera no modelo Sênior Search Fund, focada em empresas de tecnologia,
                software e serviços com receita recorrente.
              </p>
              <p className="text-muted-foreground text-sm font-medium">Resultados preparam novos ciclos</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>contato@golive.capital</p>              
                <p>www.golive.capital</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-sm">Endereço</h4>
                <p className="text-muted-foreground text-sm">
                  Rua Tabapuã 500 - Itaim Bibi
                  <br />
                  São Paulo - SP, 04533-001
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <div className="space-y-2">
                <a
                  href="#sobre"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Sobre a Empresa
                </a>
                <a href="#time" className="block text-muted-foreground text-sm hover:text-foreground transition-colors">
                  Nosso Time
                </a>
                <a
                  href="#teses"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Teses de Investimento
                </a>
                <a
                  href="#glossario"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Glossário
                </a>
                <a
                  href="#contato"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Contato
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2025 Go Live Capital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
