const AdminHeader = () => {
  return (
    <div
      style={{
        height: "60px",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid #eee",
      }}
    >
      <h3>Admin Dashboard</h3>

      <div>
        <span>Admin</span>
      </div>

      <button
  onClick={handleLogout}
  style={{
    padding: "8px 16px",
    background: "#ef4444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
  }}
>
  Logout
</button>
      
    </div>
  );
};

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "/login";
};



export default AdminHeader;