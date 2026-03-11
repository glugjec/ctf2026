import { useState } from "react";
import { useNavigate } from "react-router-dom";

const name = "Priyam";
const dob = "2003";

export default function Dashboard() {
  const isAuth = localStorage.getItem("auth");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState("");
  const [cleared, setCleared] = useState(false);
  const navigate = useNavigate();

  const handleGenerate = () => {
    const correctPassword = `${name}${dob}`;
    if (password.trim() === correctPassword) {
      setFlag(`FLAG{${name}_${dob}_R2}`);
      setCleared(true);
    } else {
      alert("Incorrect password.");
    }
  };

  const goToRound3 = () => {
  window.location.href = "/r3-final"; 
};

  const sharedPage = (children) => (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(160deg, #001a2e 0%, #00111f 40%, #000a12 100%)",
      fontFamily: "'Barlow', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,400;0,700;1,400&family=Barlow+Condensed:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' viewBox='0 0 20 24'%3E%3Cpolygon points='0,0 0,20 5,15 9,24 12,23 8,14 15,14' fill='%2300e676' stroke='%23003a1a' stroke-width='1.2' stroke-linejoin='round'/%3E%3C/svg%3E") 0 0, auto !important; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 18px rgba(0,230,118,0.15), 0 8px 32px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 32px rgba(0,230,118,0.28), 0 8px 32px rgba(0,0,0,0.5); }
        }
        @keyframes flagReveal {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes flagGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(0,230,118,0.4); }
          50%       { text-shadow: 0 0 22px rgba(0,230,118,0.9), 0 0 40px rgba(0,230,118,0.4); }
        }
        .dash-card { animation: fadeInUp 0.6s ease both; }
        .dash-input {
          width: 100%; padding: 13px 16px;
          border-radius: 8px;
          border: 1.5px solid rgba(0,230,118,0.25);
          background: rgba(0,0,0,0.35);
          color: #fff; font-size: 1rem;
          font-family: 'Barlow', sans-serif;
          outline: none; letter-spacing: 0.05em;
          transition: border-color 0.2s, box-shadow 0.2s;
          margin-top: 1.2rem; margin-bottom: 1.2rem;
        }
        .dash-input::placeholder { color: rgba(255,255,255,0.3); }
        .dash-input:focus {
          border-color: #00e676;
          box-shadow: 0 0 0 3px rgba(0,230,118,0.12);
        }
        .dash-btn {
          width: 100%; padding: 13px;
          border-radius: 8px;
          border: 1.5px solid #00e676;
          background: rgba(0,230,118,0.1);
          color: #00e676; font-size: 0.9rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s;
        }
        .dash-btn:hover {
          background: #00e676; color: #0a0a0a;
          box-shadow: 0 0 24px rgba(0,230,118,0.4);
          transform: translateY(-1px);
        }
        .dash-btn:active { transform: translateY(0); }
        .flag-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900; font-size: 1.1rem;
          letter-spacing: 0.06em; color: #00e676;
          animation: flagGlow 2s ease-in-out infinite;
        }
        .flag-box {
          animation: flagReveal 0.5s ease both;
        }
      `}</style>

      {/* Ambient glows */}
      <div style={{ position: "fixed", top: "20%", left: "15%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}/>
      <div style={{ position: "fixed", bottom: "15%", right: "10%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }}/>

      {children}
    </div>
  );

  // ── UNAUTHORIZED ──
  if (!isAuth) {
    return sharedPage(
      <div style={{ textAlign: "center", zIndex: 2, position: "relative" }}>
        <div style={{ width: 60, height: 60, borderRadius: "50%", border: "1.5px solid rgba(255,60,60,0.5)", background: "rgba(255,60,60,0.08)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "2rem", letterSpacing: "0.05em", color: "#ff6666" }}>Unauthorized</h2>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", marginTop: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Access denied</p>
      </div>
    );
  }

  // ── DASHBOARD ──
  return sharedPage(
    <div className="dash-card" style={{
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(18px)",
      padding: "3rem 2.5rem",
      borderRadius: "16px",
      width: "100%", maxWidth: "420px",
      textAlign: "center",
      border: "1px solid rgba(0,230,118,0.18)",
      animation: "fadeInUp 0.6s ease both, borderGlow 3s ease-in-out infinite",
      color: "white",
      position: "relative",
      zIndex: 2,
    }}>
      {/* Top accent */}
      <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: "linear-gradient(90deg, transparent, #00e676, transparent)", borderRadius: 2 }}/>

      {/* Icon */}
      <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
        <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1.5px solid rgba(0,230,118,0.35)", background: "rgba(0,230,118,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
      </div>

      {/* Branding */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.3rem" }}>
        <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.2rem", letterSpacing: "0.18em", textTransform: "uppercase", background: "linear-gradient(90deg, #00e676 0%, #fff 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Priyam</span>
        <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#00e676", marginLeft: 3 }}/>
      </div>

      <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: "1.7rem", letterSpacing: "0.04em", color: "#fff", marginBottom: "0.3rem" }}>
        This is your Answer
      </h1>

      {/* Divider */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)", margin: "1.2rem 0" }}/>

      
<p style={{
  lineHeight: 1.8,
  color: "#00e676",
  fontSize: "1.35rem",
  fontWeight: 900,
  letterSpacing: "0.08em",
  fontFamily: "'Barlow Condensed', sans-serif",
  textTransform: "uppercase",
  textShadow: "0 0 12px rgba(0,230,118,0.6)",
  marginBottom: "1.4rem"
}}>
  ⛳ FLAG FOUND<br/>
  ROUND 2 CLEARED
</p>
<button onClick={() => navigate("/r3-final")} className="dash-btn">
  Go To Round 3
</button>
 

      {flag && (
        <div className="flag-box" style={{
          marginTop: "1.5rem",
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,230,118,0.25)",
          padding: "1.25rem 1.5rem",
          borderRadius: "10px",
        }}>
          <p className="flag-text">{flag}</p>
          <div style={{ height: 1, background: "rgba(0,230,118,0.15)", margin: "0.85rem 0" }}/>
          <p style={{ color: "#00e676", fontSize: "0.88rem", fontWeight: 700, letterSpacing: "0.08em" }}>
            ✅ Round 2 Cleared
          </p>
        </div>
      )}

      {/* Footer hint */}
      <p style={{ marginTop: "1.8rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em", fontStyle: "italic" }}>
        THINK IN THE BOX TO FIND THE FLAG
      </p>
    </div>
  );
}
