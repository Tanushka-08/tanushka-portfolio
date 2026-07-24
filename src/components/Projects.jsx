import { FiGithub, FiExternalLink, FiFolder, FiCpu, FiBook, FiFile } from "react-icons/fi";
import { projects } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const iconMap = {
  folder: FiFolder,
  brain:  FiCpu,
  book:   FiBook,
  file:   FiFile,
};

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">What I've built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real projects built to solve real problems. Each one a milestone in my learning journey.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))",
          gap: 24,
        }} className="projects-grid">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || FiFolder;
            return (
              <article
                key={project.id}
                className={`reveal reveal-delay-${i % 3}`}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  transition: "all var(--transition)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.borderColor = project.accent + "44";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--border-card)";
                }}
              >
                {/* Subtle top color line */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: project.accent,
                  borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                }} />

                {/* Header */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                  marginTop: 4,
                }}>
                  <div style={{
                    width: 44, height: 44,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: project.accent + "18",
                    border: `1px solid ${project.accent}33`,
                    borderRadius: "var(--radius-sm)",
                    color: project.accent,
                    flexShrink: 0,
                  }}>
                    <Icon size={20} />
                  </div>

                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    {/* Status badge */}
                    <span style={{
                      fontSize: "0.68rem",
                      fontWeight: 500,
                      fontFamily: "var(--font-mono)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      background: project.status === "completed"
                        ? "rgba(5,150,105,0.1)"
                        : "rgba(217,119,6,0.1)",
                      color: project.status === "completed" ? "#059669" : "#d97706",
                      border: `1px solid ${project.status === "completed" ? "rgba(5,150,105,0.25)" : "rgba(217,119,6,0.25)"}`,
                      letterSpacing: "0.04em",
                    }}>
                      {project.status === "completed" ? "✓ complete" : "⟳ in progress"}
                    </span>

                    {/* Links */}
                    <div style={{ display: "flex", gap: 6 }}>
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                          aria-label="Live demo"
                          style={{ color: "var(--text-muted)", display: "flex", transition: "color var(--transition)" }}
                          onMouseEnter={e => e.currentTarget.style.color = project.accent}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                        ><FiExternalLink size={17} /></a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        style={{ color: "var(--text-muted)", display: "flex", transition: "color var(--transition)" }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                      ><FiGithub size={17} /></a>
                    </div>
                  </div>
                </div>

                {/* Title + tagline */}
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: 4,
                  letterSpacing: "-0.02em",
                }}>{project.title}</h3>
                <p style={{
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  color: project.accent,
                  marginBottom: 12,
                  opacity: 0.85,
                }}>{project.tagline}</p>

                {/* Description */}
                <p style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: 16,
                  flexGrow: 1,
                }}>{project.description}</p>

                {/* Highlight pill */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  fontSize: "0.73rem",
                  fontFamily: "var(--font-mono)",
                  color: project.accent,
                  background: project.accent + "12",
                  border: `1px solid ${project.accent}30`,
                  borderRadius: "var(--radius-full)",
                  padding: "4px 12px",
                  marginBottom: 14,
                  width: "fit-content",
                }}>
                  ✦ {project.highlight}
                </div>

                {/* Tech stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-full)",
                      background: "var(--bg-tertiary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}>{t}</span>
                  ))}
                </div>

                {/* Live demo banner */}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                      marginTop: 16, padding: "9px",
                      background: project.accent + "12",
                      border: `1px solid ${project.accent}30`,
                      borderRadius: "var(--radius-sm)",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: project.accent,
                      transition: "all var(--transition)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = project.accent + "22";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = project.accent + "12";
                    }}
                  >
                    <FiExternalLink size={14} />
                    View live demo
                  </a>
                )}
              </article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: 52 }}>
          <a href="https://github.com/Tanushka-08" target="_blank" rel="noopener noreferrer"
            className="btn btn-ghost" style={{ gap: 8 }}>
            <FiGithub size={16} />
            See all repositories on GitHub
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
