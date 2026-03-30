import { NextResponse } from "next/server"

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Skills - Tamagn</title>
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
    .page-header {
      text-align: center;
      margin-bottom: 50px;
      position: relative;
    }
    .page-header::after {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background-color: #f97316;
      border-radius: 2px;
    }
    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #fff;
      margin-bottom: 10px;
    }
    .page-subtitle {
      font-size: 1.2rem;
      color: #f97316;
    }
    .skills-section {
      margin-bottom: 50px;
    }
    .section-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }
    .section-title::before {
      content: "//";
      color: #f97316;
      margin-right: 10px;
      font-weight: bold;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    .skill-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .skill-card:hover {
      transform: translateY(-5px);
    }
    .skill-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #f97316;
    }
    .skill-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }
    .skill-icon {
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
    .skill-name {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
    }
    .skill-level {
      margin-bottom: 15px;
    }
    .progress-container {
      width: 100%;
      height: 8px;
      background-color: #282c34;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress-bar {
      height: 100%;
      background-color: #f97316;
      border-radius: 4px;
    }
    .skill-details {
      font-size: 0.9rem;
      color: #a0a0a0;
    }
    .experience-tag {
      display: inline-block;
      background-color: rgba(249, 115, 22, 0.1);
      color: #f97316;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      margin-top: 10px;
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
    .tools-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    .tool-item {
      background-color: #1e1e1e;
      border-radius: 8px;
      padding: 15px;
      text-align: center;
      transition: all 0.3s ease;
    }
    .tool-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      background-color: #282c34;
    }
    .tool-icon {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #f97316;
    }
    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
      .tools-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Technical Skills</h1>
      <p class="page-subtitle">My expertise and proficiencies</p>
    </div>
    
    <div class="skills-section">
      <h2 class="section-title">Programming Languages</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">JS</div>
            <div class="skill-name">JavaScript</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 95%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Expert-level proficiency in modern JavaScript (ES6+), including async/await, promises, and functional programming concepts.
          </div>
          <div class="experience-tag">3.5+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">TS</div>
            <div class="skill-name">TypeScript</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 90%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Strong experience with TypeScript for building type-safe applications, interfaces, and generics.
          </div>
          <div class="experience-tag">2+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">PY</div>
            <div class="skill-name">Python</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 85%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Proficient in Python for backend development, data processing, and automation scripts.
          </div>
          <div class="experience-tag">2+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">GO</div>
            <div class="skill-name">Go</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 65%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Working knowledge of Go for building high-performance microservices and CLI tools.
          </div>
          <div class="experience-tag">1+ years</div>
        </div>
        <div class="skill-card">
  <div class="skill-header">
    <div class="skill-icon">PHP</div>
    <div class="skill-name">PHP</div>
  </div>
  <div class="skill-level">
    <div class="progress-container">
      <div class="progress-bar" style="width: 90%;"></div>
    </div>
  </div>
  <div class="skill-details">
    Extensive experience building web applications, APIs, and CMS solutions with PHP frameworks including Laravel and Symfony.
  </div>
  <div class="experience-tag">2+ years</div>
</div>
      </div>
    </div>
    
    <div class="code-block">
      <div class="code-header">skills.js</div>
      <div class="code-content">
        <span class="code-line"><span class="code-comment">// My core technical competencies</span></span>
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">backendSkills</span> = {</span>
        <span class="code-line">  languages: [<span class="code-string">'JavaScript'</span>, <span class="code-string">'TypeScript'</span>, <span class="code-string">'Python'</span>, <span class="code-string">'Go'</span>],</span>
        <span class="code-line">  frameworks: [<span class="code-string">'Node.js'</span>, <span class="code-string">'Express'</span>, <span class="code-string">'NestJS'</span>, <span class="code-string">'Django'</span>, <span class="code-string">'Flask'</span>],</span>
        <span class="code-line">  databases: [<span class="code-string">'MongoDB'</span>, <span class="code-string">'PostgreSQL'</span>, <span class="code-string">'MySQL'</span>, <span class="code-string">'Redis'</span>],</span>
        <span class="code-line">  cloud: [<span class="code-string">'AWS'</span>, <span class="code-string">'Google Cloud'</span>, <span class="code-string">'Azure'</span>],</span>
        <span class="code-line">  devOps: [<span class="code-string">'Docker'</span>, <span class="code-string">'Kubernetes'</span>, <span class="code-string">'CI/CD'</span>, <span class="code-string">'Terraform'</span>],</span>
        <span class="code-line">  architecture: [<span class="code-string">'Microservices'</span>, <span class="code-string">'Serverless'</span>, <span class="code-string">'Event-driven'</span>],</span>
        <span class="code-line">  testing: [<span class="code-string">'Jest'</span>, <span class="code-string">'Mocha'</span>, <span class="code-string">'Pytest'</span>, <span class="code-string">'Supertest'</span>]</span>
        <span class="code-line">};</span>
        <span class="code-line"></span>
        <span class="code-line"><span class="code-keyword">function</span> <span class="code-function">getExpertise</span>() {</span>
        <span class="code-line">  <span class="code-keyword">return</span> {</span>
        <span class="code-line">    primary: <span class="code-string">'Backend Development'</span>,</span>
        <span class="code-line">    secondary: [<span class="code-string">'API Design'</span>, <span class="code-string">'Database Design'</span>, <span class="code-string">'System Architecture'</span>]</span>
        <span class="code-line">  };</span>
        <span class="code-line">}</span>
      </div>
    </div>
    
    <div class="skills-section">
      <h2 class="section-title">Backend Frameworks</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">NJ</div>
            <div class="skill-name">Node.js</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 95%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Expert in building scalable server-side applications with Node.js, including REST APIs, microservices, and real-time applications.
          </div>
          <div class="experience-tag">3.5+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">EX</div>
            <div class="skill-name">Express</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 95%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Extensive experience with Express.js for building web applications and APIs with middleware patterns.
          </div>
          <div class="experience-tag">3.5+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">DJ</div>
            <div class="skill-name">Django</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 85%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Strong experience with Django for building robust web applications with built-in admin interfaces and ORM.
          </div>
          <div class="experience-tag">2+ years</div>
        </div>
        
        <div class="skill-card">
  <div class="skill-header">
    <div class="skill-icon">LV</div>
    <div class="skill-name">Laravel</div>
  </div>
  <div class="skill-level">
    <div class="progress-container">
      <div class="progress-bar" style="width: 95%;"></div>
    </div>
  </div>
  <div class="skill-details">
    Expert-level Laravel developer with extensive experience building robust web applications, RESTful APIs, and enterprise solutions using Laravel's ecosystem.
  </div>
  <div class="experience-tag">2+ years</div>
</div>
<div class="skill-card">
  <div class="skill-header">
    <div class="skill-icon">NJ</div>
    <div class="skill-name">NestJS</div>
  </div>
  <div class="skill-level">
    <div class="progress-container">
      <div class="progress-bar" style="width: 85%;"></div>
    </div>
  </div>
  <div class="skill-details">
    Experienced in building scalable server-side applications using NestJS framework with TypeScript, implementing microservices architecture, REST/GraphQL APIs, and database integrations.
  </div>
  <div class="experience-tag">2+ years</div>
</div>

<div class="skill-card">
  <div class="skill-header">
    <div class="skill-icon">🤖</div>
    <div class="skill-name">Telegram Bots</div>
  </div>
  <div class="skill-level">
    <div class="progress-container">
      <div class="progress-bar" style="width: 90%;"></div>
    </div>
  </div>
  <div class="skill-details">
    Developed advanced Telegram bots with features like payment processing, natural language interactions, and integration with external APIs using Node.js and Python libraries.
  </div>
  <div class="experience-tag">1+ years</div>
</div>

      </div>
    </div>
    
    <div class="skills-section">
      <h2 class="section-title">Databases</h2>
      <div class="skills-grid">
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">MG</div>
            <div class="skill-name">MongoDB</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 90%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Expert in MongoDB for document-based storage, including complex aggregations, indexing, and performance optimization.
          </div>
          <div class="experience-tag">3+ years</div>
        </div>
        
        <div class="skill-card">
          <div class="skill-header">
            <div class="skill-icon">PG</div>
            <div class="skill-name">PostgreSQL</div>
          </div>
          <div class="skill-level">
            <div class="progress-container">
              <div class="progress-bar" style="width: 85%;"></div>
            </div>
          </div>
          <div class="skill-details">
            Strong experience with PostgreSQL for relational data storage, complex queries, and transactions.
          </div>
          <div class="experience-tag">2+ years</div>
        </div>
        
        <div class="skill-card">
  <div class="skill-header">
    <div class="skill-icon">MY</div>
    <div class="skill-name">MySQL</div>
  </div>
  <div class="skill-level">
    <div class="progress-container">
      <div class="progress-bar" style="width: 92%;"></div>
    </div>
  </div>
  <div class="skill-details">
    Expert in MySQL database design, optimization, and administration with experience in complex queries, indexing strategies, and performance tuning for high-traffic applications.
  </div>
  <div class="experience-tag">3+ years</div>
</div>
      </div>
    </div>
    
    <div class="skills-section">
      <h2 class="section-title">DevOps & Cloud</h2>
      <div class="tools-grid">
        <div class="tool-item">
          <div class="tool-icon">🐳</div>
          <div>Docker</div>
        </div>
      
        <div class="tool-item">
          <div class="tool-icon">☁️</div>
          <div>AWS</div>
        </div>
        <div class="tool-item">
          <div class="tool-icon">🔄</div>
          <div>CI/CD</div>
        </div>
        <div class="tool-item">
          <div class="tool-icon">🔍</div>
          <div>Terraform</div>
        </div>
       
        
        <div class="tool-item">
          <div class="tool-icon">🔐</div>
          <div>Jenkins</div>
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
}

