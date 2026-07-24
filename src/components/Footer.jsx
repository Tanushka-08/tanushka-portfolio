import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const navItems = ["About", "Skills", "Projects", "Certifications", "Achievements", "Contact"];

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
              display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
            }}>
              <div style={{
                width: 28, height: 28,
                background: "var(--accent)",
                borderRadius: "var(--radius-xs)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)",
                fontWeight: 800, fontSize: "0.72rem", color: "#fff",
              }}>TB</div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}>Tanushka<span style={{ color: "var(--accent)" }}>.</span></span>
            </div>
            <div style={{
              fontSize: "0.78rem",
              color: "var(--text-hint)",
              fontFamily: "var(--font-mono)",
            }}>B.E. IT · Navi Mumbai</div>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => {
                  const el = document.querySelector(`#${item.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "0.82rem", color: "var(--text-muted)",
                  fontFamily: "var(--font-body)",
                  padding: "4px 10px",
                  borderRadius: "var(--radius-xs)",
                  transition: "color var(--transition)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
              >{item}</button>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { icon: <FiGithub size={16} />,   href: personalInfo.github,                 label: "GitHub"   },
              { icon: <FiLinkedin size={16} />,  href: personalInfo.linkedin,               label: "LinkedIn" },
              { icon: <FiMail size={16} />,      href: `mailto:${personalInfo.email}`,      label: "Email"    },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 34, height: 34,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--bg-primary)",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}>
          <span style={{ fontSize: "0.76rem", color: "var(--text-hint)", fontFamily: "var(--font-mono)" }}>
            © {year} Tanushka Bhoir · All rights reserved
          </span>
          <span style={{
            fontSize: "0.76rem", color: "var(--text-hint)",
            display: "flex", alignItems: "center", gap: 5,
            fontFamily: "var(--font-mono)",
          }}>
            Built with <FiHeart size={11} style={{ color: "var(--accent)" }} /> using React & Vite
          </span>
        </div>
      </div>
    </footer>
  );
}
