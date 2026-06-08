import { FiExternalLink, FiAward } from "react-icons/fi";
import { certifications } from "../data/portfolioData";

const colorMap = {
  blue:   { bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.2)",  text: "#2563eb", dark: "#93c5fd" },
  orange: { bg: "rgba(249,115,22,0.08)",  border: "rgba(249,115,22,0.2)",  text: "#ea580c", dark: "#fb923c" },
  purple: { bg: "rgba(124,58,237,0.08)",  border: "rgba(124,58,237,0.2)",  text: "#7c3aed", dark: "#a78bfa" },
  green:  { bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.2)",   text: "#16a34a", dark: "#4ade80" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Learning Journey</span>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Industry-recognized credentials from IBM, NPTEL, Udemy, and more.
          </p>
        </div>

        {/* IBM highlight banner */}
        <div style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(124,58,237,0.06) 100%)",
          border: "1px solid rgba(59,130,246,0.2)",
          borderRadius: "var(--radius-lg)",
          padding: "20px 28px",
          marginBottom: 36,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}>
          <div style={{
            width: 44, height: 44,
            background: "#1f70c1",
            borderRadius: "var(--radius-sm)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.85rem", letterSpacing: "-0.03em" }}>IBM</span>
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: 2 }}>
              2 Verified IBM SkillsBuild Digital Credentials
            </div>
            <div style={{ fontSize: "0.84rem", color: "var(--text-secondary)" }}>
              AI Fundamentals · Web Development Fundamentals — Verifiable on Credly
            </div>
          </div>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 20,
        }} className="certs-grid">
          {certifications.map((cert) => {
            const c = colorMap[cert.color] || colorMap.purple;
            return (
              <div
                key={cert.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "22px 24px",
                  borderTop: `3px solid ${c.text}`,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 20,
                    background: c.bg,
                    color: c.text,
                    border: `1px solid ${c.border}`,
                    letterSpacing: "0.04em",
                  }}>
                    {cert.badge}
                  </span>
                  {cert.verify && (
                    <a
                      href={cert.verify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Verify certificate"
                      style={{ color: "var(--text-muted)", transition: "color 0.2s", display: "flex" }}
                      onMouseEnter={e => e.currentTarget.style.color = c.text}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                    >
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>

                <div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: "0.84rem", color: "var(--accent)", fontWeight: 500 }}>
                    {cert.issuer}
                  </div>
                </div>

                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: 10,
                  borderTop: "1px solid var(--border)",
                }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{cert.date}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", textAlign: "right", maxWidth: "55%" }}>
                    {cert.detail}
                  </span>
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
