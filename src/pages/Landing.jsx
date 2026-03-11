import { useState } from "react";

const tags = ["AI", "CYBERSECURITY"];

const paragraphs = [
  `The role of artificial intelligence in cybersecurity is becoming increasingly significant, with both positive and negative implications. While organizations can benefit from the latest AI-based tools to enhance threat detection and safeguard their systems and data resources, cybercriminals can also exploit this technology to launch more sophisticated attacks.The surge in cyberattacks has spurred the demand for AI-based security products, leading to remarkable growth in the market. In July 2022, Acumen Research and Consulting reported that the global market for these products was valued at $14.9 billion in 2021 and is projected to reach $133.8 billion by 2030. The need for more advanced solutions has arisen due to an increasing number of attacks, including distributed denial-of-service (DDoS) and data breaches, which have proved to be extremely costly for affected organizations.`,
  `The Covid-19 pandemic and the shift to remote work have also contributed to the growth of this market, as companies have become more focused on cybersecurity and the use of AI-powered tools to prevent and mitigate attacks.According to the Acumen report, the growing adoption of the Internet of Things (IoT) and the rising number of connected devices are anticipated to drive further market growth. Additionally, the increasing use of cloud-based security services could create new opportunities for leveraging AI in cybersecurity.`
];

const placeholderImages = ["Early Days"];

export default function ArticlePage() {
  const [shareOpen, setShareOpen] = useState(false);

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", minHeight: "100vh", background: "linear-gradient(160deg, #001a2e 0%, #00111f 40%, #000a12 100%)", color: "#0a0a0a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 20 24'%3E%3Cpolygon points='0,0 0,20 5,15 9,24 12,23 8,14 15,14' fill='%2300e676' stroke='%23003a1a' stroke-width='1.2' stroke-linejoin='round'/%3E%3C/svg%3E") 0 0, auto !important; }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .hero-text       { animation: fadeInLeft 0.7s ease both; }
        .hero-image-wrap { animation: fadeIn 0.9s ease 0.1s both; }

        @keyframes popIn {
          from { opacity: 0; transform: translateX(-12px) scale(0.85); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .share-floater {
          position: fixed;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 200;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .share-toggle {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(0,230,118,0.12);
          border: 1.5px solid rgba(0,230,118,0.45);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          box-shadow: 0 0 12px rgba(0,230,118,0.15);
        }
        .share-toggle:hover {
          background: rgba(0,230,118,0.22);
          border-color: #00e676;
          box-shadow: 0 0 22px rgba(0,230,118,0.35);
          transform: scale(1.08);
        }
        .share-toggle.open {
          background: rgba(0,230,118,0.25);
          border-color: #00e676;
          box-shadow: 0 0 24px rgba(0,230,118,0.4);
        }
        .share-options {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          overflow: hidden;
        }
        .share-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 1.5px solid;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.18s, box-shadow 0.18s, opacity 0.18s;
          opacity: 0;
        }
        .share-btn.visible {
          animation: popIn 0.22s ease forwards;
        }
        .share-btn:hover {
          transform: scale(1.14) translateX(3px);
        }
        .share-label {
          position: absolute;
          left: 50px;
          white-space: nowrap;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border-radius: 4px;
          background: rgba(0,0,0,0.75);
          color: #fff;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.15s;
        }
        .share-btn:hover .share-label { opacity: 1; }
          color: #00e676;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.35rem 1rem;
          border: 1.5px solid #00e676;
          border-radius: 999px;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
        }
        .contact-link:hover {
          background: #00e676;
          color: #0a0a0a;
          box-shadow: 0 0 18px #00e67688;
        }
        .contact-card {
          background: linear-gradient(135deg, rgba(0,230,118,0.07) 0%, rgba(0,100,255,0.07) 100%);
          border: 1px solid rgba(0,230,118,0.2);
          border-radius: 12px;
          padding: 1.5rem 2rem;
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #222;
          font-size: 0.95rem;
        }
        .contact-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: #00e676;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-size: 1rem;
        }
        .contact-text { font-weight: 600; letter-spacing: 0.01em; }
        .divider-glow {
          height: 1px;
          background: linear-gradient(90deg, transparent, #00e676aa, #3b82f6aa, transparent);
        }
        @media (max-width: 768px) {
          .hero { grid-template-columns: 1fr !important; max-height: none !important; }
          .hero-image-wrap { height: 60vw !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── SOCIAL SHARE FLOATER ── */}
      {(() => {
        const socials = [
          { label: "Twitter / X", color: "#1DA1F2", border: "rgba(29,161,242,0.5)", bg: "rgba(29,161,242,0.1)", icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          )},
          { label: "LinkedIn", color: "#0A66C2", border: "rgba(10,102,194,0.5)", bg: "rgba(10,102,194,0.1)", icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          )},
          { label: "Facebook", color: "#1877F2", border: "rgba(24,119,242,0.5)", bg: "rgba(24,119,242,0.1)", icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          )},
          { label: "Reddit", color: "#FF4500", border: "rgba(255,69,0,0.5)", bg: "rgba(255,69,0,0.1)", icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF4500"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
          )},
          { label: "WhatsApp", color: "#25D366", border: "rgba(37,211,102,0.5)", bg: "rgba(37,211,102,0.1)", icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          )},
        ];

        return (
          <div className="share-floater">
            {/* Toggle button */}
            <button
              className={`share-toggle${shareOpen ? " open" : ""}`}
              onClick={() => setShareOpen(o => !o)}
              title="Share"
              style={{ background: shareOpen ? "rgba(0,230,118,0.2)" : undefined }}
            >
              {shareOpen ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              )}
            </button>

            {/* Social options */}
            {shareOpen && (
              <div className="share-options">
                {socials.map((s, i) => (
                  <div
                    key={s.label}
                    className={`share-btn visible`}
                    title={s.label}
                    style={{
                      background: s.bg,
                      borderColor: s.border,
                      animationDelay: `${i * 0.055}s`,
                      position: "relative",
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    {s.icon}
                    <span className="share-label">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {/* ── NAV ── */}
      <nav style={{
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(0,230,118,0.12)",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "0 2rem", height: 56,
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "1.6rem", letterSpacing: "0.18em", textTransform: "uppercase",
            background: "linear-gradient(90deg, #00e676 0%, #fff 60%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            paddingRight: "0.1em",
          }}>Priyam</span>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#00e676", marginLeft: 2, marginBottom: 2, verticalAlign: "middle",
          }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a
            href="#about-section"
            onClick={scrollToAbout}
            className="contact-link"
            style={{
              color: "#00e676",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.35rem 1.1rem",
              border: "1.5px solid #00e676",
              borderRadius: 999,
              display: "inline-block",
            }}
          >Contact</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" style={{
        display: "grid", gridTemplateColumns: "42% 58%",
        minHeight: "calc(100vh - 56px)", maxHeight: 720,
        position: "relative",
      }}>
        {/* Left panel */}
        <div className="hero-text" style={{
          padding: "3.5rem 3rem 3rem",
          background: "linear-gradient(160deg, rgba(0,60,80,0.72) 0%, rgba(0,30,55,0.85) 60%, rgba(0,10,25,0.95) 100%)",
          backdropFilter: "blur(14px)",
          borderRight: "1px solid rgba(0,200,180,0.18)",
          display: "flex", flexDirection: "column", justifyContent: "flex-start",
          position: "relative", overflow: "hidden",
        }}>
          <div className="scanlines" />
          <div className="scanline-sweep" />

          <span style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#00e676", fontWeight: 700, marginBottom: "1.2rem", opacity: 0.85, position: "relative", zIndex: 2 }}>Feature Article</span>
          <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.05, letterSpacing: "-0.01em", marginBottom: "2.2rem", color: "#fff", position: "relative", zIndex: 2 }}>
            How Artificial Intelligence is Transforming Cybersecurity
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem", position: "relative", zIndex: 2 }}>
            {tags.map(tag => (
              <span key={tag} style={{ background: "#00e676", color: "#0a0a0a", fontSize: "0.72rem", fontWeight: 700, padding: "0.3rem 0.85rem", borderRadius: 999, letterSpacing: "0.03em", textTransform: "uppercase" }}>{tag}</span>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "auto", position: "relative", zIndex: 2 }}>
            <div style={{ width: 32, height: 2, background: "#00e676", borderRadius: 2 }} />
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", letterSpacing: "0.08em" }}>SCROLL TO READ</span>
          </div>
        </div>

        {/* Right image with scanlines */}
        <div className="hero-image-wrap" style={{ position: "relative", overflow: "hidden" }}>
          <img src="./images/1.jpg" alt="Article Cover" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          <div className="scanlines" />
          <div className="scanline-sweep" style={{ animationDelay: "1.9s" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,15,60,0.35) 0%, transparent 30%, transparent 70%, rgba(0,6,31,0.5) 100%)", pointerEvents: "none", zIndex: 12 }} />
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 2rem 5rem" }}>
        <div className="divider-glow" style={{ marginBottom: "3rem" }} />
        {paragraphs.map((para, i) => (
          <div key={i}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#c5cae9", marginBottom: "2rem" }}>{para}</p>
            {i < paragraphs.length - 1 && (
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
                <div style={{ position: "relative", width: "100%", maxWidth: 560, borderRadius: 12, overflow: "hidden", boxShadow: "0 0 40px rgba(0,230,118,0.12), 0 8px 32px rgba(0,0,0,0.5)" }}>
                  <img src={`./images/${i + 2}.jpg`} alt={placeholderImages[i]} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(0,230,118,0.2)", borderRadius: 12, pointerEvents: "none" }} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── ABOUT ME ── */}
      <section id="about-section" style={{ background: "#ffffff", padding: "5rem 2rem", color: "#111", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #00e676, #3b82f6, #00e676)" }} />
        <div className="about-grid" style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "40% 60%", gap: "3rem", alignItems: "flex-start" }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -6, borderRadius: 16, background: "linear-gradient(135deg, #00e676 0%, #3b82f6 100%)", opacity: 0.15, zIndex: 0 }} />
            <img src="./images/3.jpg" alt="About Priyam" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", position: "relative", zIndex: 1, boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }} />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 4, height: 32, background: "linear-gradient(180deg, #00e676, #3b82f6)", borderRadius: 4 }} />
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "2.2rem", fontWeight: 900, letterSpacing: "-0.01em", color: "#0a0a0a" }}>About Me</h2>
            </div>
            <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#333", fontSize: "0.97rem" }}>
             Hi, I'm Priyam. I was born in 2003 and I have a pet cat named Tom. I have always been curious about how systems work beneath the surface.That curiosity eventually turned into a deep interest in cybersecurity, ethical hacking, and digital forensics.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: "1rem", color: "#333", fontSize: "0.97rem" }}>
              I enjoy exploring vulnerabilities, studying attack vectors, and understanding how small details can reveal much bigger truths. In security, the smallest piece of information can unlock everything.
            </p>
            <p style={{ lineHeight: 1.8, fontStyle: "italic", color: "#666", fontSize: "0.93rem", marginBottom: 0 }}>
              (Note to myself; ignore if you are not me: Contacts for this site are broken. So login later and add them.)
            </p>
            <div className="contact-card">
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#00b359", marginBottom: "0.25rem" }}>Get in Touch</div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <span className="contact-text">priyam@gmail.com</span>
              </div>
              <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <span className="contact-text">2003-200-2003</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <nav style={{ background: "#000", borderTop: "1px solid rgba(0,230,118,0.1)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2rem", height: 56 }}>
        <span style={{ color: "#555", fontSize: "0.78rem", letterSpacing: "0.1em", fontStyle: "italic" }}>
          THINK IN THE BOX TO FIND THE FLAG
        </span>
      </nav>
    </div>
  );
}
