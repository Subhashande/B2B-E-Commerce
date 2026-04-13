import OrderStatusBadge from "./OrderStatusBadge";
import UpdateStatusDropdown from "./UpdateStatusDropdown";
import { useNavigate } from "react-router-dom";
import { updateOrderStatus } from "../adminService";
import { useState } from "react";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = async (newStatus) => {
    try {
      await updateOrderStatus(order._id, newStatus);
      setStatus(newStatus);
      alert("Order status updated!");
    } catch (err) {
      console.error(err);
      alert("Failed to update status");
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
      <td style={{ padding: "12px" }}>{order._id}</td>

      <td style={{ padding: "12px" }}>{order.customer || order.userId}</td>

      <td style={{ padding: "12px" }}>₹{order.total || order.totalAmount}</td>

      <td style={{ padding: "12px" }}>
        <OrderStatusBadge status={status} />
      </td>

      <td style={{ padding: "12px" }}>
        <UpdateStatusDropdown
          status={status}
          onChange={handleStatusChange}
        />
      </td>

      {/* ✅ NEW COLUMN FOR ACTION */}
      <td style={{ padding: "12px" }}>
        <button
  onClick={() => navigate(`/admin/orders/${order._id}`)}
  style={{
    padding: "6px 10px",
    borderRadius: "6px",
    border: "none",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
  }}
>
  View
</button>
      </td>
    </tr>
  );
};

export default OrderRow;