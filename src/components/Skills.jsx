import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolioData";

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--text-primary)" }}>{name}</span>
        <span style={{ fontSize: "0.82rem", color: "var(--accent)", fontWeight: 500 }}>{level}%</span>
      </div>
      <div style={{
        height: 6,
        background: "var(--bg-tertiary)",
        borderRadius: 100,
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}>
        <div style={{
          height: "100%",
          width: animated ? `${level}%` : "0%",
          background: `linear-gradient(90deg, var(--purple-600), var(--purple-400))`,
          borderRadius: 100,
          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I Know</span>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle">
            A snapshot of my technical toolkit — actively growing with every project.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
        }} className="skills-grid">

          {/* Technical Skills */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 28,
              paddingBottom: 12,
              borderBottom: "1px solid var(--border)",
            }}>
              Technical Skills
            </h3>
            {skills.technical.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>

          {/* Tools + Soft Skills */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 28,
              paddingBottom: 12,
              borderBottom: "1px solid var(--border)",
            }}>
              Tools & Technologies
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="badge badge-purple"
                  style={{ fontSize: "0.88rem", padding: "8px 16px" }}
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "1px solid var(--border)",
            }}>
              Soft Skills
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {skills.soft.map((s) => (
                <div key={s} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px 16px",
                  background: "var(--bg-secondary)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                }}>
                  <span style={{
                    width: 8, height: 8,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: "0.93rem", color: "var(--text-secondary)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
