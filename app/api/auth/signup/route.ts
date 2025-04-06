import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // In a real application, you would validate and store user data here
    // For example, checking if the username/email already exists and hashing the password

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Return a success response with HTML
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup Success - Tamagn</title>
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
      background-color: #f97316;
    }
    .success-icon {
      width: 80px;
      height: 80px;
      background-color: rgba(249, 115, 22, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      font-size: 40px;
      color: #f97316;
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
    .user-info {
      background-color: #282c34;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
      text-align: left;
    }
    .info-item {
      margin-bottom: 10px;
    }
    .info-label {
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
    .features-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin: 20px 0;
      justify-content: center;
    }
    .feature-item {
      background-color: #282c34;
      border-radius: 8px;
      padding: 15px;
      width: calc(50% - 10px);
      text-align: left;
      display: flex;
      align-items: center;
    }
    .feature-icon {
      width: 40px;
      height: 40px;
      background-color: rgba(249, 115, 22, 0.1);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      font-size: 1.5rem;
      color: #f97316;
    }
    .feature-text {
      font-size: 0.9rem;
    }
    @media (max-width: 768px) {
      .feature-item {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="success-card">
      <div class="success-icon">✓</div>
      <h1 class="success-title">Account Created Successfully!</h1>
      <p class="success-message">Welcome to the platform, ${data.username}! Your account has been created successfully.</p>
      
      <div class="user-info">
        <div class="info-item">
          <span class="info-label">Username:</span> ${data.username}
        </div>
        <div class="info-item">
          <span class="info-label">Email:</span> ${data.email}
        </div>
      </div>
      
      <div class="code-block">
        <div class="code-header">user.js</div>
        <div class="code-content">
          <span class="code-line"><span class="code-comment">// User account created successfully</span></span>
          <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">user</span> = {</span>
          <span class="code-line">  <span class="code-variable">id</span>: <span class="code-string">"usr_${Math.random().toString(36).substring(2, 10)}"</span>,</span>
          <span class="code-line">  <span class="code-variable">username</span>: <span class="code-string">"${data.username}"</span>,</span>
          <span class="code-line">  <span class="code-variable">email</span>: <span class="code-string">"${data.email}"</span>,</span>
          <span class="code-line">  <span class="code-variable">createdAt</span>: <span class="code-keyword">new</span> <span class="code-function">Date</span>().toISOString(),</span>
          <span class="code-line">  <span class="code-variable">status</span>: <span class="code-string">"active"</span></span>
          <span class="code-line">};</span>
        </div>
      </div>
      
      <p>You can now log in using your credentials and explore all the features of our platform.</p>
      
      <div class="features-list">
        <div class="feature-item">
          <div class="feature-icon">🔒</div>
          <div class="feature-text">Secure Authentication</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📊</div>
          <div class="feature-text">Dashboard Analytics</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">🔄</div>
          <div class="feature-text">Real-time Updates</div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">📱</div>
          <div class="feature-text">Mobile Compatibility</div>
        </div>
      </div>
      
      
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
    return NextResponse.json({ error: "Failed to create account" }, { status: 400 })
  }
}

