import Navbar from "../components/common/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div style={{ padding: "30px", maxWidth: "1200px", margin: "auto" }}>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;