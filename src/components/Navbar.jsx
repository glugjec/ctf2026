import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 20 }}>Home</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}