"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  Send,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/golive_capital_vect.svg"
                alt="GoLive Capital"
                width={240}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="/#time" className="text-muted-foreground hover:text-foreground transition-colors">
                Time
              </a>
              <a href="/#teses" className="text-muted-foreground hover:text-foreground transition-colors">
                Teses
              </a>
              <a href="/glossario" className="text-muted-foreground hover:text-foreground transition-colors">
                Glossário
              </a>
              <a
                href="/contato"
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
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contato" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo e entraremos em contato em breve</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="lg:col-span-2 max-w-2xl mx-auto w-full">
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

          <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/golive_capital_vect.svg"
                  alt="GoLive Capital"
                  width={240}
                  height={80}
                  className="h-16 w-auto"
                />
              </Link>
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
