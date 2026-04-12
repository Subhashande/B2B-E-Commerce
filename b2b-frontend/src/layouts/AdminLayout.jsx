const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "220px", background: "#222", color: "#fff" }}>
        <p style={{ padding: "20px" }}>Admin Panel</p>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;