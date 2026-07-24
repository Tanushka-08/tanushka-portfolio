import { useState } from "react";
import { FiX, FiZoomIn, FiExternalLink, FiDownload } from "react-icons/fi";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * HOW TO ADD YOUR REAL CERTIFICATES:
 * 1. Scan or screenshot each certificate
 * 2. Save as JPG/PNG inside /public/certificates/
 *    e.g. /public/certificates/nptel-networks.jpg
 * 3. Fill in the `image` field below with the filename
 *
 * If image is null, a styled placeholder card is shown instead.
 */
const certificateImages = [
  {
    id: 1,
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL — IIT Kharagpur",
    date: "Jan – Apr 2026",
    badge: "Elite",
    image: "/certificates/nptel-networks.jpg",   // ← add your file here
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
    image: "/certificates/ibm-webdev.jpg",        // ← add your file here
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
    image: "/certificates/ibm-ai.jpg",            // ← add your file here
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
    image: "/certificates/genai-bootcamp.jpg",    // ← add your file here
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
    image: "/certificates/udemy-python.jpg",      // ← add your file here
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
    image: "/certificates/hawkathon-2026.jpg",    // ← add your file here
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
    image: "/certificates/fossee-python.jpg",     // ← add your file here
    verify: null,
    color: "#7c3aed",
    emoji: "🎓",
  },
];

export default function CertificatesGallery() {
  const [active, setActive] = useState(null); // the cert object currently open in lightbox
  const ref = useScrollReveal();

  const openLightbox = (cert) => setActive(cert);
  const closeLightbox = () => setActive(null);

  return (
    <section id="certificates-gallery" className="section" style={{ background: "var(--bg-secondary)", paddingTop: 0 }}>
      <div className="container" ref={ref}>

        {/* Section label */}
        <div className="reveal" style={{ marginBottom: 36, textAlign: "center" }}>
          <span className="section-eyebrow">Real credentials</span>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", marginBottom: 10 }}>
            Certificate Gallery
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: 460, margin: "0 auto" }}>
            Click any card to view the full certificate. Scans coming soon for any that show a placeholder.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 16,
        }} className="gallery-grid">
          {certificateImages.map((cert, i) => (
            <CertCard
              key={cert.id}
              cert={cert}
              delay={i % 4}
              onClick={() => openLightbox(cert)}
            />
          ))}
        </div>

        {/* Upload reminder — only shown in dev / when images are missing */}
        <div className="reveal" style={{
          marginTop: 32,
          padding: "14px 20px",
          background: "var(--accent-subtle)",
          border: "1px dashed var(--accent-border)",
          borderRadius: "var(--radius-md)",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}>
          <span style={{ fontSize: "1.2rem" }}>📂</span>
          <div>
            <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--accent)", marginBottom: 2 }}>
              To show real certificates
            </div>
            <div style={{
              fontSize: "0.78rem",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}>
              Add scans/screenshots to: <code style={{ color: "var(--accent)" }}>public/certificates/</code> — names listed in CertificatesGallery.jsx
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {active && (
        <Lightbox cert={active} onClose={closeLightbox} />
      )}

      <style>{`
        @media (max-width: 600px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 380px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ── Certificate card ──────────────────────────────────────────────── */
function CertCard({ cert, delay, onClick }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      onClick={onClick}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-card)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.25s var(--ease)",
        position: "relative",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "var(--shadow-md)";
        e.currentTarget.style.borderColor = cert.color + "55";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "var(--border-card)";
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title} certificate`}
      onKeyDown={e => e.key === "Enter" && onClick()}
    >
      {/* Top colour bar */}
      <div style={{ height: 3, background: cert.color }} />

      {/* Image area */}
      <div style={{
        width: "100%",
        aspectRatio: "4/3",
        background: "var(--bg-tertiary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
      }}>
        {!imgFailed ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              onError={() => setImgFailed(true)}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover",
                transition: "transform 0.4s var(--ease)",
              }}
            />
            {/* Hover overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              opacity: 0,
              transition: "opacity 0.25s var(--ease)",
            }} className="cert-hover-overlay">
              <div style={{
                width: 40, height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.95)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: cert.color,
              }}><FiZoomIn size={18} /></div>
            </div>
          </>
        ) : (
          // Placeholder when image not yet added
          <PlaceholderCert cert={cert} />
        )}
      </div>

      {/* Card footer */}
      <div style={{ padding: "12px 14px" }}>
        <div style={{
          fontSize: "0.82rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          lineHeight: 1.3,
          marginBottom: 4,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}>{cert.title}</div>
        <div style={{
          fontSize: "0.7rem",
          color: cert.color,
          fontFamily: "var(--font-mono)",
          opacity: 0.85,
          marginBottom: 6,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}>{cert.issuer}</div>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{
            fontSize: "0.65rem",
            fontFamily: "var(--font-mono)",
            color: "var(--text-hint)",
          }}>{cert.date}</span>
          <span style={{
            fontSize: "0.62rem",
            fontFamily: "var(--font-mono)",
            padding: "2px 7px",
            borderRadius: "var(--radius-full)",
            background: cert.color + "15",
            color: cert.color,
            border: `1px solid ${cert.color}30`,
            fontWeight: 600,
          }}>{cert.badge}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Placeholder when image not added yet ─────────────────────────── */
function PlaceholderCert({ cert }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}05)`,
      border: `2px dashed ${cert.color}30`,
      borderRadius: 0,
    }}>
      <span style={{ fontSize: "2.2rem" }}>{cert.emoji}</span>
      <span style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.62rem",
        color: "var(--text-hint)",
        textAlign: "center",
        padding: "0 12px",
        lineHeight: 1.5,
      }}>
        Add image to<br />
        <span style={{ color: cert.color, fontWeight: 500 }}>public/certificates/</span>
      </span>
    </div>
  );
}

/* ── Lightbox ─────────────────────────────────────────────────────── */
function Lightbox({ cert, onClose }) {
  const [imgFailed, setImgFailed] = useState(false);

  // Close on backdrop click
  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Close on Escape
  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={handleBackdrop}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(10,7,20,0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "fadeIn 0.2s ease both",
      }}
    >
      <div style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        maxWidth: 760,
        width: "100%",
        maxHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow-xl)",
        border: "1px solid var(--border)",
        animation: "fadeUp 0.25s ease both",
      }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 20px",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.3rem" }}>{cert.emoji}</span>
            <div>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
              }}>{cert.title}</div>
              <div style={{
                fontSize: "0.75rem",
                color: cert.color,
                fontFamily: "var(--font-mono)",
              }}>{cert.issuer} · {cert.date}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {cert.verify && (
              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify certificate"
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "6px 12px",
                  background: cert.color + "14",
                  border: `1px solid ${cert.color}33`,
                  borderRadius: "var(--radius-sm)",
                  color: cert.color,
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => e.currentTarget.style.background = cert.color + "25"}
                onMouseLeave={e => e.currentTarget.style.background = cert.color + "14"}
              >
                <FiExternalLink size={13} /> Verify
              </a>
            )}
            {!imgFailed && (
              <a
                href={cert.image}
                download
                aria-label="Download certificate"
                style={{
                  display: "flex", alignItems: "center", gap: 5,
                  padding: "6px 12px",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--text-secondary)",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "all var(--transition)",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "var(--accent-border)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
              >
                <FiDownload size={13} /> Save
              </a>
            )}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                width: 32, height: 32,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-sm)",
                color: "var(--text-muted)",
                cursor: "pointer",
                transition: "all var(--transition)",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; }}
            ><FiX size={16} /></button>
          </div>
        </div>

        {/* Image */}
        <div style={{
          flex: 1,
          overflow: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--bg-primary)",
          minHeight: 300,
          padding: 20,
        }}>
          {!imgFailed ? (
            <img
              src={cert.image}
              alt={cert.title}
              onError={() => setImgFailed(true)}
              style={{
                maxWidth: "100%",
                maxHeight: "60vh",
                objectFit: "contain",
                borderRadius: "var(--radius-sm)",
                boxShadow: "var(--shadow-md)",
              }}
            />
          ) : (
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
              padding: "40px 20px",
              textAlign: "center",
            }}>
              <span style={{ fontSize: "3rem" }}>{cert.emoji}</span>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "var(--text-primary)",
              }}>{cert.title}</div>
              <div style={{ fontSize: "0.88rem", color: "var(--text-muted)", maxWidth: 360 }}>
                Certificate image not yet added. Save your scan as:
              </div>
              <code style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                color: cert.color,
                background: cert.color + "12",
                border: `1px solid ${cert.color}30`,
                borderRadius: "var(--radius-sm)",
                padding: "6px 14px",
              }}>public/certificates/{cert.image.split("/").pop()}</code>
              {cert.verify && (
                <a href={cert.verify} target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline" style={{ marginTop: 8, fontSize: "0.85rem" }}>
                  <FiExternalLink size={14} /> Verify on Credly instead
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .cert-hover-overlay { display: flex !important; }
        div:hover .cert-hover-overlay { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
