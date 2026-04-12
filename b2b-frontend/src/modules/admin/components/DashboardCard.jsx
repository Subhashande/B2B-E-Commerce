const DashboardCard = ({ title, value, color }) => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: color,
        color: "#fff",
        flex: 1,
        minWidth: "200px",
      }}
    >
      <h4 style={{ fontSize: "14px", opacity: 0.9 }}>{title}</h4>
      <h2 style={{ fontSize: "26px" }}>{value}</h2>
    </div>
  );
};

export default DashboardCard;