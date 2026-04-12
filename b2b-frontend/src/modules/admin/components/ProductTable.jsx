const ProductTable = ({ children }) => {
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
          borderCollapse: "separate",
          borderSpacing: "0 12px", // 🔥 spacing between rows
        }}
      >
        <thead>
          <tr style={{ textAlign: "left", color: "#555" }}>
            <th>Name</th>
            <th>Price</th>
            <th style={{ textAlign: "right" }}>Actions</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;