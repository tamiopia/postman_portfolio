"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import Link from "next/link"
import { PortfolioModeToggle } from "@/components/portfolio-mode-toggle"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 flex justify-end">
            <PortfolioModeToggle mode="classic" />
          </div>
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="bg-[#1e1e1e] border-[#2c2c2c] text-white shadow-lg overflow-hidden relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#f97316]"></div>
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#282c34] border-[#3c3c3c] focus:border-[#f97316] focus:ring-[#f97316]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#282c34] border-[#3c3c3c] focus:border-[#f97316] focus:ring-[#f97316]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-[#282c34] border-[#3c3c3c] focus:border-[#f97316] focus:ring-[#f97316]"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white transition-transform hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                  {isSubmitted && (
                    <p className="text-green-500 text-center">Message sent successfully! I'll get back to you soon.</p>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-[#1e1e1e] border-[#2c2c2c] text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#f97316]"></div>
                <CardHeader>
                  <CardTitle className="text-white">Connect With Me</CardTitle>
                  <CardDescription className="text-gray-400">Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Link
                      href="https://github.com/tamiopia"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#f97316] transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      github.com/tamiopia
                    </Link>
                    <Link
                      href="https://linkedin.com/in/tamagn-zewdu"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#f97316] transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      linkedin.com/in/tamagn-zewdu
                    </Link>
                    <Link
                      href="https://medium.com/@tamiopia"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#f97316] transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                      medium.com/@tamiopia
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#1e1e1e] border-[#2c2c2c] text-white shadow-lg overflow-hidden relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#f97316]"></div>
                <CardHeader>
                  <CardTitle className="text-white">Office Hours</CardTitle>
                  <CardDescription className="text-gray-400">When I'm available for meetings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-[#f97316]">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-[#f97316]">By appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-[#f97316]">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3c3c3c] text-[#f97316] hover:bg-[#f97316] hover:text-white"
                >
                  <Link href="/portfolio">Back to Classic Portfolio</Link>
                </Button>
                <Button asChild className="bg-[#f97316] hover:bg-[#ea580c] text-white">
                  <Link href="/">Open API Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

