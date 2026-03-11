import { useState } from "react";
import { useNavigate } from "react-router-dom";

const pet = "Tom";
const dob = "2003";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const correctPassword = `${dob}${pet}`;
    if (password === correctPassword) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Wrong password!");
    }
  };

  return (
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

        .login-card {
          animation: fadeInUp 0.6s ease both;
        }

        .login-input {
          width: 100%;
          padding: 13px 16px;
          margin-bottom: 16px;
          border-radius: 8px;
          border: 1.5px solid rgba(0,230,118,0.25);
          background: rgba(0,0,0,0.35);
          color: #fff;
          font-size: 1rem;
          font-family: 'Barlow', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          letter-spacing: 0.05em;
        }
        .login-input::placeholder { color: rgba(255,255,255,0.3); }
        .login-input:focus {
          border-color: #00e676;
          box-shadow: 0 0 0 3px rgba(0,230,118,0.12);
        }

        .login-btn {
          width: 100%;
          padding: 13px;
          border-radius: 8px;
          border: 1.5px solid #00e676;
          background: rgba(0,230,118,0.1);
          color: #00e676;
          font-size: 0.9rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.1s;
        }
        .login-btn:hover {
          background: #00e676;
          color: #0a0a0a;
          box-shadow: 0 0 24px rgba(0,230,118,0.4);
          transform: translateY(-1px);
        }
        .login-btn:active { transform: translateY(0); }
      `}</style>

      {/* Ambient glow blobs */}
      <div style={{ position: "fixed", top: "20%", left: "15%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,230,118,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "15%", right: "10%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* Card */}
      <div className="login-card" style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(18px)",
        padding: "3rem 2.5rem",
        borderRadius: "16px",
        width: "100%",
        maxWidth: "380px",
        textAlign: "center",
        border: "1px solid rgba(0,230,118,0.18)",
        boxShadow: "0 0 18px rgba(0,230,118,0.1), 0 16px 48px rgba(0,0,0,0.5)",
        color: "white",
        position: "relative",
        zIndex: 2,
        animation: "borderGlow 3s ease-in-out infinite",
      }}>

        {/* Top accent bar */}
        <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: "linear-gradient(90deg, transparent, #00e676, transparent)", borderRadius: 2 }} />

        {/* Lock icon */}
        <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
          <div style={{ width: 52, height: 52, borderRadius: "50%", border: "1.5px solid rgba(0,230,118,0.35)", background: "rgba(0,230,118,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e676" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>
        </div>

        {/* Branding */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.4rem" }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
            fontSize: "1.4rem", letterSpacing: "0.18em", textTransform: "uppercase",
            background: "linear-gradient(90deg, #00e676 0%, #fff 60%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>Priyam</span>
          <span style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", background: "#00e676", marginLeft: 3 }} />
        </div>

        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "1.6rem",
          letterSpacing: "0.04em",
          color: "#fff",
          marginBottom: "0.4rem",
        }}>Login</h1>

        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2rem" }}>
          Enter credentials to continue
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.2), transparent)", marginBottom: "1.8rem" }} />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="login-input"
        />

        <button onClick={handleLogin} className="login-btn">
          Login
        </button>

        {/* Bottom hint */}
        <p style={{ marginTop: "1.5rem", fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.06em", fontStyle: "italic" }}>
          THINK IN THE BOX TO FIND THE FLAG
        </p>
      </div>
    </div>
  );
}
