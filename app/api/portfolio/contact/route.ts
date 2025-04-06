import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real application, you would process the contact form data here
    // For example, sending an email or storing in a database

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return a success response with HTML
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Submission - Tamagn</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    body {
      background-color: #121212;
      color: #e0e0e0;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 60px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    .success-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 40px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      width: 100%;
      max-width: 600px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .success-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #4CAF50;
    }
    .success-icon {
      width: 80px;
      height: 80px;
      background-color: rgba(76, 175, 80, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 40px;
      color: #4CAF50;
    }
    .success-title {
      font-size: 2rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 15px;
    }
    .success-message {
      font-size: 1.1rem;
      margin-bottom: 30px;
    }
    .details-card {
      background-color: #282c34;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      text-align: left;
      width: 100%;
    }
    .detail-item {
      margin-bottom: 10px;
    }
    .detail-label {
      font-weight: 600;
      color: #f97316;
      margin-right: 10px;
    }
    .button {
      display: inline-block;
      background-color: #f97316;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }
    .button:hover {
      background-color: #ea580c;
      transform: translateY(-3px);
    }
    .code-block {
      background-color: #282c34;
      padding: 20px;
      border-radius: 8px;
      margin: 30px 0;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.9rem;
      position: relative;
      overflow: hidden;
      text-align: left;
      width: 100%;
    }
    .code-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: #1e1e1e;
      padding: 8px 15px;
      font-size: 0.8rem;
      color: #a0a0a0;
      border-bottom: 1px solid #333;
    }
    .code-content {
      margin-top: 30px;
    }
    .code-line {
      display: block;
      line-height: 1.5;
    }
    .code-comment {
      color: #6a9955;
    }
    .code-keyword {
      color: #569cd6;
    }
    .code-string {
      color: #ce9178;
    }
    .code-function {
      color: #dcdcaa;
    }
    .code-variable {
      color: #9cdcfe;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="success-card">
      <div class="success-icon">✓</div>
      <h1 class="success-title">Message Received!</h1>
      <p class="success-message">Thank you for reaching out, ${data.name}. I've received your message and will get back to you as soon as possible.</p>
      
      <div class="details-card">
        <div class="detail-item">
          <span class="detail-label">Name:</span> ${data.name}
        </div>
        <div class="detail-item">
          <span class="detail-label">Email:</span> ${data.email}
        </div>
        <div class="detail-item">
          <span class="detail-label">Message:</span> ${data.message}
        </div>
      </div>
      
      <div class="code-block">
        <div class="code-header">message.js</div>
        <div class="code-content">
          <span class="code-line"><span class="code-comment">// Your message has been received</span></span>
          <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">message</span> = {</span>
          <span class="code-line">  <span class="code-variable">from</span>: <span class="code-string">"${data.name}"</span>,</span>
          <span class="code-line">  <span class="code-variable">email</span>: <span class="code-string">"${data.email}"</span>,</span>
          <span class="code-line">  <span class="code-variable">content</span>: <span class="code-string">"${data.message.replace(/"/g, '\\"')}"</span>,</span>
          <span class="code-line">  <span class="code-variable">status</span>: <span class="code-string">"received"</span>,</span>
          <span class="code-line">  <span class="code-variable">timestamp</span>: <span class="code-keyword">new</span> <span class="code-function">Date</span>().toISOString()</span>
          <span class="code-line">};</span>
          <span class="code-line"></span>
          <span class="code-line"><span class="code-comment">// Response will be sent within 24 hours</span></span>
        </div>
      </div>
      
      <a href="#" class="button">Return to Portfolio</a>
    </div>
  </div>
</body>
</html>
    `

    return new NextResponse(html, {
      headers: {
        "Content-Type": "text/html",
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 400 })
  }
}

