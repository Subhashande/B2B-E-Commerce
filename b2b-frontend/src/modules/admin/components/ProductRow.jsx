import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAdminProducts } from "../adminSlice";
import apiClient from "../../../services/apiClient";

const ProductRow = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (window.confirm(`Delete ${product.name}?`)) {
      try {
        await apiClient.delete(`/v1/products/${product._id}`);
        dispatch(getAdminProducts());
        alert("Product deleted!");
      } catch (err) {
        console.error(err);
        alert("Failed to delete product");
      }
    }
  };

  return (
    <tr
      style={{
        background: "#f9fafb",
        transition: "0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#eef2ff")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#f9fafb")}
    >
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
          onClick={() => navigate(`/admin/products/edit/${product._id}`)}
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
          onClick={handleDelete}
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