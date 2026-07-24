import { FiMapPin, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: "4+",  label: "Projects",       sub: "& growing" },
  { value: "5",   label: "Certifications", sub: "verified"  },
  { value: "2",   label: "IBM Credly",     sub: "badges"    },
  { value: "1",   label: "Hackathon",      sub: "competed"  },
];

const links = [
  { icon: <FiMapPin size={14} />,   text: "Navi Mumbai, Maharashtra", href: null },
  { icon: <FiMail size={14} />,     text: "bhoirtanushka@gmail.com",   href: `mailto:${personalInfo.email}` },
  { icon: <FiGithub size={14} />,   text: "github.com/Tanushka-08",    href: personalInfo.github },
  { icon: <FiLinkedin size={14} />, text: "tanushka-bhoir",             href: personalInfo.linkedin },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Who I am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }} className="about-grid">

          {/* Left: Bio */}
          <div>
            <div className="reveal">
              {personalInfo.about.map((para, i) => (
                <p key={i} style={{
                  fontSize: "1.02rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: i < personalInfo.about.length - 1 ? 18 : 28,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Contact links */}
            <div className="reveal reveal-delay-1" style={{
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {links.map(item => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{
                    width: 28, height: 28,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--accent-border)",
                    borderRadius: "var(--radius-xs)",
                    color: "var(--accent)",
                    flexShrink: 0,
                  }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "0.9rem",
                        transition: "color var(--transition)",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                    >{item.text}</a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + Education */}
          <div>
            {/* Stats */}
            <div className="reveal reveal-delay-2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 12, marginBottom: 20,
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px",
                  textAlign: "center",
                  transition: "all var(--transition)",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-card)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 4,
                    letterSpacing: "-0.03em",
                  }}>{s.value}</div>
                  <div style={{ fontSize: "0.83rem", fontWeight: 500, color: "var(--text-primary)", marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-hint)", fontFamily: "var(--font-mono)" }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="reveal reveal-delay-3" style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-md)",
              padding: "20px 24px",
              borderLeft: "3px solid var(--accent)",
              marginBottom: 16,
            }}>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
                marginBottom: 10,
              }}>Education</div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text-primary)",
                marginBottom: 4,
              }}>B.E. Information Technology</div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", marginBottom: 4 }}>
                Bharati Vidyapeeth College of Engineering
              </div>
              <div style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "var(--font-mono)",
              }}>Navi Mumbai · 2nd → 3rd year · 2023–2027</div>
            </div>

            {/* Currently learning pill */}
            <div className="reveal reveal-delay-4" style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "var(--accent-subtle)",
              border: "1px solid var(--accent-border)",
              borderRadius: "var(--radius-md)",
              padding: "12px 16px",
            }}>
              <span style={{ fontSize: "1.1rem" }}>📚</span>
              <div>
                <div style={{ fontSize: "0.72rem", fontFamily: "var(--font-mono)", color: "var(--accent)", letterSpacing: "0.08em", marginBottom: 2 }}>
                  CURRENTLY LEARNING
                </div>
                <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)", fontWeight: 500 }}>
                  Spring Boot · Advanced DSA · Docker basics
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
