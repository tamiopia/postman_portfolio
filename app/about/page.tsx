import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioModeToggle } from "@/components/portfolio-mode-toggle"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex justify-end">
          <PortfolioModeToggle mode="classic" />
        </div>
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="mb-8">
          <p className="text-lg mb-4">
            I'm a backend-focused full-stack developer with 3.5 years of experience building APIs, scalable web
            applications, internal tools, and product backends across local and international teams.
          </p>
          <p className="text-lg mb-4">
            My portfolio is designed as a Postman-like interface so visitors can explore my experience, projects, and
            technical strengths in a way that feels interactive and product-oriented.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Technical expertise and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>Laravel & PHP</li>
                <li>Next.js & React</li>
                <li>RESTful API Design</li>
                <li>Database Design (SQL & NoSQL)</li>
                <li>Microservices Architecture</li>
                <li>Developer Tools & Open Source</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>Professional background</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Lead Senior Full-Stack Developer</h3>
                  <p className="text-sm text-muted-foreground">BlueClerk (2025-Present)</p>
                </div>
                <div>
                  <h3 className="font-medium">Senior Backend Developer</h3>
                  <p className="text-sm text-muted-foreground">Ideeza (2025-Present)</p>
                </div>
                <div>
                  <h3 className="font-medium">Backend Developer</h3>
                  <p className="text-sm text-muted-foreground">Ellatech (2025-Present)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Back to API Explorer</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/portfolio">Back to Classic Portfolio</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

