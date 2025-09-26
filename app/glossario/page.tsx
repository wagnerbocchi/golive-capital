import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, GraduationCap, Newspaper, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function GlossarioPage() {
  const searchFundBasics = [
    { title: "Introdução aos Search Funds", url: "https://cdn.prod.website-files.com/6455268783d6938b9451ea80/6455268783d693246351eaa1_2020-Search-Fund-Primer%20(1).pdf" },
    { title: "O que é um Search Fund", url: "https://www.gsb.stanford.edu/experience/about/centers-institutes/ces/research/search-funds" },
    { title: "Nota para os investidores iniciantes em Search Fund", url: "https://cdn.prod.website-files.com/6455268783d6938b9451ea80/659d5be282dce51c9a75404a_21.%20A%20Note%20to%20Investors%20Who%20are%20New%20to%20Search%20Funds.pdf" },
    { title: "Aprendendo sobre Search Fund", url: "https://jimsteinsharpe.com/learning-about-search/" },
    { title: "Oportunidades e riscos de Search Fund", url: "https://www.iese.edu/insight/articles/search-funds-opportunities-risks/" },
    {
      title: "Lista com mais de 40 dos melhores estudos de caso de Search Fund",
      url: "https://jimsteinsharpe.com/case-histories/",
    },
    { title: "Guia Jurídico sobre Search Fund no Brasil", url: "https://documentos.spectrainvest.com/ComunicadosInvest/Legal%20Guide%20about%20Brazilian%20Search%20Funds.pdf" },
  ]

  const stanfordStudies = [
    {
      year: "2024",
      title: "Estudo de 2024",
      url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2024-search-fund-study",
    },
    {
      year: "2022",
      title: "Estudo de 2022",
      url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2022-search-fund-study-selected-observations",
    },
    {
      year: "2020",
      title: "Estudo de 2020",
      url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2020-search-fund-study-selected-observations",
    },
    {
      year: "2018",
      title: "Estudo de 2018",
      url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2018-search-fund-study-selected-observations",
    },
    {
      year: "2016",
      title: "Estudo de 2016",
      url: "https://www.gsb.stanford.edu/faculty-research/case-studies/2016-search-fund-study-selected-observations",
    },
  ]

  const ieseStudies = [
    { year: "2024", title: "Estudo de 2024", url: "https://www.iese.edu/media/research/pdfs/ST-0658-E?_gl=1*d6q99o*_gcl_au*ODQ5MjEzMDQ3LjE3NTI1MjQ0OTMuMjAxMzI0MDU4My4xNzUyNTI0NzczLjE3NTI1MjQ3OTM.*_ga*MTM1MTM2NTA4Ni4xNzUyNTI0NDkz*_ga_CT6B5L0DNL*czE3NTI1MjQ0OTAkbzEkZzEkdDE3NTI1MjQ4MDAkajU3JGwwJGgw" },
    { year: "2022", title: "Estudo de 2022", url: "https://www.iese.edu/media/research/pdfs/ST-0629-E.pdf" },
    { year: "2020", title: "Estudo de 2020", url: "https://www.iese.edu/media/research/pdfs/ST-0603-E.pdf" },
    { year: "2018", title: "Estudo de 2018", url: "https://awaytolearn.iese.edu/wp-content/uploads/2018/09/2018-Intl-Search-Fund-Study.pdf" },
    { year: "2016", title: "Estudo de 2016", url: "https://www.iese.edu/media/research/pdfs/ST-0415-E.pdf" },
  ]

  const newsArticles = [
    {
      title: "Os figurões do MBA só querem um acordo único de private equity",
      source: "Financial Times",
      url: "https://www.ft.com/content/949d8ad4-eb1a-4ed4-a89b-f7048eec07ae",
    },
    {
      title: "Jovens empreendedores encontram uma maneira de realizar seus sonhos de CEO",
      source: "NY Times",
      url: "https://www.nytimes.com/2024/03/15/business/entrepreneurs-startups-search-fund.html",
    },
    {
      title: "Por Que Investir Em Search Funds No Brasil",
      source: "Exame",
      url: "https://exame.com/lideres-extraordinarios/financas/por-que-investir-em-search-funds-no-brasil/",
    },
    {
      title: "O que saber sobre fundos de busca",
      source: "Forbes",
      url: "https://www.forbes.com/councils/forbesagencycouncil/2023/09/06/redefining-entrepreneurship-what-to-know-about-search-funds/",
    },
    {
      title: "Entenda O Que É Um Search Fund",
      source: "O Globo",
      url: "https://oglobo.globo.com/economia/noticia/2023/07/entenda-o-que-e-um-search-fund-o-novo-tipo-de-fundo-de-investimentos-a-caca-de-empresas-promissoras-no-brasil.ghtml",
    },
    {
      title: "Pesquisar Fundos Ganham Espaço No Brasil",
      source: "Valor Econômico",
      url: "https://valor.globo.com/financas/noticia/2023/04/05/search-funds-ganham-espaco-no-brasil.ghtml",
    },
    {
      title: "Modelo de Empreendedorismo Por Aquisição Cresce No Brasil",
      source: "Exame",
      url: "https://exame.com/invest/mercados/empreender-por-aquisicao-e-com-tudo-pago-modelo-importado-de-stanford-cresce-no-brasil/",
    },
    {
      title: "Última proposta de MBAs para investidores: deixem a startup de lado, invistam em mim",
      source: "WSJ",
      url: "https://www.wsj.com/articles/m-b-a-s-latest-pitch-investors-startup-business-school-spac-11647457255",
    },
    {
      title: "Como graduados em MBA empreendedor podem se beneficiar de fundos de pesquisa",
      source: "Fortune",
      url: "https://fortune.com/next/education/articles/how-entrepreneurial-mba-grads-can-benefit-from-search-funds/?noredirect=1",
    },
    {
      title: "Por que mais MBAs deveriam comprar pequenas empresas",
      source: "Harvard Business Review",
      url: "https://hbr.org/2016/03/why-more-mbas-should-buy-small-businesses",
    },
    {
      title: "Jovens empreendedores migram para mini private equity enquanto o mercado de trabalho está estagnado",
      source: "Business Insider",
      url: "https://www.businessinsider.com/search-funds-mini-private-equity-how-to-job-market-2025-4",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/golive-logo.png"
                alt="GoLive Capital"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#time" className="text-muted-foreground hover:text-foreground transition-colors">
                Time
              </a>
              <a href="#teses" className="text-muted-foreground hover:text-foreground transition-colors">
                Teses
              </a>
              <a href="#glossario" className="text-muted-foreground hover:text-foreground transition-colors">
                Glossário
              </a>
              <a
                href="#contato"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors"
              >
                Contato
              </a>
            </div>
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
                  <Link href="/#contato">Fale Conosco</Link>
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
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/golive-logo.png"
                  alt="GoLive Capital"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
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
                <p>+55 (11) 3000-0000</p>
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
