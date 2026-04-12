const StatusBadge = ({ status }) => {
  const isApproved = status === "approved";

  return (
    <span
      style={{
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        color: "#fff",
        background: isApproved ? "#10b981" : "#f59e0b",
      }}
    >
      {isApproved ? "Approved" : "Pending"}
    </span>
  );
};

export default StatusBadge;