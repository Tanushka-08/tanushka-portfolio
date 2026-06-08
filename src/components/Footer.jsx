import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "var(--bg-secondary)",
      borderTop: "1px solid var(--border)",
      padding: "40px 0 28px",
    }}>
      <div className="container">
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
          marginBottom: 28,
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem",
              fontWeight: 800,
              color: "var(--accent)",
              marginBottom: 4,
            }}>
              TB<span style={{ color: "var(--text-primary)" }}>.</span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              B.E. IT Student · Navi Mumbai
            </div>
          </div>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {["About", "Skills", "Projects", "Certifications", "Achievements", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.querySelector(`#${item.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { icon: <FiGithub size={17} />, href: personalInfo.github,   label: "GitHub" },
              { icon: <FiLinkedin size={17} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={17} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 36, height: 36,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--bg-primary)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {year} Tanushka Bhoir. All rights reserved.
          </span>
          <span style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}>
            Built with <FiHeart size={12} style={{ color: "var(--accent)" }} /> using React & Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
