"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { createPost } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft, Save, Eye, LogOut } from "lucide-react"

export default function NewPostPage() {
  const router = useRouter()
  const { status: authStatus, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })
  const user = session?.user
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("Investimentos")
  const [imageUrl, setImageUrl] = useState("")
  const [status, setStatus] = useState<"draft" | "published">("draft")
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    // aguardando sessão
  }, [authStatus])

  useEffect(() => {
    // Auto-generate slug from title
    const generatedSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    setSlug(generatedSlug)
  }, [title])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let finalImageUrl = imageUrl

      // Se um arquivo foi selecionado, faz upload primeiro
      if (file) {
        const form = new FormData()
        form.append("file", file)

        const res = await fetch("/api/upload", { method: "POST", body: form })
        if (!res.ok) {
          const { error } = await res.json().catch(() => ({ error: "Falha no upload" }))
          throw new Error(error || "Falha ao enviar imagem")
        }
        const data = (await res.json()) as { url: string }
        finalImageUrl = data.url
      }

      await createPost({
        title,
        slug,
        excerpt,
        content,
        category,
        imageUrl: finalImageUrl || "/placeholder.svg?height=400&width=600",
        author: user?.name || "Administrador",
        publishedAt: new Date().toISOString(),
        status,
      })

      router.push("/admin/posts")
    } catch (error) {
      console.error("Error creating post:", error)
      alert("Erro ao criar post")
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" })
  }

  if (authStatus === "loading") return null
  if (!user) return null

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/posts">
              <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Criar Novo Post</h1>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <form onSubmit={handleSubmit}>
          <Card className="bg-zinc-900 border-zinc-800 mb-6">
            <CardHeader>
              <CardTitle className="text-white">Informações do Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-white">
                  Título *
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Digite o título do post"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug" className="text-white">
                  Slug (URL) *
                </Label>
                <Input
                  id="slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="url-do-post"
                  required
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                />
                <p className="text-xs text-zinc-500">URL: /blog/{slug || "url-do-post"}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-white">
                  Resumo *
                </Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Breve descrição do post (aparece na listagem)"
                  required
                  rows={3}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-white">
                  Conteúdo *
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Escreva o conteúdo completo do post..."
                  required
                  rows={15}
                  className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 font-mono text-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white">
                    Categoria *
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-800 border-zinc-700">
                      <SelectItem value="Investimentos">Investimentos</SelectItem>
                      <SelectItem value="Search Fund">Search Fund</SelectItem>
                      <SelectItem value="SaaS">SaaS</SelectItem>
                      <SelectItem value="M&A">M&A</SelectItem>
                      <SelectItem value="Fintech">Fintech</SelectItem>
                      <SelectItem value="Tecnologia">Tecnologia</SelectItem>
                      <SelectItem value="Mercado">Mercado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl" className="text-white">
                    URL da Imagem ou Upload
                  </Label>
                  <Input
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
                  />
                  <div className="flex items-center gap-3">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      onChange={(e) => {
                        const f = e.target.files?.[0] || null
                        setFile(f)
                        setPreview(f ? URL.createObjectURL(f) : null)
                      }}
                      className="text-sm text-zinc-300"
                    />
                  </div>
                  {preview && (
                    <div className="mt-2">
                      <Label className="text-zinc-400 text-sm">Pré-visualização</Label>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview}
                        alt="Pré-visualização"
                        className="mt-1 h-32 w-auto rounded border border-zinc-700 object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button
              type="submit"
              onClick={() => setStatus("draft")}
              variant="outline"
              disabled={loading}
              className="flex-1 border-zinc-700 text-white hover:bg-zinc-800"
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar como Rascunho
            </Button>
            <Button
              type="submit"
              onClick={() => setStatus("published")}
              disabled={loading}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              <Eye className="w-4 h-4 mr-2" />
              Publicar Agora
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
