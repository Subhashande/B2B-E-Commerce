const ProductRow = ({ product }) => {
  return (
    <tr
      style={{
        background: "#f9fafb",
        borderRadius: "10px",
      }}
    >
      <tr
  style={{
    background: "#f9fafb",
    transition: "0.2s",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2ff")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafb")}
></tr>
      <td style={{ padding: "12px", fontWeight: "500" }}>
        {product.name}
      </td>

      <td style={{ padding: "12px" }}>
        ₹{product.price}
      </td>

      <td
        style={{
          padding: "12px",
          textAlign: "right",
        }}
      >
        <button
          style={{
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Edit
        </button>

        <button
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;