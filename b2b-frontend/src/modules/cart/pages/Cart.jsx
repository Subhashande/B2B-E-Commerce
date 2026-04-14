import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, selectCartTotal, clearCart } from "../cartSlice";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { placeOrder } from "../../../services/orderService";
import apiClient from "../../../services/apiClient";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const total = useSelector(selectCartTotal);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (user.status !== "APPROVED" && user.role !== "ADMIN") {
      alert("Waiting for admin approval to place orders");
      return;
    }

    try {
      setLoading(true);
      
      // CHECK CREDIT
      try {
        const creditRes = await apiClient.get("/credits");
        const remainingCredit = creditRes.data.limit - creditRes.data.used;
        if (total > remainingCredit) {
          alert(`Insufficient credit! Remaining: ₹${remainingCredit}, Required: ₹${total}`);
          return;
        }
      } catch (e) {
        console.warn("Could not verify credit, proceeding anyway");
      }

      const orderData = {
        items: items.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        totalAmount: total,
      };

      const res = await placeOrder(orderData);
      dispatch(clearCart());
      alert("Order placed successfully! Proceeding to payment...");
      const order = res.order || res.data?.order || res;
      navigate(`/payment/${order._id || order.id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to place order. " + (err.response?.data?.message || ""));
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Your Cart is Empty</h2>
        <Button onClick={() => navigate("/")}>Go Shopping</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "30px" }}>Shopping Cart</h2>
      
      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ flex: 2 }}>
          {items.map((item) => (
            <div
              key={item._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "20px",
                background: "#fff",
                borderRadius: "8px",
                marginBottom: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
              }}
            >
              <div>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ color: "#2874f0", fontWeight: "bold" }}>₹{item.price}</p>
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "4px" }}>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item._id, quantity: item.quantity - 1 }))}
                    style={{ padding: "4px 10px", border: "none", background: "#f5f5f5" }}
                  >-</button>
                  <span style={{ padding: "0 10px" }}>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item._id, quantity: item.quantity + 1 }))}
                    style={{ padding: "4px 10px", border: "none", background: "#f5f5f5" }}
                  >+</button>
                </div>
                
                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  style={{ color: "red", background: "none", border: "none", cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, background: "#f9f9f9", padding: "20px", borderRadius: "8px", height: "fit-content" }}>
          <h3 style={{ marginTop: 0 }}>Order Summary</h3>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "18px", marginTop: "20px", borderTop: "1px solid #ddd", paddingTop: "10px" }}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          
          <div style={{ marginTop: "20px" }}>
            <Button onClick={handleCheckout} disabled={loading}>
              {loading ? "Processing..." : "Place Order"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
