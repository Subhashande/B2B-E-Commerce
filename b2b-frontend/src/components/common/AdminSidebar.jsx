import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#111827",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        left: 0,
        right: 0
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>Admin Panel</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/admin" style={linkStyle}>Dashboard</Link>
        <Link to="/admin/analytics" style={linkStyle}>Analytics</Link>
        <Link to="/admin/users" style={linkStyle}>Users</Link>
        <Link to="/admin/products" style={linkStyle}>Products</Link>
        <Link to="/admin/orders" style={linkStyle}>Orders</Link>
      </div>
    </div>
  );
};

const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "15px",
};

export default AdminSidebar;