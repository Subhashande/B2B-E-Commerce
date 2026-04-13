const StatusBadge = ({ status }) => {
  const normalizedStatus = status?.toUpperCase();
  const isApproved = normalizedStatus === "APPROVED";

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