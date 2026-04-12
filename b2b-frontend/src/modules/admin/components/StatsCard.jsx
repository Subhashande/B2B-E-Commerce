const StatsCard = ({ title, value, color }) => {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${color}, #111827)`,
        color: "#fff",
        padding: "24px",
        borderRadius: "18px",
        flex: 1,
        boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-6px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "translateY(0)")
      }
    >
      <p style={{ opacity: 0.8 }}>{title}</p>
      <h2 style={{ fontSize: "30px" }}>{value}</h2>
    </div>
  );
};

export default StatsCard;