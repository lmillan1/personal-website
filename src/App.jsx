import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SITE = {
  name: "Luis Millan",
  email: "luimillan3@gmail.com",
  linkedin: "https://www.linkedin.com/in/luimillan",
  github: "https://github.com/lmillan1",
};

const publicationsData = [
  { title: "From Stress to Distress: A Personalized Detection Approach Using Gaussian Process Regression", authors: ["Rodrigo Aguilar Barrios", "Luis Millan", "Emily Mojica", "Jeffrey Millan", "Emiliano Gonzalez", "Rabiat Sadiq", "Corey E. Baker"], venue: "IEEE BSN 2025", badge: "Best Poster", link: { label: "Poster", url: "/personal-website/BSN_Poster.pdf" } },
  { title: "Motivating Adherence to Symptom Reporting Among Patients with Cancer", authors: ["Alyssa Donawa", "Jeffrey Millan", "Luis Millan", "Thomas Reeves", "Ronaldo Lopez-Tucux", "Nazila Shafagati", "Ruta Arays", "Ralph Zinner", "Corey E. Baker"], venue: "IEEE BSN 2025", badge: null, link: { label: "PDF", url: "https://openreview.net/pdf?id=qWx7tvILrJ" } },
  { title: "An Analysis of Students' Testing Processes in CS1", authors: ["Gonzalo Allen-Perez", "Luis Millan", "Brandon Nghiem", "Kevin Wu", "Anshul Shah", "Adalbert Gerald Soosai Raj"], venue: "ACM SIGCSE 2025", badge: null, link: { label: "PDF", url: "https://dl.acm.org/doi/10.1145/3641554.3701890" } },
  { title: "Assuage: Improving mHealth Accessibility and Adherence for Remote Patient Monitoring", authors: ["Luis Millan", "Alyssa Donawa", "Corey E. Baker"], venue: "USC Viterbi SURE 2024", badge: null, link: { label: "Poster", url: "/personal-website/USC_Poster.pdf" } },
];

const projectsData = [
  { title: "Assuage", emoji: "🏥", tools: ["Swift", "CareKit", "ResearchKit"], desc: "HIPAA-compliant iOS app for remote cancer patient monitoring", link: "https://github.com/netreconlab" },
  { title: "Wearable Health Analyzer", emoji: "⌚", tools: ["PySpark", "PostgreSQL", "Tableau"], desc: "Analytics pipeline processing 3.6M+ rows of wearable health data", link: "https://github.com/lmillan1/wearable-health-analyzer" },
  { title: "Movie Rec Analysis", emoji: "🎬", tools: ["Python", "Pandas", "Jupyter"], desc: "Recommendation system built on MovieLens 1M dataset", link: "https://github.com/lmillan1/movie-recommendation-analysis" },
];

const experienceData = [
  { role: "Research Assistant", org: "USC", dates: "Jun 2024 - Present" },
  { role: "Teaching Assistant", org: "UCSD", dates: "Sep 2023 - Sep 2025" },
  { role: "CS Ed Researcher", org: "UCSD", dates: "Sep 2023 - Sep 2024" },
  { role: "Hedge Fund Analyst", org: "Rimrock Capital", dates: "Jun - Aug 2023" },
];

const skillsData = ["Python", "Swift", "JavaScript", "React", "SQL", "PyTorch", "PySpark", "Tailwind CSS", "Tableau", "Git"];

const themes = {
  light: { "--bg": "#F2F0EB", "--card": "#FFFFFF", "--card-alt": "#E8E6E1", "--border": "#D9D6CF", "--text": "#1A1A2E", "--text-2": "#6B7280", "--accent": "#2563EB", "--accent-soft": "rgba(37,99,235,0.08)", "--white": "#FFFFFF", "--shadow": "0 1px 3px rgba(0,0,0,0.06)", "--nav-bg": "rgba(255,255,255,0.8)" },
  dark: { "--bg": "#0C0C10", "--card": "#18181F", "--card-alt": "#222230", "--border": "#2A2A38", "--text": "#EEEEF0", "--text-2": "#8888A0", "--accent": "#60A5FA", "--accent-soft": "rgba(96,165,250,0.1)", "--white": "#FFFFFF", "--shadow": "0 1px 3px rgba(0,0,0,0.3)", "--nav-bg": "rgba(24,24,31,0.8)" },
};
const applyTheme = (t) => Object.entries(themes[t]).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const c = useAnimation();
  useEffect(() => { if (inView) c.start("v"); }, [inView, c]);
  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div variants={{ h: { opacity: 0, y: 30 }, v: { opacity: 1, y: 0 } }} initial="h" animate={c} transition={{ duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] }}>
        {children}
      </motion.div>
    </div>
  );
}

function Card({ children, span, style, hover = true }) {
  return (
    <motion.div whileHover={hover ? { y: -3, transition: { duration: 0.2 } } : {}} className={span || ""} style={{ background: "var(--card)", borderRadius: 16, border: "1px solid var(--border)", padding: 24, boxShadow: "var(--shadow)", transition: "border-color 0.3s", ...style }} onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"} onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}>
      {children}
    </motion.div>
  );
}

function Tag({ children }) {
  return <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 20, background: "var(--accent-soft)", color: "var(--accent)" }}>{children}</span>;
}

function Navbar({ theme, toggle }) {
  return (
    <motion.nav initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 90, background: "var(--nav-bg)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid var(--border)", borderRadius: 14, padding: "8px 16px", display: "flex", alignItems: "center", gap: 6 }}>
      <button onClick={toggle} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px", borderRadius: 8, color: "var(--text-2)", display: "flex", alignItems: "center", fontSize: 16 }}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </motion.nav>
  );
}

export default function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => { var t = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"; setTheme(t); applyTheme(t); }, []);
  var toggle = useCallback(function() { var n = theme === "dark" ? "light" : "dark"; setTheme(n); applyTheme(n); }, [theme]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", transition: "background 0.4s", fontFamily: "system-ui, sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: "*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; } html { scroll-behavior: smooth; } body { -webkit-font-smoothing: antialiased; } .bento { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 960px; margin: 0 auto; padding: 80px 20px 40px; } .hero-span { grid-column: span 2; } .photo-span { grid-column: span 1; } .about-span { grid-column: span 2; } .edu-span { grid-column: span 1; } .skills-span { grid-column: span 1; } .exp-span { grid-column: span 2; } .pubs-span { grid-column: span 3; } .projects-label { grid-column: span 3; } .contact-span { grid-column: span 3; } @media (max-width: 700px) { .bento { grid-template-columns: 1fr; } .hero-span, .photo-span, .about-span, .edu-span, .skills-span, .exp-span, .pubs-span, .projects-label, .contact-span { grid-column: span 1; } }" }} />
      <Navbar theme={theme} toggle={toggle} />
      <div className="bento">
        <Card span="hero-span" hover={false} style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: 280 }}>
          <Reveal>
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--accent)", marginBottom: 8 }}>HELLO, I AM</p>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, color: "var(--text)", lineHeight: 1.1, marginBottom: 12 }}>Luis Millan</h1>
            <p style={{ fontSize: 16, color: "var(--text-2)", lineHeight: 1.6, maxWidth: 400 }}>Mathematics-Computer Science student at UC San Diego. Undergraduate researcher at the Network Reconnaissance Lab @ USC.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap" }}>
              <a href={"mailto:" + SITE.email} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 18px", background: "var(--accent)", color: "var(--white)", borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Contact Me</a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: "8px 18px", border: "1.5px solid var(--border)", borderRadius: 10, fontSize: 13, fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>LinkedIn</a>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer" style={{ padding: "8px 18px", border: "1.5px solid var(--border)", borderRadius: 10, fontSize: 13, fontWeight: 600, color: "var(--text)", textDecoration: "none" }}>GitHub</a>
            </div>
          </Reveal>
        </Card>
        <Card span="photo-span" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280, background: "var(--card-alt)" }}>
          <Reveal>
            <img src="/personal-website/Luis.png" alt="Luis Millan" style={{ width: 200, height: 200, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid var(--border)" }} />
          </Reveal>
        </Card>
        <Card span="about-span">
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 12 }}>About</p>
           <p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7 }}>
  Hey there! I am a Mathematics-Computer Science student at UC San Diego, graduating June 2026.
</p>
<p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, marginTop: 10 }}>
  I am passionate about using data and machine learning to solve real-world problems. Currently a research assistant at USC in the Network Reconnaissance Lab, building open-source health monitoring tools and analyzing clinical study data.
</p>
<p style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.7, marginTop: 10 }}>
  Outside of work, you can find me swimming, surfing, or at the gym. Feel free to reach out!
</p>
          </Reveal>
        </Card>
        <Card span="edu-span">
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 12 }}>Education</p>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>B.S. Mathematics-Computer Science</h3>
            <p style={{ fontSize: 14, color: "var(--text-2)" }}>UC San Diego - 2022 to 2026</p>
          </Reveal>
        </Card>
        <Card span="pubs-span">
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}>Publications</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {publicationsData.map(function(p, i) { return (
                <div key={i} style={{ paddingBottom: i < publicationsData.length - 1 ? 14 : 0, borderBottom: i < publicationsData.length - 1 ? "1px solid var(--border)" : "none" }}>
                  {p.badge ? <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 12, background: "var(--accent)", color: "var(--white)", marginBottom: 6, display: "inline-block" }}>{p.badge}</span> : null}
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", lineHeight: 1.4, marginBottom: 3, marginTop: p.badge ? 6 : 0 }}>{p.title}</h4>
                  <p style={{ fontSize: 11, color: "var(--text-2)", marginBottom: 2 }}>
                    {p.authors.map(function(a, j) { return <span key={j}>{a === "Luis Millan" ? <strong style={{ color: "var(--text)" }}>{a}</strong> : a}{j < p.authors.length - 1 ? ", " : ""}</span>; })}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: 11, color: "var(--accent)", fontStyle: "italic" }}>{p.venue}</p>
                    <a href={p.link.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", textDecoration: "none", padding: "2px 10px", border: "1px solid var(--accent)", borderRadius: 6 }}>{p.link.label}</a>
                  </div>
                </div>
              ); })}
            </div>
          </Reveal>
        </Card>
        <div className="projects-label">
          <Reveal><p style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 0 }}>Projects</p></Reveal>
        </div>
        {projectsData.map(function(p, i) { return (
          <Card key={i}>
            <Reveal>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 10 }}>
                <span style={{ fontSize: 32 }}>{p.emoji}</span>
                <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", textDecoration: "none", padding: "3px 10px", border: "1px solid var(--accent)", borderRadius: 6 }}>GitHub</a>
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{p.title}</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>{p.tools.map(function(t, j) { return <Tag key={j}>{t}</Tag>; })}</div>
              <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.6 }}>{p.desc}</p>
            </Reveal>
          </Card>
        ); })}
        <Card span="contact-span" style={{ background: "var(--accent)", border: "none" }}>
          <Reveal>
            <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>Get in Touch</p>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--white)", marginBottom: 14 }}>Lets connect!</h3>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a href={"mailto:" + SITE.email} style={{ padding: "8px 16px", background: "rgba(255,255,255,0.15)", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "var(--white)", textDecoration: "none" }}>{SITE.email}</a>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: "8px 16px", background: "rgba(255,255,255,0.15)", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "var(--white)", textDecoration: "none" }}>LinkedIn</a>
            </div>
          </Reveal>
        </Card>
      </div>
      <footer style={{ textAlign: "center", padding: "24px", fontSize: 12, color: "var(--text-2)" }}>2026 {SITE.name}</footer>
    </div>
  );
}
