import React, { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import Loader from "../../../components/common/Loader";

const CreditDashboard = () => {
  const [credit, setCredit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCredit = async () => {
      try {
        const res = await apiClient.get("/credits");
        setCredit(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCredit();
  }, []);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>Credit Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <CreditCard title="Credit Limit" value={`₹${credit?.limit || 0}`} color="#3b82f6" />
        <CreditCard title="Used Credit" value={`₹${credit?.used || 0}`} color="#ef4444" />
        <CreditCard title="Remaining Credit" value={`₹${(credit?.limit || 0) - (credit?.used || 0)}`} color="#10b981" />
      </div>
    </div>
  );
};

const CreditCard = ({ title, value, color }) => (
  <div style={{
    flex: 1,
    padding: "24px",
    borderRadius: "12px",
    background: color,
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
  }}>
    <p style={{ margin: 0, opacity: 0.9 }}>{title}</p>
    <h3 style={{ margin: "10px 0 0", fontSize: "24px" }}>{value}</h3>
  </div>
);

export default CreditDashboard;