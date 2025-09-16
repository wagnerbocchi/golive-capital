import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, GraduationCap, Newspaper, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function GlossarioPage() {
  const searchFundBasics = [
    { title: "Introdução aos Search Funds", url: "https://searchfund.org/introduction" },
    { title: "O que é um Search Fund", url: "https://searchfund.org/what-is-search-fund" },
    { title: "Nota para os investidores iniciantes em Search Fund", url: "https://searchfund.org/beginner-investors" },
    { title: "Aprendendo sobre Search Fund", url: "https://searchfund.org/learning" },
    { title: "Oportunidades e riscos de Search Fund", url: "https://searchfund.org/opportunities-risks" },
    {
      title: "Lista com mais de 40 dos melhores estudos de caso de Search Fund",
      url: "https://searchfund.org/case-studies",
    },
    { title: "Guia Jurídico sobre Search Fund no Brasil", url: "https://searchfund.org/legal-guide-brazil" },
  ]

  const stanfordStudies = [
    {
      year: "2024",
      title: "Estudo de 2024",
      url: "https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds/primer",
    },
    {
      year: "2022",
      title: "Estudo de 2022",
      url: "https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds/study-2022",
    },
    {
      year: "2020",
      title: "Estudo de 2020",
      url: "https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds/study-2020",
    },
    {
      year: "2018",
      title: "Estudo de 2018",
      url: "https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds/study-2018",
    },
    {
      year: "2016",
      title: "Estudo de 2016",
      url: "https://www.gsb.stanford.edu/faculty-research/centers-initiatives/ces/research/search-funds/study-2016",
    },
  ]

  const ieseStudies = [
    { year: "2024", title: "Estudo de 2024", url: "https://www.iese.edu/research/search-funds/study-2024" },
    { year: "2022", title: "Estudo de 2022", url: "https://www.iese.edu/research/search-funds/study-2022" },
    { year: "2020", title: "Estudo de 2020", url: "https://www.iese.edu/research/search-funds/study-2020" },
    { year: "2018", title: "Estudo de 2018", url: "https://www.iese.edu/research/search-funds/study-2018" },
    { year: "2016", title: "Estudo de 2016", url: "https://www.iese.edu/research/search-funds/study-2016" },
  ]

  const newsArticles = [
    {
      title: "Os figurões do MBA só querem um acordo único de private equity",
      source: "Financial Times",
      url: "https://www.ft.com/content/search-funds-mba",
    },
    {
      title: "Jovens empreendedores encontram uma maneira de realizar seus sonhos de CEO",
      source: "NY Times",
      url: "https://www.nytimes.com/search-funds-entrepreneurs",
    },
    {
      title: "Por Que Investir Em Search Funds No Brasil",
      source: "Exame",
      url: "https://exame.com/invest/search-funds-brasil",
    },
    {
      title: "O que saber sobre fundos de busca",
      source: "Forbes",
      url: "https://forbes.com/search-funds-guide",
    },
    {
      title: "Entenda O Que É Um Search Fund",
      source: "O Globo",
      url: "https://oglobo.globo.com/economia/search-fund",
    },
    {
      title: "Pesquisar Fundos Ganham Espaço No Brasil",
      source: "Valor Econômico",
      url: "https://valor.globo.com/financas/search-funds-brasil",
    },
    {
      title: "Modelo de Empreendedorismo Por Aquisição Cresce No Brasil",
      source: "Exame",
      url: "https://exame.com/pme/empreendedorismo-aquisicao-brasil",
    },
    {
      title: "Última proposta de MBAs para investidores: deixem a startup de lado, invistam em mim",
      source: "WSJ",
      url: "https://www.wsj.com/articles/search-funds-mba-investors",
    },
    {
      title: "Como graduados em MBA empreendedor podem se beneficiar de fundos de pesquisa",
      source: "Fortune",
      url: "https://fortune.com/mba-search-funds",
    },
    {
      title: "Por que mais MBAs deveriam comprar pequenas empresas",
      source: "Harvard Business Review",
      url: "https://hbr.org/mba-small-business-acquisition",
    },
    {
      title: "Jovens empreendedores migram para mini private equity enquanto o mercado de trabalho está estagnado",
      source: "Business Insider",
      url: "https://www.businessinsider.com/young-entrepreneurs-private-equity",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">GL</span>
                </div>
                <span className="text-xl font-bold text-foreground">Go Live Capital</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link href="/#teses" className="text-muted-foreground hover:text-foreground transition-colors">
                Teses
              </Link>
              <Link href="/glossario" className="text-muted-foreground hover:text-foreground transition-colors">
                Glossário
              </Link>
            </div>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contato">Contato</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 badge-high-contrast">Recursos Educacionais</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Glossário <span className="text-primary">Search Fund</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Recursos completos para entender o modelo Search Fund, incluindo estudos acadêmicos, guias práticos e
            cobertura da mídia especializada.
          </p>
        </div>
      </section>

      {/* Search Fund Basics */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">O Modelo de Search Fund</h2>
              <p className="text-muted-foreground">Fundamentos e conceitos essenciais</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchFundBasics.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-background border-border hover:border-primary/50 transition-colors cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Studies */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Stanford Studies */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Estudos de Stanford</h2>
                  <p className="text-muted-foreground">Pesquisas acadêmicas sobre Search Fund</p>
                </div>
              </div>

              <div className="space-y-4">
                {stanfordStudies.map((study, index) => (
                  <a key={index} href={study.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="border-primary/20 text-primary">
                              {study.year}
                            </Badge>
                            <CardTitle className="text-lg">{study.title}</CardTitle>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
            </div>

            {/* IESE Studies */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Estudos da IESE</h2>
                  <p className="text-muted-foreground">Pesquisas acadêmicas sobre Search Fund</p>
                </div>
              </div>

              <div className="space-y-4">
                {ieseStudies.map((study, index) => (
                  <a key={index} href={study.url} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer group">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Badge variant="outline" className="border-primary/20 text-primary">
                              {study.year}
                            </Badge>
                            <CardTitle className="text-lg">{study.title}</CardTitle>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Notícias sobre Search Fund</h2>
              <p className="text-muted-foreground">Cobertura da mídia especializada</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {newsArticles.map((article, index) => (
              <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="bg-background border-border hover:border-primary/50 transition-colors cursor-pointer group h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <CardTitle className="text-lg leading-tight mb-2">{article.title}</CardTitle>
                        <CardDescription className="flex items-center">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {article.source}
                          </Badge>
                        </CardDescription>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Interessado em Search Fund?</CardTitle>
              <CardDescription>
                Entre em contato conosco para saber mais sobre oportunidades de investimento e como podemos ajudar no
                seu projeto.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contato">Fale Conosco</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card bg-transparent"
                >
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">GL</span>
                </div>
                <span className="text-xl font-bold">Go Live Capital</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Resultados preparam novos ciclos</p>
              <p className="text-muted-foreground text-sm">www.golivecap.com.br</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Endereço</h3>
              <p className="text-muted-foreground text-sm">
                Rua Tabapuã 500 - Itaim Bibi
                <br />
                São Paulo - SP, 04533-001
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Úteis</h3>
              <div className="space-y-2">
                <Link
                  href="/#sobre"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Sobre a Empresa
                </Link>
                <Link
                  href="/#teses"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Teses de Investimento
                </Link>
                <Link
                  href="/#valores"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Missão e Valores
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">© 2024 Go Live Capital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
