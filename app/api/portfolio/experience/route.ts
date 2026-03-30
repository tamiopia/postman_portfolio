import { NextResponse } from "next/server"

const experiences = [
  {
    title: "Lead Senior Full-Stack Developer",
    company: "BlueClerk",
    period: "November 2025 - Present",
    location: "Pflugerville, Texas",
    responsibilities: [
      "Architected and optimized full-stack solutions for an IoT-centered field service management SaaS platform.",
      "Built backend flows for BlueTags QR and NFC asset tracking with real-time dashboard synchronization.",
      "Improved responsiveness with caching, schema optimization, and high-volume job processing improvements.",
    ],
    tech: ["Node.js", "Laravel", "PostgreSQL", "Caching", "IoT", "SaaS"],
  },
  {
    title: "Senior Backend Developer",
    company: "Ideeza",
    period: "October 2025 - Present",
    location: "Netanya, Israel",
    responsibilities: [
      "Contribute to the core Python and Django infrastructure of an AI-driven hardware engineering platform.",
      "Develop backend logic that processes prompts into PCB layouts and 3D-model generation workflows.",
      "Optimize APIs and engineering-data queries to improve scalability and AI workflow integration.",
    ],
    tech: ["Python", "Django", "REST APIs", "AI Workflows", "PostgreSQL"],
  },
  {
    title: "Backend Developer",
    company: "Ellatech",
    period: "August 2025 - Present",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Build and maintain backend services for production products with a focus on reliability and maintainability.",
      "Collaborate across product and engineering teams to improve API design and delivery speed.",
      "Support feature development and backend architecture improvements across ongoing systems.",
    ],
    tech: ["Backend APIs", "Integrations", "Production Systems"],
  },
  {
    title: "Full-Stack Developer and MERN Stack Instructor",
    company: "Omishtu-JTS",
    period: "March 2024 - August 2025",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Developed and deployed end-to-end web applications using Laravel and modern frontend tooling.",
      "Delivered practical MERN-stack instruction through project-based mentoring and hands-on sessions.",
      "Helped junior developers strengthen full-stack fundamentals and modern web workflows.",
    ],
    tech: ["Laravel", "React", "Node.js", "MongoDB", "Mentorship"],
  },
  {
    title: "Remote Django Developer",
    company: "Backos Technology",
    period: "May 2024 - July 2025",
    location: "Adama, Ethiopia",
    responsibilities: [
      "Built and maintained Django backend services for business applications and internal workflows.",
      "Worked on relational database design, backend logic, and production-ready API support.",
      "Collaborated remotely to ship features consistently across changing client requirements.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "REST API"],
  },
  {
    title: "Remote PHP Developer",
    company: "Xencotech",
    period: "October 2024 - April 2025",
    location: "India",
    responsibilities: [
      "Contributed to a talent and job-matching platform tailored for a fast-moving hiring workflow.",
      "Implemented backend business logic, candidate matching flows, and core application features.",
      "Supported scalable PHP-based systems and integrations across product requirements.",
    ],
    tech: ["PHP", "Laravel", "MySQL", "Matching Platform"],
  },
  {
    title: "Remote Full-Stack Developer",
    company: "Qinash Technologies",
    period: "May 2024 - September 2024",
    location: "Addis Ababa, Ethiopia",
    responsibilities: [
      "Architected and deployed a real-time delivery-tracking system serving thousands of daily users.",
      "Reduced delivery delays by 30 percent through better tracking visibility and operational tooling.",
      "Designed a dashboard that improved logistics efficiency by 40 percent with actionable insights.",
    ],
    tech: ["Realtime Systems", "Dashboards", "Logistics", "Full-Stack"],
  },
  {
    title: "Backend Developer",
    company: "Highlight Software / Remotide",
    period: "December 2023 - May 2024",
    location: "Remote",
    responsibilities: [
      "Spearheaded development of critical backend features for Remotide.com.",
      "Engineered backend functionality, optimized schemas, and improved frontend integration reliability.",
      "Helped deliver an AI-powered talent-matching platform with stronger performance and maintainability.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "APIs", "AI Matching"],
  },
]

const achievements = [
  "Expanded the portfolio to reflect 3.5 years of production experience.",
  "Worked across Ethiopia, Israel, India, and the United States on product teams and remote engagements.",
  "Built backend systems for AI, IoT SaaS, talent matching, logistics, and developer tooling products.",
  "Reduced delivery delays by 30 percent and improved dashboard efficiency by 40 percent at Qinash.",
  "Combined product delivery with mentorship by teaching MERN and full-stack development.",
]

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Experience - Tamagn</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
    body { background-color: #121212; color: #e0e0e0; line-height: 1.6; }
    .container { max-width: 1100px; margin: 0 auto; padding: 40px 20px; }
    .page-header { text-align: center; margin-bottom: 50px; position: relative; }
    .page-header::after { content: ""; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background-color: #f97316; border-radius: 2px; }
    .page-title { font-size: 2.5rem; font-weight: 700; color: #fff; margin-bottom: 10px; }
    .page-subtitle { font-size: 1.2rem; color: #f97316; }
    .timeline { position: relative; max-width: 900px; margin: 0 auto; }
    .timeline::after { content: ""; position: absolute; width: 4px; background-color: #f97316; top: 0; bottom: 0; left: 50%; margin-left: -2px; border-radius: 2px; }
    .timeline-item { padding: 10px 40px; position: relative; width: 50%; margin-bottom: 30px; }
    .timeline-item::after { content: ""; position: absolute; width: 20px; height: 20px; background-color: #f97316; border-radius: 50%; top: 24px; z-index: 1; }
    .left { left: 0; text-align: right; }
    .right { left: 50%; text-align: left; }
    .left::after { right: -10px; }
    .right::after { left: -10px; }
    .experience-card { background-color: #1e1e1e; border-radius: 12px; padding: 25px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); transition: transform 0.3s ease; }
    .experience-card:hover { transform: translateY(-5px); }
    .job-title { font-size: 1.35rem; font-weight: 600; color: #fff; margin-bottom: 5px; }
    .company { font-size: 1.05rem; color: #f97316; margin-bottom: 10px; }
    .period { display: inline-block; background-color: rgba(249, 115, 22, 0.1); color: #f97316; padding: 5px 12px; border-radius: 20px; font-size: 0.9rem; margin-bottom: 15px; }
    .location { color: #a0a0a0; font-size: 0.9rem; margin-bottom: 12px; }
    .responsibilities { list-style-type: none; margin-bottom: 18px; }
    .responsibility-item { margin-bottom: 10px; padding-left: 20px; position: relative; text-align: left; }
    .responsibility-item::before { content: "→"; color: #f97316; position: absolute; left: 0; }
    .tech-stack { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-start; }
    .left .tech-stack { justify-content: flex-end; }
    .tech-tag { background-color: #282c34; color: #e0e0e0; padding: 5px 10px; border-radius: 4px; font-size: 0.8rem; }
    .code-block { background-color: #282c34; padding: 20px; border-radius: 8px; margin: 30px auto; font-family: 'Fira Code', 'Courier New', monospace; font-size: 0.9rem; position: relative; overflow: hidden; max-width: 900px; }
    .code-header { position: absolute; top: 0; left: 0; right: 0; background-color: #1e1e1e; padding: 8px 15px; font-size: 0.8rem; color: #a0a0a0; border-bottom: 1px solid #333; }
    .code-content { margin-top: 30px; }
    .code-line { display: block; line-height: 1.5; }
    .code-comment { color: #6a9955; }
    .code-keyword { color: #569cd6; }
    .code-string { color: #ce9178; }
    .code-variable { color: #9cdcfe; }
    @media (max-width: 768px) { .timeline::after { left: 31px; } .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; text-align: left; } .timeline-item::after, .left::after, .right::after { left: 21px; } .left, .right { left: 0; text-align: left; } .left .tech-stack { justify-content: flex-start; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Professional Experience</h1>
      <p class="page-subtitle">3.5 years of building APIs, platforms, and product systems</p>
    </div>
    <div class="code-block">
      <div class="code-header">career.js</div>
      <div class="code-content">
        <span class="code-line"><span class="code-comment">// Current snapshot</span></span>
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">careerPath</span> = {</span>
        <span class="code-line">  <span class="code-variable">yearsOfExperience</span>: 3.5,</span>
        <span class="code-line">  <span class="code-variable">focus</span>: <span class="code-string">"Backend systems, APIs, and scalable web platforms"</span>,</span>
        <span class="code-line">  <span class="code-variable">activeCompanies</span>: [<span class="code-string">"Ellatech"</span>, <span class="code-string">"Ideeza"</span>, <span class="code-string">"BlueClerk"</span>],</span>
        <span class="code-line">  <span class="code-variable">specialization</span>: <span class="code-string">"Django, Laravel, Node.js, product backend architecture"</span></span>
        <span class="code-line">};</span>
      </div>
    </div>
    <div class="timeline">
      ${experiences.map((item, index) => `
        <div class="timeline-item ${index % 2 === 0 ? "left" : "right"}">
          <div class="experience-card">
            <h2 class="job-title">${item.title}</h2>
            <p class="company">${item.company}</p>
            <div class="location">${item.location}</div>
            <span class="period">${item.period}</span>
            <ul class="responsibilities">${item.responsibilities.map((responsibility) => `<li class="responsibility-item">${responsibility}</li>`).join("")}</ul>
            <div class="tech-stack">${item.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}</div>
          </div>
        </div>`).join("")}
    </div>
    <div class="code-block">
      <div class="code-header">achievements.js</div>
      <div class="code-content">
        <span class="code-line"><span class="code-comment">// Highlights from recent work</span></span>
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">achievements</span> = [</span>
        ${achievements.map((achievement) => `<span class="code-line">  <span class="code-string">"${achievement}"</span>,</span>`).join("")}
        <span class="code-line">];</span>
      </div>
    </div>
  </div>
</body>
</html>
  `

  return new NextResponse(html, { headers: { "Content-Type": "text/html" } })
}
