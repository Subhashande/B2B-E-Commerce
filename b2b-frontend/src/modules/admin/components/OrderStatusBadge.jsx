const OrderStatusBadge = ({ status }) => {
  const normalizedStatus = status?.toUpperCase();
  const colors = {
    PENDING: "#f59e0b",
    PROCESSING: "#6366f1",
    SHIPPED: "#3b82f6",
    DELIVERED: "#10b981",
    CANCELLED: "#ef4444",
  };

  return (
    <span
      style={{
        background: colors[normalizedStatus] || "#999",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        textTransform: "capitalize"
      }}
    >
      {status?.toLowerCase()}
    </span>
  );
};

export default OrderStatusBadge;