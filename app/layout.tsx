import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../components/theme-provider"
import { ChatInterface } from "@/components/chatbot/chat-interface"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tamagn Zewdu's Portfolio",
  description: "A portfolio website for a backend developer with a Postman-like interface",
  icons: {
    icon: "/profile.png",
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <ChatInterface />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'