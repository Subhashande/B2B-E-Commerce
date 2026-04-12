import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "60px",
        background: "#2874f0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      {/* LOGO */}
      <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
        B2B Commerce
      </h2>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>
          Login
        </Link>

        <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;