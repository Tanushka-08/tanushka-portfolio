import { FiGithub, FiExternalLink, FiFolder, FiCpu, FiBook, FiFileText } from "react-icons/fi";
import { projects } from "../data/portfolioData";

const iconMap = {
  folder: <FiFolder size={22} />,
  brain: <FiCpu size={22} />,
  book: <FiBook size={22} />,
  "file-text": <FiFileText size={22} />,
};

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real projects built to solve real problems — each one a learning milestone.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
          gap: 24,
        }} className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: 0 }}
            >
              {/* Header */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 16,
              }}>
                <div style={{
                  width: 44, height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--accent)",
                }}>
                  {iconMap[project.icon]}
                </div>

                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {/* Status badge */}
                  <span style={{
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    padding: "3px 10px",
                    borderRadius: 20,
                    background: project.status === "completed"
                      ? "rgba(34,197,94,0.12)"
                      : "rgba(251,146,60,0.12)",
                    color: project.status === "completed" ? "#16a34a" : "#ea580c",
                    border: `1px solid ${project.status === "completed" ? "rgba(34,197,94,0.25)" : "rgba(251,146,60,0.25)"}`,
                  }}>
                    {project.status === "completed" ? "✓ Complete" : "⟳ In Progress"}
                  </span>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{
                      color: "var(--text-muted)",
                      transition: "color 0.2s",
                      display: "flex",
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 10,
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: 16,
                flexGrow: 1,
              }}>
                {project.description}
              </p>

              {/* Highlight */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: "0.76rem",
                color: "var(--accent)",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: 20,
                padding: "4px 12px",
                marginBottom: 16,
                width: "fit-content",
              }}>
                ✦ {project.highlight}
              </div>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 400,
                      padding: "3px 10px",
                      borderRadius: 20,
                      background: "var(--bg-tertiary)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="https://github.com/Tanushka-08"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiGithub size={16} />
            View All on GitHub
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
