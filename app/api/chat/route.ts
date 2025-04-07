import { NextResponse } from "next/server"

// This is a simple knowledge base about you
const KNOWLEDGE_BASE = {
  name: "Tamagn Beyene",
  role: "Backend Developer & API Specialist",
  experience: "Over 2.5 years of experience in building robust APIs and scalable web applications.",
  skills: [
    "Node.js & Express",
    "Python & Django/Flask",
    "RESTful API Design",
    "GraphQL",
    "Database Design (SQL & NoSQL)",
    "Microservices Architecture",
    "Docker & Kubernetes",
    "AWS/Azure/GCP",
  ],
  education: [
    "Master of Science in Computer Science, University of Technology",
    "Bachelor of Science in Computer Engineering, National Institute of Technology",
  ],
  projects: [
    "E-Commerce API - A comprehensive RESTful API for e-commerce platforms",
    "Task Manager API - A task management API with features like task creation and assignment",
    "Real-time Chat API - A WebSocket-based API for real-time chat applications",
    "CMS API - A flexible content management system API",
    "Payment Gateway Integration - A secure payment processing API",
    "API Gateway Service - A microservice gateway for distributed systems",
  ],
  interests: [
    "Exploring new technologies",
    "Contributing to open-source projects",
    "Hiking and outdoor activities",
    "Technical blogging",
  ],
  contact: {
    email: "tamagn@example.com",
    github: "github.com/yourusername",
    linkedin: "linkedin.com/in/yourusername",
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
      response = `Tamagn has ${KNOWLEDGE_BASE.experience} He has worked on various projects including API development, microservices architecture, and cloud infrastructure.`
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
      response = `You can contact Tamagn via email at ${KNOWLEDGE_BASE.contact.email}, or connect with him on GitHub (${KNOWLEDGE_BASE.contact.github}) and LinkedIn (${KNOWLEDGE_BASE.contact.linkedin}).`
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

