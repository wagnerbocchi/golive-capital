import NextAuth, { type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seu@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null
        }

        // 1. Encontrar o usuário no banco de dados
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })

        if (!user || !user.password) {
          // Usuário não encontrado ou não tem senha cadastrada
          return null
        }

        // 2. Comparar a senha fornecida com a senha hash no banco
        //    (Nota: Isso assume que você salvará a senha com bcrypt)
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        // 3. Retornar o objeto do usuário (sem a senha) se tudo estiver correto
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  // Adicione outras configurações do NextAuth aqui, como session, pages, etc.
  pages: {
    signIn: "/login", // Redireciona para a página de login existente
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
