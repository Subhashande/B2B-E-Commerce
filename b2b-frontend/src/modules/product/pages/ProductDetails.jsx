import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "../../../services/apiClient";
import { addToCart } from "../../cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await apiClient.get(`/products/${id}`);
        setProduct(res.data.product);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (user.status !== "APPROVED" && user.role !== "ADMIN") {
      alert("Waiting for admin approval to perform this action");
      return;
    }

    if (product) {
      dispatch(addToCart(product));
      alert("Added to cart!");
    }
  };

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading...</p>;
  }

  if (!product) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "40px",
        background: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* LEFT - IMAGE */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <img
          src={
            product.image ||
            "https://via.placeholder.com/400x300"
          }
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* RIGHT - DETAILS */}
      <div
        style={{
          flex: 1,
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          {product.name}
        </h1>

        <p
          style={{
            fontSize: "24px",
            color: "#2563eb",
            fontWeight: "bold",
          }}
        >
          ₹{product.price}
        </p>

        <p style={{ marginTop: "20px", color: "#555" }}>
          {product.description || "No description available"}
        </p>

        {/* BUTTONS */}
        <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
          <button
            onClick={handleAddToCart}
            style={{
              padding: "12px 20px",
              background: "#f59e0b",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#fff"
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/cart")}
            style={{
              padding: "12px 20px",
              background: "#1976d2",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              color: "#fff"
            }}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;