import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills, proficiencyMeta } from "../data/portfolioData";

function SkillChip({ name, level, icon }) {
  const meta = proficiencyMeta[level];
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "11px 14px",
      background: "var(--bg-card)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-md)",
      transition: "all 0.25s var(--ease)",
      cursor: "default",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = meta.color + "55";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = `0 4px 16px ${meta.color}20`;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "var(--border-card)";
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }}>
      <span style={{ fontSize: "1.1rem", lineHeight: 1 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: "0.88rem",
          fontWeight: 500,
          color: "var(--text-primary)",
          marginBottom: 3,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>{name}</div>
        {/* Mini bar */}
        <div style={{
          height: 3,
          background: "var(--bg-tertiary)",
          borderRadius: 2,
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            width: `${meta.bar}%`,
            background: meta.color,
            borderRadius: 2,
            transition: "width 1s var(--ease)",
          }} />
        </div>
      </div>
      <span style={{
        fontSize: "0.65rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        padding: "2px 7px",
        borderRadius: "var(--radius-full)",
        background: meta.bg,
        color: meta.color,
        whiteSpace: "nowrap",
        letterSpacing: "0.04em",
        flexShrink: 0,
      }}>{meta.label}</span>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">What I know</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            Honest proficiency levels — actively growing with every project I ship.
          </p>
        </div>

        {/* Legend */}
        <div className="reveal" style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: 40,
        }}>
          {Object.entries(proficiencyMeta).map(([key, meta]) => (
            <div key={key} style={{
              display: "flex", alignItems: "center", gap: 6,
              background: meta.bg,
              border: `1px solid ${meta.color}33`,
              borderRadius: "var(--radius-full)",
              padding: "4px 12px",
            }}>
              <div style={{
                width: 8, height: 8, borderRadius: "50%",
                background: meta.color,
              }} />
              <span style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-mono)",
                fontWeight: 500,
                color: meta.color,
                letterSpacing: "0.04em",
              }}>{meta.label}</span>
            </div>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="skills-main-grid">

          {/* Technical Skills */}
          <div>
            <h3 className="reveal" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
              paddingBottom: 10,
              borderBottom: "1px solid var(--border)",
            }}>Technical Skills</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {skills.technical.map((s, i) => (
                <div key={s.name} className={`reveal reveal-delay-${Math.min(i, 4)}`}>
                  <SkillChip name={s.name} level={s.level} icon={s.icon} />
                </div>
              ))}
            </div>
          </div>

          {/* Tools + Soft Skills */}
          <div>
            <h3 className="reveal" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
              paddingBottom: 10,
              borderBottom: "1px solid var(--border)",
            }}>Tools & Technologies</h3>

            <div className="reveal reveal-delay-1" style={{
              display: "flex", flexWrap: "wrap", gap: 8,
              marginBottom: 36,
            }}>
              {skills.tools.map(tool => (
                <span key={tool.name} style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  padding: "7px 14px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  fontWeight: 500,
                  transition: "all var(--transition)",
                  cursor: "default",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.background = "var(--accent-subtle)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-secondary)";
                }}>
                  {tool.name}
                </span>
              ))}
            </div>

            <h3 className="reveal reveal-delay-2" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
              paddingBottom: 10,
              borderBottom: "1px solid var(--border)",
            }}>Soft Skills</h3>

            <div className="reveal reveal-delay-3" style={{
              display: "flex", flexDirection: "column", gap: 8,
            }}>
              {skills.soft.map(s => (
                <div key={s.name} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 14px",
                  background: "var(--bg-secondary)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.background = "var(--accent-subtle)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--bg-secondary)";
                }}>
                  <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 500 }}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
