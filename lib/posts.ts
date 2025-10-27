// Define a URL base da API para evitar repetição
const API_URL = "/api/posts"

export interface BlogPost {
  id: number // Em schema.prisma, Post.id é Int autoincrement()
  title: string
  slug: string
  excerpt: string | null
  content: string
  category: string | null
  imageUrl: string | null
  author: string | null
  publishedAt: string | null
  readTime: string | null
  status: "draft" | "published"
  views?: number
}

// Busca posts publicados (público)
export const getPublishedPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(API_URL, { cache: "no-store" })
    if (!res.ok) throw new Error("Falha ao buscar posts")
    return res.json()
  } catch (error) {
    console.error("Erro em getPublishedPosts:", error)
    return []
  }
}

// Busca todos os posts (requer sessão)
export const getAllPosts = async (): Promise<BlogPost[]> => {
  try {
    const res = await fetch(`${API_URL}/all`, { cache: "no-store" })
    if (!res.ok) throw new Error("Falha ao buscar todos os posts")
    return res.json()
  } catch (error) {
    console.error("Erro em getAllPosts:", error)
    return []
  }
}

// Busca post por slug (público, somente publicados)
export const getPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  try {
    const res = await fetch(`${API_URL}/slug/${slug}`, { cache: "no-store" })
    if (!res.ok) return undefined
    return res.json()
  } catch (error) {
    console.error(`Erro ao buscar post com slug ${slug}:`, error)
    return undefined
  }
}

// Busca post por id (requer sessão)
export const getPostById = async (id: number): Promise<BlogPost | undefined> => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" })
    if (!res.ok) return undefined
    return res.json()
  } catch (error) {
    console.error(`Erro ao buscar post com id ${id}:`, error)
    return undefined
  }
}

// Cria um novo post (requer sessão)
export const createPost = async (
  newPostData: Omit<BlogPost, "id" | "publishedAt" | "views">,
): Promise<BlogPost> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPostData),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || "Falha ao criar o post.")
  }
  return res.json()
}

// Atualiza um post (requer sessão)
export const updatePost = async (
  id: number,
  updatedData: Partial<Omit<BlogPost, "id">>,
): Promise<BlogPost> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || "Falha ao atualizar o post.")
  }
  return res.json()
}

// Deleta um post (requer sessão)
export const deletePost = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.error || "Falha ao deletar o post.")
  }
}
