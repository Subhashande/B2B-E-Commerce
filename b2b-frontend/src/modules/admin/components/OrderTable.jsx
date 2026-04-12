const OrderTable = ({ children }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <table
        style={{
          width: "100%",
          borderSpacing: "0 10px",
        }}
      >
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default OrderTable;