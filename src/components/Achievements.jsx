import { FiAward, FiZap } from "react-icons/fi";
import { achievements } from "../data/portfolioData";

const iconMap = {
  trophy: <FiZap size={22} />,
  award:  <FiAward size={22} />,
};

const typeConfig = {
  hackathon: {
    label: "Hackathon",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.25)",
    text: "#ea580c",
    accent: "#f97316",
  },
  workshop: {
    label: "Workshop",
    bg: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.25)",
    text: "#7c3aed",
    accent: "#a78bfa",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Beyond the Classroom</span>
          <h2 className="section-title">Achievements & Activities</h2>
          <p className="section-subtitle">
            Hands-on experiences that shaped my thinking and teamwork.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
          gap: 24,
        }} className="achievements-grid">
          {achievements.map((item) => {
            const cfg = typeConfig[item.type] || typeConfig.workshop;
            return (
              <article
                key={item.id}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = cfg.accent;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                {/* Subtle corner accent */}
                <div style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: 80, height: 80,
                  background: `radial-gradient(circle at top right, ${cfg.bg}, transparent)`,
                  pointerEvents: "none",
                }} />

                {/* Top row */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 20,
                }}>
                  <div style={{
                    width: 48, height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                    borderRadius: "var(--radius-sm)",
                    color: cfg.text,
                    flexShrink: 0,
                  }}>
                    {iconMap[item.icon]}
                  </div>

                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: cfg.bg,
                      color: cfg.text,
                      border: `1px solid ${cfg.border}`,
                      letterSpacing: "0.04em",
                    }}>
                      {cfg.label}
                    </span>
                    <span style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                    }}>
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}>
                  {item.title}
                </h3>

                {/* Org */}
                <div style={{
                  fontSize: "0.84rem",
                  color: cfg.text,
                  fontWeight: 500,
                  marginBottom: 14,
                }}>
                  {item.org}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
