import React, { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import Loader from "../../../components/common/Loader";

const Logistics = () => {
  const [logistics, setLogistics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogistics = async () => {
      try {
        const res = await apiClient.get("/logistics");
        setLogistics(res.data.logistics || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLogistics();
  }, []);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>Shipping & Logistics</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        {logistics.map((log) => (
          <div key={log._id} style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
            borderLeft: `6px solid ${getStatusColor(log.status)}`
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
              <h3 style={{ margin: 0 }}>Order: {log.orderId}</h3>
              <span style={{
                background: getStatusColor(log.status) + "22",
                color: getStatusColor(log.status),
                padding: "4px 12px",
                borderRadius: "20px",
                fontWeight: "bold",
                fontSize: "14px"
              }}>{log.status.toUpperCase()}</span>
            </div>
            
            <div style={{ color: "#666", fontSize: "14px" }}>
              <p>Tracking ID: <strong>{log.trackingId || "N/A"}</strong></p>
              <p>Carrier: <strong>{log.carrier || "Standard Shipping"}</strong></p>
              <p>Estimated Delivery: <strong>{new Date(log.estimatedDelivery).toLocaleDateString()}</strong></p>
            </div>
          </div>
        ))}
        {logistics.length === 0 && (
          <div style={{ padding: "40px", textAlign: "center", color: "#666", background: "#fff", borderRadius: "12px" }}>
            No shipping information available
          </div>
        )}
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "shipped": return "#3b82f6";
    case "delivered": return "#10b981";
    case "pending": return "#f59e0b";
    case "cancelled": return "#ef4444";
    default: return "#9ca3af";
  }
};

export default Logistics;