import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { method, url, headers, body } = await request.json()

    const options: RequestInit = {
      method,
      headers,
    }

    if (method !== "GET" && body) {
      options.body = body
    }

    const response = await fetch(url, options)
    const contentType = response.headers.get("content-type") || ""

    if (contentType.includes("application/json")) {
      const data = await response.json()
      return NextResponse.json(data, {
        status: response.status,
        statusText: response.statusText,
      })
    } else if (contentType.includes("text/html")) {
      const html = await response.text()
      return new Response(html, {
        status: response.status,
        headers: {
          "Content-Type": "text/html",
        },
      })
    } else {
      const text = await response.text()
      return new Response(text, {
        status: response.status,
        headers: {
          "Content-Type": contentType || "text/plain",
        },
      })
    }

  } catch (error) {
    console.error("Proxy error:", error)
    return NextResponse.json({ error: "Failed to proxy request" }, { status: 500 })
  }
}
