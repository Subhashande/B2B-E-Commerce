const OrderStatusBadge = ({ status }) => {
  const colors = {
    pending: "#f59e0b",
    shipped: "#3b82f6",
    delivered: "#10b981",
  };

  return (
    <span
      style={{
        background: colors[status] || "#999",
        color: "#fff",
        padding: "5px 10px",
        borderRadius: "20px",
        fontSize: "12px",
        textTransform: "capitalize"
      }}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;