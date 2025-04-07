import { PostmanInterface } from "../components/postman-interface"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c]">
      <PostmanInterface />
      <Analytics />
    </main>
  )
}

