"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Phone, Mail, Clock, Building2, Send, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ContatoPage() {
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
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: "",
      })
    }, 3000)
  }

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
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar</span>
              </Link>
              <div className="flex items-center space-x-2">
                <img
                  src="/images/golive-logo.jpg"
                  alt="Go Live Capital"
                  className="w-8 h-8 rounded-lg object-contain"
                />
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
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 badge-high-contrast">Entre em Contato</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Vamos conversar sobre <span className="text-primary">oportunidades</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Interessado em saber mais sobre nossos investimentos ou tem uma empresa que se encaixa no nosso perfil?
            Entre em contato conosco.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4">
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
                      <p className="text-sm text-muted-foreground">contato@golivecap.com.br</p>
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
                      www.golivecap.com.br
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Tem uma empresa para vender?</CardTitle>
                  <CardDescription>
                    Verificamos se sua empresa se encaixa no nosso perfil de investimento
                  </CardDescription>
                </CardHeader>
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-card border-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Pronto para o próximo ciclo?</CardTitle>
              <CardDescription>
                Seja você um empreendedor buscando sucessão ou um investidor interessado em Search Fund, vamos conversar
                sobre as oportunidades.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Agendar Reunião
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card bg-transparent"
                  asChild
                >
                  <Link href="/glossario">Conhecer Search Fund</Link>
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
                <img
                  src="/images/golive-logo.jpeg"
                  alt="Go Live Capital"
                  className="w-8 h-8 rounded-lg object-contain"
                />
                <span className="text-xl font-bold">Go Live Capital</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Resultados preparam novos ciclos</p>
              <p className="text-muted-foreground text-sm">www.golive.capital</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>contato@golivecap.com.br</p>
                <p>+55 (11) 3000-0000</p>
                <p>Seg-Sex: 9h às 18h</p>
              </div>
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
                  href="/glossario"
                  className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                >
                  Glossário Search Fund
                </Link>
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
