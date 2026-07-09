import { useState } from "react";
import "./App.css";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="project-card">
      <p className="project-type">{project.type}</p>
      <h3>{project.title}</h3>

      <div className="project-detail">
        <h4>Problem</h4>
        <p>{project.problem}</p>
      </div>

      <button
        className="project-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show Less" : "View Project Details"}
      </button>

      {isExpanded && (
        <div className="expanded-project">
          <div className="project-detail">
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>

         <div className="project-detail">
            <h4>Tools Used</h4>
            <div className="tool-list">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="project-detail">
            <h4>What I Demonstrated</h4>

            <ul className="demonstrated-list">
              {project.demonstrated.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="impact">
            <strong>Impact:</strong> {project.impact}
          </p>
        </div>
      )}
    </article>
  );
}

const projects = [
  {
  type: "Power Automate / SharePoint Workflow",
  title: "SharePoint Document Approval & Notification Automation",
  problem:
    "A team needed a reliable way to notify staff when monthly SharePoint documents were updated. The manual process created inconsistent communication, duplicate approval requests, and duplicate notification emails when multiple files were uploaded into the same folder.",
  solution:
    "Designed and implemented a Power Automate workflow that triggers when files are uploaded to a SharePoint document library, checks a tracker list to prevent duplicate approvals, sends a first-to-respond approval request, and sends one final notification email with a SharePoint folder link after approval.",
  tools: [
    "Power Automate",
    "SharePoint Online",
    "SharePoint Lists",
    "Microsoft Approvals",
    "Outlook",
    "Conditional Logic",
    "Concurrency Control"
  ],
  demonstrated: [
    "Designed a folder-based approval workflow instead of triggering approval for every individual file",
    "Used a SharePoint tracker list to prevent duplicate approval requests",
    "Configured first-to-respond approvals for multiple reviewers",
    "Used conditional logic to ignore folder creation events and process file uploads only",
    "Improved workflow reliability by enabling trigger concurrency control",
    "Troubleshot Apply to each loops, duplicate emails, save errors, and approval visibility issues"
  ],
  impact:
    "Automated a manual document approval process, reduced duplicate approval requests and emails, improved staff communication, added approval tracking, and created a more maintainable workflow for future IT support."
},
  {
    type: "SharePoint / Document Management",
    title: "SharePoint Vehicle Log Management System",
    problem:
      "Staff needed a better way to upload, organize, and locate county-owned vehicle mileage and fuel log documents without relying on a confusing folder-heavy structure.",
    solution:
      "Designed a SharePoint document library structure using metadata, custom views, fiscal year organization, and file naming standards to improve searchability and long-term maintenance.",
    tools: ["SharePoint Online", "Metadata", "Document Libraries", "Microsoft 365"],
    demonstrated: [
    "Designed a user-friendly SharePoint document management process",
    "Balanced management preferences with scalable IT best practices",
    "Used metadata and custom views to improve search and filtering",
    "Created a structure that supports long-term maintenance and staff adoption"
  ],
    impact:
      "Improved organization, reduced folder confusion, and created a more scalable process for non-technical staff."
  },
  {
    type: "Power Automate / Workflow Automation",
    title: "Community Events Approval Workflow",
    problem:
      "Event requests needed a more consistent approval process with better routing, status tracking, and communication to staff.",
    solution:
      "Built a workflow concept using SharePoint lists and Power Automate to route approvals based on event category, update statuses, and send notifications after approval.",
    tools: ["Power Automate", "SharePoint Lists", "Outlook", "Approvals"],
    demonstrated: [
      "Designed an approval workflow using SharePoint and Power Automate",
      "Mapped approval routing based on event categories and business rules",
      "Improved status tracking and communication through automated notifications",
      "Considered staff usability, process consistency, and long-term maintenance"
    ],
    impact:
      "Helped standardize approvals, reduce manual follow-up, and improve communication around public-facing events."
  },
  {
    type: "Endpoint Support / Device Lifecycle",
    title: "Endpoint Support & Windows 11 Lifecycle",
    problem:
      "Users needed reliable device support during workstation replacements, Windows 11 upgrades, mobile device support, and hardware lifecycle work.",
    solution:
      "Supported device deployments, troubleshooting, inventory tracking, user communication, and escalation while working with Microsoft 365 and endpoint management tools.",
    tools: ["Windows 10/11", "Intune", "Entra ID", "ServiceNow"],
    demonstrated: [
      "Supported endpoint troubleshooting and device lifecycle processes",
      "Assisted users during workstation replacements and Windows 11 upgrade work",
      "Used Microsoft 365 and endpoint tools to support device readiness",
      "Communicated technical issues clearly with users and escalation teams"
    ],
    impact:
      "Supported reliable endpoint operations and helped users stay productive during device and system changes."
  },
  {
    type: "Technical Documentation / Help Desk",
    title: "IT Troubleshooting Knowledge Base",
    problem:
      "Recurring support issues needed clear troubleshooting steps so tickets could be handled consistently and escalated with the right information.",
    solution:
      "Created practical support documentation for issues such as jail call troubleshooting, caller ID problems, printer scan issues, and ticket ownership expectations.",
    tools: ["ServiceNow", "Documentation", "Troubleshooting", "User Support"],
    demonstrated: [
      "Created repeatable troubleshooting steps for recurring support issues",
      "Documented what information should be collected before escalation",
      "Improved consistency in help desk ticket handling and user communication",
      "Translated technical troubleshooting into clear instructions for support staff"
    ],
    impact:
      "Improved consistency, helped collect better details before escalation, and supported clearer communication with users."
  }
];

function App() {
  return (
    <main className="app">
      <header className="site-header">
        <h2 className="logo">Yalitza Bueno</h2>
        
        <nav>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          {/* <a href="#learning">Learning</a> */}
          <a href="#contact">Contact</a>
         </nav>
      </header>
      
      <section className="hero">
        <p className="eyebrow">IT Systems Support • Microsoft 365 • SharePoint Automation</p>

        <h1>Hi, I’m Yalitza.</h1>

        <p className="intro">
          I’m an IT professional focused on user support, endpoint management,
          Microsoft 365 administration, SharePoint solutions, automation, and
          public-sector technology operations.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">View Projects</a>
          <a href="#skills" className="button secondary">View Skills</a>
        </div>
      </section>

      <section className="section about">
        <h2>About Me</h2>
        <p>
          I am an IT professional with experience in public-sector technical support,
          endpoint troubleshooting, Microsoft 365 administration, SharePoint support,
          automation workflows, and user-focused problem solving. My background combines
          customer service, technical documentation, and hands-on systems support.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <span>Microsoft 365 Admin Center</span>
          <span>Intune</span>
          <span>Entra ID</span>
          <span>Active Directory</span>
          <span>SharePoint Online</span>
          <span>Power Automate</span>
          <span>ServiceNow</span>
          <span>Windows 10/11</span>
          <span>SQL Troubleshooting</span>
          <span>Technical Documentation</span>
        </div>
      </section>

{/* Projects section cards */}
      <section id="projects" className="section">
        <h2>Featured Projects</h2>

        <p className="section-intro">
          A selection of technical projects focused on Microsoft 365, SharePoint,
          automation, endpoint support, documentation, and business process improvement.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

{/* Learning section */}
      <section id="learning" className="section">
        <h2>Certifications & Current Learning</h2>

        <div className="learning-grid">
          <article className="learning-card">
            <h3>MD-102 Training</h3>
            <p>
              Microsoft 365 Endpoint Administrator training focused on endpoint
              management, Intune, Microsoft 365 administration, identity, and device support.
            </p>
          </article>

          <article className="learning-card">
            <h3>Microsoft Intune</h3>
            <p>
              Building skills in device management, compliance policies, app deployment,
              Windows updates, and endpoint troubleshooting.
            </p>
          </article>

          <article className="learning-card">
            <h3>SharePoint & Power Automate</h3>
            <p>
              Creating workflow solutions, approval processes, document libraries,
              metadata-based views, and user-friendly business processes.
            </p>
          </article>

          <article className="learning-card">
            <h3>AWS Hackathon</h3>
            <p>
              Participated in a hackathon using AWS cloud services to collaborate,
              prototype, and present a technical solution.
            </p>
          </article>

          <article className="learning-card">
            <h3>AI & Cybersecurity</h3>
            <p>
              Exploring AI, cloud, and cybersecurity skills to grow into more advanced
              technical roles.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>
          I am open to IT support, systems analyst, endpoint administration,
          Microsoft 365, SharePoint, automation, and cybersecurity-focused opportunities.
        </p>

        <div className="contact-links">
          <a href="https://www.linkedin.com/in/yalitzab" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

          <a href="https://github.com/yalitzab" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="mailto:yalitzabueno@gmail.com">
            Email
          </a>
        </div>
      </section>

{/* Footer */}
      <footer className="footer">
        <p>© 2026 Yalitza Bueno. Made with ❤️ and built with React.</p>
      </footer>

    </main>
  );
}

export default App;