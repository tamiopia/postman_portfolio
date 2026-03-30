import Link from "next/link"
import { ArrowRight, Briefcase, ExternalLink, Github, Globe, Linkedin, Mail, NotebookPen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PortfolioModeToggle } from "@/components/portfolio-mode-toggle"
import { portfolioExperience, portfolioProfile, portfolioProjects } from "@/lib/portfolio-data"

export function NormalPortfolio() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,#111111_0%,#171717_42%,#101010_100%)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-orange-300/80">Portfolio Modes</p>
              <h1 className="mt-2 text-2xl font-semibold">Choose the style that fits your visit</h1>
            </div>
            <PortfolioModeToggle mode="classic" />
          </div>

          <section className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1.4fr_0.9fr] lg:px-12">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300/80">Classic Portfolio</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                  {portfolioProfile.name}
                </h2>
                <p className="mt-3 text-lg text-orange-300">{portfolioProfile.title}</p>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">{portfolioProfile.summary}</p>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">{portfolioProfile.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {portfolioProfile.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                    <Link href="/contact">
                      Contact Me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                    <Link href="/about">Read More</Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#121212]/90 p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">Quick Snapshot</p>
                  <Globe className="h-4 w-4 text-orange-300" />
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Experience</p>
                    <p className="mt-2 text-2xl font-semibold">{portfolioProfile.experience}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Location</p>
                    <p className="mt-2 text-lg font-medium">{portfolioProfile.location}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-white/50">Profiles</p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <Link href={portfolioProfile.links.github} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                      <Link href={portfolioProfile.links.linkedin} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Link>
                      <Link href={portfolioProfile.links.medium} className="inline-flex items-center gap-2 text-white/80 hover:text-white">
                        <NotebookPen className="h-4 w-4" />
                        Medium
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Briefcase className="h-5 w-5 text-orange-300" />
                  Recent Experience
                </CardTitle>
                <CardDescription className="text-white/55">
                  Highlights from current and recent roles across product, SaaS, and platform engineering.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {portfolioExperience.map((item) => (
                  <div key={`${item.company}-${item.role}`} className="rounded-2xl border border-white/10 bg-[#131313] p-4">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.role}</h3>
                        <p className="text-orange-300">{item.company}</p>
                      </div>
                      <span className="text-sm text-white/45">{item.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">{item.summary}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <ExternalLink className="h-5 w-5 text-orange-300" />
                  Featured Projects
                </CardTitle>
                <CardDescription className="text-white/55">
                  Production work and open-source tools that represent how I like to build.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {portfolioProjects.map((project) => (
                  <Link
                    key={project.title}
                    href={project.href}
                    className="block rounded-2xl border border-white/10 bg-[#131313] p-4 transition hover:-translate-y-1 hover:border-orange-300/30 hover:bg-[#161616]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="mt-1 text-sm text-orange-300">{project.meta}</p>
                      </div>
                      <ExternalLink className="mt-1 h-4 w-4 text-white/40" />
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/65">{project.summary}</p>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(249,115,22,0.12),rgba(255,255,255,0.04))] px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-orange-300/80">Explore Both</p>
                <h3 className="mt-2 text-2xl font-semibold">Prefer the interactive version?</h3>
                <p className="mt-3 max-w-2xl text-white/65">
                  Switch to the API-style portfolio if you want to browse the same story through endpoints,
                  requests, and live response panels.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
                  <Link href="/">Open API Portfolio</Link>
                </Button>
                <Button asChild className="bg-orange-500 text-white hover:bg-orange-600">
                  <Link href="/contact">
                    Get In Touch
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
