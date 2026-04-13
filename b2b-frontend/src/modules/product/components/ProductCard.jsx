import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      style={{
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        transition: "0.3s",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <div style={{ padding: "14px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600" }}>
          {product.name}
        </h3>

        <p style={{ color: "#777", fontSize: "14px" }}>
          {product.description || "No description"}
        </p>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "600" }}>
            ₹{product.price}
          </span>

          <button
            style={{
              padding: "6px 10px",
              background: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
            }}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;