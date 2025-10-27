"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"
import { getAllPosts } from "@/lib/posts"
import { getAnalyticsSummary } from "@/lib/analytics"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BarChart, FileText, Eye, TrendingUp, LogOut, PlusCircle } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login")
    },
  })
  const user = session?.user
  const [analytics, setAnalytics] = useState<any>(null)
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    if (status !== "authenticated") return
    setAnalytics(getAnalyticsSummary())
    ;(async () => {
      const all = await getAllPosts()
      setPosts(all)
    })()
  }, [status, router])

  const handleLogout = () => {
    signOut({ callbackUrl: "/login" })
  }

  if (status === "loading") return null
  if (!user) return null

  const publishedCount = useMemo(() => posts.filter((p) => p.status === "published").length, [posts])
  const draftPosts = useMemo(() => posts.filter((p) => p.status === "draft"), [posts])
  const totalViews = useMemo(() => posts.reduce((sum, post) => sum + (post.views || 0), 0), [posts])

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Painel Administrativo</h1>
            <p className="text-sm text-zinc-400">Bem-vindo, {user.name}</p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent">
                Ver Site
              </Button>
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8 flex gap-4">
          <Link href="/admin/posts/new" className="flex-1">
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold h-12">
              <PlusCircle className="w-5 h-5 mr-2" />
              Criar Novo Post
            </Button>
          </Link>
          <Link href="/admin/posts" className="flex-1">
            <Button
              variant="outline"
              className="w-full border-zinc-700 text-white hover:bg-zinc-800 h-12 bg-transparent"
            >
              <FileText className="w-5 h-5 mr-2" />
              Gerenciar Posts
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Total de Acessos</CardTitle>
              <Eye className="w-4 h-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{analytics?.totalViews || 0}</div>
              <p className="text-xs text-zinc-500 mt-1">{analytics?.todayViews || 0} hoje</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Posts Publicados</CardTitle>
              <FileText className="w-4 h-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{publishedCount}</div>
              <p className="text-xs text-zinc-500 mt-1">{draftPosts.length} rascunhos</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Visualizações de Posts</CardTitle>
              <TrendingUp className="w-4 h-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{totalViews}</div>
              <p className="text-xs text-zinc-500 mt-1">Total acumulado</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">Últimos 7 Dias</CardTitle>
              <BarChart className="w-4 h-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">{analytics?.last7DaysViews || 0}</div>
              <p className="text-xs text-zinc-500 mt-1">Acessos na semana</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Posts and Top Pages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Posts */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Posts Recentes</CardTitle>
              <CardDescription className="text-zinc-400">Últimos posts criados</CardDescription>
            </CardHeader>
            <CardContent>
              {posts.length === 0 ? (
                <p className="text-zinc-500 text-center py-8">Nenhum post criado ainda</p>
              ) : (
                <div className="space-y-4">
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{post.title}</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          {post.category} • {post.views} visualizações
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          post.status === "published"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {post.status === "published" ? "Publicado" : "Rascunho"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Top Pages */}
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-white">Páginas Mais Visitadas</CardTitle>
              <CardDescription className="text-zinc-400">Top 10 páginas por acessos</CardDescription>
            </CardHeader>
            <CardContent>
              {!analytics?.topPages || analytics.topPages.length === 0 ? (
                <p className="text-zinc-500 text-center py-8">Nenhum dado de acesso ainda</p>
              ) : (
                <div className="space-y-3">
                  {analytics.topPages.map(([path, views]: [string, number], index: number) => (
                    <div key={path} className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className="text-yellow-500 font-bold text-sm">#{index + 1}</span>
                        <span className="text-white text-sm">{path}</span>
                      </div>
                      <span className="text-zinc-400 text-sm">{views} acessos</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
