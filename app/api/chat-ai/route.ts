import { NextResponse } from "next/server"

// This would use the AI SDK in a real implementation
// import { generateText } from "ai"
// import { openai } from "@ai-sdk/openai"

// Knowledge base about you (same as before)
const KNOWLEDGE_BASE = {
  name: "Tamagn zewdu",
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
    const lastUserMessage = messages.filter((msg: { role: string }) => msg.role === "user").pop()?.content

    if (!lastUserMessage) {
      return NextResponse.json({
        message: "I'm Tamagn's AI assistant. How can I help you today?",
      })
    }

    // In a real implementation, you would use the AI SDK like this:
    /*
    const systemPrompt = `You are an AI assistant for Tamagn Beyene, a Backend Developer & API Specialist.
    Use the following information about Tamagn to answer questions:
    ${JSON.stringify(KNOWLEDGE_BASE, null, 2)}
    
    Always respond as if you are representing Tamagn. Be professional, helpful, and concise.
    If you don't know something about Tamagn that wasn't provided in the information above, say that you don't have that specific information.`
    
    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: lastUserMessage,
    })
    
    return NextResponse.json({ message: text })
    */

    // For now, we'll use the simple keyword-based approach as a fallback
    // This is the same logic as in the previous route handler
    let response =
      "I'm Tamagn's AI assistant. I can tell you about his background, skills, experience, education, projects, or interests. What would you like to know?"

    const userMessageLower = lastUserMessage.toLowerCase()

    if (
      userMessageLower.includes("who") ||
      userMessageLower.includes("about") ||
      userMessageLower.includes("introduction")
    ) {
      response = `${KNOWLEDGE_BASE.name} is a ${KNOWLEDGE_BASE.role} with ${KNOWLEDGE_BASE.experience}`
    } else if (
      userMessageLower.includes("skill") ||
      userMessageLower.includes("technologies") ||
      userMessageLower.includes("tech stack")
    ) {
      response = `Tamagn's key skills include: ${KNOWLEDGE_BASE.skills.join(", ")}.`
    } else if (userMessageLower.includes("experience") || userMessageLower.includes("work")) {
      response = `Tamagn has ${KNOWLEDGE_BASE.experience} He has worked on various projects including API development, microservices architecture, and cloud infrastructure.`
    } else if (
      userMessageLower.includes("education") ||
      userMessageLower.includes("study") ||
      userMessageLower.includes("degree")
    ) {
      response = `Tamagn's educational background includes: ${KNOWLEDGE_BASE.education.join(", ")}.`
    } else if (userMessageLower.includes("project") || userMessageLower.includes("portfolio")) {
      response = `Some of Tamagn's notable projects include: ${KNOWLEDGE_BASE.projects.join("; ")}.`
    } else if (
      userMessageLower.includes("interest") ||
      userMessageLower.includes("hobby") ||
      userMessageLower.includes("passion")
    ) {
      response = `Outside of work, Tamagn enjoys ${KNOWLEDGE_BASE.interests.join(", ")}.`
    } else if (
      userMessageLower.includes("contact") ||
      userMessageLower.includes("email") ||
      userMessageLower.includes("reach")
    ) {
      response = `You can contact Tamagn via email at ${KNOWLEDGE_BASE.contact.email}, or connect with him on GitHub (${KNOWLEDGE_BASE.contact.github}) and LinkedIn (${KNOWLEDGE_BASE.contact.linkedin}).`
    } else if (
      userMessageLower.includes("hello") ||
      userMessageLower.includes("hi") ||
      userMessageLower.includes("hey")
    ) {
      response = `Hello! I'm Tamagn's AI assistant. How can I help you today?`
    } else if (userMessageLower.includes("thank")) {
      response = `You're welcome! If you have any other questions about Tamagn, feel free to ask.`
    }

    // Add a delay to simulate thinking
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("Chat error:", error)
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 })
  }
}

