import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const navLinks = [
  { label: "About",          href: "#about"          },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements",   href: "#achievements"   },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 200,
      transition: "all 0.3s var(--ease)",
      background: scrolled ? "var(--bg-glass)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 68,
      }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          style={{
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: 8,
          }}
        >
          <div style={{
            width: 34, height: 34,
            background: "var(--accent)",
            borderRadius: "var(--radius-sm)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "0.85rem",
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>TB</div>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}>
            Tanushka<span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 2, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: isActive ? "var(--accent-subtle)" : "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-sm)",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-subtle)";
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "none";
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}

          <div style={{ display: "flex", gap: 6, marginLeft: 8 }}>
            {/* Resume download */}
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download="Tanushka_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: "7px 16px", fontSize: "0.82rem", gap: 6 }}
              >
                <FiDownload size={13} /> Resume
              </a>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              style={{
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                cursor: "pointer",
                width: 36, height: 36,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent)",
                transition: "all var(--transition)",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--accent-subtle)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg-tertiary)"}
            >
              {theme === "light" ? <FiMoon size={15} /> : <FiSun size={15} />}
            </button>
          </div>
        </nav>

        {/* Mobile controls */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="mobile-controls">
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            background: "var(--bg-tertiary)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)", cursor: "pointer",
            width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--accent)",
          }}>
            {theme === "light" ? <FiMoon size={15} /> : <FiSun size={15} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" style={{
            background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)",
            display: "flex", padding: 4,
          }}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: "var(--bg-glass)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid var(--border)",
          padding: "1rem 2rem 1.5rem",
        }}>
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "1rem",
                color: "var(--text-secondary)", padding: "12px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {link.label}
            </button>
          ))}
          {personalInfo.resumeUrl && (
            <a href={personalInfo.resumeUrl} download="Tanushka_Resume.pdf" target="_blank" rel="noopener noreferrer"
              className="btn btn-primary" style={{ marginTop: 16, width: "100%", justifyContent: "center" }}>
              <FiDownload size={14} /> Download Resume
            </a>
          )}
        </div>
      )}

      <style>{`
        .desktop-nav   { display: flex !important; }
        .mobile-controls { display: none !important; }
        @media (max-width: 860px) {
          .desktop-nav   { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
