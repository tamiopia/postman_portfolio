import { NextResponse } from "next/server"

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Me - Tamagn</title>
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
      max-width: 1000px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      position: relative;
    }
    .header::before {
      content: "";
      position: absolute;
      top: -20px;
      left: -20px;
      width: 100px;
      height: 100px;
      background-color: rgba(249, 115, 22, 0.1);
      border-radius: 50%;
      z-index: -1;
    }
    .profile-img {
      width: 120px;
      height: 120px;
      border-radius: 12px;
      object-fit: cover;
      border: 3px solid #f97316;
      margin-right: 30px;
    }
    .header-content h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 5px;
      color: #fff;
    }
    .header-content p {
      font-size: 1.2rem;
      color: #f97316;
      margin-bottom: 10px;
    }
    .tag {
      display: inline-block;
      background-color: rgba(249, 115, 22, 0.1);
      color: #f97316;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-right: 8px;
      margin-bottom: 8px;
    }
    .section {
      margin-bottom: 40px;
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
    }
    .section::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #f97316;
    }
    .section-title {
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: #fff;
      display: flex;
      align-items: center;
    }
    .section-title::before {
      content: "//";
      color: #f97316;
      margin-right: 10px;
      font-weight: bold;
    }
    .about-content {
      font-size: 1.1rem;
      line-height: 1.8;
    }
    .about-content p {
      margin-bottom: 20px;
    }
    .highlight {
      color: #f97316;
      font-weight: 600;
    }
    .code-block {
      background-color: #282c34;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.9rem;
      position: relative;
      overflow: hidden;
    }
    .code-block::before {
      content: "const aboutMe = {";
      display: block;
      color: #c678dd;
      margin-bottom: 10px;
    }
    .code-block::after {
      content: "};";
      display: block;
      color: #c678dd;
      margin-top: 10px;
    }
    .code-line {
      display: block;
      margin-left: 20px;
      margin-bottom: 5px;
    }
    .code-key {
      color: #e06c75;
    }
    .code-value {
      color: #98c379;
    }
    .code-array {
      color: #61afef;
    }
    .social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      margin-top: 30px;
    }
    .social-link {
      display: flex;
      align-items: center;
      background-color: #282c34;
      color: #e0e0e0;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    .social-link:hover {
      background-color: #f97316;
      color: #fff;
      transform: translateY(-3px);
    }
    .social-icon {
      margin-right: 10px;
      font-size: 1.2rem;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .skill-item {
      background-color: #282c34;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .skill-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    .skill-icon {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #f97316;
    }
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        text-align: center;
      }
      .profile-img {
        margin-right: 0;
        margin-bottom: 20px;
      }
      .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="./profile.png" alt="Tamagn" class="profile-img">
      <div class="header-content">
        <h1>Tamagn zewdu</h1>
        <p>Backend Developer & API Specialist</p>
        <div>
          <span class="tag">Node.js</span>
          <span class="tag">express.js</span>
          <span class="tag">laravel</span>
          <span class="tag">django</span>
          <span class="tag">API Design</span>
          <span class="tag">Microservices</span>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <p>
          Hello! I'm <span class="highlight">Tamagn</span>, a passionate backend developer with expertise in building robust APIs and scalable web applications.
          With over 2.5 years of experience in the field, I specialize in creating efficient, secure, and well-documented backend systems.
        </p>
        
        <p>
          My journey in software development began during my university years when I discovered my passion for solving complex problems through code.
          Since then, I've worked with various technologies and frameworks, always striving to stay updated with the latest industry trends.
        </p>
        
        <div class="code-block">
          <span class="code-line"><span class="code-key">name</span>: <span class="code-value">"Tamagn Zewdu"</span>,</span>
          <span class="code-line"><span class="code-key">title</span>: <span class="code-value">"Backend Developer & API Specialist"</span>,</span>
          <span class="code-line"><span class="code-key">experience</span>: <span class="code-value">"2.5+ years"</span>,</span>
          <span class="code-line"><span class="code-key">location</span>: <span class="code-value">"Adiss Abeba, Ethiopia"</span>,</span>
          <span class="code-line"><span class="code-key">interests</span>: [<span class="code-array">"API Design", "Microservices", "packages development", "Open Source projects"</span>],</span>
          <span class="code-line"><span class="code-key">currentlyLearning</span>: <span class="code-value">" Quantum computing"</span></span>
        </div>
        
        <p>
          I believe in writing <span class="highlight">clean, maintainable code</span> and following best practices in software development.
          My approach to problem-solving is methodical, and I enjoy breaking down complex issues into manageable components.
        </p>
        
        <p>
          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blogs and community forums.
          I'm also an avid hiker and enjoy spending time outdoors to recharge and gain fresh perspectives.
        </p>
      </div>
    </div>
    
    <div class="section">
      <h2 class="section-title">Core Skills</h2>
      <div class="skills-grid">
        <div class="skill-item">
          <div class="skill-icon">🔧</div>
          <div>Node.js</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">🐍</div>
          <div>Python</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">🌐</div>
          <div>RESTful APIs</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">📊</div>
          <div>GraphQL</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">🗄️</div>
          <div>MongoDB</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">🐘</div>
          <div>PostgreSQL</div>
        </div>
        <div class="skill-item">
          <div class="skill-icon">🐳</div>
          <div>Docker</div>
        </div>
        
      </div>
    </div>
    
    <div class="social-links">
      <a href="https://github.com/tamiopia" class="social-link">
        <span class="social-icon">🔗</span> GitHub
      </a>
      <a href="https://linkedin.com/in/tamagn-zewdu" class="social-link">
        <span class="social-icon">🔗</span> LinkedIn
      </a>
      <a href="https://medium.com/@tamiopia" class="social-link">
        <span class="social-icon">🔗</span> medium
      </a>
      
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
}

