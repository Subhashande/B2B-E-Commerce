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
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchProductAndReviews = async () => {
      try {
        setLoading(true);
        const [prodRes, reviewsRes] = await Promise.allSettled([
          apiClient.get(`/products/${id}`),
          apiClient.get(`/reviews/${id}`)
        ]);

        if (prodRes.status === 'fulfilled') {
          setProduct(prodRes.value.data.product);
        } else {
          console.error("Error fetching product:", prodRes.reason);
        }

        if (reviewsRes.status === 'fulfilled') {
          // The backend returns { success: true, data: reviews } or similar
          setReviews(reviewsRes.value.data.data || reviewsRes.value.data.reviews || []);
        } else {
          console.warn("Error fetching reviews:", reviewsRes.reason);
          setReviews([]);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductAndReviews();
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
      // No alert needed for better UX, but keeping it if user wants
      // alert("Added to cart!");
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (user.status !== "APPROVED" && user.role !== "ADMIN") {
      alert("Only approved users can submit reviews");
      return;
    }

    try {
      setSubmittingReview(true);
      const res = await apiClient.post("/reviews", {
        productId: id,
        ...newReview
      });
      // Handle backend response { success: true, data: review }
      const addedReview = res.data.data || res.data.review;
      setReviews([addedReview, ...reviews]);
      setNewReview({ rating: 5, comment: "" });
      alert("Review submitted!");
    } catch (err) {
      console.error(err);
      alert("Failed to submit review");
    } finally {
      setSubmittingReview(false);
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
    <div style={{ padding: "40px", background: "#f9fafb", minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          gap: "40px",
          marginBottom: "40px"
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

      {/* REVIEWS SECTION */}
      <div style={{ background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <h2 style={{ marginBottom: "30px" }}>Customer Reviews</h2>
        
        {/* ADD REVIEW */}
        <div style={{ marginBottom: "40px", padding: "20px", background: "#f8f9fa", borderRadius: "8px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>Write a Review</h3>
          <form onSubmit={handleSubmitReview}>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Rating</label>
              <select 
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ddd" }}
              >
                {[5, 4, 3, 2, 1].map(r => <option key={r} value={r}>{r} Stars</option>)}
              </select>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>Comment</label>
              <textarea 
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
                style={{ width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ddd", minHeight: "100px" }}
              />
            </div>
            <button 
              type="submit" 
              disabled={submittingReview}
              style={{ padding: "10px 20px", background: "#3b82f6", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
            >
              {submittingReview ? "Submitting..." : "Post Review"}
            </button>
          </form>
        </div>

        {/* REVIEWS LIST */}
        <div style={{ display: "grid", gap: "20px" }}>
          {reviews.map((rev) => (
            <div key={rev._id} style={{ padding: "20px", borderBottom: "1px solid #eee" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontWeight: "bold" }}>{rev.userName || "User"}</span>
                <span style={{ color: "#f59e0b" }}>{"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}</span>
              </div>
              <p style={{ color: "#555", margin: 0 }}>{rev.comment}</p>
              <p style={{ color: "#999", fontSize: "12px", marginTop: "10px" }}>{new Date(rev.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
          {reviews.length === 0 && <p style={{ color: "#999", textAlign: "center" }}>No reviews yet. Be the first to review!</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;