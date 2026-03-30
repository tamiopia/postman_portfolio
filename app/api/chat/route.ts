import { NextResponse } from "next/server"

// This is a simple knowledge base about you
const KNOWLEDGE_BASE = {
  name: "Tamagn Zewdu",
  role: "Backend Developer, Full-Stack Engineer & API Specialist",
  experience: "Over 3.5 years of experience building robust APIs, scalable web applications, and backend systems.",
  skills: [
    "Node.js, Express, and NestJS",
    "Python and Django",
    "Laravel and PHP",
    "Next.js and React",
    "RESTful API Design",
    "PostgreSQL, MySQL, and MongoDB",
    "Microservices and backend architecture",
    "Developer tools and open-source packages",
  ],
  education: [
    "BSc in Software Engineering, Arba Minch University (2019-2024)",
    "ALX Africa Software Engineering Program (2023-2024)",
  ],
  projects: [
    "Remotide - AI-powered talent matching platform",
    "SchemaDraw - JSON schema to ERD builder",
    "Postflame - CLI tool for generating Postman collections from Hono apps",
    "Nexus - Reputation and sentiment analytics platform",
    "Qinash Delivery Tracking - Real-time logistics system and dashboard",
    "Qen.js - Ethiopian calendar conversion package",
  ],
  interests: [
    "Participating in and creating open-source projects",
    "Building developer productivity tools",
    "Backend architecture and AI workflows",
    "Mentoring developers",
  ],
  companies: [
    "Ellatech",
    "Ideeza",
    "BlueClerk",
    "Omishtu-JTS",
    "Qinash Technologies",
    "Backos Technology",
    "Xencotech",
    "Highlight Software / Remotide",
  ],
  contact: {
    website: "https://tamiopia.vercel.app",
    github: "github.com/tamiopia",
    linkedin: "linkedin.com/in/tamagn-zewdu",
    medium: "medium.com/@tamiopia",
  },
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()

    // Get the last user message
    const lastUserMessage = messages
      .filter((msg: { role: string }) => msg.role === "user")
      .pop()
      ?.content.toLowerCase()

    // Simple response generation based on keywords
    let response =
      "I'm Tamagn's AI assistant. I can tell you about his background, skills, experience, education, projects, or interests. What would you like to know?"

    if (!lastUserMessage) {
      return NextResponse.json({ message: response })
    }

    // Check for different topics in the user's message
    if (
      lastUserMessage.includes("who") ||
      lastUserMessage.includes("about") ||
      lastUserMessage.includes("introduction")
    ) {
      response = `${KNOWLEDGE_BASE.name} is a ${KNOWLEDGE_BASE.role} with ${KNOWLEDGE_BASE.experience}`
    } else if (
      lastUserMessage.includes("skill") ||
      lastUserMessage.includes("technologies") ||
      lastUserMessage.includes("tech stack")
    ) {
      response = `Tamagn's key skills include: ${KNOWLEDGE_BASE.skills.join(", ")}.`
    } else if (lastUserMessage.includes("experience") || lastUserMessage.includes("work")) {
      response = `Tamagn has ${KNOWLEDGE_BASE.experience} He has recently worked with ${KNOWLEDGE_BASE.companies.slice(0, 5).join(", ")}, focusing on APIs, backend architecture, logistics systems, AI workflows, and SaaS platforms.`
    } else if (
      lastUserMessage.includes("education") ||
      lastUserMessage.includes("study") ||
      lastUserMessage.includes("degree")
    ) {
      response = `Tamagn's educational background includes: ${KNOWLEDGE_BASE.education.join(", ")}.`
    } else if (lastUserMessage.includes("project") || lastUserMessage.includes("portfolio")) {
      response = `Some of Tamagn's notable projects include: ${KNOWLEDGE_BASE.projects.join("; ")}.`
    } else if (
      lastUserMessage.includes("interest") ||
      lastUserMessage.includes("hobby") ||
      lastUserMessage.includes("passion")
    ) {
      response = `Outside of work, Tamagn enjoys ${KNOWLEDGE_BASE.interests.join(", ")}.`
    } else if (
      lastUserMessage.includes("contact") ||
      lastUserMessage.includes("email") ||
      lastUserMessage.includes("reach")
    ) {
      response = `You can reach Tamagn through his website (${KNOWLEDGE_BASE.contact.website}), GitHub (${KNOWLEDGE_BASE.contact.github}), LinkedIn (${KNOWLEDGE_BASE.contact.linkedin}), or Medium (${KNOWLEDGE_BASE.contact.medium}).`
    } else if (lastUserMessage.includes("hello") || lastUserMessage.includes("hi") || lastUserMessage.includes("hey")) {
      response = `Hello! I'm Tamagn's AI assistant. How can I help you today?`
    } else if (lastUserMessage.includes("thank")) {
      response = `You're welcome! If you have any other questions about Tamagn, feel free to ask.`
    }

    // Add a delay to simulate thinking (optional)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}

