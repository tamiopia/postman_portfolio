import { NextResponse } from "next/server"

export async function GET() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects - Tamagn</title>
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
      max-width: 1200px;
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
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }
    .project-card {
      background-color: #1e1e1e;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      display: flex;
      flex-direction: column;
    }
    .project-card:hover {
      transform: translateY(-10px);
    }
    .project-header {
      padding: 20px;
      border-bottom: 1px solid #333;
      position: relative;
    }
    .project-header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: #f97316;
    }
    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: #fff;
      margin-bottom: 5px;
    }
    .project-meta {
      display: flex;
      justify-content: space-between;
      font-size: 0.9rem;
      color: #a0a0a0;
    }
    .project-status {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.8rem;
      background-color: rgba(249, 115, 22, 0.1);
      color: #f97316;
    }
    .project-body {
      padding: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    .project-description {
      margin-bottom: 20px;
      font-size: 1rem;
    }
    .code-preview {
      background-color: #282c34;
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-family: 'Fira Code', 'Courier New', monospace;
      font-size: 0.85rem;
      overflow-x: auto;
      flex-grow: 1;
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
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 20px;
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
    .project-links {
      display: flex;
      gap: 10px;
    }
    .project-link {
      flex: 1;
      text-align: center;
      background-color: #282c34;
      color: #e0e0e0;
      text-decoration: none;
      padding: 8px 0;
      border-radius: 4px;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }
    .project-link:hover {
      background-color: #f97316;
      color: #fff;
    }
      .project-status.published {
  color: #38a169; /* Green color for published status */
}

.project-meta span:last-child {
  color: #6b7280;
  font-size: 0.85rem;
}
      .client-notice {
  color: #F78808;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 15px;
}
    .featured-project {
      grid-column: span 2;
    }
    .featured-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: #f97316;
      color: #fff;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      .featured-project {
        grid-column: span 1;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">Showcasing my technical expertise</p>
    </div>
    
    <div class="projects-grid">
      <div class="project-card featured-project">
  <span class="featured-badge">Featured</span>
  <div class="project-header">
    <h2 class="project-title">Remotide API</h2>
    <div class="project-meta">
      <span class="project-status">Production</span>
      <span>Last Updated: 2023-12-15</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      Remotide is an AI-powered talent matching platform that connects companies with skilled developers globally.
      The API powers core features like user management, intelligent job matching, authentication, and scalable job feeds.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Sample API endpoint for matching jobs</span></span>
      <span class="code-line"><span class="code-keyword">const</span> <span class="code-function">matchJobs</span> = <span class="code-keyword">async</span> (req, res) => {</span>
      <span class="code-line">  <span class="code-keyword">try</span> {</span>
      <span class="code-line">    <span class="code-keyword">const</span> <span class="code-variable">matches</span> = <span class="code-keyword">await</span> Job.<span class="code-function">findMatches</span>(req.user.skills);</span>
      <span class="code-line">    res.status(200).<span class="code-function">json</span>(matches);</span>
      <span class="code-line">  } <span class="code-keyword">catch</span> (error) {</span>
      <span class="code-line">    res.status(500).<span class="code-function">json</span>({ message: error.message });</span>
      <span class="code-line">  }</span>
      <span class="code-line">};</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">Express</span>
      <span class="tech-tag">MongoDB</span>
      <span class="tech-tag">JWT</span>
      <span class="tech-tag">AI Matching</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/tamiopia/hilight_maching_api" class="project-link" target="_blank">GitHub</a>
      <a href="https://remotide.com" class="project-link" target="_blank">Live Demo</a>
      <a href="https://remotide.com" class="project-link" target="_blank">Documentation</a>
    </div>
  </div>
</div>

      
      <div class="project-card">
  <div class="project-header">
    <h2 class="project-title">QuizGenius</h2>
    <div class="project-meta">
      <span class="project-status">Live</span>
      <span>Interactive Learning Platform</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      An interactive and dynamic quiz platform with extensive functionalities, including real-time scoring, customizable question types, and user progress tracking. The platform incorporates 14 diverse, data-rich graphs for detailed reporting, enabling educators to monitor student grades, assess academic performance, and make informed decisions.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Sample quiz analytics component in Next.js</span></span>
      <span class="code-line"><span class="code-keyword">export default function</span> <span class="code-function">QuizAnalytics</span>({ data }) {</span>
      <span class="code-line">  <span class="code-keyword">return</span> (</span>
      <span class="code-line">    &lt;div className="analytics-container"&gt;</span>
      <span class="code-line">      &lt;Chart data={data} type="bar" /&gt;</span>
      <span class="code-line">      &lt;PerformanceMetrics scores={data.scores} /&gt;</span>
      <span class="code-line">    &lt;/div&gt;</span>
      <span class="code-line">  )</span>
      <span class="code-line">}</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">Next.js</span>
      <span class="tech-tag">TypeScript</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Tailwind CSS</span>
      <span class="tech-tag">Chart.js</span>
    </div>
    <div class="project-links">
      <span class="nda-notice">🔒 Protected by NDA</span>
    </div>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h2 class="project-title">TeleLink Share</h2>
    <div class="project-meta">
      <span class="project-status">Published</span>
      <span>Chrome Web Store</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A Chrome extension that enables one-click sharing of web pages to Telegram contacts and groups. 
      The tool features smart link previews, contact selection, and optional message attachments. 
      It maintains a history of shared links and works seamlessly with Telegram's web application.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Content script handling URL sharing</span></span>
      <span class="code-line"><span class="code-variable">chrome</span>.action.onClicked.<span class="code-function">addListener</span>((tab) => {</span>
      <span class="code-line">  <span class="code-variable">const</span> url = <span class="code-function">encodeURIComponent</span>(tab.url);</span>
      <span class="code-line">  <span class="code-variable">const</span> title = <span class="code-function">encodeURIComponent</span>(tab.title);</span>
      <span class="code-line">  </span>
      <span class="code-line">  <span class="code-variable">chrome</span>.tabs.<span class="code-function">create</span>({</span>
      <span class="code-line">    url: https://t.me/share/url?url=$url&text=</span>
      <span class="code-line">  });</span>
      <span class="code-line">});</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">JavaScript</span>
      <span class="tech-tag">Chrome API</span>
      <span class="tech-tag">Telegram API</span>
      <span class="tech-tag">HTML5</span>
      <span class="tech-tag">CSS3</span>
      <span class="tech-tag">Webpack</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link">Chrome Web Store</a>
      <a href="#" class="project-link">GitHub</a>
    </div>
  </div>
</div>


<div class="project-card">
  <div class="project-header">
    <h2 class="project-title">Qen.js</h2>
    <div class="project-meta">
      <span class="project-status">Published</span>
      <span>Version: 1.2.0</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A lightweight JavaScript library for converting between Gregorian and Ethiopian calendar systems. Qen.js provides accurate date conversions, calendar manipulations, and formatting options specifically designed for Ethiopian date requirements. The package handles all Ethiopian calendar peculiarities including the 13th month (Pagume) and leap years.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Converting Gregorian to Ethiopian date</span></span>
      <span class="code-line"><span class="code-keyword">import</span> { toEthiopic } <span class="code-keyword">from</span> <span class="code-string">'qen.js'</span>;</span>
      <span class="code-line"></span>
      <span class="code-line"><span class="code-variable">const</span> ethDate = <span class="code-function">toEthiopic</span>(<span class="code-keyword">new</span> <span class="code-function">Date</span>());</span>
      <span class="code-line"><span class="code-variable">console</span>.<span class="code-function">log</span>(ethDate.<span class="code-function">format</span>(<span class="code-string">'DD/MM/YYYY'</span>));</span>
      <span class="code-line"><span class="code-comment">// Output: "23/10/2016" (Ethiopian date)</span></span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">JavaScript</span>
      <span class="tech-tag">TypeScript</span>
      <span class="tech-tag">Node.js</span>
      <span class="tech-tag">npm</span>
      <span class="tech-tag">Date-fns</span>
    </div>
    <div class="project-links">
      <a href="https://www.npmjs.com/package/qen.js" class="project-link">npm Package</a>
      <a href="https://github.com/tamiopia/qen.js" class="project-link">GitHub</a>
    </div>
  </div>
</div>
<div class="project-card">
  <div class="project-header">
    <h2 class="project-title">Nexus</h2>
    <div class="project-meta">
      <span class="project-status">Production</span>
      <span>Reputation Management System</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A feedback and rating management web application that aggregates company ratings from various platforms. The system utilizes web scraping to collect data, performs sentiment analysis to interpret customer feedback, and provides actionable insights. By averaging ratings and generating suggestions, Nexus enables businesses to improve customer satisfaction and address feedback effectively.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Sentiment analysis API endpoint in Laravel</span></span>
      <span class="code-line"><span class="code-keyword">public function</span> <span class="code-function">analyzeFeedback</span>(Request $request)</span>
      <span class="code-line">{</span>
      <span class="code-line">    <span class="code-variable">$feedback</span> = <span class="code-variable">$request</span>->input(<span class="code-string">'feedback'</span>);</span>
      <span class="code-line">    <span class="code-variable">$sentiment</span> = <span class="code-variable">$this</span>->sentimentService->analyze(<span class="code-variable">$feedback</span>);</span>
      <span class="code-line">    <span class="code-keyword">return</span> response()->json([</span>
      <span class="code-line">        <span class="code-string">'score'</span> => <span class="code-variable">$sentiment</span>->getScore(),</span>
      <span class="code-line">        <span class="code-string">'label'</span> => <span class="code-variable">$sentiment</span>->getLabel()</span>
      <span class="code-line">    ]);</span>
      <span class="code-line">}</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Next.js</span>
      <span class="tech-tag">NLP</span>
      <span class="tech-tag">Puppeteer</span>
      <span class="tech-tag">MySQL</span>
    </div>
    <div class="project-links">
      <span class="nda-notice">🔒 Protected by NDA</span>
      <span class="client-notice">for  starbucks</span>
    </div>
  </div>
</div>


<div class="project-card">
  <div class="project-header">
    <h2 class="project-title">BackOS Appointment</h2>
    <div class="project-meta">
      <span class="project-status">Production</span>
      <span>Healthcare Scheduling System</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A comprehensive appointment management system for healthcare providers, featuring patient scheduling, automated reminders, 
      and calendar synchronization. The application optimizes provider schedules, reduces no-shows through smart notifications, 
      and integrates with electronic health records for seamless clinical workflow management.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment"># Appointment booking view in Django</span></span>
      <span class="code-line"><span class="code-keyword">class</span> <span class="code-function">AppointmentCreateView</span>(CreateView):</span>
      <span class="code-line">    model = Appointment</span>
      <span class="code-line">    form_class = AppointmentForm</span>
      <span class="code-line">    template_name = <span class="code-string">'booking/create.html'</span></span>
      <span class="code-line"></span>
      <span class="code-line">    <span class="code-keyword">def</span> <span class="code-function">form_valid</span>(<span class="code-variable">self</span>, form):</span>
      <span class="code-line">        <span class="code-variable">appointment</span> = form.save(commit=<span class="code-keyword">False</span>)</span>
      <span class="code-line">        <span class="code-variable">appointment</span>.patient = <span class="code-variable">self</span>.request.user</span>
      <span class="code-line">        <span class="code-variable">appointment</span>.save()</span>
      <span class="code-line">        <span class="code-variable">send_confirmation_email</span>(<span class="code-variable">appointment</span>)</span>
      <span class="code-line">        <span class="code-keyword">return</span> <span class="code-variable">super</span>().form_valid(form)</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Django</span>
      <span class="tech-tag">Python</span>
      <span class="tech-tag">PostgreSQL</span>
      <span class="tech-tag">Celery</span>
      <span class="tech-tag">Redis</span>
      <span class="tech-tag">Bootstrap</span>
      <span class="tech-tag">jQuery</span>
    </div>
    <div class="project-links">
      <span class="nda-notice">🔒 Protected by NDA</span>
    </div>
  </div>
</div>
<div class="project-card">
  <div class="project-header">
    <h2 class="project-title">Xencotech</h2>
    <div class="project-meta">
      <span class="project-status">Live</span>
      <span>Talent-Job Matching Platform</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A specialized job matching platform connecting Indian tech talent with global opportunities. The system features intelligent candidate-employer matching, skill assessment tools, and automated interview scheduling. Designed for the Indian market with localization support for regional languages and compliance with local employment regulations.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Job matching algorithm in Laravel</span></span>
      <span class="code-line"><span class="code-keyword">public function</span> <span class="code-function">matchJobs</span>(Candidate $candidate)</span>
      <span class="code-line">{</span>
      <span class="code-line">    <span class="code-keyword">return</span> Job::where(<span class="code-string">'skills_required'</span>, <span class="code-string">'like'</span>, <span class="code-string">"%{$candidate->primary_skill}%"</span>)</span>
      <span class="code-line">        ->where(<span class="code-string">'experience_required'</span>, <span class="code-string">'<='</span>, $candidate->experience)</span>
      <span class="code-line">        ->where(<span class="code-string">'location'</span>, $candidate->preferred_location)</span>
      <span class="code-line">        ->orderBy(<span class="code-string">'match_score'</span>, <span class="code-string">'desc'</span>)</span>
      <span class="code-line">        ->take(<span class="code-number">10</span>)->get();</span>
      <span class="code-line">}</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">Vue.js</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Redis</span>
      <span class="tech-tag">AWS</span>
      <span class="tech-tag">Paystack API</span>
      <span class="tech-tag">Twilio</span>
    </div>
    <div class="project-links">
      <a href="https://www.xencotech.com" target="_blank" class="project-link">Live Website</a>
      <span class="client-notice">🇮🇳 Indian Client Project</span>
    </div>
  </div>
</div>
      
    
      <div class="project-card">
  <div class="project-header">
    <h2 class="project-title">Addis Alem Tour & Travel</h2>
    <div class="project-meta">
      <span class="project-status">Production</span>
      <span>Car Rental Management System</span>
    </div>
  </div>
  <div class="project-body">
    <p class="project-description">
      A comprehensive car rental management system for Addis Alem Tour and Travel, featuring vehicle inventory management, 
      online reservations, driver assignment, and payment processing. The system includes real-time availability tracking, 
      maintenance scheduling, and detailed reporting for fleet optimization. Designed specifically for Ethiopian tourism 
      operators with local payment gateway integration.
    </p>
    <div class="code-preview">
      <span class="code-line"><span class="code-comment">// Booking availability check in Laravel</span></span>
      <span class="code-line"><span class="code-keyword">public function</span> <span class="code-function">checkAvailability</span>(Request $request)</span>
      <span class="code-line">{</span>
      <span class="code-line">    <span class="code-variable">$validated</span> = <span class="code-variable">$request</span>->validate([</span>
      <span class="code-line">        <span class="code-string">'vehicle_type'</span> => <span class="code-string">'required'</span>,</span>
      <span class="code-line">        <span class="code-string">'start_date'</span> => <span class="code-string">'required|date'</span>,</span>
      <span class="code-line">        <span class="code-string">'end_date'</span> => <span class="code-string">'required|date|after:start_date'</span></span>
      <span class="code-line">    ]);</span>
      <span class="code-line"></span>
      <span class="code-line">    <span class="code-keyword">return</span> Vehicle::where(<span class="code-string">'type'</span>, <span class="code-variable">$validated</span>[<span class="code-string">'vehicle_type'</span>])</span>
      <span class="code-line">        ->whereDoesntHave(<span class="code-string">'bookings'</span>, <span class="code-keyword">function</span> ($query) <span class="code-keyword">use</span> (<span class="code-variable">$validated</span>) {</span>
      <span class="code-line">            <span class="code-variable">$query</span>->whereBetween(<span class="code-string">'start_date'</span>, [<span class="code-variable">$validated</span>[<span class="code-string">'start_date'</span>], <span class="code-variable">$validated</span>[<span class="code-string">'end_date'</span>]])</span>
      <span class="code-line">                ->orWhereBetween(<span class="code-string">'end_date'</span>, [<span class="code-variable">$validated</span>[<span class="code-string">'start_date'</span>], <span class="code-variable">$validated</span>[<span class="code-string">'end_date'</span>]]);</span>
      <span class="code-line">        })->get();</span>
      <span class="code-line">}</span>
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Laravel</span>
      <span class="tech-tag">Livewire</span>
      <span class="tech-tag">MySQL</span>
      <span class="tech-tag">Bootstrap</span>
      <span class="tech-tag">PayDay</span>
      <span class="tech-tag">Google Maps API</span>
      <span class="tech-tag">SMS Gateway</span>
    </div>
    <div class="project-links">
      <span class="nda-notice">🔒 Protected by NDA</span>
      <span class="client-notice">🇪🇹 Ethiopian Client Project</span>
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

