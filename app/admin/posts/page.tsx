"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { getAllPosts, deletePost, updatePost, type BlogPost } from "@/lib/posts"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ArrowLeft, Edit, Trash2, Eye, Search, LogOut } from "lucide-react"
import Image from "next/image"

export default function AdminPostsPage() {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all")

  useEffect(() => {
    if (status !== "authenticated") return
    loadPosts()
  }, [status, router])

  useEffect(() => {
    filterPosts()
  }, [posts, searchTerm, filterStatus])

  const loadPosts = async () => {
    const allPosts = await getAllPosts()
    setPosts(allPosts)
  }

  const filterPosts = () => {
    let filtered = posts

    if (filterStatus !== "all") {
      filtered = filtered.filter((post) => post.status === filterStatus)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.category.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    setFilteredPosts(filtered)
  }

  const handleDelete = async (id: number) => {
    if (confirm("Tem certeza que deseja excluir este post?")) {
      await deletePost(id)
      await loadPosts()
    }
  }

  const handleToggleStatus = async (post: BlogPost) => {
    const newStatus = post.status === "published" ? "draft" : "published"
    await updatePost(post.id, { status: newStatus })
    await loadPosts()
  }

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard">
              <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-white">Gerenciar Posts</h1>
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

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <Input
              placeholder="Buscar posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === "all" ? "default" : "outline"}
              onClick={() => setFilterStatus("all")}
              className={
                filterStatus === "all"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "border-zinc-700 text-white hover:bg-zinc-800"
              }
            >
              Todos
            </Button>
            <Button
              variant={filterStatus === "published" ? "default" : "outline"}
              onClick={() => setFilterStatus("published")}
              className={
                filterStatus === "published"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "border-zinc-700 text-white hover:bg-zinc-800"
              }
            >
              Publicados
            </Button>
            <Button
              variant={filterStatus === "draft" ? "default" : "outline"}
              onClick={() => setFilterStatus("draft")}
              className={
                filterStatus === "draft"
                  ? "bg-yellow-500 text-black hover:bg-yellow-600"
                  : "border-zinc-700 text-white hover:bg-zinc-800"
              }
            >
              Rascunhos
            </Button>
          </div>
          <Link href="/admin/posts/new">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Criar Novo Post</Button>
          </Link>
        </div>

        {/* Posts List */}
        {filteredPosts.length === 0 ? (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="py-12 text-center">
              <p className="text-zinc-500">Nenhum post encontrado</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-800">
                      <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                          <p className="text-zinc-400 text-sm mb-3">{post.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-zinc-500">
                            <span className="px-2 py-1 bg-zinc-800 rounded">{post.category}</span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {post.views} visualizações
                            </span>
                            <span>{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</span>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs rounded ${
                            post.status === "published"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-yellow-500/20 text-yellow-500"
                          }`}
                        >
                          {post.status === "published" ? "Publicado" : "Rascunho"}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Link href={`/admin/posts/edit/${post.id}`}>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
                          >
                            <Edit className="w-4 h-4 mr-2" />
                            Editar
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleToggleStatus(post)}
                          className="border-zinc-700 text-white hover:bg-zinc-800"
                        >
                          {post.status === "published" ? "Despublicar" : "Publicar"}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                          className="border-red-900 text-red-500 hover:bg-red-950"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Excluir
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
