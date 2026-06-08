import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData";

const contactLinks = [
  {
    icon: <FiMail size={20} />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: "Best way to reach me",
  },
  {
    icon: <FiLinkedin size={20} />,
    label: "LinkedIn",
    value: "tanushka-bhoir-a52160372",
    href: personalInfo.linkedin,
    desc: "Let's connect professionally",
  },
  {
    icon: <FiGithub size={20} />,
    label: "GitHub",
    value: "Tanushka-08",
    href: personalInfo.github,
    desc: "See my code & projects",
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Location",
    value: personalInfo.location,
    href: null,
    desc: "Open to remote & hybrid roles",
  },
];

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name    = e.target.name.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const mailto  = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio message from ${name}`)}&body=${encodeURIComponent(`Hi Tanushka,\n\n${message}\n\n— ${name}`)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Say Hello</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to internship opportunities, collaborations, and conversations about tech.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }} className="contact-grid">

          {/* Left: Contact info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 8,
            }}>
              Reach out directly
            </h3>

            {contactLinks.map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  background: "var(--bg-secondary)",
                  border: "1px solid var(--border-card)",
                  borderRadius: "var(--radius-md)",
                  transition: "all 0.3s ease",
                  cursor: item.href ? "pointer" : "default",
                }}
                onMouseEnter={e => {
                  if (item.href) {
                    e.currentTarget.style.borderColor = "var(--accent)";
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
                  width: 42, height: 42,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--bg-tertiary)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  color: "var(--accent)",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: 2 }}>{item.desc}</div>
                  <div style={{
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Quick message form */}
          <div style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-card)",
            borderRadius: "var(--radius-lg)",
            padding: "28px",
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: 20,
            }}>
              Send a message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { id: "name",    label: "Your Name",    type: "text",  placeholder: "Jane Smith" },
                { id: "subject", label: "Subject",      type: "text",  placeholder: "Internship opportunity / Collaboration" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    marginBottom: 6,
                  }}>
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      background: "var(--bg-primary)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--text-primary)",
                      fontSize: "0.92rem",
                      fontFamily: "var(--font-body)",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
                    onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{
                  display: "block",
                  fontSize: "0.82rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: 6,
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  required
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    background: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-sm)",
                    color: "var(--text-primary)",
                    fontSize: "0.92rem",
                    fontFamily: "var(--font-body)",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = "var(--accent)"}
                  onBlur={e => e.currentTarget.style.borderColor = "var(--border)"}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", gap: 8 }}
              >
                <FiSend size={15} />
                Send via Email
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
      `}</style>
    </section>
  );
}
