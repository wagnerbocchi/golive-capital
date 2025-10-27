/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcrypt")

const prisma = new PrismaClient()

async function main() {
  const email = "wagner@golive.capital"
  const name = "Wagner"
  const plainPassword = "GoliveCapital@2025"

  const password = await bcrypt.hash(plainPassword, 12)

  const user = await prisma.user.upsert({
    where: { email },
    update: { name, password },
    create: { email, name, password },
  })

  console.log("✅ Usuário garantido:", { id: user.id, email: user.email, name: user.name })
}

main()
  .catch((e) => {
    console.error("❌ Erro no seed:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

