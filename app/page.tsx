"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Target,
  Users,
  TrendingUp,
  BookOpen,
  Briefcase,
  Award,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Send,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Se a resposta não for bem-sucedida, lança um erro
        throw new Error('Falha ao enviar a mensagem.');
      }

      // Se a resposta for bem-sucedida
      setIsSubmitted(true);
      // Limpa o formulário após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          nome: "",
          empresa: "",
          email: "",
          telefone: "",
          assunto: "",
          mensagem: "",
        });
      }, 3000);

    } catch (error) {
      console.error(error);
      // Aqui você pode adicionar um estado para exibir uma mensagem de erro ao usuário
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    } finally {
      // Garante que o estado de submissão seja falso ao final, independentemente do resultado
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/golive_capital_vect.svg"
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
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Resultados preparam <span className="text-primary">novos ciclos</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            A Go Live Capital é uma empresa de investimentos que opera no modelo Sênior Search Fund, focada em empresas
            de tecnologia, software e serviços com receita recorrente e potencial de crescimento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#contato">
                Conheça nossa estratégia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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
                  Empreendedor e executivo com mais de 20 anos de experiência, principalmente em tecnologia.
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Co-fundador Tray & Pagamento Digital & VP Nuvini</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Abriu capital da Nuvini na Nasdaq 2023</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Merge & Acquisitions</span>
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
                <CardDescription className="text-primary font-medium">Sócio</CardDescription>
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
                <p className="text-sm text-muted-foreground text-center"> Parceiro na Go Live Capital</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Parceiro e VP Acorn Advisory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Private Equity e Venture Capital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">MBA em Marketing e Business Digital Intelligence</span>
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
                <CardDescription className="text-primary font-medium">Estagiário M&A</CardDescription>
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
                <p className="text-sm text-muted-foreground text-center">Mergers and Acquisitions Go Live Capital</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Experiência anterior</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Bacharelando em Economia USP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">FIDC na WNT Gestora</span>
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
                <CardDescription className="text-primary font-medium">Desenvolvedor e Especialista em TI</CardDescription>
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
                <p className="text-sm text-muted-foreground text-center">Especialista em desenvolvimento de software e cibersegurança</p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Penetration Tester Smart Services Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-3 w-3 text-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">Certified Ethical Hacker by CISCO</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section investidor */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Investidores</h3>
              {/*<p className="text-muted-foreground">Apoio estratégico da Spectra Investments</p>*/}
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-1">R$ 7 bi</p>
                    <p className="text-sm text-muted-foreground">de Capital sob gestão</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-1">+ 13 anos</p>
                    <p className="text-sm text-muted-foreground">de história</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-1">700+</p>
                    <p className="text-sm text-muted-foreground">empresas investidas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
      
      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Tem uma empresa para vender?</CardTitle>
              <CardDescription>
                Verificamos se sua empresa se encaixa no nosso perfil de investimento.

              </CardDescription>
            </CardHeader>
            <CardContent>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Receita recorrente (SaaS/Fintech)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Geração de caixa positivo</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Potencial de crescimento</span>
                    </div>
                  </div>
                </CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Agendar Reunião
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

            {/* Contact Form & Info */}
      <section id="contato" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium">
                          Nome *
                        </label>
                        <Input
                          id="nome"
                          placeholder="Seu nome completo"
                          className="bg-background border-border"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="empresa" className="text-sm font-medium">
                          Empresa
                        </label>
                        <Input
                          id="empresa"
                          placeholder="Nome da empresa"
                          className="bg-background border-border"
                          value={formData.empresa}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          className="bg-background border-border"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium">
                          Telefone
                        </label>
                        <Input
                          id="telefone"
                          placeholder="(11) 99999-9999"
                          className="bg-background border-border"
                          value={formData.telefone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="assunto" className="text-sm font-medium">
                        Assunto *
                      </label>
                      <Input
                        id="assunto"
                        placeholder="Sobre o que gostaria de falar?"
                        className="bg-background border-border"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensagem" className="text-sm font-medium">
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        placeholder="Descreva sua mensagem, projeto ou oportunidade..."
                        rows={6}
                        className="bg-background border-border resize-none"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Mensagem Enviada!
                        </>
                      ) : isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground">
                    * Campos obrigatórios. Seus dados serão tratados com confidencialidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Building2 className="mr-3 h-5 w-5 text-primary" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Endereço</h3>
                      <p className="text-sm text-muted-foreground">
                        Rua Tabapuã 500 - Itaim Bibi
                        <br />
                        São Paulo - SP, 04533-001
                        <br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">contato@golive.capital</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Telefone</h3>
                      <p className="text-sm text-muted-foreground">+55 (11) 3000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Horário de Atendimento</h3>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta: 9h às 18h
                        <br />
                        Sábado e Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl">Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <a
                      href="https://www.golive.capital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      www.golive.capital
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <p className="text-muted-foreground">Estamos localizados no coração financeiro de São Paulo</p>
          </div>

          <Card className="bg-background border-border overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7234567890123!2d-46.6784567!3d-23.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a7%3A0x8b8b8b8b8b8b8b8b!2sRua%20Tabapuã%2C%20500%20-%20Itaim%20Bibi%2C%20São%20Paulo%20-%20SP%2C%2004533-001!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Go Live Capital - Rua Tabapuã 500, Itaim Bibi, São Paulo"
              />
            </div>
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
                  src="/images/golive_capital_vect.svg"
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
