import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../../../services/apiClient";
import Loader from "../../../components/common/Loader";
import Button from "../../../components/ui/Button";

const PaymentPage = () => {
  const { id } = useParams(); // Order ID
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const res = await apiClient.get(`/orders/${id}`);
        setOrder(res.data.order);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const handlePayment = async () => {
    try {
      setPaying(true);
      await apiClient.post("/payments", {
        orderId: id,
        amount: order.totalAmount,
        paymentMethod: "Credit Card (Mock)"
      });
      setSuccess(true);
      setTimeout(() => navigate("/orders"), 2000);
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    } finally {
      setPaying(false);
    }
  };

  if (loading) return <Loader />;

  if (success) {
    return (
      <div style={{ padding: "100px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "60px", color: "#10b981", marginBottom: "20px" }}>✅</div>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Payment Successful!</h2>
        <p style={{ color: "#666" }}>Redirecting to your orders...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "30px", textAlign: "center" }}>Complete Payment</h2>
      
      <div style={{ background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid #eee" }}>
          <span style={{ color: "#666" }}>Order ID:</span>
          <span style={{ fontWeight: "bold" }}>{id}</span>
        </div>
        
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
          <span style={{ color: "#666", fontSize: "18px" }}>Total Amount:</span>
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2563eb" }}>₹{order?.totalAmount}</span>
        </div>

        <div style={{ display: "grid", gap: "15px", marginBottom: "30px" }}>
          <div style={{ padding: "15px", border: "2px solid #3b82f6", borderRadius: "8px", background: "#f0f7ff" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
              <input type="radio" name="payment" defaultChecked />
              <strong>Mock Payment Gateway</strong>
            </label>
          </div>
        </div>

        <Button 
          onClick={handlePayment} 
          disabled={paying}
          style={{ width: "100%", padding: "15px", fontSize: "18px" }}
        >
          {paying ? "Processing..." : `Pay ₹${order?.totalAmount}`}
        </Button>
      </div>
    </div>
  );
};

export default PaymentPage;