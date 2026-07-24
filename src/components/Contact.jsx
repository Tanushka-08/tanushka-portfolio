import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend, FiDownload } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactLinks = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: "Best way to reach me",
    color: "#7c3aed",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    value: "tanushka-bhoir-a52160372",
    href: personalInfo.linkedin,
    desc: "Connect professionally",
    color: "#0284c7",
  },
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    value: "Tanushka-08",
    href: personalInfo.github,
    desc: "See my code & projects",
    color: "#1a1625",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Location",
    value: "Navi Mumbai, Maharashtra",
    href: null,
    desc: "Open to remote & hybrid",
    color: "#059669",
  },
];

export default function Contact() {
  const ref = useScrollReveal();
  const [fields, setFields] = useState({ name: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, subject, message } = fields;
    const body = `Hi Tanushka,\n\n${message}\n\n— ${name}`;
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    background: "var(--bg-primary)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-sm)",
    color: "var(--text-primary)",
    fontSize: "0.92rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "border-color var(--transition)",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.78rem",
    fontFamily: "var(--font-mono)",
    fontWeight: 500,
    color: "var(--text-muted)",
    marginBottom: 6,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-eyebrow">Say hello</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to internships, collaborations, and conversations about tech. Let's build something.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* Left: info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <h3 className="reveal" style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 4,
            }}>Reach out directly</h3>

            {contactLinks.map((item, i) => (
              <div
                key={item.label}
                className={`reveal reveal-delay-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-md)",
                  transition: "all var(--transition)",
                  cursor: item.href ? "pointer" : "default",
                }}
                onMouseEnter={e => {
                  if (item.href) {
                    e.currentTarget.style.borderColor = item.color + "55";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-card)";
                  e.currentTarget.style.transform = "none";
                }}
                onClick={() => item.href && window.open(item.href, item.href.startsWith("mailto") ? "_self" : "_blank")}
              >
                <div style={{
                  width: 40, height: 40,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: item.color + "14",
                  border: `1px solid ${item.color}30`,
                  borderRadius: "var(--radius-sm)",
                  color: item.color,
                  flexShrink: 0,
                }}>{item.icon}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-hint)", marginBottom: 2, fontFamily: "var(--font-mono)" }}>{item.desc}</div>
                  <div style={{
                    fontSize: "0.88rem", fontWeight: 500, color: "var(--text-primary)",
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Resume download */}
            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="reveal reveal-delay-4"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "12px",
                  background: "var(--accent-subtle)",
                  border: "1px dashed var(--accent-border)",
                  borderRadius: "var(--radius-md)",
                  color: "var(--accent)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  transition: "all var(--transition)",
                  textDecoration: "none",
                  marginTop: 4,
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(124,58,237,0.14)"}
                onMouseLeave={e => e.currentTarget.style.background = "var(--accent-subtle)"}
              >
                <FiDownload size={15} />
                Download Resume (PDF)
              </a>
            )}
          </div>

          {/* Right: message form */}
          <div className="reveal reveal-delay-1" style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-card)",
            borderRadius: "var(--radius-lg)",
            padding: "28px",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.05rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}>Send a message</h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { id: "name",    label: "Your Name",    placeholder: "Jane Smith",                         type: "text" },
                { id: "subject", label: "Subject",      placeholder: "Internship / Collaboration / Hello", type: "text" },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={labelStyle}>{field.label}</label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={fields[field.id]}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
                    onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity..."
                  required
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
                  onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                />
              </div>

              <button type="submit" className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", gap: 8 }}>
                {sent ? "✓ Opening your mail app..." : <><FiSend size={14} /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-hint); }
      `}</style>
    </section>
  );
}
