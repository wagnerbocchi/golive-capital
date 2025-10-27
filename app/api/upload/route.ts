import { NextResponse } from "next/server"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { getCloudinary } from "@/lib/cloudinary"

export async function POST(request: Request) {
  try {
    const form = await request.formData()
    const file = form.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "Arquivo não enviado" }, { status: 400 })
    }

    // Validações básicas
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"]
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: "Tipo de arquivo inválido" }, { status: 400 })
    }

    const maxBytes = 5 * 1024 * 1024 // 5MB
    if (file.size > maxBytes) {
      return NextResponse.json({ error: "Arquivo excede 5MB" }, { status: 413 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Prefer Cloudinary when configured
    const cl = getCloudinary()
    if (cl) {
      const folder = process.env.CLOUDINARY_UPLOAD_FOLDER || "golive-uploads"
      const result = await new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
        const stream = cl.uploader.upload_stream(
          { folder, resource_type: "image" },
          (error, res) => {
            if (error || !res) return reject(error)
            resolve({ secure_url: (res as any).secure_url, public_id: (res as any).public_id })
          },
        )
        stream.end(buffer)
      })
      return NextResponse.json({ url: result.secure_url, id: result.public_id, provider: "cloudinary" })
    }

    // Fallback: save locally under public/uploads
    const uploadsDir = path.join(process.cwd(), "public", "uploads")
    await mkdir(uploadsDir, { recursive: true })

    const ext = file.type === "image/png" ? ".png" : file.type === "image/webp" ? ".webp" : ".jpg"
    const base = (file.name || "upload").replace(/[^a-zA-Z0-9-_\.]/g, "_")
    const filename = `${Date.now()}_${base}`.replace(/\.+$/, "") + ext
    const filepath = path.join(uploadsDir, filename)

    await writeFile(filepath, buffer)

    const url = `/uploads/${filename}`
    return NextResponse.json({ url, provider: "local" })
  } catch (error) {
    console.error("Erro no upload:", error)
    return NextResponse.json({ error: "Falha no upload" }, { status: 500 })
  }
}
