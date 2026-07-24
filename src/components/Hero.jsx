import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const roles = [
  "B.E. IT Student",
  "Python Developer",
  "ML Enthusiast",
  "Web Developer",
  "Problem Solver",
];

// Typewriter hook
function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pause | deleting
  const [charPos, setCharPos] = useState(0);

  useEffect(() => {
    const current = strings[index];
    let timer;

    if (phase === "typing") {
      if (charPos < current.length) {
        timer = setTimeout(() => {
          setText(current.slice(0, charPos + 1));
          setCharPos(c => c + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setPhase("pause"), pauseMs);
      }
    } else if (phase === "pause") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (charPos > 0) {
        timer = setTimeout(() => {
          setText(current.slice(0, charPos - 1));
          setCharPos(c => c - 1);
        }, deletingSpeed);
      } else {
        setIndex(i => (i + 1) % strings.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, charPos, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 68,
        background: "var(--bg-primary)",
      }}
    >
      {/* Background elements */}
      <div className="orb orb-violet" style={{ width: 600, height: 600, top: "-15%", right: "-12%", opacity: 0.5 }} />
      <div className="orb orb-purple" style={{ width: 400, height: 400, bottom: "0%", left: "-10%", opacity: 0.4 }} />
      <div className="orb orb-indigo" style={{ width: 300, height: 300, top: "40%", left: "40%", opacity: 0.3 }} />

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
        backgroundSize: "36px 36px",
        opacity: 0.6,
        pointerEvents: "none",
      }} />

      <div className="container" style={{
        position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "5rem",
        alignItems: "center",
        padding: "60px 2rem",
      }}>

        {/* ── LEFT: TEXT CONTENT ──────────────────────────────────── */}
        <div style={{ maxWidth: 580 }}>

          {/* Status pill */}
          <div className="fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--bg-glass)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-full)",
            padding: "6px 16px 6px 10px",
            fontSize: "0.8rem",
            color: "var(--text-secondary)",
            fontFamily: "var(--font-mono)",
            marginBottom: 28,
            animationDelay: "0s",
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 5,
              background: "rgba(5,150,105,0.15)",
              color: "var(--success)",
              borderRadius: "var(--radius-full)",
              padding: "2px 8px",
              fontSize: "0.72rem",
              fontWeight: 500,
            }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "var(--success)",
                boxShadow: "0 0 6px var(--success)",
                animation: "pulse 2s ease infinite",
                display: "inline-block",
              }} />
              available
            </span>
            for internships & collaborations
          </div>

          {/* Name */}
          <h1 className="fade-up" style={{
            fontSize: "clamp(2.6rem, 6vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            marginBottom: 8,
            letterSpacing: "-0.03em",
            animationDelay: "0.08s",
          }}>
            Hi, I'm{" "}
            <span style={{
              color: "var(--accent)",
              position: "relative",
              display: "inline-block",
            }}>
              Tanushka
              {/* Underline accent */}
              <svg viewBox="0 0 200 12" style={{
                position: "absolute", bottom: -6, left: 0, width: "100%",
                overflow: "visible",
              }}>
                <path
                  d="M 0 8 Q 50 2 100 8 Q 150 14 200 8"
                  stroke="var(--accent-light)"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            {" "}Bhoir
          </h1>

          {/* Typewriter role */}
          <div className="fade-up" style={{
            fontSize: "clamp(1.1rem, 2.8vw, 1.5rem)",
            color: "var(--text-muted)",
            marginBottom: 20,
            fontWeight: 300,
            minHeight: "2.2rem",
            display: "flex",
            alignItems: "center",
            gap: 8,
            animationDelay: "0.16s",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-light)", fontSize: "1.1em" }}>{">"}</span>
            <span style={{ color: "var(--accent)", fontWeight: 500 }}>{typed}</span>
            <span style={{
              width: 2, height: "1.1em",
              background: "var(--accent)",
              display: "inline-block",
              animation: "blink 1s step-end infinite",
              borderRadius: 1,
            }} />
          </div>

          {/* College + location */}
          <p className="fade-up" style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
            marginBottom: 36,
            display: "flex",
            alignItems: "center",
            gap: 6,
            flexWrap: "wrap",
            animationDelay: "0.24s",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85em", color: "var(--accent)", opacity: 0.7 }}>📍</span>
            {personalInfo.college}
          </p>

          {/* CTA buttons */}
          <div className="fade-up" style={{
            display: "flex", gap: 12, flexWrap: "wrap",
            marginBottom: 36,
            animationDelay: "0.32s",
          }}>
            <button className="btn btn-primary" onClick={() => scrollTo("#projects")}>
              View Projects
              <span style={{ fontSize: "1rem" }}>→</span>
            </button>
            {personalInfo.resumeUrl ? (
              <a href={personalInfo.resumeUrl} download="Tanushka_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <FiDownload size={15} /> Download Resume
              </a>
            ) : (
              <button className="btn btn-outline" onClick={() => scrollTo("#contact")}>
                Get In Touch
              </button>
            )}
          </div>

          {/* Social links */}
          <div className="fade-up" style={{
            display: "flex", gap: 10,
            animationDelay: "0.4s",
          }}>
            {[
              { icon: <FiGithub size={17} />, href: personalInfo.github,   label: "GitHub"   },
              { icon: <FiLinkedin size={17} />, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: <FiMail size={17} />, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--bg-secondary)",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "var(--accent)";
                  e.currentTarget.style.borderColor = "var(--accent-border)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT: PROFILE PHOTO ────────────────────────────────── */}
        <div className="hero-photo-wrap fade-up" style={{ animationDelay: "0.2s" }}>
          <ProfilePhoto imgError={imgError} setImgError={setImgError} />
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about"
        style={{
          position: "absolute", bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "var(--text-hint)",
          animation: "fadeIn 1s 1s ease both",
          transition: "color var(--transition)",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--text-hint)"}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em" }}>scroll</span>
        <FiArrowDown size={13} style={{ animation: "float 2s ease-in-out infinite" }} />
      </button>

      <style>{`
        @media (max-width: 860px) {
          .hero-photo-wrap { display: none; }
          section#hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          section#hero .container > div:first-child > div[style*="inline-flex"],
          section#hero .container > div:first-child > div[style*="flex-wrap"] {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

/* Profile photo sub-component — handles missing image gracefully */
function ProfilePhoto({ imgError, setImgError }) {
  return (
    <div style={{ position: "relative", width: 280, height: 280 }}>
      {/* Outer decorative rings */}
      <div style={{
        position: "absolute", inset: -20,
        borderRadius: "50%",
        border: "1px dashed var(--accent-border)",
        animation: "spin 20s linear infinite",
        opacity: 0.5,
      }} />
      <div style={{
        position: "absolute", inset: -36,
        borderRadius: "50%",
        border: "1px dashed var(--border)",
        animation: "spin-r 30s linear infinite",
        opacity: 0.3,
      }} />

      {/* Floating skill dots */}
      {[
        { label: "Python",  top: "5%",  left: "-8%", delay: "0s"    },
        { label: "React",   top: "75%", left: "-10%", delay: "0.5s" },
        { label: "ML",      top: "5%",  left: "80%",  delay: "1s"   },
        { label: "Java",    top: "78%", left: "82%",  delay: "1.5s" },
      ].map(dot => (
        <div key={dot.label} style={{
          position: "absolute",
          top: dot.top, left: dot.left,
          background: "var(--bg-glass)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--accent-border)",
          borderRadius: "var(--radius-full)",
          padding: "4px 10px",
          fontSize: "0.7rem",
          fontFamily: "var(--font-mono)",
          fontWeight: 500,
          color: "var(--accent)",
          whiteSpace: "nowrap",
          animation: `float 4s ${dot.delay} ease-in-out infinite`,
          zIndex: 2,
        }}>
          {dot.label}
        </div>
      ))}

      {/* Photo circle */}
      <div style={{
        position: "relative",
        width: 280, height: 280,
        borderRadius: "50%",
        overflow: "hidden",
        border: "3px solid var(--bg-primary)",
        boxShadow: "0 0 0 1px var(--accent-border), var(--shadow-lg)",
        zIndex: 1,
        background: "var(--bg-tertiary)",
      }}>
        {!imgError ? (
          <img
            src="./profile.jpg"
            alt="Tanushka Bhoir"
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        ) : (
          // Fallback: beautiful initials avatar
          <div style={{
            width: "100%", height: "100%",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column",
            background: "linear-gradient(135deg, var(--bg-tertiary) 0%, var(--accent-subtle) 100%)",
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "5rem",
              fontWeight: 800,
              color: "var(--accent)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
            }}>TB</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              marginTop: 8,
              letterSpacing: "0.15em",
            }}>Add profile.jpg to /public</span>
          </div>
        )}
      </div>

      {/* Bottom badge */}
      <div style={{
        position: "absolute",
        bottom: -14, left: "50%",
        transform: "translateX(-50%)",
        background: "var(--accent)",
        color: "#fff",
        borderRadius: "var(--radius-full)",
        padding: "5px 14px",
        fontSize: "0.72rem",
        fontFamily: "var(--font-mono)",
        fontWeight: 500,
        whiteSpace: "nowrap",
        border: "2px solid var(--bg-primary)",
        zIndex: 3,
        letterSpacing: "0.04em",
      }}>
        3rd year · B.E. IT
      </div>
    </div>
  );
}
