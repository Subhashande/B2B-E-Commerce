import OrderStatusBadge from "./OrderStatusBadge";
import UpdateStatusDropdown from "./UpdateStatusDropdown";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ order }) => {
  const navigate = useNavigate();
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

      <td style={{ padding: "12px" }}>{order.customer}</td>

      <td style={{ padding: "12px" }}>₹{order.total}</td>

      <td style={{ padding: "12px" }}>
        <OrderStatusBadge status={order.status} />
      </td>

      <td style={{ padding: "12px" }}>
        <UpdateStatusDropdown
          status={order.status}
          onChange={(status) =>
            console.log("Update status:", order._id, status)
          }
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