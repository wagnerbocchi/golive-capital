export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  imageUrl: string
  author: string
  publishedAt: string
  readTime: string
  status: "draft" | "published"
}

let posts: Post[] = [
  {
    id: 1,
    title: "O que é Search Fund e como funciona esse modelo de investimento",
    slug: "o-que-e-search-fund",
    excerpt:
      "Entenda o modelo Search Fund, suas características principais e por que ele tem ganhado destaque no mercado de M&A brasileiro.",
    category: "Search Fund",
    content: "Conteúdo completo sobre o que é um Search Fund...",
    publishedAt: "2025-01-15T12:00:00.000Z",
    readTime: "8 min",
    author: "Walter Leandro Marques",
    imageUrl: "/business-meeting-investment.jpg",
    status: "published",
  },
  {
    id: 2,
    title: "5 métricas essenciais para avaliar empresas SaaS",
    slug: "5-metricas-essenciais-saas",
    excerpt:
      "Descubra as principais métricas que utilizamos para avaliar empresas de software como serviço e identificar oportunidades de investimento.",
    category: "SaaS",
    content: "Conteúdo detalhado sobre as 5 métricas essenciais para SaaS...",
    publishedAt: "2025-01-10T12:00:00.000Z",
    readTime: "6 min",
    author: "Gustavo Rinaldi",
    imageUrl: "/saas-metrics-dashboard.jpg",
    status: "published",
  },
  {
    id: 3,
    title: "Rule of 40: O indicador que todo fundador de SaaS precisa conhecer",
    slug: "rule-of-40-saas",
    excerpt:
      "Aprenda sobre a Rule of 40, uma das métricas mais importantes para avaliar a saúde e o potencial de crescimento de empresas SaaS.",
    category: "Métricas",
    content: "Explicação aprofundada sobre a Rule of 40...",
    publishedAt: "2025-01-05T12:00:00.000Z",
    readTime: "7 min",
    author: "João Paulo Matos",
    imageUrl: "/growth-chart-analytics.jpg",
    status: "published",
  },
  {
    id: 4,
    title: "Como preparar sua empresa para uma venda bem-sucedida",
    slug: "preparar-empresa-venda",
    excerpt:
      "Um guia completo sobre os passos necessários para preparar sua empresa de tecnologia para um processo de M&A eficiente e lucrativo.",
    category: "M&A",
    content: "Guia passo a passo para preparar sua empresa para M&A...",
    publishedAt: "2024-12-28T12:00:00.000Z",
    readTime: "10 min",
    author: "Walter Leandro Marques",
    imageUrl: "/business-handshake-deal.jpg",
    status: "published",
  },
  {
    id: 5,
    title: "Fintechs de infraestrutura: O futuro dos serviços financeiros",
    slug: "fintechs-de-infraestrutura",
    excerpt:
      "Explore o crescimento das fintechs de infraestrutura e por que elas representam uma oportunidade única de investimento.",
    category: "Fintech",
    content: "Análise sobre o mercado de fintechs de infraestrutura...",
    publishedAt: "2024-12-20T12:00:00.000Z",
    readTime: "9 min",
    author: "Wagner Bocchi",
    imageUrl: "/fintech-technology-payment.jpg",
    status: "published",
  },
  {
    id: 6,
    title: "Receita recorrente: Por que é o modelo de negócio mais valorizado",
    slug: "receita-recorrente-valor",
    excerpt:
      "Entenda por que empresas com receita recorrente são mais valorizadas no mercado e como construir um modelo de negócio sustentável.",
    category: "Negócios",
    content: "Discussão sobre a importância da receita recorrente...",
    publishedAt: "2024-12-15T12:00:00.000Z",
    readTime: "5 min",
    author: "Gustavo Rinaldi",
    imageUrl: "/recurring-revenue-subscription.jpg",
    status: "published",
  },
]

// Função para obter todos os posts (apenas os publicados para o blog público)
export const getPublishedPosts = (): Post[] => {
  if (typeof window !== "undefined") {
    const localPosts = localStorage.getItem("blogPosts")
    const allPosts = localPosts ? (JSON.parse(localPosts) as Post[]) : posts
    return allPosts.filter((post) => post.status === "published").sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }
  // No servidor, retorna apenas os posts iniciais
  return posts.filter((post) => post.status === "published").sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

// Função para obter todos os posts (para o admin)
export const getAllPosts = (): Post[] => {
  if (typeof window !== "undefined") {
    const localPosts = localStorage.getItem("blogPosts")
    if (localPosts) {
      return JSON.parse(localPosts) as Post[]
    }
  }
  return posts
}

// Função para criar um novo post
export const createPost = (newPostData: Omit<Post, "id">): Post => {
  if (typeof window !== "undefined") {
    const currentPosts = getAllPosts()
    const newId = currentPosts.length > 0 ? Math.max(...currentPosts.map((p) => p.id)) + 1 : 1
    const newPost: Post = {
      id: newId,
      ...newPostData,
    }
    const updatedPosts = [...currentPosts, newPost]
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts))
    posts = updatedPosts // Atualiza a variável em memória também
    return newPost
  }
  // A criação de post no lado do servidor não é suportada nesta simulação
  throw new Error("A criação de posts só é suportada no lado do cliente.")
}

// Função para obter um post pelo slug (para a página do post individual)
export const getPostBySlug = (slug: string): Post | undefined => {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.slug === slug)
}