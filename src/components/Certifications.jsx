import { FiExternalLink } from "react-icons/fi";
import { certifications } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const colorMap = {
  blue:   { text: "#2563eb", bg: "rgba(37,99,235,0.08)",  border: "rgba(37,99,235,0.2)"  },
  orange: { text: "#c2410c", bg: "rgba(194,65,12,0.08)",  border: "rgba(194,65,12,0.2)"  },
  purple: { text: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
  green:  { text: "#059669", bg: "rgba(5,150,105,0.08)",  border: "rgba(5,150,105,0.2)"  },
};

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Learning journey</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Verified credentials from IBM, NPTEL, Udemy, and more.
          </p>
        </div>

        {/* IBM feature banner */}
        <div className="reveal" style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          background: "linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(124,58,237,0.05) 100%)",
          border: "1px solid rgba(37,99,235,0.2)",
          borderRadius: "var(--radius-lg)",
          padding: "18px 24px",
          marginBottom: 32,
        }}>
          <div style={{
            width: 44, height: 44,
            background: "#1f70c1",
            borderRadius: "var(--radius-sm)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: "0.8rem", color: "#fff",
            letterSpacing: "-0.02em",
            flexShrink: 0,
          }}>IBM</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--text-primary)", marginBottom: 2 }}>
              2 Verified IBM SkillsBuild Digital Credentials
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              AI Fundamentals · Web Development Fundamentals — Verifiable on Credly
            </div>
          </div>
          <div style={{
            marginLeft: "auto",
            fontFamily: "var(--font-mono)",
            fontSize: "0.68rem",
            color: "#2563eb",
            background: "rgba(37,99,235,0.08)",
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: "var(--radius-full)",
            padding: "4px 10px",
            whiteSpace: "nowrap",
          }}>credly verified</div>
        </div>

        {/* Certs grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }} className="certs-grid">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.purple;
            return (
              <div
                key={cert.id}
                className={`reveal reveal-delay-${i % 4}`}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 22px",
                  borderTop: `3px solid ${c.text}`,
                  transition: "all var(--transition)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.borderColor = c.border;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                {/* Icon + badge row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "1.4rem" }}>{cert.icon}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{
                      fontSize: "0.65rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "var(--radius-full)",
                      background: c.bg,
                      color: c.text,
                      border: `1px solid ${c.border}`,
                      letterSpacing: "0.04em",
                    }}>{cert.badge}</span>
                    {cert.verify && (
                      <a href={cert.verify} target="_blank" rel="noopener noreferrer"
                        aria-label="Verify certificate"
                        style={{ color: "var(--text-hint)", transition: "color var(--transition)", display: "flex" }}
                        onMouseEnter={e => e.currentTarget.style.color = c.text}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--text-hint)"}
                      ><FiExternalLink size={15} /></a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 3,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                  }}>{cert.title}</h3>
                  <div style={{
                    fontSize: "0.8rem",
                    color: c.text,
                    fontWeight: 500,
                    opacity: 0.85,
                  }}>{cert.issuer}</div>
                </div>

                {/* Footer */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 8,
                  borderTop: "1px solid var(--border)",
                  marginTop: "auto",
                }}>
                  <span style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--text-hint)",
                  }}>{cert.date}</span>
                  <span style={{
                    fontSize: "0.72rem",
                    color: "var(--text-muted)",
                    textAlign: "right",
                  }}>{cert.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
