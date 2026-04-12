import AdminSidebar from "../components/common/AdminSidebar";
import AdminHeader from "../components/common/AdminHeader";

const AdminLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", margin: 0, padding: 0 }}>

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* MAIN CONTENT */}
      <div style={{ marginLeft: "240px", width: "100%" }}>
        <AdminHeader />

        <div
          style={{
            padding: "20px",
            background: "#f9fafb",
            minHeight: "100vh",
          }}
        >
          {children}
        </div>
      </div>

    </div>
  );
};

export default AdminLayout;