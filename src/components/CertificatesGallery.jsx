import { useState, useEffect } from "react";
import { FiX, FiZoomIn, FiExternalLink, FiDownload, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE PATHS — all start with ./certificates/filename.jpg
// The file must physically exist at:  your-project/public./certificates/filename.jpg
// NEVER use C:\\ or full disk paths — browsers cannot read those.
// ─────────────────────────────────────────────────────────────────────────────
const certificateImages = [
  {
    id: 1,
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL — IIT Kharagpur",
    date: "Jan – Apr 2026",
    badge: "Elite",
    image: "./certificates/nptel-networks.jpg",
    verify: null,
    color: "#c2410c",
    emoji: "🌐",
  },
  {
    id: 2,
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Oct 2025",
    badge: "Credly Verified",
    image: "./certificates/ibm-webdev.jpg",
    verify: "https://www.credly.com/badges/6525432d-6e1e-4857-baf3-0415eb279c6a",
    color: "#1d4ed8",
    emoji: "🏗️",
  },
  {
    id: 3,
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jul 2025",
    badge: "Credly Verified",
    image: "./certificates/ibm-ai.jpg",
    verify: "https://www.credly.com/badges/39de8820-3cd1-430c-80de-b052d0a467c9",
    color: "#1d4ed8",
    emoji: "🤖",
  },
  {
    id: 4,
    title: "Generative AI Bootcamp",
    issuer: "Dept. of IT, BV College of Engineering",
    date: "Sep 2025",
    badge: "Completion",
    image: "./certificates/genai-bootcamp.jpg",
    verify: null,
    color: "#7c3aed",
    emoji: "✨",
  },
  {
    id: 5,
    title: "Python Complete Course",
    issuer: "Udemy — Horizon Tech",
    date: "Apr 2025",
    badge: "Completion",
    image: "./certificates/udemy-python.jpg",
    verify: "https://ude.my/UC-a1f72b25-c033-4767-93b0-1319d879b42b",
    color: "#059669",
    emoji: "🐍",
  },
  {
    id: 6,
    title: "UAi Hawkathon 2026",
    issuer: "Universal AI University",
    date: "2026",
    badge: "Participation",
    image: "./certificates/hawkathon-2026.jpg",
    verify: null,
    color: "#ea580c",
    emoji: "⚡",
  },
  {
    id: 7,
    title: "Python Workshop — Grade A",
    issuer: "FOSSEE Project, IIT Bombay",
    date: "Jan 2026",
    badge: "Grade A",
    image: "./certificates/fossee-python.jpg",
    verify: null,
    color: "#7c3aed",
    emoji: "🎓",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function CertificatesGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox  = (i) => setActiveIndex(i);
  const closeLightbox = ()  => setActiveIndex(null);
  const goPrev = () => setActiveIndex(i => (i - 1 + certificateImages.length) % certificateImages.length);
  const goNext = () => setActiveIndex(i => (i + 1) % certificateImages.length);

  return (
    <section
      id="certificates-gallery"
      style={{ background: "var(--bg-secondary)", padding: "60px 0 100px" }}
    >
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-eyebrow">Real credentials</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 10 }}>
            Certificate Gallery
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: 460, margin: "0 auto" }}>
            Click any card to view the full certificate.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}>
          {certificateImages.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <Lightbox
          cert={certificateImages[activeIndex]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          current={activeIndex + 1}
          total={certificateImages.length}
        />
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Certificate thumbnail card
// ─────────────────────────────────────────────────────────────────────────────
function CertCard({ cert, onClick }) {
  const [loaded,    setLoaded]    = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title}`}
      onKeyDown={e => e.key === "Enter" && onClick()}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.25s ease",
        position: "relative",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform   = "translateY(-5px)";
        e.currentTarget.style.boxShadow   = "var(--shadow-md)";
        e.currentTarget.style.borderColor = cert.color + "66";
        const overlay = e.currentTarget.querySelector(".cert-overlay");
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform   = "none";
        e.currentTarget.style.boxShadow   = "none";
        e.currentTarget.style.borderColor = "var(--border-card)";
        const overlay = e.currentTarget.querySelector(".cert-overlay");
        if (overlay) overlay.style.opacity = "0";
      }}
    >
      {/* Top colour bar */}
      <div style={{ height: 3, background: cert.color, flexShrink: 0 }} />

      {/* Image / placeholder */}
      <div style={{
        width: "100%",
        aspectRatio: "4/3",
        background: "var(--bg-tertiary)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {!imgFailed ? (
          <>
            {/* Skeleton while loading */}
            {!loaded && (
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(90deg, var(--bg-tertiary) 25%, var(--border) 50%, var(--bg-tertiary) 75%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 1.5s infinite",
              }} />
            )}
            <img
              src={cert.image}
              alt={cert.title}
              onLoad={()  => setLoaded(true)}
              onError={() => setImgFailed(true)}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                display: loaded ? "block" : "none",
              }}
            />
            {/* Hover zoom overlay */}
            <div className="cert-overlay" style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0.38)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.2s ease",
            }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "rgba(255,255,255,0.92)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: cert.color,
              }}>
                <FiZoomIn size={19} />
              </div>
            </div>
          </>
        ) : (
          /* Placeholder — image file not added yet */
          <PlaceholderCard cert={cert} />
        )}
      </div>

      {/* Footer text */}
      <div style={{ padding: "11px 13px" }}>
        <div style={{
          fontSize: "0.8rem", fontWeight: 600,
          color: "var(--text-primary)", lineHeight: 1.3,
          marginBottom: 4,
          display: "-webkit-box",
          WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{cert.title}</div>

        <div style={{
          fontSize: "0.68rem", color: cert.color,
          fontFamily: "var(--font-mono)", opacity: 0.85,
          marginBottom: 7,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>{cert.issuer}</div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: "0.63rem", fontFamily: "var(--font-mono)", color: "var(--text-hint)" }}>
            {cert.date}
          </span>
          <span style={{
            fontSize: "0.6rem", fontFamily: "var(--font-mono)", fontWeight: 600,
            padding: "2px 7px", borderRadius: "999px",
            background: cert.color + "18", color: cert.color,
            border: `1px solid ${cert.color}35`,
          }}>{cert.badge}</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Placeholder shown when image file is missing
// ─────────────────────────────────────────────────────────────────────────────
function PlaceholderCard({ cert }) {
  // Extract just the filename from the path
  const filename = cert.image.replace("./certificates/", "");

  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      gap: 8, padding: "0 12px", textAlign: "center",
      background: `linear-gradient(135deg, ${cert.color}0d, ${cert.color}05)`,
    }}>
      <span style={{ fontSize: "2rem" }}>{cert.emoji}</span>
      <span style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6rem",
        color: "var(--text-hint)", lineHeight: 1.5,
      }}>
        Add file:<br />
        <span style={{ color: cert.color, fontWeight: 600 }}>{filename}</span>
        <br />to <span style={{ color: cert.color }}>public./certificates/</span>
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Full-screen lightbox with prev/next navigation
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({ cert, onClose, onPrev, onNext, current, total }) {
  const [loaded,    setLoaded]    = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const filename = cert.image.replace("./certificates/", "");

  // Reset image state whenever cert changes (navigating prev/next)
  useEffect(() => {
    setLoaded(false);
    setImgFailed(false);
  }, [cert.id]);

  // Keyboard nav
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowLeft")   onPrev();
      if (e.key === "ArrowRight")  onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(8,5,18,0.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "16px",
        animation: "fadeIn 0.18s ease both",
      }}
    >
      {/* Modal box */}
      <div style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-xl)",
        width: "100%", maxWidth: 800,
        maxHeight: "92vh",
        display: "flex", flexDirection: "column",
        overflow: "hidden",
        animation: "fadeUp 0.22s ease both",
        position: "relative",
      }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
          gap: 12,
        }}>
          {/* Left: icon + title */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>{cert.emoji}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.9rem", color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
              }}>{cert.title}</div>
              <div style={{
                fontSize: "0.72rem", color: cert.color,
                fontFamily: "var(--font-mono)",
              }}>{cert.issuer} · {cert.date}</div>
            </div>
          </div>

          {/* Right: action buttons */}
          <div style={{ display: "flex", gap: 7, alignItems: "center", flexShrink: 0 }}>
            {/* Counter */}
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "0.7rem",
              color: "var(--text-hint)", padding: "4px 10px",
              background: "var(--bg-tertiary)", borderRadius: "var(--radius-full)",
              border: "1px solid var(--border)",
            }}>{current} / {total}</span>

            {cert.verify && (
              <a href={cert.verify} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "5px 11px", borderRadius: "var(--radius-sm)",
                  background: cert.color + "14", border: `1px solid ${cert.color}33`,
                  color: cert.color, fontSize: "0.73rem", fontWeight: 500,
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = cert.color + "28"}
                onMouseLeave={e => e.currentTarget.style.background = cert.color + "14"}
              ><FiExternalLink size={12} /> Verify</a>
            )}

            {!imgFailed && loaded && (
              <a href={cert.image} download={filename}
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "5px 11px", borderRadius: "var(--radius-sm)",
                  background: "var(--bg-tertiary)", border: "1px solid var(--border)",
                  color: "var(--text-secondary)", fontSize: "0.73rem", fontWeight: 500,
                  textDecoration: "none", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              ><FiDownload size={12} /> Save</a>
            )}

            {/* Close */}
            <button onClick={onClose} aria-label="Close"
              style={{
                width: 30, height: 30, border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)", background: "var(--bg-tertiary)",
                color: "var(--text-muted)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "var(--border-hover)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
            ><FiX size={15} /></button>
          </div>
        </div>

        {/* ── Image area ── */}
        <div style={{
          flex: 1, overflow: "auto",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "var(--bg-primary)", padding: "20px", minHeight: 260,
          position: "relative",
        }}>
          {!imgFailed ? (
            <>
              {/* Loading skeleton */}
              {!loaded && (
                <div style={{
                  position: "absolute", inset: 20,
                  background: "linear-gradient(90deg, var(--bg-tertiary) 25%, var(--border) 50%, var(--bg-tertiary) 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                  borderRadius: "var(--radius-sm)",
                }} />
              )}
              <img
                src={cert.image}
                alt={cert.title}
                onLoad={()  => setLoaded(true)}
                onError={() => setImgFailed(true)}
                style={{
                  maxWidth: "100%", maxHeight: "62vh",
                  objectFit: "contain",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-md)",
                  display: loaded ? "block" : "none",
                }}
              />
            </>
          ) : (
            /* Image missing → show friendly message */
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", gap: 14,
              padding: "40px 24px", textAlign: "center", maxWidth: 420,
            }}>
              <span style={{ fontSize: "3rem" }}>{cert.emoji}</span>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1.05rem", color: "var(--text-primary)",
              }}>{cert.title}</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                The image file is not in the right place yet.
                Save your certificate scan with <strong>this exact filename</strong>:
              </div>
              <code style={{
                fontFamily: "var(--font-mono)", fontSize: "0.82rem",
                color: cert.color, background: cert.color + "12",
                border: `1px solid ${cert.color}33`,
                borderRadius: "var(--radius-sm)", padding: "8px 16px",
              }}>
                public./certificates/{filename}
              </code>
              <div style={{ fontSize: "0.78rem", color: "var(--text-hint)", lineHeight: 1.6 }}>
                After adding the file, <strong>save your code</strong> — Vite will reload automatically and the image will appear here.
              </div>
              {cert.verify && (
                <a href={cert.verify} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "9px 18px", borderRadius: "var(--radius-md)",
                    background: cert.color + "14", border: `1px solid ${cert.color}33`,
                    color: cert.color, fontSize: "0.82rem", fontWeight: 500,
                    textDecoration: "none", marginTop: 4,
                  }}
                ><FiExternalLink size={13} /> Verify on Credly instead</a>
              )}
            </div>
          )}
        </div>

        {/* ── Prev / Next nav ── */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          padding: "12px 18px",
          borderTop: "1px solid var(--border)",
          flexShrink: 0,
        }}>
          <button onClick={onPrev}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: "var(--radius-sm)",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              color: "var(--text-secondary)", fontSize: "0.82rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          ><FiChevronLeft size={16} /> Previous</button>

          <button onClick={onNext}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "7px 14px", borderRadius: "var(--radius-sm)",
              background: "var(--bg-tertiary)", border: "1px solid var(--border)",
              color: "var(--text-secondary)", fontSize: "0.82rem",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >Next <FiChevronRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
