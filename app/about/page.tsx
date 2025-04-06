import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>

        <div className="mb-8">
          <p className="text-lg mb-4">
            I'm a passionate backend developer with expertise in building robust APIs, microservices, and scalable
            systems. With over 5 years of experience, I specialize in Node.js, Python, and cloud infrastructure.
          </p>
          <p className="text-lg mb-4">
            My portfolio is designed as a Postman-like interface to showcase my backend development skills in an
            interactive way. Feel free to explore the different API endpoints and see the responses in real-time.
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
                <li>Python & Django/Flask</li>
                <li>RESTful API Design</li>
                <li>GraphQL</li>
                <li>Database Design (SQL & NoSQL)</li>
                <li>Microservices Architecture</li>
                <li>Docker & Kubernetes</li>
                <li>AWS/Azure/GCP</li>
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
                  <h3 className="font-medium">Senior Backend Developer</h3>
                  <p className="text-sm text-muted-foreground">TechCorp Inc. (2020-Present)</p>
                </div>
                <div>
                  <h3 className="font-medium">Backend Developer</h3>
                  <p className="text-sm text-muted-foreground">API Solutions Ltd. (2018-2020)</p>
                </div>
                <div>
                  <h3 className="font-medium">Junior Developer</h3>
                  <p className="text-sm text-muted-foreground">WebTech Startup (2016-2018)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Button asChild>
            <Link href="/">Back to API Explorer</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

