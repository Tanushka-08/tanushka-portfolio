import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "B.E. IT Student",
  "Python Developer",
  "ML Enthusiast",
  "Web Developer",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setCharIndex(0);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 68,
        background: "var(--bg-primary)",
      }}
    >
      {/* Background orbs */}
      <div className="orb orb-purple" style={{ width: 500, height: 500, top: "-10%", right: "-10%", opacity: 0.6 }} />
      <div className="orb orb-violet" style={{ width: 350, height: 350, bottom: "5%", left: "-8%", opacity: 0.5 }} />
      <div className="bg-dots" />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Text */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--bg-tertiary)",
              border: "1px solid var(--border)",
              borderRadius: 100,
              padding: "6px 16px",
              fontSize: "0.82rem",
              color: "var(--accent)",
              fontWeight: 500,
              marginBottom: 24,
              animation: "fadeUp 0.5s ease forwards",
            }}
          >
            <span style={{
              width: 7, height: 7,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 8px #22c55e",
            }} />
            Open to internships & opportunities
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 12,
              animation: "fadeUp 0.6s 0.1s ease both",
            }}
          >
            Hi, I'm{" "}
            <span style={{ color: "var(--accent)" }}>
              Tanushka
            </span>
            <br />Bhoir
          </h1>

          <div
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              color: "var(--text-secondary)",
              marginBottom: 24,
              fontWeight: 300,
              minHeight: "2rem",
              animation: "fadeUp 0.6s 0.2s ease both",
            }}
          >
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>
              {displayed}
            </span>
            <span
              style={{
                borderRight: "2px solid var(--accent)",
                marginLeft: 2,
                animation: "blink 1s step-end infinite",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              maxWidth: 480,
              marginBottom: 36,
              lineHeight: 1.75,
              animation: "fadeUp 0.6s 0.3s ease both",
            }}
          >
            {personalInfo.college} · {personalInfo.location}
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
              marginBottom: 40,
              animation: "fadeUp 0.6s 0.4s ease both",
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              gap: 14,
              animation: "fadeUp 0.6s 0.5s ease both",
            }}
          >
            {[
              { icon: <FiGithub size={18} />, href: personalInfo.github, label: "GitHub" },
              { icon: <FiLinkedin size={18} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={18} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 42, height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-secondary)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Profile Photo */}
        <div
          className="hero-photo-wrap"
          style={{
            position: "relative",
            animation: "fadeUp 0.7s 0.3s ease both",
          }}
        >
          {/* Decorative ring */}
          <div style={{
            position: "absolute",
            inset: -12,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, var(--accent) 0%, transparent 40%, var(--accent-light) 70%, transparent 100%)",
            animation: "spin 8s linear infinite",
          }} />
          <div style={{
            position: "relative",
            width: 260,
            height: 260,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid var(--bg-primary)",
            background: "var(--bg-tertiary)",
          }}>
            <img
              src="/profile.jpg"
              alt="Tanushka Bhoir"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.style.display = "flex";
                e.currentTarget.parentElement.style.alignItems = "center";
                e.currentTarget.parentElement.style.justifyContent = "center";
                e.currentTarget.parentElement.innerHTML = `<span style="font-family:var(--font-display);font-size:5rem;font-weight:800;color:var(--accent)">TB</span>`;
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: 32,
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        color: "var(--text-muted)",
        fontSize: "0.75rem",
        animation: "fadeUp 1s 0.8s ease both",
        cursor: "pointer",
      }}
      onClick={() => document.querySelector("#about").scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ letterSpacing: "0.1em" }}>scroll</span>
        <FiArrowDown size={14} style={{ animation: "bounce 2s ease infinite" }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes bounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(6px)}
        }
        @media (max-width: 768px) {
          .hero-photo-wrap { display: none; }
          section#hero .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
