import { achievements } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const typeConfig = {
  hackathon: { label: "Hackathon", icon: "⚡", text: "#ea580c", bg: "rgba(234,88,12,0.08)", border: "rgba(234,88,12,0.2)" },
  workshop:  { label: "Workshop",  icon: "🎓", text: "#7c3aed", bg: "rgba(124,58,237,0.08)", border: "rgba(124,58,237,0.2)" },
};

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Beyond the classroom</span>
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">
            Hands-on experiences that shaped my thinking, speed, and teamwork.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 24,
        }} className="ach-grid">
          {achievements.map((item, i) => {
            const cfg = typeConfig[item.type] || typeConfig.workshop;
            return (
              <article
                key={item.id}
                className={`reveal reveal-delay-${i}`}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  transition: "all var(--transition)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = cfg.border;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                {/* Corner glow */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: 100, height: 100,
                  background: `radial-gradient(circle at top right, ${cfg.bg}, transparent)`,
                  pointerEvents: "none",
                }} />

                {/* Top row */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: 18,
                }}>
                  <div style={{
                    width: 48, height: 48,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                    borderRadius: "var(--radius-sm)",
                    fontSize: "1.4rem",
                  }}>{cfg.icon}</div>

                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{
                      fontSize: "0.68rem",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      background: cfg.bg,
                      color: cfg.text,
                      border: `1px solid ${cfg.border}`,
                      letterSpacing: "0.04em",
                    }}>{cfg.label}</span>
                    <span style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-hint)",
                    }}>{item.date}</span>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                  letterSpacing: "-0.02em",
                }}>{item.title}</h3>

                <div style={{
                  fontSize: "0.82rem",
                  color: cfg.text,
                  fontWeight: 500,
                  marginBottom: 12,
                  opacity: 0.9,
                }}>{item.org}</div>

                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                }}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
