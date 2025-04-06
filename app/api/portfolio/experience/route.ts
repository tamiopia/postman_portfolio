import { NextResponse } from "next/server"

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Experience - Tamagn</title>
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
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }
    .timeline::after {
      content: '';
      position: absolute;
      width: 4px;
      background-color: #f97316;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -2px;
      border-radius: 2px;
    }
    .timeline-item {
      padding: 10px 40px;
      position: relative;
      width: 50%;
      box-sizing: border-box;
      margin-bottom: 30px;
    }
    .timeline-item::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #f97316;
      border-radius: 50%;
      top: 20px;
      z-index: 1;
    }
    .left {
      left: 0;
      text-align: right;
    }
    .right {
      left: 50%;
      text-align: left;
    }
    .left::after {
      right: -10px;
    }
    .right::after {
      left: -10px;
    }
    .experience-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .experience-card:hover {
      transform: translateY(-5px);
    }
    .job-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 5px;
    }
    .company {
      font-size: 1.2rem;
      color: #f97316;
      margin-bottom: 10px;
    }
    .period {
      display: inline-block;
      background-color: rgba(249, 115, 22, 0.1);
      color: #f97316;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
      margin-bottom: 15px;
    }
    .responsibilities {
      list-style-type: none;
      margin-bottom: 20px;
    }
    .responsibility-item {
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
    }
    .responsibility-item::before {
      content: "→";
      color: #f97316;
      position: absolute;
      left: 0;
    }
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .tech-tag {
      background-color: #282c34;
      color: #e0e0e0;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
      transition: all 0.3s ease;
    }
    .tech-tag:hover {
      background-color: #f97316;
      color: #fff;
    }
    .code-block {
      background-color: #282c34;
      padding: 20px;
      border-radius: 8px;
      margin: 30px auto;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.9rem;
      position: relative;
      overflow: hidden;
      max-width: 800px;
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
    @media (max-width: 768px) {
      .timeline::after {
        left: 31px;
      }
      .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
        text-align: left;
      }
      .timeline-item::after {
        left: 21px;
      }
      .left::after, .right::after {
        left: 21px;
      }
      .left, .right {
        left: 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Professional Experience</h1>
      <p class="page-subtitle">My journey as a backend developer</p>
    </div>
    
    <div class="code-block">
      <div class="code-header">career.js</div>
      <div class="code-content">
        <span class="code-line"><span class="code-comment">// My professional journey</span></span>
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">careerPath</span> = {</span>
        <span class="code-line">  <span class="code-variable">currentRole</span>: <span class="code-string">" Backend Developer"</span>,</span>
        <span class="code-line">  <span class="code-variable">yearsOfExperience</span>: 2.5,</span>
        <span class="code-line">  <span class="code-variable">specialization</span>: <span class="code-string">"API Development & Microservices"</span>,</span>
        <span class="code-line">  <span class="code-variable">industries</span>: [<span class="code-string">"Fintech"</span>, <span class="code-string">"E-commerce"</span>, <span class="code-string">"SaaS"</span>]</span>
        <span class="code-line">};</span>
      </div>
    </div>
    
    <div class="timeline">
      <div class="timeline-item left">
        <div class="experience-card">
          <h2 class="job-title">junior Backend Developer</h2>
          <p class="company"> Hilight Technologies</p>
          <span class="period">January 2023 - August 2024</span>
          <ul class="responsibilities">
            <li class="responsibility-item">Lead the development of RESTful APIs for the company's flagship product Remotide.com, improving response times by 40%.</li>
            <li class="responsibility-item">Designed and implemented microservices architecture using Node.js and Express, enhancing system scalability.</li>
            <li class="responsibility-item">Optimized database queries and implemented caching strategies, reducing server load by 30%.</li>
            <li class="responsibility-item">conducted code reviews to ensure code quality and best practices.</li>
            <li class="responsibility-item">Collaborated with frontend teams to ensure seamless integration of API endpoints.</li>
          </ul>
          <div class="tech-stack">
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">Express</span>
            <span class="tech-tag">MongoDB</span>
            <span class="tech-tag">Redis</span>
            <span class="tech-tag">Docker</span>
          </div>
        </div>
      </div>
      
      <div class="timeline-item right">
        <div class="experience-card">
          <h2 class="job-title">Backend Developer</h2>
          <p class="company">Omishtu-Joy tech Solutions </p>
          <span class="period">Feburary 2024 - present</span>
          <ul class="responsibilities">
            <li class="responsibility-item">Developed and maintained RESTful APIs for data processing applications.</li>
            <li class="responsibility-item">Developed and maintained multipe laravel projects.</li>
            <li class="responsibility-item">Implemented authentication and authorization systems using JWT and OAuth2.</li>
            <li class="responsibility-item">Created automated testing frameworks that increased code coverage by 60%.</li>
            <li class="responsibility-item">Integrated third-party services and APIs to enhance application functionality.</li>
            <li class="responsibility-item">Participated in agile development processes, including daily stand-ups and sprint planning.</li>
          </ul>
          <div class="tech-stack">
            <span class="tech-tag">php</span>
            <span class="tech-tag">laravel</span>
            <span class="tech-tag">mysql/Postgress</span>
            <span class="tech-tag">AWS</span>
            <span class="tech-tag">CI/CD</span>
          </div>
        </div>
      </div>
      <div class="timeline-item left">
  <div class="experience-card">
    <h2 class="job-title">MERN Stack Mentor</h2>
    <p class="company">Omishtu-Joy Tech Solutions</p>
    <span class="period">February 2024 – October 2024</span>
    <ul class="responsibilities">
      <li class="responsibility-item">Guided junior developers in mastering MERN stack technologies through code reviews and hands-on sessions.</li>
      <li class="responsibility-item">Led the development and maintenance of multiple Laravel-based projects with scalable architecture.</li>
      <li class="responsibility-item">Assisted mentees in implementing secure authentication and authorization systems using JWT and OAuth2.</li>
      <li class="responsibility-item">Introduced automated testing practices that improved team-wide code quality and coverage by 60%.</li>
      <li class="responsibility-item">Demonstrated best practices for integrating third-party APIs and external services into applications.</li>
      <li class="responsibility-item">Facilitated agile ceremonies, including sprint planning, daily stand-ups, and retrospectives to enhance team productivity.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">PHP</span>
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">MySQL/PostgreSQL</span>
      <span class="tech-tag">AWS</span>
      <span class="tech-tag">CI/CD</span>
    </div>
  </div>
</div>

      
      <div class="timeline-item right">
  <div class="experience-card">
    <h2 class="job-title">Remote Backend Developer</h2>
    <p class="company">Backos Technologies</p>
    <span class="period">June 2016 – February 2018</span>
    <ul class="responsibilities">
      <li class="responsibility-item">Developed and maintained scalable backend systems using Django and Python.</li>
      <li class="responsibility-item">Designed and optimized database schemas, and performed regular data backups.</li>
      <li class="responsibility-item">Built RESTful APIs to support frontend and mobile application features.</li>
      <li class="responsibility-item">Collaborated remotely with cross-functional teams to implement business logic and data models.</li>
      <li class="responsibility-item">Participated in code reviews, wrote unit tests, and contributed to backend documentation.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Django</span>
      <span class="tech-tag">PostgreSQL</span>
      <span class="tech-tag">REST API</span>
      <span class="tech-tag">Git</span>
    </div>
  </div>
</div>
<div class="timeline-item left">
  <div class="experience-card">
    <h2 class="job-title">Freelance Backend Developer</h2>
    <p class="company">Self-Employed / Remote</p>
    <span class="period">March 2024 – Present</span>
    <ul class="responsibilities">
      <li class="responsibility-item">Developed and deployed backend services for clients across various industries using NestJS and Express.js.</li>
      <li class="responsibility-item">Integrated third-party APIs and built custom RESTful and GraphQL APIs.</li>
      <li class="responsibility-item">Implemented scalable microservice architectures and message queues using Redis and RabbitMQ.</li>
      <li class="responsibility-item">Worked with clients to gather requirements, propose solutions, and deliver high-quality software on time.</li>
      <li class="responsibility-item">Optimized database queries and structures for performance and scalability.</li>
      <li class="responsibility-item">Provided technical mentorship to junior developers and contributed to open-source projects.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">NestJS</span>
      <span class="tech-tag">Express.js</span>
      <span class="tech-tag">TypeScript</span>
      <span class="tech-tag">PostgreSQL</span>
      <span class="tech-tag">GraphQL</span>
      <span class="tech-tag">Redis</span>
      <span class="tech-tag">Docker</span>
      <span class="tech-tag">MongoDB</span>
    </div>
  </div>
</div>

    </div>
    
    <div class="code-block">
      <div class="code-header">achievements.js</div>
      <div class="code-content">
        <span class="code-line"><span class="code-comment">// Key professional achievements</span></span>
        <span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">achievements</span> = [</span>
        <span class="code-line">  <span class="code-string">"Reduced API response time by 40% through optimization"</span>,</span>
        <span class="code-line">  <span class="code-string">"Designed microservices architecture that scaled to handle 10x traffic"</span>,</span>
        <span class="code-line">  <span class="code-string">"Implemented CI/CD pipeline reducing deployment time by 70%"</span>,</span>
        <span class="code-line">  <span class="code-string">"Led migration from monolith to microservices architecture"</span>,</span>
        <span class="code-line">  <span class="code-string">"Mentored 5 junior developers who became mid-level engineers"</span></span>
        <span class="code-line">];</span>
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

