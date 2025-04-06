import { NextResponse } from "next/server"

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Education - Tamagn</title>
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
    .education-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .education-card:hover {
      transform: translateY(-5px);
    }
    .education-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #f97316;
    }
    .degree {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 5px;
    }
    .institution {
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
    .description {
      margin-bottom: 20px;
      font-size: 1rem;
    }
    .courses-title, .achievements-title {
      font-size: 1.1rem;
      color: #fff;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
    .courses-title::before, .achievements-title::before {
      content: "//";
      color: #f97316;
      margin-right: 10px;
      font-weight: bold;
    }
    .courses-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }
    .course {
      background-color: #282c34;
      color: #e0e0e0;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    .course:hover {
      background-color: #f97316;
      color: #fff;
    }
    .achievements-list {
      list-style-type: none;
    }
    .achievement-item {
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
    }
    .achievement-item::before {
      content: "→";
      color: #f97316;
      position: absolute;
      left: 0;
    }
    .certifications {
      margin-top: 50px;
    }
    .certifications-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 20px;
      text-align: center;
    }
    .certifications-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
    }
    .certification-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    }
    .certification-card:hover {
      transform: translateY(-5px);
    }
    .certification-name {
      font-size: 1.2rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 5px;
    }
    .certification-issuer {
      color: #f97316;
      margin-bottom: 10px;
    }
    .certification-date {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #a0a0a0;
    }
    .badge {
      display: inline-block;
      background-color: rgba(249, 115, 22, 0.1);
      color: #f97316;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      margin-left: 10px;
    }
    @media (max-width: 768px) {
      .certifications-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Education</h1>
      <p class="page-subtitle">Academic background and qualifications</p>
    </div>
    
    <div class="education-card">
  <h2 class="degree">BSc in Software Engineering</h2>
  <p class="institution">Arbaminch University</p>
  <span class="period">September 2020 – June 2025</span>

  <p class="description">
    Specialized in Software Engineering and Distributed Systems. Graduated with distinction, achieving a GPA of 3.7/4.0.
    Thesis focused on optimizing microservices architecture for high-traffic web applications.
  </p>

  <h3 class="courses-title">Key Courses</h3>
  <div class="courses-list">
    <span class="course">Advanced Algorithms</span>
    <span class="course">Distributed Systems</span>
    <span class="course">Cloud Computing</span>
    <span class="course">Database Management</span>
    <span class="course">Software Architecture</span>
    <span class="course">Machine Learning</span>
  </div>

  <h3 class="achievements-title">Achievements</h3>
  <ul class="achievements-list">
    <li class="achievement-item">President of AMU Tech Hub – led initiatives, workshops, and tech events across campus.</li>
    <li class="achievement-item">Mentored junior students in programming, data structures, and backend development.</li>
    <li class="achievement-item">Contributed to open-source projects including backend tools and developer utilities</li>
    <li class="achievement-item">Spoke at a local tech meetup on scalable backend architecture with NestJS and Docker</li>
  </ul>
</div>

    
    
    <div class="certifications">
      <h2 class="certifications-title">Professional Certifications</h2>
      <div class="certifications-grid">
        <div class="certification-card">
  <h3 class="certification-name">AWS Certified Solutions Architect</h3>
  <p class="certification-issuer">Amazon Web Services</p>
  <div class="certification-date">
    <span>Issued: 2022</span>
    <span>Expires: 2025 <span class="badge">Active</span></span>
  </div>
</div>

<div class="certification-card">
  <h3 class="certification-name">Best Mentor Award</h3>
  <p class="certification-issuer">Omishtu-Joy Tech Solutions</p>
  <div class="certification-date">
    <span>Issued: 2024</span>
    <span class="badge">Honorary</span>
  </div>
</div>

<div class="certification-card">
  <h3 class="certification-name">ALX Software Engineering Certificate</h3>
  <p class="certification-issuer">ALX Africa</p>
  <div class="certification-date">
    <span>Issued: 2023</span>
    <span class="badge">Completed</span>
  </div>
</div>

        
        
        
        
        
        <div class="certification-card">
          <h3 class="certification-name">Node.js Certification</h3>
          <p class="certification-issuer">OpenJS Foundation</p>
          <div class="certification-date">
            <span>Issued: 2019</span>
            <span>Expires: 2022 <span class="badge">Renewed</span></span>
          </div>
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

