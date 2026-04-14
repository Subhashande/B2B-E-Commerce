import React, { useEffect, useState } from "react";
import apiClient from "../../../services/apiClient";
import Loader from "../../../components/common/Loader";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await apiClient.get("/invoices");
        setInvoices(res.data.invoices || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  if (loading) return <Loader />;

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "30px" }}>My Invoices</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
        <thead style={{ background: "#f8f9fa", textAlign: "left" }}>
          <tr>
            <th style={{ padding: "15px", borderBottom: "1px solid #eee" }}>Invoice ID</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #eee" }}>Order ID</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #eee" }}>Amount</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #eee" }}>Date</th>
            <th style={{ padding: "15px", borderBottom: "1px solid #eee" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv._id}>
              <td style={{ padding: "15px", borderBottom: "1px solid #eee" }}>{inv.invoiceNumber}</td>
              <td style={{ padding: "15px", borderBottom: "1px solid #eee" }}>{inv.orderId}</td>
              <td style={{ padding: "15px", borderBottom: "1px solid #eee" }}>₹{inv.totalAmount}</td>
              <td style={{ padding: "15px", borderBottom: "1px solid #eee" }}>{new Date(inv.createdAt).toLocaleDateString()}</td>
              <td style={{ padding: "15px", borderBottom: "1px solid #eee" }}>
                <button 
                  style={{ padding: "6px 12px", background: "#2874f0", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
                  onClick={() => window.open(inv.invoiceUrl, "_blank")}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
          {invoices.length === 0 && (
            <tr>
              <td colSpan="5" style={{ padding: "40px", textAlign: "center", color: "#666" }}>No invoices found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;