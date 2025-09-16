import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  Shield,
  Eye,
  Lightbulb,
  BookOpen,
  Briefcase,
  Award,
  Linkedin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/golive-logo.jpg"
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
              <a href="#valores" className="text-muted-foreground hover:text-foreground transition-colors">
                Valores
              </a>
              <a href="#glossario" className="text-muted-foreground hover:text-foreground transition-colors">
                Glossário
              </a>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contato">Contato</Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 badge-high-contrast">Sênior Search Fund</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Resultados preparam <span className="text-primary">novos ciclos</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            A Go Live Capital é uma empresa de investimentos que opera no modelo Sênior Search Fund, focada em empresas
            de tecnologia, software e serviços com receita recorrente e potencial de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contato">
                Conheça nossa estratégia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-card bg-transparent"
              asChild
            >
              <Link href="/glossario">Ver glossário</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Sobre a Go Live Capital</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Investida pela Spectra Investments e fundada por Walter Leandro Marques, nosso objetivo é adquirir
              empresas de tecnologia com receita predominante em recorrência e geração de caixa positivo.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <Target className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">Foco Estratégico</h3>
                  <p className="text-sm text-muted-foreground">
                    Empresas de software como serviço (SaaS) B2B e Fintechs de infraestrutura
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-2">Potencial de Crescimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Buscamos empresas com potencial para gerar retornos acima dos padrões esperados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="time" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Time</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Profissionais experientes com histórico comprovado em M&A, empreendedorismo e investimentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Walter Leandro Marques */}
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src="/images/leandro.png" alt="Walter Leandro Marques" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-lg">Walter Leandro Marques</CardTitle>
                <CardDescription className="text-primary font-medium">Fundador & CEO</CardDescription>
                <a
                  href="https://www.linkedin.com/in/walterleandro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors mt-2 mx-auto"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">
                  Empreendedor serial com vasta experiência em M&A
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Co-fundador Tray & Pagamento Digital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">7 anos experiência M&A</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Investidor anjo ativo</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gustavo Rinaldi */}
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src="/images/gustavo.png" alt="Gustavo Rinaldi" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-lg">Gustavo Rinaldi</CardTitle>
                <CardDescription className="text-primary font-medium">Partner at Go Live Capital</CardDescription>
                <a
                  href="https://www.linkedin.com/in/gustavo-rinaldi-85285384/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors mt-2 mx-auto"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">Descrição da experiência profissional</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Experiência anterior</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Especialização</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Conquistas relevantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* João Paulo Matos */}
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src="/images/joao.png" alt="João Paulo Matos" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-lg">João Paulo Matos</CardTitle>
                <CardDescription className="text-primary font-medium">Cargo/Função</CardDescription>
                <a
                  href="https://www.linkedin.com/in/joaopaulomatosmelo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors mt-2 mx-auto"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">Descrição da experiência profissional</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Experiência anterior</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Especialização</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Conquistas relevantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wagner Bocchi */}
            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                  <img src="/images/wagner.png" alt="Wagner Bocchi" className="w-full h-full object-cover" />
                </div>
                <CardTitle className="text-lg">Wagner Bocchi</CardTitle>
                <CardDescription className="text-primary font-medium">Cargo/Função</CardDescription>
                <a
                  href="https://linkedin.com/in/wagner-bocchi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors mt-2 mx-auto"
                >
                  <Linkedin className="h-4 w-4 text-primary" />
                </a>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground text-center">Descrição da experiência profissional</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Experiência anterior</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Especialização</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Conquistas relevantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Nosso Investidor</h3>
              <p className="text-muted-foreground">Apoio estratégico da Spectra Investments</p>
            </div>

            <Card className="bg-card border-border">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 p-2">
                  <Image
                    src="/images/spectra-logo.svg"
                    alt="Spectra Investments"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-xl">Spectra Investments</CardTitle>
                <CardDescription className="text-primary font-medium">Investidora Estratégica</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto">
                  Gestora brasileira líder em ativos alternativos na América Latina, fundada em 2012
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">R$ 7 bi</p>
                    <p className="text-xs text-muted-foreground">Sob gestão</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">2012</p>
                    <p className="text-xs text-muted-foreground">Fundada em</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">450+</p>
                    <p className="text-xs text-muted-foreground">Empresas investidas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">140+</p>
                    <p className="text-xs text-muted-foreground">Desinvestimentos</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Private Equity & Venture Capital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Referência em negócios secundários</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Histórico de alto retorno</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section id="teses" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Teses de Investimento</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nosso foco são empresas de software como serviço (SaaS) B2B e Fintechs de infraestrutura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  SaaS Clássico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Empresas com perfil de sucessão, crescimento e margem alinhadas com rule of 40. Geralmente empresas de
                  nicho, verticais (VSaaS).
                </p>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Rule of 40
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Empresas crescendo acima dos concorrentes e/ou em mercados com crescimento exponencial. Podem ter
                  prêmio em relação às empresas clássicas.
                </p>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Alto Crescimento
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  Change Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Empresas com valor a ser destravado, que não estão crescendo como a maioria do segmento. Faturamento
                  elevado com desconto no valuation.
                </p>
                <Badge variant="outline" className="border-primary/20 text-primary">
                  Valor Destravado
                </Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Critérios de Elegibilidade</CardTitle>
              <CardDescription>Requisitos fundamentais para empresas do nosso portfólio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Maioria de receitas em software versus serviços</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Receitas recorrentes e com previsibilidade</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Serviços ou softwares de missão crítica</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Alto lock-in dos clientes</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Sem endividamento ou baixa alavancagem</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Mercados atrativos e com crescimento</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Produtos/serviços com alta especialização</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Alta barreira de entrada</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="valores" className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa identidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-background border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Transformar experiência e talento em legado.</p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reunir mentes brilhantes, atrair projetos adequados e investir para inspirar novos começos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ética, Resultado, Respeito, Disponibilidade, Visão de Futuro e Inovação.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Ética",
                description:
                  "Agimos com integridade em todas as decisões, guiados por princípios que sustentam relações duradouras.",
              },
              {
                icon: Target,
                title: "Resultado",
                description:
                  "Valorizamos entregas consistentes, mensuráveis e alinhadas com os objetivos estratégicos.",
              },
              {
                icon: Users,
                title: "Respeito",
                description:
                  "Reconhecemos a singularidade de cada pessoa, projeto e contexto, promovendo relações transparentes.",
              },
              {
                icon: TrendingUp,
                title: "Disponibilidade",
                description:
                  "Estamos presentes e acessíveis para apoiar, ouvir e agir com agilidade sempre que necessário.",
              },
              {
                icon: Eye,
                title: "Visão de Futuro",
                description:
                  "Antecipamos cenários e tendências para construir estratégias que gerem valor sustentável.",
              },
              {
                icon: Lightbulb,
                title: "Inovação",
                description:
                  "Buscamos continuamente novas abordagens, tecnologias e modelos para transformar desafios em oportunidades.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Preview Section */}
      <section id="glossario" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos sobre Search Fund</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acesse nossa biblioteca completa de estudos, guias e artigos sobre o modelo Search Fund
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Guias Fundamentais</CardTitle>
                <CardDescription>7 recursos essenciais para entender o modelo Search Fund</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Estudos Acadêmicos</CardTitle>
                <CardDescription>Pesquisas de Stanford e IESE sobre Search Fund (2016-2024)</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Cobertura da Mídia</CardTitle>
                <CardDescription>11 artigos de veículos especializados sobre Search Fund</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/glossario">
                Acessar Glossário Completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/golive-logo.jpg"
                  alt="GoLive Capital"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mb-4">Resultados preparam novos ciclos</p>
              <p className="text-muted-foreground text-sm">www.golive.capital</p>
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
                  href="#valores"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Missão e Valores
                </a>
                <a
                  href="#glossario"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Glossário
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
