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
    </div>
  );
};

export default AdminHeader;