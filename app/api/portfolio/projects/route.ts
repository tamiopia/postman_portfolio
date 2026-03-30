import { NextResponse } from "next/server"

const projects = [
  {
    title: "Remotide",
    status: "Production",
    meta: "AI-powered talent matching platform",
    featured: true,
    description:
      "An AI-powered talent matching platform that connects professionals with global opportunities. I contributed backend logic, schema design, matching support, and production API integration for the product.",
    code: [
      "// Matching candidates with relevant roles",
      "const matchTalent = async (candidate) => {",
      "  const roles = await JobMatcher.findRelevantRoles(candidate.skills)",
      "  return roles.filter((role) => role.score > 0.8)",
      "}",
    ],
    tech: ["Node.js", "Express", "MongoDB", "AI Matching", "REST API"],
    links: [
      { label: "Live", href: "https://www.remotide.com" },
      { label: "GitHub", href: "https://github.com/tamiopia/hilight_maching_api" },
    ],
  },
  {
    title: "SchemaDraw",
    status: "Live",
    meta: "Online schema and ERD builder",
    description:
      "A database schema and ERD builder that turns JSON schemas into clean Mermaid-based diagrams. It helps developers instantly visualize tables, columns, and relationships for documentation and collaboration.",
    code: [
      "// Convert JSON schema into Mermaid ERD",
      "function buildDiagram(schema) {",
      "  return schema.tables.map(renderTable).join('\\n')",
      "}",
    ],
    tech: ["Next.js", "TypeScript", "Mermaid", "Developer Tools"],
    links: [{ label: "Live", href: "https://schemadraw.tebitainnovations.com/" }],
  },
  {
    title: "Postflame",
    status: "Published",
    meta: "CLI for Hono to Postman generation",
    description:
      "A CLI tool that automatically generates Postman collections from Hono applications using Zod schemas. It is built to save time for API teams by turning route definitions into ready-to-use collections.",
    code: [
      "// Generate collections from Hono route definitions",
      "const collection = await generateCollection(app, {",
      "  schema: 'zod',",
      "  output: 'postman'",
      "})",
    ],
    tech: ["Node.js", "CLI", "Hono", "Zod", "Postman"],
    links: [{ label: "npm", href: "https://www.npmjs.com/package/postflame" }],
  },
  {
    title: "Nexus",
    status: "Private",
    meta: "Reputation and feedback analytics platform",
    description:
      "A reputation management system that aggregates ratings, scrapes review sources, runs sentiment analysis, and generates actionable recommendations for improving customer experience.",
    code: [
      "// Analyze customer feedback sentiment",
      "const sentiment = await sentimentService.analyze(feedback)",
      "return { score: sentiment.score, label: sentiment.label }",
    ],
    tech: ["Laravel", "Python", "NLP", "Web Scraping", "Analytics"],
    links: [{ label: "Private Deployment", href: "http://10.144.37.209:3000" }],
  },
  {
    title: "Qinash Delivery Tracking",
    status: "Production",
    meta: "Real-time logistics tracking and operations dashboard",
    description:
      "A real-time delivery tracking system and operational dashboard for a leading Ethiopian e-commerce platform. The system reduced delivery delays by 30 percent and improved logistics efficiency by 40 percent.",
    code: [
      "// Push courier status updates into the dashboard",
      "await trackingStream.publish({",
      "  orderId, status: 'in_transit', updatedAt: new Date().toISOString()",
      "})",
    ],
    tech: ["Realtime Systems", "Dashboards", "Logistics", "Full-Stack"],
    links: [{ label: "Company", href: "https://qinash.com/" }],
  },
  {
    title: "Qen.js",
    status: "Published",
    meta: "Ethiopian and Gregorian calendar conversion library",
    description:
      "A lightweight library for converting between Gregorian and Ethiopian calendar systems, designed for accurate formatting and local date handling including Pagume and leap-year rules.",
    code: [
      "import { toEthiopic } from 'qen.js'",
      "const date = toEthiopic(new Date())",
      "console.log(date.format('DD/MM/YYYY'))",
    ],
    tech: ["JavaScript", "TypeScript", "Date Utilities", "Open Source"],
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/qen.js" },
      { label: "GitHub", href: "https://github.com/tamiopia/qen.js" },
    ],
  },
]

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects - Tamagn</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background-color: #121212; color: #e0e0e0; line-height: 1.6; }
    .container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
    .page-header { text-align: center; margin-bottom: 50px; position: relative; }
    .page-header::after { content: ""; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background-color: #f97316; border-radius: 2px; }
    .page-title { font-size: 2.5rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
    .page-subtitle { font-size: 1.2rem; color: #f97316; }
    .projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px; }
    .project-card { background-color: #1e1e1e; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease; display: flex; flex-direction: column; position: relative; }
    .project-card:hover { transform: translateY(-10px); }
    .project-header { padding: 20px; border-bottom: 1px solid #333; position: relative; }
    .project-header::before { content: ""; position: absolute; top: 0; left: 0; width: 5px; height: 100%; background-color: #f97316; }
    .project-title { font-size: 1.5rem; font-weight: 600; color: #fff; margin-bottom: 5px; }
    .project-meta { display: flex; justify-content: space-between; gap: 12px; font-size: 0.9rem; color: #a0a0a0; }
    .project-status { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 0.8rem; background-color: rgba(249, 115, 22, 0.1); color: #f97316; }
    .project-body { padding: 20px; flex-grow: 1; display: flex; flex-direction: column; }
    .project-description { margin-bottom: 20px; font-size: 1rem; }
    .code-preview { background-color: #282c34; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-family: 'Fira Code', 'Courier New', monospace; font-size: 0.85rem; overflow-x: auto; flex-grow: 1; }
    .code-line { display: block; line-height: 1.5; white-space: pre; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
    .tech-tag { background-color: #282c34; color: #e0e0e0; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; }
    .project-links { display: flex; flex-wrap: wrap; gap: 10px; }
    .project-link { flex: 1; min-width: 120px; text-align: center; background-color: #282c34; color: #e0e0e0; text-decoration: none; padding: 8px 0; border-radius: 4px; font-size: 0.9rem; transition: all 0.3s ease; }
    .project-link:hover { background-color: #f97316; color: #fff; }
    .featured-project { grid-column: span 2; }
    .featured-badge { position: absolute; top: 15px; right: 15px; background-color: #f97316; color: #fff; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; font-weight: 600; }
    @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } .featured-project { grid-column: span 1; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">Selected work from product, platform, and open-source development</p>
    </div>
    <div class="projects-grid">
      ${projects.map((project) => `
        <div class="project-card ${project.featured ? "featured-project" : ""}">
          ${project.featured ? '<span class="featured-badge">Featured</span>' : ""}
          <div class="project-header">
            <h2 class="project-title">${project.title}</h2>
            <div class="project-meta"><span class="project-status">${project.status}</span><span>${project.meta}</span></div>
          </div>
          <div class="project-body">
            <p class="project-description">${project.description}</p>
            <div class="code-preview">${project.code.map((line) => `<span class="code-line">${line}</span>`).join("")}</div>
            <div class="tech-stack">${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}</div>
            <div class="project-links">${project.links.map((link) => `<a href="${link.href}" class="project-link" target="_blank" rel="noreferrer">${link.label}</a>`).join("")}</div>
          </div>
        </div>`).join("")}
    </div>
  </div>
</body>
</html>
  `

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } })
}
