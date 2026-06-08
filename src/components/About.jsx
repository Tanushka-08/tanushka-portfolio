import { FiMapPin, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "6+", label: "Certifications" },
  { value: "2",  label: "IBM Credentials" },
  { value: "1",  label: "Hackathon" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }} className="about-grid">

          {/* Left: Bio */}
          <div>
            {personalInfo.about.split("\n\n").map((para, i) => (
              <p key={i} style={{
                fontSize: "1.02rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: i === 0 ? 20 : 0,
              }}>
                {para}
              </p>
            ))}

            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: <FiMapPin size={15} />, text: personalInfo.location },
                { icon: <FiMail size={15} />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <FiGithub size={15} />, text: "github.com/Tanushka-08", href: personalInfo.github },
                { icon: <FiLinkedin size={15} />, text: "linkedin.com/in/tanushka-bhoir", href: personalInfo.linkedin },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "var(--accent)" }}>{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ color: "var(--text-secondary)", fontSize: "0.92rem", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats + College */}
          <div>
            {/* Stats grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginBottom: 28,
            }}>
              {stats.map((s) => (
                <div key={s.label} style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-md)",
                  padding: "20px 24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-card)";
                  e.currentTarget.style.transform = "none";
                }}
                >
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{s.value}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* College card */}
            <div style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-card)",
              borderRadius: "var(--radius-md)",
              padding: "20px 24px",
              borderLeft: "3px solid var(--accent)",
            }}>
              <div style={{ fontSize: "0.75rem", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 8 }}>
                Education
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.98rem", color: "var(--text-primary)", marginBottom: 4 }}>
                B.E. Information Technology
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                Bharati Vidyapeeth College of Engineering
              </div>
              <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: 4 }}>
                Navi Mumbai, Maharashtra
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
