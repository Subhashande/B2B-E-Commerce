import OrderStatusBadge from "./OrderStatusBadge";

const OrderSummaryCard = ({ order }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Order Summary</h2>

      <p><strong>Order ID:</strong> {order._id}</p>
      <p><strong>Customer:</strong> {order.customer}</p>
      <p><strong>Total:</strong> ₹{order.total}</p>

      <div style={{ marginTop: "10px" }}>
        <OrderStatusBadge status={order.status} />
      </div>
    </div>
  );
};

export default OrderSummaryCard;