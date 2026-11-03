import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Download, Github, Linkedin,
  Code2, Star, BriefcaseBusiness, Play, Menu, X, Mail, MapPin,
  ExternalLink, Database, Layers3, ShieldCheck, Globe2, Terminal,
  GraduationCap, Award, Phone, ChevronRight
} from "lucide-react";

const profile = {
  name: "Gumma Ganga Dheeresh",
  shortName: "Gumma Ganga Dheeresh",
  role: "Java Full Stack Developer",
  email: "gangadheereshg@gmail.com",
  phone: "+91-7207357144",
  location: "Vadodara, Gujarat, India",
  github: "https://github.com/gangadheereshG",
  linkedin: "https://linkedin.com/in/gangadheeresh-gumma-b57099373/",
  leetcode: "https://leetcode.com/u/dheereshganga/"
};

const BASE = import.meta.env.BASE_URL || "/";
const portraitImg = `${BASE}dheeresh-portrait.png`;
const resumePdf = `${BASE}Gumma-Ganga-Dheeresh-Resume.pdf`;

const skills = [
  { group: "Programming", items: ["Java", "JavaScript", "SQL"] },
  { group: "Java & Backend", items: ["Core Java", "OOP", "Collections", "Exception Handling", "Java 8", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs"] },
  { group: "Security", items: ["Spring Security", "JWT", "BCrypt", "Role-Based Authorization"] },
  { group: "Frontend", items: ["React", "Vite", "React Router", "Axios", "HTML", "CSS"] },
  { group: "Database & Integration", items: ["PostgreSQL", "MySQL", "Redis", "SMTP / Spring Boot Mail"] },
  { group: "Tools & Fundamentals", items: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Docker", "Data Structures & Algorithms", "DBMS"] }
];

const projects = [
  {
    number: "01",
    title: "E-Commerce Website",
    subtitle: "Full Stack E-Commerce Platform",
    description: "A full-stack shopping platform with product discovery, secure checkout, order management and an administration dashboard.",
    details: [
      "Product browsing, live keyword search, category filtering and price sorting.",
      "Cart, wishlist, coupons, checkout, stock indicators and order management.",
      "JWT authentication, BCrypt password hashing and role-based access for User and Admin.",
      "PostgreSQL persistence, transactional order/payment operations and Redis catalog caching.",
      "Admin inventory management and SMTP order email receipts."
    ],
    stack: ["Java 17", "Spring Boot 3", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "Redis", "React 18", "Vite"],
    icon: <Database size={22} />
  },
  {
    number: "02",
    title: "FinScan",
    subtitle: "AI Expense Tracker & Financial Analytics",
    description: "A personal finance application for automated expense tracking, receipt understanding and intelligent budgeting.",
    details: [
      "Automated expense tracking and budgeting across 500+ simulated transactions.",
      "Gemini Vision AI receipt parsing for merchant, line items, totals and structured JSON.",
      "Secure Spring Boot APIs with JWT authentication, role-based access and PostgreSQL transactions.",
      "Responsive React dashboard with Recharts financial analytics and budget alerts.",
      "Predictive savings goals, caching and indexing for multi-month queries."
    ],
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Gemini AI", "Docker", "Recharts"],
    icon: <Layers3 size={22} />
  }
];

const education = [
  { date: "AUG 2023 — PRESENT", school: "Parul University", course: "B.Tech, Computer Science Engineering (Artificial Intelligence)", result: "CGPA 8.28 / 10", place: "Vadodara, Gujarat" },
  { date: "AUG 2021 — MAY 2023", school: "Sri Chaitanya Junior College", course: "Intermediate (MPC)", result: "91%", place: "Vijayawada, Andhra Pradesh" },
  { date: "2021", school: "Sri Chaitanya School", course: "SSC — 10th Class", result: "GPA 10 / 10", place: "Andhra Pradesh" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
      transition={{ delay }}
      style={reduce ? { opacity: 1, transform: "none" } : undefined}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title} <span>{accent}</span></h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ["home", "about", "projects", "skills", "education", "contact"];
      let current = "Home";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id[0].toUpperCase() + id.slice(1);
      });
      setActive(current === "Education" ? "About" : current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    ["Home", "home"], ["About", "about"], ["Projects", "projects"],
    ["Skills", "skills"], ["Contact", "contact"]
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Gumma Ganga Dheeresh home">GD<span>.</span></a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navItems.map(([label, id]) => (
            <a key={id} className={active === label ? "active" : ""} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="resume-btn" href={resumePdf} download>
          Resume <Download size={15} />
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-copy">
            <span className="hello-pill"><span className="hello-dot" /> Hello, I'm</span>
            <h1>Gumma<br /><span>Ganga Dheeresh</span></h1>
            <div className="role-line"><strong>Full Stack Developer</strong><i /></div>
            <p className="hero-description">I build modern web applications with<br className="desktop-break" /> Java, Spring Boot and React.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">Explore My Work <ArrowUpRight size={17} /></a>
              <a className="intro-link" href="#about"><span><Play size={14} fill="currentColor" /></span> Watch Intro</a>
            </div>
            <div className="hero-stats">
              <div><Code2 /><span>Projects<strong>2+</strong></span></div>
              <b />
              <div><Star /><span>Skills<strong>15+</strong></span></div>
              <b />
              <div><BriefcaseBusiness /><span>Experience<strong>0+ Years</strong></span></div>
            </div>
          </div>

          <div className="portrait-stage" aria-label="Portrait of Gumma Ganga Dheeresh">
            <div className="portrait-halo" />
            <div className="portrait-smoke smoke-a" />
            <div className="portrait-smoke smoke-b" />
            <img className="portrait" src={portraitImg} alt="Portrait of Gumma Ganga Dheeresh" />
            <span className="portrait-caption">JAVA · BACKEND · FULL STACK</span>
          </div>

          <div className="vertical-note">DEVELOPER <span>•</span> PROBLEM SOLVER <span>•</span> INNOVATOR</div>
          <a className="scroll-cue" href="#about"><span className="mouse-icon" /> Scroll Down <ArrowDown size={15} /></a>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 /></a>
          </div>
          <div className="corner-lines" />
        </section>

        <section className="section about-section" id="about">
          <Reveal>
            <SectionHeading eyebrow="01 / ABOUT ME" title="Building with" accent="purpose." />
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-intro">
              <p className="lead">I'm <strong>Gumma Ganga Dheeresh</strong>, a Computer Science Engineering student focused on building secure, database-driven web applications.</p>
              <p>My core interests are Java backend engineering and full-stack development. I enjoy turning ideas into practical applications using Spring Boot, React and relational databases.</p>
              <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <ArrowUpRight size={16} /></a>
            </Reveal>
            <Reveal className="about-facts" delay={0.12}>
              <div className="fact"><MapPin /><span>Based in<strong>Vadodara, India</strong></span></div>
              <div className="fact"><GraduationCap /><span>Education<strong>B.Tech — Parul University</strong></span></div>
              <div className="fact"><ShieldCheck /><span>Focus<strong>Java Backend & Full Stack</strong></span></div>
            </Reveal>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <Reveal><SectionHeading eyebrow="02 / SELECTED WORK" title="Things I've" accent="built." /></Reveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <Reveal key={project.number} className="project-card" delay={index * 0.08}>
                <div className="project-topline"><span>FEATURED PROJECT / {project.number}</span><span className="project-icon">{project.icon}</span></div>
                <div className="project-main">
                  <div className="project-title-wrap">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="project-details">
                    {project.details.map(detail => <div key={detail}><ChevronRight size={15} />{detail}</div>)}
                  </div>
                </div>
                <div className="project-footer"><span>JAVA · FULL STACK · ENGINEERING</span><a href={profile.github} target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={15} /></a></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <Reveal><SectionHeading eyebrow="03 / TOOLKIT" title="Technologies I" accent="work with." /></Reveal>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <Reveal className="skill-group" key={group.group} delay={i * 0.04}>
                <div className="skill-group-head"><span>0{i + 1}</span><h3>{group.group}</h3></div>
                <div className="skill-chips">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <Reveal><SectionHeading eyebrow="04 / EDUCATION" title="Learning is" accent="ongoing." /></Reveal>
          <div className="timeline">
            {education.map((item, i) => (
              <Reveal className="timeline-item" key={item.school} delay={i * 0.08}>
                <div className="timeline-marker" />
                <span className="timeline-date">{item.date}</span>
                <div><h3>{item.school}</h3><p>{item.course}</p><span className="timeline-result">{item.result}</span><small>{item.place}</small></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section credentials-section">
          <Reveal><SectionHeading eyebrow="05 / CONTINUOUS LEARNING" title="Credentials &" accent="practice." /></Reveal>
          <div className="credential-grid">
            <Reveal className="credential"><Award /><div><span> AUG 25, 2026</span><h3>Java Spring Framework, Spring Boot, Spring AI – GenAI</h3><p>Telusko Edutech · Instructor: Navin Reddy</p></div></Reveal>
            <Reveal className="credential" delay={0.1}><Award /><div><span>CERTIFICATION</span><h3>JavaScript Development</h3><p>Mindluster</p></div></Reveal>
          </div>
          <p className="activity-note"><Terminal size={17} /> Active on LeetCode and GitHub; regularly practice Data Structures & Algorithms and Java development.</p>
        </section>

        <section className="contact-section" id="contact">
          <Reveal>
            <span className="eyebrow">06 / GET IN TOUCH</span>
            <h2>Have a project<br />in <span>mind?</span></h2>
            <p>I'm open to opportunities, collaborations and conversations about building useful software.</p>
            <a className="button button-light contact-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={18} /></a>
          </Reveal>
          <div className="contact-bottom">
            <div><Mail size={16} /><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div><Phone size={16} /><a href={`tel:${profile.phone.replaceAll("-", "")}`}>{profile.phone}</a></div>
            <div><MapPin size={16} /><span>{profile.location}</span></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">GD<span>.</span></a>
        <span>© {new Date().getFullYear()} Gumma Ganga Dheeresh. Built with intention.</span>
        <a href="#home" className="back-top">Back to top <ArrowUpRight size={15} /></a>
      </footer>
    </>
  );
}

export default App;
