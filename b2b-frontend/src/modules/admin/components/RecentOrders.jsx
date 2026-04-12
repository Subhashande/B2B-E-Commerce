const RecentOrders = ({ orders }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h3>Recent Orders</h3>

      {orders.map((o) => (
        <div
          key={o._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <span>{o._id}</span>
          <span>₹{o.total}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentOrders;